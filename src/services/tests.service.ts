/**
 * Tests Service
 * API service functions for test-related operations (student role)
 */

import { axiosInstance } from '@/libs/api';
import { API_ENDPOINTS } from '@/libs/api/config';
import { queryKeys, mutationKeys } from '@/constants';

// ==================== Types ====================

// Available Tests Types
export interface AvailableTest {
  id: string;
  testName: string;
  description: string;
  totalQuestions: number;
  duration: number;
  createdAt: string;
}

export interface AvailableTestsResponse {
  success: boolean;
  message: string;
  data: {
    tests: AvailableTest[];
    total: number;
  };
}

// Start Test Types
export interface Question {
  id: string;
  questionNumber: number;
  subject: string;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  marks: number;
  selectedAnswer: string | null;
}

export interface StartTestResponse {
  success: boolean;
  message: string;
  data: {
    attemptId: string;
    testId: string;
    testName: string;
    startedAt: string;
    duration: number;
    timeRemaining: number;
    totalQuestions: number;
    status: 'IN_PROGRESS' | 'COMPLETED' | 'TIMEOUT' | 'ABANDONED';
    questions: Question[];
  };
}

// Get Test Questions Types
export interface TestQuestionsResponse {
  success: boolean;
  message: string;
  data: {
    attemptId: string;
    testId: string;
    testName: string;
    status: string;
    startedAt: string;
    timeRemaining: number;
    timeSpent: number;
    totalQuestions: number;
    answeredCount: number;
    unansweredCount: number;
    questions: Question[];
  };
}

// Submit Answer Types
export interface SubmitAnswerRequest {
  questionId: string;
  selectedAnswer: 'A' | 'B' | 'C' | 'D';
  timeSpent?: number;
}

export interface SubmitAnswerResponse {
  success: boolean;
  message: string;
  data: {
    answerId: string;
    questionId: string;
    selectedAnswer: string;
    isCorrect: boolean | null;
    marksObtained: number | null;
    answeredAt: string;
  };
}

// Get Test Attempt Status Types
export interface AttemptStatusResponse {
  success: boolean;
  message: string;
  data: {
    attemptId: string;
    testId: string;
    testName: string;
    status: 'IN_PROGRESS' | 'COMPLETED' | 'TIMEOUT' | 'ABANDONED';
    startedAt: string;
    timeRemaining: number;
    timeSpent: number;
    totalQuestions: number;
    answeredCount: number;
    unansweredCount: number;
    canSubmit: boolean;
  };
}

// Submit Test Types
export interface SubjectWiseScore {
  total: number;
  correct: number;
  wrong: number;
  unanswered: number;
  marks: number;
}

export interface AnswerResult {
  questionId: string;
  questionNumber: number;
  subject: string;
  questionText: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  marksObtained: number;
}

export interface SubmitTestResponse {
  success: boolean;
  message: string;
  data: {
    attemptId: string;
    testId: string;
    testName: string;
    status: 'COMPLETED';
    startedAt: string;
    submittedAt: string;
    timeSpent: number;
    totalMarks: number;
    totalQuestions: number;
    correctAnswers: number;
    wrongAnswers: number;
    unanswered: number;
    percentage: number;
    subjectWiseScore: Record<string, SubjectWiseScore>;
    answers: AnswerResult[];
  };
}

// Get Test Results Types (same as SubmitTestResponse)
export interface TestResultsResponse extends SubmitTestResponse {}

// ==================== API Functions ====================

export const testsService = {
  /**
   * Get available tests
   */
  getAvailableTests: async (): Promise<AvailableTestsResponse> => {
    const response = await axiosInstance.get<AvailableTestsResponse>(
      `${API_ENDPOINTS.TESTS}/available`
    );
    return response.data;
  },

  /**
   * Start a test
   */
  startTest: async (testId: string): Promise<StartTestResponse> => {
    const response = await axiosInstance.post<StartTestResponse>(
      `${API_ENDPOINTS.TESTS}/${testId}/start`
    );
    return response.data;
  },

  /**
   * Get test questions for an attempt
   */
  getTestQuestions: async (
    attemptId: string
  ): Promise<TestQuestionsResponse> => {
    const response = await axiosInstance.get<TestQuestionsResponse>(
      `/test-attempts/${attemptId}/questions`
    );
    return response.data;
  },

  /**
   * Submit an answer
   */
  submitAnswer: async (
    attemptId: string,
    data: SubmitAnswerRequest
  ): Promise<SubmitAnswerResponse> => {
    const response = await axiosInstance.post<SubmitAnswerResponse>(
      `/test-attempts/${attemptId}/answers`,
      data
    );
    return response.data;
  },

  /**
   * Get test attempt status
   */
  getAttemptStatus: async (
    attemptId: string
  ): Promise<AttemptStatusResponse> => {
    const response = await axiosInstance.get<AttemptStatusResponse>(
      `/test-attempts/${attemptId}`
    );
    return response.data;
  },

  /**
   * Submit the entire test
   */
  submitTest: async (attemptId: string): Promise<SubmitTestResponse> => {
    const response = await axiosInstance.post<SubmitTestResponse>(
      `/test-attempts/${attemptId}/submit`
    );
    return response.data;
  },

  /**
   * Get test results
   */
  getTestResults: async (
    attemptId: string
  ): Promise<TestResultsResponse> => {
    const response = await axiosInstance.get<TestResultsResponse>(
      `/test-attempts/${attemptId}/results`
    );
    return response.data;
  },
};

// Export query keys and mutation keys
export const testsQueryKeys = queryKeys.tests;
export const testsMutationKeys = mutationKeys.tests;

