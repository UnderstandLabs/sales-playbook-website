import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getAllUsers, updateUserApproval, createAssessmentResult, createAssessmentAnswers, getAllAssessments, getAssessmentById, updateAssessmentStatus, getAssessmentStats } from "./db";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  admin: router({
    users: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== 'admin') {
        throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
      }
      return await getAllUsers();
    }),
    updateApproval: protectedProcedure
      .input(z.object({ userId: z.number(), approved: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
        }
        return await updateUserApproval(input.userId, input.approved);
      }),
  }),

  assessments: router({
    create: publicProcedure
      .input(z.object({
        prospectName: z.string(),
        prospectEmail: z.string().email(),
        prospectCompany: z.string(),
        prospectRole: z.string().optional(),
        prospectIndustry: z.string().optional(),
        totalScore: z.number(),
        readinessLevel: z.string(),
        recommendedPlay: z.string(),
        secondaryPlay: z.string().optional(),
        categoryScores: z.record(z.string(), z.number()),
        answers: z.array(z.object({
          questionId: z.number(),
          questionCategory: z.string(),
          answerValue: z.number(),
          answerText: z.string(),
        })),
      }))
      .mutation(async ({ input }) => {
        try {
          const assessmentId = await createAssessmentResult({
            prospectName: input.prospectName,
            prospectEmail: input.prospectEmail,
            prospectCompany: input.prospectCompany,
            prospectRole: input.prospectRole,
            prospectIndustry: input.prospectIndustry,
            totalScore: input.totalScore,
            readinessLevel: input.readinessLevel,
            recommendedPlay: input.recommendedPlay,
            secondaryPlay: input.secondaryPlay,
            categoryScores: JSON.stringify(input.categoryScores),
          });

          if (assessmentId) {
            const answersData = input.answers.map(a => ({
              assessmentId: Number(assessmentId),
              questionId: a.questionId,
              questionCategory: a.questionCategory,
              answerValue: a.answerValue,
              answerText: a.answerText,
            }));
            await createAssessmentAnswers(answersData);
          }

          return { success: true, assessmentId };
        } catch (error) {
          throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Failed to save assessment' });
        }
      }),

    list: protectedProcedure
      .input(z.object({
        status: z.string().optional(),
        minScore: z.number().optional(),
        maxScore: z.number().optional(),
        play: z.string().optional(),
        sortBy: z.enum(['createdAt', 'totalScore', 'prospectCompany']).optional(),
        sortOrder: z.enum(['asc', 'desc']).optional(),
        limit: z.number().optional(),
        offset: z.number().optional(),
      }).optional())
      .query(async ({ ctx, input }) => {
        if (ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
        }
        return await getAllAssessments(input);
      }),

    getById: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ ctx, input }) => {
        if (ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
        }
        return await getAssessmentById(input.id);
      }),

    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        followUpStatus: z.string().optional(),
        assignedTo: z.string().optional(),
        notes: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
        }
        const { id, ...updates } = input;
        return await updateAssessmentStatus(id, updates);
      }),

    stats: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user.role !== 'admin') {
          throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
        }
        return await getAssessmentStats();
      }),
  }),
});

export type AppRouter = typeof appRouter;
