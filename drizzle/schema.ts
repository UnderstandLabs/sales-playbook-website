import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
  approved: int("approved").default(0).notNull(), // 0 = pending, 1 = approved, -1 = denied
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Assessment results table for storing completed Intelligence Layer assessments
 * with prospect information and AI readiness scores.
 */
export const assessmentResults = mysqlTable("assessmentResults", {
  id: int("id").autoincrement().primaryKey(),
  prospectName: varchar("prospectName", { length: 255 }).notNull(),
  prospectEmail: varchar("prospectEmail", { length: 320 }).notNull(),
  prospectCompany: varchar("prospectCompany", { length: 255 }).notNull(),
  prospectRole: varchar("prospectRole", { length: 255 }),
  prospectIndustry: varchar("prospectIndustry", { length: 100 }),
  totalScore: int("totalScore").notNull(),
  readinessLevel: varchar("readinessLevel", { length: 50 }).notNull(),
  recommendedPlay: varchar("recommendedPlay", { length: 100 }).notNull(),
  secondaryPlay: varchar("secondaryPlay", { length: 100 }),
  categoryScores: text("categoryScores").notNull(), // JSON string
  followUpStatus: mysqlEnum("followUpStatus", ["new", "contacted", "qualified", "demo_scheduled", "closed_won", "closed_lost"]).default("new").notNull(),
  assignedTo: varchar("assignedTo", { length: 320 }),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type AssessmentResult = typeof assessmentResults.$inferSelect;
export type InsertAssessmentResult = typeof assessmentResults.$inferInsert;

/**
 * Assessment answers table for storing individual question responses
 * for detailed gap analysis.
 */
export const assessmentAnswers = mysqlTable("assessmentAnswers", {
  id: int("id").autoincrement().primaryKey(),
  assessmentId: int("assessmentId").notNull(),
  questionId: int("questionId").notNull(),
  questionCategory: varchar("questionCategory", { length: 100 }).notNull(),
  answerValue: int("answerValue").notNull(),
  answerText: text("answerText").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type AssessmentAnswer = typeof assessmentAnswers.$inferSelect;
export type InsertAssessmentAnswer = typeof assessmentAnswers.$inferInsert;