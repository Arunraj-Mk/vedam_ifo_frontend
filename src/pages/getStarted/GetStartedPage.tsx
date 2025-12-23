import React from 'react';
import LoginNavbar from '@/pages/login/components/LoginNavbar';
import GetStartedHero from './components/GetStartedHero';
import { Footer } from '@/components';

const GetStartedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-[42px] px-4 sm:px-5 lg:px-12">
      <LoginNavbar />
      <GetStartedHero />
      <Footer />
    </div>
  );
};

export default GetStartedPage;


