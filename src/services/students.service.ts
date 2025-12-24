/**
 * Students Service
 * API service functions for student-related operations
 */

import { axiosInstance } from '@/libs/api';
import { API_ENDPOINTS } from '@/libs/api/config';
import { queryKeys, mutationKeys } from '@/constants';

// ==================== Types ====================

// Bulk Upload Types
export interface BulkUploadResponse {
  success: boolean;
  message: string;
  data: {
    uploadId: string;
    cloudinaryUrl: string;
    totalRows: number;
    successful: number;
    failed: number;
    summary: {
      created: number;
      skipped: number;
    };
    errors: Array<{
      row: number;
      field: string;
      value: string;
      error: string;
    }>;
    createdStudents: Array<{
      studentId: string;
      studentCode: string;
      name: string;
      email: string;
    }>;
  };
}

// Test Attempts Types
export interface TestAttempt {
  attemptId: string;
  testId: string;
  testName: string;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'TIMEOUT' | 'ABANDONED';
  startedAt: string;
  submittedAt: string | null;
  totalMarks: number | null;
  totalQuestions: number;
  percentage: number | null;
  timeRemaining: number | null;
  answeredCount: number | null;
}

export interface TestAttemptsResponse {
  success: boolean;
  message: string;
  data: {
    attempts: TestAttempt[];
    totalAttempts: number;
    completedAttempts: number;
    inProgressAttempts: number;
  };
}

export interface TestAttemptsFilters {
  testId?: string;
  status?: 'IN_PROGRESS' | 'COMPLETED' | 'TIMEOUT' | 'ABANDONED';
  fromDate?: string;
  toDate?: string;
  sortBy?: 'date' | 'score' | 'testName';
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

// Student Profile Types
export interface StudentProfileResponse {
  success: boolean;
  message: string;
  data: {
    studentId: string;
    studentCode: string;
    name: string;
    email: string;
    phone: string;
    schoolId: string;
    schoolName: string;
    classGrade: string;
    registrationSource: string;
    paymentStatus: 'PENDING' | 'PAID' | 'FAILED';
    paymentDate: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface UpdateStudentProfileRequest {
  email?: string;
  phone?: string;
  classGrade?: string;
  paymentStatus?: 'PENDING' | 'PAID' | 'FAILED';
  paymentDate?: string | null;
}

// Performance Summary Types
export interface PerformanceSummaryResponse {
  success: boolean;
  message: string;
  data: {
    totalAttempts: number;
    completedAttempts: number;
    inProgressAttempts: number;
    abandonedAttempts: number;
    averageScore: number;
    averagePercentage: number;
    bestScore: number;
    worstScore: number;
    totalMarksObtained: number;
    totalPossibleMarks: number;
    subjectWiseAverage: Record<string, number>;
    recentAttempts: Array<{
      attemptId: string;
      testName: string;
      score: number;
      percentage: number;
      date: string;
    }>;
    improvementTrend: Array<{
      date: string;
      averageScore: number;
    }>;
  };
}

// Payment Status Types
export interface PaymentStatusResponse {
  success: boolean;
  message: string;
  data: {
    studentId: string;
    paymentStatus: 'PENDING' | 'PAID' | 'FAILED';
    paymentDate: string | null;
    canStartTest: boolean;
    message: string;
  };
}

// Admin - Get Students by Payment Status Types
export interface StudentListItem {
  studentId: string;
  studentCode: string;
  name: string;
  email: string;
  phone: string;
  schoolName: string;
  classGrade: string;
  paymentStatus: 'PENDING' | 'PAID' | 'FAILED';
  paymentDate: string | null;
  registrationDate: string;
  isActive: boolean;
}

export interface StudentsByPaymentStatusResponse {
  success: boolean;
  message: string;
  data: {
    students: StudentListItem[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
    filters: {
      paymentStatus: string | null;
      schoolId: string | null;
    };
    summary: {
      total: number;
      pending: number;
      paid: number;
      failed: number;
    };
  };
}

export interface StudentsByPaymentStatusFilters {
  paymentStatus?: 'PENDING' | 'PAID' | 'FAILED';
  schoolId?: string;
  page?: number;
  limit?: number;
}

// Admin - Update Payment Status Types
export interface UpdatePaymentStatusRequest {
  paymentStatus: 'PENDING' | 'PAID' | 'FAILED';
  paymentDate?: string;
  transactionId?: string;
}

export interface UpdatePaymentStatusResponse {
  success: boolean;
  message: string;
  data: {
    studentId: string;
    studentName: string;
    paymentStatus: 'PENDING' | 'PAID' | 'FAILED';
    paymentDate: string | null;
    updatedAt: string;
  };
}

// Admin - Detailed Student Performance Types
export interface DetailedStudentPerformanceResponse {
  success: boolean;
  message: string;
  data: {
    student: {
      studentId: string;
      studentCode: string;
      name: string;
      email: string;
      schoolName: string;
      classGrade: string;
    };
    performance: {
      totalAttempts: number;
      completedAttempts: number;
      averageScore: number;
      subjectWisePerformance: Record<string, unknown>;
      testAttempts: unknown[];
      improvementTrend: unknown[];
    };
  };
}

// Admin - School-wise Student Count Types
export interface SchoolStudentCount {
  schoolId: string;
  schoolName: string;
  totalStudents: number;
  activeStudents: number;
  inactiveStudents: number;
  byClass: Record<string, number>;
  byPaymentStatus: {
    PENDING: number;
    PAID: number;
    FAILED: number;
  };
  byRegistrationSource: {
    SELF: number;
    BULK_UPLOAD: number;
  };
}

export interface SchoolWiseStudentCountResponse {
  success: boolean;
  message: string;
  data: {
    schools: SchoolStudentCount[];
    summary: {
      totalSchools: number;
      totalStudents: number;
      totalActive: number;
      totalInactive: number;
    };
  };
}

export interface SchoolWiseStudentCountFilters {
  includeInactive?: boolean;
  schoolId?: string;
}

// Dashboard Types
export interface DashboardBadge {
  label: string;
  type: 'TOP_PERFORMER' | 'TESTS_COMPLETED' | 'PAYMENT_COMPLETED' | 'STREAK';
  value?: string | number;
}

export interface DashboardKPI {
  testsCompleted: {
    value: number;
    label: string;
  };
  averageScore: {
    value: number;
    label: string;
    unit: string;
  };
  bestSubject: {
    value: string;
    label: string;
    averageScore: number;
  };
}

export interface DashboardRecentTest {
  attemptId: string;
  testName: string;
  subject: string;
  date: string;
  score: number;
  percentage: number;
  status: 'PASSED' | 'FAILED';
  totalQuestions: number;
  correctAnswers: number;
}

export interface DashboardPerformanceBySubject {
  subject: string;
  averageScore: number;
  totalTests: number;
  completedTests: number;
  bestScore: number;
  worstScore: number;
  improvement: number;
}

export interface DashboardSummary {
  totalAttempts: number;
  completedAttempts: number;
  inProgressAttempts: number;
  averagePercentage: number;
  bestScore: number;
  worstScore: number;
  totalMarksObtained: number;
  totalPossibleMarks: number;
}

export interface DashboardData {
  student: {
    studentId: string;
    studentCode: string;
    name: string;
    email: string;
    paymentStatus: 'PENDING' | 'PAID' | 'FAILED';
  };
  badges: DashboardBadge[];
  kpis: DashboardKPI;
  recentTests: DashboardRecentTest[];
  performanceBySubject: DashboardPerformanceBySubject[];
  summary: DashboardSummary;
}

export interface DashboardResponse {
  success: boolean;
  message: string;
  data: DashboardData;
}

export interface PerformanceBySubjectResponse {
  success: boolean;
  message: string;
  data: {
    timeRange: string;
    performanceBySubject: DashboardPerformanceBySubject[];
    summary: {
      totalTests: number;
      averageScore: number;
    };
  };
}

export interface DashboardFilters {
  timeRange?: '7d' | '30d' | '3m' | 'all';
  recentTestsLimit?: number;
}

// ==================== API Functions ====================

export const studentsService = {
  /**
   * Download bulk upload template
   */
  downloadBulkUploadTemplate: async (): Promise<Blob> => {
    const response = await axiosInstance.get(
      API_ENDPOINTS.STUDENTS_BULK_UPLOAD_TEMPLATE,
      {
        responseType: 'blob',
      }
    );
    return response.data;
  },

  /**
   * Bulk upload students
   */
  bulkUploadStudents: async (file: File): Promise<BulkUploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axiosInstance.post<BulkUploadResponse>(
      API_ENDPOINTS.STUDENTS_BULK_UPLOAD,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },

  /**
   * Get my test attempts (filtered)
   */
  getMyTestAttempts: async (
    filters?: TestAttemptsFilters
  ): Promise<TestAttemptsResponse> => {
    const params = new URLSearchParams();
    
    if (filters?.testId) params.append('testId', filters.testId);
    if (filters?.status) params.append('status', filters.status);
    if (filters?.fromDate) params.append('fromDate', filters.fromDate);
    if (filters?.toDate) params.append('toDate', filters.toDate);
    if (filters?.sortBy) params.append('sortBy', filters.sortBy);
    if (filters?.order) params.append('order', filters.order);
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.limit) params.append('limit', filters.limit.toString());

    const queryString = params.toString();
    const url = queryString
      ? `${API_ENDPOINTS.STUDENTS}/me/test-attempts?${queryString}`
      : `${API_ENDPOINTS.STUDENTS}/me/test-attempts`;

    const response = await axiosInstance.get<TestAttemptsResponse>(url);
    return response.data;
  },

  /**
   * Get my performance summary
   */
  getMyPerformanceSummary: async (): Promise<PerformanceSummaryResponse> => {
    const response = await axiosInstance.get<PerformanceSummaryResponse>(
      `${API_ENDPOINTS.STUDENTS}/me/performance`
    );
    return response.data;
  },

  /**
   * Get my payment status
   */
  getMyPaymentStatus: async (): Promise<PaymentStatusResponse> => {
    const response = await axiosInstance.get<PaymentStatusResponse>(
      `${API_ENDPOINTS.STUDENTS}/me/payment-status`
    );
    return response.data;
  },

  /**
   * Get my student profile
   */
  getStudentProfile: async (): Promise<StudentProfileResponse> => {
    const response = await axiosInstance.get<StudentProfileResponse>(
      API_ENDPOINTS.STUDENTS_ME_PROFILE
    );
    return response.data;
  },

  /**
   * Update my student profile
   */
  updateStudentProfile: async (
    data: UpdateStudentProfileRequest
  ): Promise<StudentProfileResponse> => {
    const response = await axiosInstance.put<StudentProfileResponse>(
      API_ENDPOINTS.STUDENTS_ME_PROFILE,
      data
    );
    return response.data;
  },

  /**
   * Get dashboard data
   */
  getDashboardData: async (
    filters?: DashboardFilters
  ): Promise<DashboardResponse> => {
    const params = new URLSearchParams();
    
    if (filters?.timeRange) params.append('timeRange', filters.timeRange);
    if (filters?.recentTestsLimit) params.append('recentTestsLimit', filters.recentTestsLimit.toString());

    const queryString = params.toString();
    const url = queryString
      ? `${API_ENDPOINTS.STUDENTS_ME_DASHBOARD}?${queryString}`
      : API_ENDPOINTS.STUDENTS_ME_DASHBOARD;

    const response = await axiosInstance.get<DashboardResponse>(url);
    return response.data;
  },

  /**
   * Get performance by subject
   */
  getPerformanceBySubject: async (
    timeRange: '7d' | '30d' | '3m' | 'all' = '30d',
    subjects?: string[]
  ): Promise<PerformanceBySubjectResponse> => {
    const params = new URLSearchParams();
    params.append('timeRange', timeRange);
    
    if (subjects && subjects.length > 0) {
      subjects.forEach((subject) => {
        params.append('subjects', subject);
      });
    }

    const url = `${API_ENDPOINTS.STUDENTS_ME_DASHBOARD_PERFORMANCE}?${params.toString()}`;
    const response = await axiosInstance.get<PerformanceBySubjectResponse>(url);
    return response.data;
  },

  // ==================== Admin APIs ====================

  /**
   * Get students by payment status (Admin)
   */
  getStudentsByPaymentStatus: async (
    filters?: StudentsByPaymentStatusFilters
  ): Promise<StudentsByPaymentStatusResponse> => {
    const params = new URLSearchParams();
    
    if (filters?.paymentStatus) params.append('paymentStatus', filters.paymentStatus);
    if (filters?.schoolId) params.append('schoolId', filters.schoolId);
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.limit) params.append('limit', filters.limit.toString());

    const queryString = params.toString();
    const url = queryString
      ? `/admin/students?${queryString}`
      : '/admin/students';

    const response = await axiosInstance.get<StudentsByPaymentStatusResponse>(url);
    return response.data;
  },

  /**
   * Update student payment status (Admin)
   */
  updatePaymentStatus: async (
    studentId: string,
    data: UpdatePaymentStatusRequest
  ): Promise<UpdatePaymentStatusResponse> => {
    const response = await axiosInstance.put<UpdatePaymentStatusResponse>(
      `/admin/students/${studentId}/payment-status`,
      data
    );
    return response.data;
  },

  /**
   * Get detailed student performance (Admin)
   */
  getDetailedStudentPerformance: async (
    studentId: string
  ): Promise<DetailedStudentPerformanceResponse> => {
    const response = await axiosInstance.get<DetailedStudentPerformanceResponse>(
      `/admin/reports/performance/students/${studentId}`
    );
    return response.data;
  },

  /**
   * Get school-wise student count (Admin)
   */
  getSchoolWiseStudentCount: async (
    filters?: SchoolWiseStudentCountFilters
  ): Promise<SchoolWiseStudentCountResponse> => {
    const params = new URLSearchParams();
    
    if (filters?.includeInactive) params.append('includeInactive', 'true');
    if (filters?.schoolId) params.append('schoolId', filters.schoolId);

    const queryString = params.toString();
    const url = queryString
      ? `/admin/reports/students/school-wise?${queryString}`
      : '/admin/reports/students/school-wise';

    const response = await axiosInstance.get<SchoolWiseStudentCountResponse>(url);
    return response.data;
  },
};

// Export query keys and mutation keys
export const studentsQueryKeys = queryKeys.students;
export const studentsMutationKeys = mutationKeys.students;

