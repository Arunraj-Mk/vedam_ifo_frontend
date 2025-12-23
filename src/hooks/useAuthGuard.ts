/**
 * Auth Guard Hook
 * Reusable hook to check authentication status and protect routes/components
 */

import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';

interface UseAuthGuardOptions {
  /**
   * Redirect to login if not authenticated
   */
  requireAuth?: boolean;
  /**
   * Redirect to dashboard if authenticated (for login/register pages)
   */
  redirectIfAuthenticated?: boolean;
  /**
   * Custom redirect path
   */
  redirectTo?: string;
}

/**
 * Hook to guard routes/components based on authentication
 */
export const useAuthGuard = (options: UseAuthGuardOptions = {}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    requireAuth = false,
    redirectIfAuthenticated = false,
    redirectTo,
  } = options;

  useEffect(() => {
    const authenticated = isAuthenticated();

    // If auth is required but user is not authenticated
    if (requireAuth && !authenticated) {
      const targetPath = redirectTo || '/login';
      navigate(targetPath, {
        state: { from: location },
        replace: true,
      });
      return;
    }

    // If authenticated users should be redirected (e.g., login/register pages)
    if (redirectIfAuthenticated && authenticated) {
      const targetPath = redirectTo || '/dashboard';
      navigate(targetPath, { replace: true });
      return;
    }
  }, [navigate, location, requireAuth, redirectIfAuthenticated, redirectTo]);

  return {
    isAuthenticated: isAuthenticated(),
  };
};

/**
 * Hook to check if user can access a route
 */
export const useCanAccess = (requireAuth: boolean = false): boolean => {
  if (!requireAuth) return true;
  return isAuthenticated();
};

