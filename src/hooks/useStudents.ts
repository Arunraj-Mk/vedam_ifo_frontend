/**
 * Students Hooks
 * React Query hooks for student-related API operations
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { studentsService, studentsQueryKeys, studentsMutationKeys } from '@/services/students.service';
import type {
  TestAttemptsFilters,
  StudentsByPaymentStatusFilters,
  UpdatePaymentStatusRequest,
  SchoolWiseStudentCountFilters,
  UpdateStudentProfileRequest,
  DashboardFilters,
} from '@/services/students.service';
import toast from 'react-hot-toast';

// ==================== Query Hooks ====================

/**
 * Hook to download bulk upload template
 */
export const useDownloadBulkUploadTemplate = () => {
  return useMutation({
    mutationKey: studentsMutationKeys.bulkUpload,
    mutationFn: async () => {
      const blob = await studentsService.downloadBulkUploadTemplate();
      return blob;
    },
    onSuccess: (blob) => {
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'bulk-student-upload-template.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      toast.success('Template downloaded successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to download template');
    },
  });
};

/**
 * Hook to bulk upload students
 */
export const useBulkUploadStudents = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: studentsMutationKeys.bulkUpload,
    mutationFn: (file: File) => studentsService.bulkUploadStudents(file),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: studentsQueryKeys.all });
      toast.success(
        `Bulk upload completed: ${data.data.successful} successful, ${data.data.failed} failed`
      );
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to upload students');
    },
  });
};

/**
 * Hook to get my test attempts
 */
export const useMyTestAttempts = (filters?: TestAttemptsFilters) => {
  return useQuery({
    queryKey: [...studentsQueryKeys.all, 'test-attempts', filters],
    queryFn: () => studentsService.getMyTestAttempts(filters),
    staleTime: 30000, // 30 seconds
  });
};

/**
 * Hook to get my performance summary
 */
export const useMyPerformanceSummary = () => {
  return useQuery({
    queryKey: [...studentsQueryKeys.all, 'performance-summary'],
    queryFn: () => studentsService.getMyPerformanceSummary(),
    staleTime: 60000, // 1 minute
  });
};

/**
 * Hook to get my payment status
 */
export const useMyPaymentStatus = () => {
  return useQuery({
    queryKey: [...studentsQueryKeys.all, 'payment-status'],
    queryFn: () => studentsService.getMyPaymentStatus(),
    staleTime: 30000, // 30 seconds
  });
};

/**
 * Hook to get my student profile
 */
export const useStudentProfile = () => {
  return useQuery({
    queryKey: studentsQueryKeys.profile(),
    queryFn: () => studentsService.getStudentProfile(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook to update my student profile
 */
export const useUpdateStudentProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: studentsMutationKeys.updateProfile('me'),
    mutationFn: (data: UpdateStudentProfileRequest) =>
      studentsService.updateStudentProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: studentsQueryKeys.profile(),
      });
      toast.success('Profile updated successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update profile');
    },
  });
};

/**
 * Hook to get dashboard data
 */
export const useDashboardData = (filters?: DashboardFilters) => {
  return useQuery({
    queryKey: studentsQueryKeys.dashboardData(filters?.timeRange, filters?.recentTestsLimit),
    queryFn: () => studentsService.getDashboardData(filters),
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};

/**
 * Hook to get performance by subject
 */
export const usePerformanceBySubject = (
  timeRange: '7d' | '30d' | '3m' | 'all' = '30d',
  subjects?: string[]
) => {
  return useQuery({
    queryKey: studentsQueryKeys.performanceBySubject(timeRange, subjects),
    queryFn: () => studentsService.getPerformanceBySubject(timeRange, subjects),
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};

// ==================== Admin Query Hooks ====================

/**
 * Hook to get students by payment status (Admin)
 */
export const useStudentsByPaymentStatus = (
  filters?: StudentsByPaymentStatusFilters,
  enabled = true
) => {
  return useQuery({
    queryKey: studentsQueryKeys.list(filters as Record<string, unknown>),
    queryFn: () => studentsService.getStudentsByPaymentStatus(filters),
    enabled,
    staleTime: 30000, // 30 seconds
  });
};

/**
 * Hook to get detailed student performance (Admin)
 */
export const useDetailedStudentPerformance = (
  studentId: string,
  enabled = true
) => {
  return useQuery({
    queryKey: [...studentsQueryKeys.detail(studentId), 'performance'],
    queryFn: () => studentsService.getDetailedStudentPerformance(studentId),
    enabled: enabled && !!studentId,
    staleTime: 60000, // 1 minute
  });
};

/**
 * Hook to get school-wise student count (Admin)
 */
export const useSchoolWiseStudentCount = (
  filters?: SchoolWiseStudentCountFilters,
  enabled = true
) => {
  return useQuery({
    queryKey: [...studentsQueryKeys.all, 'school-wise-count', filters],
    queryFn: () => studentsService.getSchoolWiseStudentCount(filters),
    enabled,
    staleTime: 60000, // 1 minute
  });
};

// ==================== Admin Mutation Hooks ====================

/**
 * Hook to update student payment status (Admin)
 */
export const useUpdatePaymentStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: studentsMutationKeys.update(''),
    mutationFn: ({
      studentId,
      data,
    }: {
      studentId: string;
      data: UpdatePaymentStatusRequest;
    }) => studentsService.updatePaymentStatus(studentId, data),
    onSuccess: (_data, variables) => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({
        queryKey: studentsQueryKeys.detail(variables.studentId),
      });
      queryClient.invalidateQueries({
        queryKey: studentsQueryKeys.list(),
      });
      queryClient.invalidateQueries({
        queryKey: [...studentsQueryKeys.all, 'payment-status'],
      });
      toast.success('Payment status updated successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update payment status');
    },
  });
};

