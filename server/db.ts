import { eq, desc, and, gte, lte } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, assessmentResults, assessmentAnswers, InsertAssessmentResult, InsertAssessmentAnswer } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  // Email domain validation
  const allowedDomains = ['@gooddata.com', '@hypergen.io', '@upperhandhq.com'];
  if (user.email && !allowedDomains.some(domain => user.email!.endsWith(domain))) {
    throw new Error(`Access restricted to ${allowedDomains.join(' or ')} email addresses`);
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    // Auto-approve GoodData emails, set owner as admin
    if (user.openId === ENV.ownerOpenId) {
      values.approved = 1;
      updateSet.approved = 1;
    } else if (user.email && allowedDomains.some(domain => user.email!.endsWith(domain))) {
      values.approved = 1;
      updateSet.approved = 1;
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// TODO: add feature queries here as your schema grows.

export async function getAllUsers() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get users: database not available");
    return [];
  }

  const result = await db.select().from(users).orderBy(users.lastSignedIn);
  return result;
}

export async function updateUserApproval(userId: number, approved: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update user: database not available");
    return false;
  }

  try {
    await db.update(users).set({ approved }).where(eq(users.id, userId));
    return true;
  } catch (error) {
    console.error("[Database] Failed to update user approval:", error);
    return false;
  }
}

// Assessment database operations

export async function createAssessmentResult(data: InsertAssessmentResult) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create assessment: database not available");
    return null;
  }

  try {
    const result = await db.insert(assessmentResults).values(data);
    return result[0].insertId;
  } catch (error) {
    console.error("[Database] Failed to create assessment result:", error);
    throw error;
  }
}

export async function createAssessmentAnswers(answers: InsertAssessmentAnswer[]) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create answers: database not available");
    return false;
  }

  try {
    await db.insert(assessmentAnswers).values(answers);
    return true;
  } catch (error) {
    console.error("[Database] Failed to create assessment answers:", error);
    throw error;
  }
}

export async function getAllAssessments(filters?: {
  status?: string;
  minScore?: number;
  maxScore?: number;
  play?: string;
  sortBy?: 'createdAt' | 'totalScore' | 'prospectCompany';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get assessments: database not available");
    return [];
  }

  try {
    let query = db.select().from(assessmentResults);

    // Apply filters
    const conditions = [];
    if (filters?.status) {
      conditions.push(eq(assessmentResults.followUpStatus, filters.status as any));
    }
    if (filters?.minScore !== undefined) {
      conditions.push(gte(assessmentResults.totalScore, filters.minScore));
    }
    if (filters?.maxScore !== undefined) {
      conditions.push(lte(assessmentResults.totalScore, filters.maxScore));
    }
    if (filters?.play) {
      conditions.push(eq(assessmentResults.recommendedPlay, filters.play));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }

    // Apply sorting
    const sortField = filters?.sortBy || 'createdAt';
    const sortDir = filters?.sortOrder || 'desc';
    if (sortDir === 'desc') {
      query = query.orderBy(desc(assessmentResults[sortField])) as any;
    } else {
      query = query.orderBy(assessmentResults[sortField]) as any;
    }

    // Apply pagination
    if (filters?.limit) {
      query = query.limit(filters.limit) as any;
    }
    if (filters?.offset) {
      query = query.offset(filters.offset) as any;
    }

    return await query;
  } catch (error) {
    console.error("[Database] Failed to get assessments:", error);
    return [];
  }
}

export async function getAssessmentById(id: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get assessment: database not available");
    return null;
  }

  try {
    const [result] = await db.select().from(assessmentResults).where(eq(assessmentResults.id, id)).limit(1);
    if (!result) return null;

    const answers = await db.select().from(assessmentAnswers).where(eq(assessmentAnswers.assessmentId, id));
    
    return { ...result, answers };
  } catch (error) {
    console.error("[Database] Failed to get assessment:", error);
    return null;
  }
}

export async function updateAssessmentStatus(id: number, updates: {
  followUpStatus?: string;
  assignedTo?: string;
  notes?: string;
}) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update assessment: database not available");
    return false;
  }

  try {
    await db.update(assessmentResults).set(updates as any).where(eq(assessmentResults.id, id));
    return true;
  } catch (error) {
    console.error("[Database] Failed to update assessment:", error);
    return false;
  }
}

export async function getAssessmentStats() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get stats: database not available");
    return null;
  }

  try {
    const allAssessments = await db.select().from(assessmentResults);
    
    const stats = {
      totalAssessments: allAssessments.length,
      averageScore: allAssessments.length > 0 
        ? allAssessments.reduce((sum, a) => sum + a.totalScore, 0) / allAssessments.length 
        : 0,
      byReadinessLevel: {} as Record<string, number>,
      byRecommendedPlay: {} as Record<string, number>,
      byFollowUpStatus: {} as Record<string, number>,
    };

    allAssessments.forEach(a => {
      stats.byReadinessLevel[a.readinessLevel] = (stats.byReadinessLevel[a.readinessLevel] || 0) + 1;
      stats.byRecommendedPlay[a.recommendedPlay] = (stats.byRecommendedPlay[a.recommendedPlay] || 0) + 1;
      stats.byFollowUpStatus[a.followUpStatus] = (stats.byFollowUpStatus[a.followUpStatus] || 0) + 1;
    });

    return stats;
  } catch (error) {
    console.error("[Database] Failed to get assessment stats:", error);
    return null;
  }
}
