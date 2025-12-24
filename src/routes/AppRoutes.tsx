import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HomePage from '@/pages/home/HomePage';
import LoginPage from '@/pages/login/LoginPage';
import GetStartedPage from '@/pages/getStarted/GetStartedPage';
import RegistrationPage from '@/pages/registration/RegistrationPage';
import AboutPage from '@/pages/about/AboutPage';
import ContactUsPage from '@/pages/contactUs/ContactUsPage';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import TestPage from '@/pages/test/TestPage';
import ProfilePage from '@/pages/profile/Profile';
import AnalyticsPage from '@/pages/analytics';
import AttendTestPage from '@/pages/attendTest';
import TestResultsPage from '@/pages/testResults/TestResultsPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes - Auth pages (redirect if authenticated) */}
      <Route element={<PublicRoute redirectIfAuthenticated={true} />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
      </Route>

      {/* Public Routes - No auth required */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Route>

      {/* Private Routes - Require authentication */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/attend-test/:attemptId" element={<AttendTestPage />} />
        <Route path="/test/:attemptId/results" element={<TestResultsPage />} />
      </Route>

      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;

