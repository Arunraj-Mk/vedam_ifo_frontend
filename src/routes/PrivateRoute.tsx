import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardHeader from '@/pages/dashboard/components/DashboardHeader';
import { isAuthenticated, getUser } from '@/utils/auth';

const PrivateRoute: React.FC = () => {
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Small delay to ensure localStorage is checked
    setIsChecking(false);
  }, []);

  // Show loading state while checking
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00B512] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Check if user is authenticated
  if (!isAuthenticated()) {
    // Redirect to login with return URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Get user data for header
  const user = getUser();
  const userName = user?.name || user?.email || 'User';

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader userName={userName} />
        <div className="pt-20">
          <Outlet />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PrivateRoute;
