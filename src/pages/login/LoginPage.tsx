import React from 'react';
import LoginNavbar from './components/LoginNavbar';
import LoginHero from './components/LoginHero';
import { Footer } from '@/components';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-[42px] px-4 sm:px-5 lg:px-12">
      <LoginNavbar />
      <LoginHero />
      <Footer />
    </div>
  );
};

export default LoginPage;

