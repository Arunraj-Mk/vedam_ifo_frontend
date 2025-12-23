import { RouteObject } from 'react-router-dom';
import HomePage from '@/pages/home/HomePage';
import LoginPage from '@/pages/login/LoginPage';
import GetStartedPage from '@/pages/getStarted/GetStartedPage';
import RegistrationPage from '@/pages/registration/RegistrationPage';
import AboutPage from '@/pages/about/AboutPage';
import ContactUsPage from '@/pages/contactUs/ContactUsPage';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/get-started',
    element: <GetStartedPage />,
  },
  {
    path: '/register',
    element: <RegistrationPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactUsPage />,
  },
];


