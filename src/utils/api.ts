/**
 * API Utility Functions
 * Reusable utility functions for API operations
 */

import { AxiosError } from 'axios';
import { axiosInstance } from '@/libs/api';

/**
 * Generic API response type
 */
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * Generic API error type
 */
export interface ApiError {
  success: false;
  message: string;
  error?: any;
  status?: number;
}

/**
 * Extract error message from API error
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || error.message || 'An error occurred';
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unknown error occurred';
};

/**
 * Check if error is an API error
 */
export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'success' in error &&
    'message' in error
  );
};

/**
 * Generic GET request helper
 */
export const apiGet = async <T>(url: string): Promise<T> => {
  const response = await axiosInstance.get<T>(url);
  return response.data;
};

/**
 * Generic POST request helper
 */
export const apiPost = async <T>(url: string, data?: unknown): Promise<T> => {
  const response = await axiosInstance.post<T>(url, data);
  return response.data;
};

/**
 * Generic PUT request helper
 */
export const apiPut = async <T>(url: string, data?: unknown): Promise<T> => {
  const response = await axiosInstance.put<T>(url, data);
  return response.data;
};

/**
 * Generic PATCH request helper
 */
export const apiPatch = async <T>(url: string, data?: unknown): Promise<T> => {
  const response = await axiosInstance.patch<T>(url, data);
  return response.data;
};

/**
 * Generic DELETE request helper
 */
export const apiDelete = async <T>(url: string): Promise<T> => {
  const response = await axiosInstance.delete<T>(url);
  return response.data;
};

