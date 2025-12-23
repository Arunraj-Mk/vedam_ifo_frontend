import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardHeader from '@/pages/dashboard/components/DashboardHeader';

const PrivateRoute: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader userName="Rahul Sharma" />
        <div className="pt-20">
          <Outlet />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PrivateRoute;

