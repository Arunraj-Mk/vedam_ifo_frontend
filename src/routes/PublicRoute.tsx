import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';

interface PublicRouteProps {
  /**
   * If true, redirects authenticated users to dashboard
   * Use this for login/register pages
   */
  redirectIfAuthenticated?: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ redirectIfAuthenticated = false }) => {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Small delay to ensure localStorage is checked
    setIsChecking(false);
  }, []);

  // Show loading state while checking (optional, can be removed for instant redirect)
  if (isChecking && redirectIfAuthenticated) {
    return null; // Or a loading spinner if needed
  }

  // If authenticated users should be redirected (e.g., login/register pages)
  if (redirectIfAuthenticated && isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }

  // Allow access to public routes
  return <Outlet />;
};

export default PublicRoute;

