/**
 * Tests Hooks
 * React Query hooks for test-related API operations (student role)
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { testsService, testsQueryKeys, testsMutationKeys } from '@/services/tests.service';
import type { SubmitAnswerRequest } from '@/services/tests.service';
import toast from 'react-hot-toast';

// ==================== Query Hooks ====================

/**
 * Hook to get available tests
 */
export const useAvailableTests = () => {
  return useQuery({
    queryKey: testsQueryKeys.lists(),
    queryFn: () => testsService.getAvailableTests(),
    staleTime: 60000, // 1 minute
  });
};

/**
 * Hook to get test questions for an attempt
 */
export const useTestQuestions = (attemptId: string, enabled = true) => {
  return useQuery({
    queryKey: testsQueryKeys.questions(attemptId),
    queryFn: () => testsService.getTestQuestions(attemptId),
    enabled: enabled && !!attemptId,
    staleTime: 10000, // 10 seconds - questions can change frequently
    refetchInterval: 30000, // Refetch every 30 seconds to sync time remaining
  });
};

/**
 * Hook to get test attempt status
 */
export const useAttemptStatus = (attemptId: string, enabled = true) => {
  return useQuery({
    queryKey: testsQueryKeys.status(attemptId),
    queryFn: () => testsService.getAttemptStatus(attemptId),
    enabled: enabled && !!attemptId,
    staleTime: 5000, // 5 seconds - status changes frequently
    refetchInterval: 10000, // Refetch every 10 seconds to update timer
  });
};

/**
 * Hook to get test results
 */
export const useTestResults = (attemptId: string, enabled = true) => {
  return useQuery({
    queryKey: testsQueryKeys.results(attemptId),
    queryFn: () => testsService.getTestResults(attemptId),
    enabled: enabled && !!attemptId,
    staleTime: 300000, // 5 minutes - results don't change after submission
  });
};

// ==================== Mutation Hooks ====================

/**
 * Hook to start a test
 */
export const useStartTest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: testsMutationKeys.start,
    mutationFn: (testId: string) => testsService.startTest(testId),
    onSuccess: (data) => {
      // Invalidate available tests to reflect that a test is in progress
      queryClient.invalidateQueries({
        queryKey: testsQueryKeys.lists(),
      });
      // Set up queries for the new attempt
      queryClient.setQueryData(
        testsQueryKeys.status(data.data.attemptId),
        {
          success: true,
          message: 'Test started',
          data: {
            attemptId: data.data.attemptId,
            testId: data.data.testId,
            testName: data.data.testName,
            status: data.data.status,
            startedAt: data.data.startedAt,
            timeRemaining: data.data.timeRemaining,
            timeSpent: 0,
            totalQuestions: data.data.totalQuestions,
            answeredCount: 0,
            unansweredCount: data.data.totalQuestions,
            canSubmit: true,
          },
        }
      );
      toast.success('Test started successfully');
    },
    onError: (error: Error) => {
      const errorMessage =
        error.message || 'Failed to start test. Please check your payment status.';
      toast.error(errorMessage);
    },
  });
};

/**
 * Hook to submit an answer
 */
export const useSubmitAnswer = (attemptId?: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: attemptId
      ? testsMutationKeys.submitAnswer(attemptId)
      : testsMutationKeys.submitAnswer(''),
    mutationFn: ({
      attemptId,
      data,
    }: {
      attemptId: string;
      data: SubmitAnswerRequest;
    }) => testsService.submitAnswer(attemptId, data),
    onSuccess: (_data, variables) => {
      // Invalidate questions to get updated selected answers
      queryClient.invalidateQueries({
        queryKey: testsQueryKeys.questions(variables.attemptId),
      });
      // Invalidate status to update answered count
      queryClient.invalidateQueries({
        queryKey: testsQueryKeys.status(variables.attemptId),
      });
      // Don't show toast for every answer submission to avoid spam
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to submit answer');
    },
  });
};

/**
 * Hook to submit the entire test
 */
export const useSubmitTest = (attemptId?: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: attemptId
      ? testsMutationKeys.submit(attemptId)
      : testsMutationKeys.submit(''),
    mutationFn: (attemptId: string) => testsService.submitTest(attemptId),
    onSuccess: (data, attemptId) => {
      // Invalidate all related queries
      queryClient.invalidateQueries({
        queryKey: testsQueryKeys.status(attemptId),
      });
      queryClient.invalidateQueries({
        queryKey: testsQueryKeys.questions(attemptId),
      });
      queryClient.invalidateQueries({
        queryKey: testsQueryKeys.results(attemptId),
      });
      // Invalidate test attempts list
      queryClient.invalidateQueries({
        queryKey: testsQueryKeys.attempts(),
      });
      // Invalidate performance summary
      queryClient.invalidateQueries({
        queryKey: ['students', 'performance-summary'],
      });
      // Set results data immediately
      queryClient.setQueryData(testsQueryKeys.results(attemptId), data);
      toast.success('Test submitted successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to submit test');
    },
  });
};

