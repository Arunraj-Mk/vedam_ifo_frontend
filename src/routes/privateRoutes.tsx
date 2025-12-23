import { RouteObject } from 'react-router-dom';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import TestPage from '@/pages/test/TestPage';
import ProfilePage from '@/pages/profile/Profile';
import AnalyticsPage from '@/pages/analytics';
import AttendTestPage from '@/pages/attendTest';

export const privateRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },

  {
    path: '/analytics',
    element: <AnalyticsPage />,
  },
  {
    path: '/attend-test',
    element: <AttendTestPage />,
  },
];

