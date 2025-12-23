/**
 * Authentication Hooks
 * React Query hooks for authentication operations
 * All hooks are reusable and optimized
 */

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authService, authQueryKeys, authMutationKeys, LoginRequest, RegistrationRequest } from '@/services/auth.service';
import { setAuthToken, setUser, clearAuth, getUser, isAuthenticated } from '@/utils/auth';

/**
 * Hook for user login
 * Reusable hook that handles login, token storage, and navigation
 */
export const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: authMutationKeys.login,
    mutationFn: (data: LoginRequest) => authService.login(data),
    onSuccess: (response) => {
      if (response.success && response.data.token) {
        // Store token and user data using utility functions
        setAuthToken(response.data.token);
        setUser(response.data.user);

        // Invalidate and refetch user query
        queryClient.invalidateQueries({ queryKey: authQueryKeys.user() });

        toast.success(response.message || 'Login successful!');
        
        // Redirect to original page or dashboard
        const from = (location.state as any)?.from?.pathname || '/dashboard';
        navigate(from, { replace: true });
      }
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || error.message || 'Login failed. Please check your credentials.';
      toast.error(errorMessage);
    },
  });
};

/**
 * Hook for user registration
 * Reusable hook that handles registration and navigation
 */
export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: authMutationKeys.registration,
    mutationFn: (data: RegistrationRequest) => authService.register(data),
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message || 'Registration successful!');
        navigate('/login');
      }
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || error.message || 'Registration failed. Please try again.';
      toast.error(errorMessage);
    },
  });
};

/**
 * Hook to get current user
 * Reusable hook that fetches user from localStorage
 */
export const useCurrentUser = () => {
  return useQuery({
    queryKey: authQueryKeys.user(),
    queryFn: async () => getUser(),
    enabled: isAuthenticated(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Hook for logout
 * Reusable hook that clears auth data and redirects
 */
export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: authMutationKeys.logout,
    mutationFn: async () => {
      // Clear all auth data using utility function
      clearAuth();
      
      // Clear all queries
      queryClient.clear();
      
      return true;
    },
    onSuccess: () => {
      toast.success('Logged out successfully');
      navigate('/login');
    },
    onError: () => {
      // Even if there's an error, clear auth and redirect
      clearAuth();
      queryClient.clear();
      navigate('/login');
    },
  });
};

