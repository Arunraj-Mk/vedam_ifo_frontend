/**
 * API Configuration
 * Centralized configuration for API endpoints and base URL
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const API_ENDPOINTS = {
  // Authentication
  AUTH: '/auth',
  REGISTRATION: '/registration',
  
  // Students
  STUDENTS: '/students',
  STUDENTS_BULK_UPLOAD: '/students/bulk-upload',
  STUDENTS_BULK_UPLOAD_TEMPLATE: '/students/bulk-upload/template',
  
  // Schools
  SCHOOLS: '/schools',
  
  // Tests
  TESTS: '/tests',
  TESTS_START: '/tests/start',
  TESTS_SUBMIT: '/tests/submit',
  TESTS_STATUS: '/tests/status',
  TESTS_RESULTS: '/tests/results',
  TESTS_ATTEMPTS: '/tests/attempts',
  
  // Reports
  REPORTS: '/reports',
  REPORTS_PERFORMANCE_SUMMARY: '/reports/performance-summary',
  REPORTS_ATTEMPTS: '/reports/attempts',
  REPORTS_SCHOOL_STUDENT_COUNT: '/reports/school-student-count',
  REPORTS_PAYMENT_SUMMARY: '/reports/payment-summary',
  REPORTS_PERFORMANCE_OVERVIEW: '/reports/performance-overview',
  REPORTS_STUDENT_PERFORMANCE: '/reports/student-performance',
  REPORTS_EXPORT: '/reports/export',
  
  // Payments
  PAYMENTS: '/payments',
  PAYMENTS_STATUS: '/payments/status',
  PAYMENTS_UPDATE_STATUS: '/payments/update-status',
  
  // Bulk Payments
  BULK_PAYMENTS: '/bulk-payments',
  BULK_PAYMENTS_CALCULATE_FEE: '/bulk-payments/calculate-fee',
  BULK_PAYMENTS_INITIATE: '/bulk-payments/initiate',
  BULK_PAYMENTS_STATUS: '/bulk-payments/status',
  BULK_PAYMENTS_HISTORY: '/bulk-payments/history',
} as const;

export const API_TIMEOUT = 30000; // 30 seconds

