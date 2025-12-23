/**
 * Axios Instance Configuration
 * Configured axios instance with interceptors for authentication and error handling
 */

import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { API_BASE_URL, API_TIMEOUT } from './config';
import toast from 'react-hot-toast';

// Create axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - Add auth token to requests
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('authToken');
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor - Handle errors globally
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError<any>) => {
    // Handle network errors
    if (!error.response) {
      toast.error('Network error. Please check your connection.');
      return Promise.reject(error);
    }

    const status = error.response.status;
    const message = error.response.data?.message || 'An error occurred';

    // Handle 401 Unauthorized - Clear auth and redirect to login
    if (status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      
      // Only redirect if not already on login page
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
      
      toast.error('Session expired. Please login again.');
      return Promise.reject(error);
    }

    // Handle 403 Forbidden
    if (status === 403) {
      toast.error('Access forbidden. You do not have permission.');
      return Promise.reject(error);
    }

    // Handle 404 Not Found
    if (status === 404) {
      toast.error(message || 'Resource not found');
      return Promise.reject(error);
    }

    // Handle 409 Conflict
    if (status === 409) {
      toast.error(message || 'Conflict occurred');
      return Promise.reject(error);
    }

    // Handle 500 Server Error
    if (status >= 500) {
      toast.error('Server error. Please try again later.');
      return Promise.reject(error);
    }

    // Handle other errors - show message from server
    if (message && status !== 401) {
      toast.error(message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

