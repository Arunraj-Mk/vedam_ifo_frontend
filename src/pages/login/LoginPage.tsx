import React from 'react';
import Navbar from '@/components/Navbar';
import LoginHero from './components/LoginHero';
import { Footer } from '@/components';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <div className="pt-[80px] px-4 sm:px-5 lg:px-12">
        <LoginHero />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;

