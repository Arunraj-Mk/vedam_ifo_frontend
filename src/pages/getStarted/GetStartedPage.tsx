import React from 'react';
import Navbar from '@/components/Navbar';
import GetStartedHero from './components/GetStartedHero';
import { Footer } from '@/components';

const GetStartedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <div className="pt-[80px] px-4 sm:px-5 lg:px-12">
        <GetStartedHero />
      </div>
      <Footer />
    </div>
  );
};

export default GetStartedPage;


