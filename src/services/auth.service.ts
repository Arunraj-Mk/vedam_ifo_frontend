/**
 * Authentication Service
 * API service functions for authentication (login, registration)
 */

import { axiosInstance } from '@/libs/api';
import { API_ENDPOINTS } from '@/libs/api/config';
import { queryKeys, mutationKeys } from '@/constants';

// Types
export interface LoginRequest {
  email: string;
  phone: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: {
      id: string;
      email: string;
      phone: string;
      role: string;
    };
  };
}

export interface RegistrationRequest {
  name: string;
  schoolName: string;
  classGrade: string;
  email: string;
  phone: string;
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  data: {
    studentId: string;
    studentCode: string;
    name: string;
    email: string;
    phone: string;
    schoolName: string;
    classGrade: string;
    paymentStatus: string;
  };
}

// API Functions
export const authService = {
  /**
   * Login user
   */
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post<LoginResponse>(
      API_ENDPOINTS.AUTH,
      data
    );
    return response.data;
  },

  /**
   * Register new student
   */
  register: async (data: RegistrationRequest): Promise<RegistrationResponse> => {
    const response = await axiosInstance.post<RegistrationResponse>(
      API_ENDPOINTS.REGISTRATION,
      data
    );
    return response.data;
  },
};

// Export query keys for use in React Query hooks
export const authQueryKeys = queryKeys.auth;
export const authMutationKeys = mutationKeys.auth;

