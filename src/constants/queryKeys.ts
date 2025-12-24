/**
 * Query Keys for React Query
 * Centralized query keys to avoid string duplication and ensure consistency
 */

// Base query keys
const QUERY_KEYS = {
  // Authentication
  AUTH: 'auth',
  USER: 'user',
  
  // Students
  STUDENTS: 'students',
  STUDENT: 'student',
  STUDENTS_BULK_UPLOAD: 'students_bulk_upload',
  
  // Schools
  SCHOOLS: 'schools',
  SCHOOL: 'school',
  
  // Tests
  TESTS: 'tests',
  TEST: 'test',
  TEST_ATTEMPTS: 'test_attempts',
  TEST_RESULTS: 'test_results',
  TEST_STATUS: 'test_status',
  TEST_QUESTIONS: 'test_questions',
  
  // Reports
  REPORTS: 'reports',
  PERFORMANCE_SUMMARY: 'performance_summary',
  PERFORMANCE_OVERVIEW: 'performance_overview',
  STUDENT_PERFORMANCE: 'student_performance',
  PAYMENT_SUMMARY: 'payment_summary',
  SCHOOL_STUDENT_COUNT: 'school_student_count',
  
  // Payments
  PAYMENTS: 'payments',
  PAYMENT_STATUS: 'payment_status',
  
  // Bulk Payments
  BULK_PAYMENTS: 'bulk_payments',
  BULK_PAYMENT_STATUS: 'bulk_payment_status',
  BULK_PAYMENT_HISTORY: 'bulk_payment_history',
} as const;

/**
 * Query Key Factory
 * Creates consistent query keys with proper typing
 */
export const queryKeys = {
  // Authentication
  auth: {
    all: [QUERY_KEYS.AUTH] as const,
    user: () => [...queryKeys.auth.all, QUERY_KEYS.USER] as const,
  },
  
  // Students
  students: {
    all: [QUERY_KEYS.STUDENTS] as const,
    lists: () => [...queryKeys.students.all, 'list'] as const,
    list: (filters?: Record<string, unknown>) => 
      [...queryKeys.students.lists(), filters] as const,
    details: () => [...queryKeys.students.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.students.details(), id] as const,
    bulkUpload: () => [...queryKeys.students.all, QUERY_KEYS.STUDENTS_BULK_UPLOAD] as const,
    profile: () => [...queryKeys.students.all, 'profile'] as const,
    profileDetail: (id: string) => [...queryKeys.students.profile(), id] as const,
    dashboard: () => [...queryKeys.students.all, 'dashboard'] as const,
    dashboardData: (timeRange?: string, limit?: number) => 
      [...queryKeys.students.dashboard(), timeRange, limit] as const,
    performanceBySubject: (timeRange?: string, subjects?: string[]) => 
      [...queryKeys.students.dashboard(), 'performance-by-subject', timeRange, subjects] as const,
  },
  
  // Schools
  schools: {
    all: [QUERY_KEYS.SCHOOLS] as const,
    lists: () => [...queryKeys.schools.all, 'list'] as const,
    list: (filters?: Record<string, unknown>) => 
      [...queryKeys.schools.lists(), filters] as const,
    details: () => [...queryKeys.schools.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.schools.details(), id] as const,
    byName: (name: string) => [...queryKeys.schools.details(), 'name', name] as const,
  },
  
  // Tests
  tests: {
    all: [QUERY_KEYS.TESTS] as const,
    lists: () => [...queryKeys.tests.all, 'list'] as const,
    list: (filters?: Record<string, unknown>) => 
      [...queryKeys.tests.lists(), filters] as const,
    details: () => [...queryKeys.tests.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.tests.details(), id] as const,
    questions: (testId: string) => 
      [...queryKeys.tests.detail(testId), QUERY_KEYS.TEST_QUESTIONS] as const,
    attempts: (studentId?: string) => 
      [...queryKeys.tests.all, QUERY_KEYS.TEST_ATTEMPTS, studentId] as const,
    attempt: (attemptId: string) => 
      [...queryKeys.tests.all, QUERY_KEYS.TEST_ATTEMPTS, attemptId] as const,
    results: (attemptId: string) => 
      [...queryKeys.tests.all, QUERY_KEYS.TEST_RESULTS, attemptId] as const,
    status: (attemptId: string) => 
      [...queryKeys.tests.all, QUERY_KEYS.TEST_STATUS, attemptId] as const,
  },
  
  // Reports
  reports: {
    all: [QUERY_KEYS.REPORTS] as const,
    performanceSummary: (filters?: Record<string, unknown>) => 
      [...queryKeys.reports.all, QUERY_KEYS.PERFORMANCE_SUMMARY, filters] as const,
    performanceOverview: (filters?: Record<string, unknown>) => 
      [...queryKeys.reports.all, QUERY_KEYS.PERFORMANCE_OVERVIEW, filters] as const,
    studentPerformance: (studentId: string, filters?: Record<string, unknown>) => 
      [...queryKeys.reports.all, QUERY_KEYS.STUDENT_PERFORMANCE, studentId, filters] as const,
    paymentSummary: (filters?: Record<string, unknown>) => 
      [...queryKeys.reports.all, QUERY_KEYS.PAYMENT_SUMMARY, filters] as const,
    schoolStudentCount: (filters?: Record<string, unknown>) => 
      [...queryKeys.reports.all, QUERY_KEYS.SCHOOL_STUDENT_COUNT, filters] as const,
    attempts: (filters?: Record<string, unknown>) => 
      [...queryKeys.reports.all, 'attempts', filters] as const,
  },
  
  // Payments
  payments: {
    all: [QUERY_KEYS.PAYMENTS] as const,
    status: (studentId: string) => 
      [...queryKeys.payments.all, QUERY_KEYS.PAYMENT_STATUS, studentId] as const,
  },
  
  // Bulk Payments
  bulkPayments: {
    all: [QUERY_KEYS.BULK_PAYMENTS] as const,
    status: (paymentId: string) => 
      [...queryKeys.bulkPayments.all, QUERY_KEYS.BULK_PAYMENT_STATUS, paymentId] as const,
    history: (schoolId?: string, filters?: Record<string, unknown>) => 
      [...queryKeys.bulkPayments.all, QUERY_KEYS.BULK_PAYMENT_HISTORY, schoolId, filters] as const,
  },
} as const;

export default queryKeys;

