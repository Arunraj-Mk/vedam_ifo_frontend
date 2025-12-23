/**
 * Mutation Keys for React Query
 * Centralized mutation keys to avoid string duplication and ensure consistency
 */

// Base mutation keys
const MUTATION_KEYS = {
  // Authentication
  LOGIN: 'login',
  REGISTRATION: 'registration',
  LOGOUT: 'logout',
  
  // Students
  CREATE_STUDENT: 'create_student',
  UPDATE_STUDENT: 'update_student',
  DELETE_STUDENT: 'delete_student',
  BULK_UPLOAD_STUDENTS: 'bulk_upload_students',
  
  // Schools
  CREATE_SCHOOL: 'create_school',
  UPDATE_SCHOOL: 'update_school',
  DELETE_SCHOOL: 'delete_school',
  
  // Tests
  CREATE_TEST: 'create_test',
  UPDATE_TEST: 'update_test',
  DELETE_TEST: 'delete_test',
  START_TEST: 'start_test',
  SUBMIT_TEST: 'submit_test',
  SUBMIT_ANSWER: 'submit_answer',
  ADD_QUESTION: 'add_question',
  UPDATE_QUESTION: 'update_question',
  DELETE_QUESTION: 'delete_question',
  
  // Payments
  UPDATE_PAYMENT_STATUS: 'update_payment_status',
  
  // Bulk Payments
  CALCULATE_FEE: 'calculate_fee',
  INITIATE_BULK_PAYMENT: 'initiate_bulk_payment',
  PROCESS_BULK_PAYMENT: 'process_bulk_payment',
} as const;

/**
 * Mutation Key Factory
 * Creates consistent mutation keys with proper typing
 */
export const mutationKeys = {
  // Authentication
  auth: {
    login: [MUTATION_KEYS.LOGIN] as const,
    registration: [MUTATION_KEYS.REGISTRATION] as const,
    logout: [MUTATION_KEYS.LOGOUT] as const,
  },
  
  // Students
  students: {
    create: [MUTATION_KEYS.CREATE_STUDENT] as const,
    update: (id: string) => [MUTATION_KEYS.UPDATE_STUDENT, id] as const,
    delete: (id: string) => [MUTATION_KEYS.DELETE_STUDENT, id] as const,
    bulkUpload: [MUTATION_KEYS.BULK_UPLOAD_STUDENTS] as const,
  },
  
  // Schools
  schools: {
    create: [MUTATION_KEYS.CREATE_SCHOOL] as const,
    update: (id: string) => [MUTATION_KEYS.UPDATE_SCHOOL, id] as const,
    delete: (id: string) => [MUTATION_KEYS.DELETE_SCHOOL, id] as const,
  },
  
  // Tests
  tests: {
    create: [MUTATION_KEYS.CREATE_TEST] as const,
    update: (id: string) => [MUTATION_KEYS.UPDATE_TEST, id] as const,
    delete: (id: string) => [MUTATION_KEYS.DELETE_TEST, id] as const,
    start: [MUTATION_KEYS.START_TEST] as const,
    submit: (attemptId: string) => [MUTATION_KEYS.SUBMIT_TEST, attemptId] as const,
    submitAnswer: (attemptId: string) => [MUTATION_KEYS.SUBMIT_ANSWER, attemptId] as const,
    addQuestion: (testId: string) => [MUTATION_KEYS.ADD_QUESTION, testId] as const,
    updateQuestion: (testId: string, questionId: string) => 
      [MUTATION_KEYS.UPDATE_QUESTION, testId, questionId] as const,
    deleteQuestion: (testId: string, questionId: string) => 
      [MUTATION_KEYS.DELETE_QUESTION, testId, questionId] as const,
  },
  
  // Payments
  payments: {
    updateStatus: (studentId: string) => 
      [MUTATION_KEYS.UPDATE_PAYMENT_STATUS, studentId] as const,
  },
  
  // Bulk Payments
  bulkPayments: {
    calculateFee: [MUTATION_KEYS.CALCULATE_FEE] as const,
    initiate: [MUTATION_KEYS.INITIATE_BULK_PAYMENT] as const,
    process: (paymentId: string) => 
      [MUTATION_KEYS.PROCESS_BULK_PAYMENT, paymentId] as const,
  },
} as const;

export default mutationKeys;

