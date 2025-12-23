import { RouteObject } from 'react-router-dom';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import TestPage from '@/pages/test/TestPage';

export const privateRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },

];

