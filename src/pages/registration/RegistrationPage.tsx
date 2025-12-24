import React from 'react';
import Navbar from '@/components/Navbar';
import RegistrationHero from './components/RegistrationHero';

const RegistrationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <div className="pt-[80px]">
        <RegistrationHero />
      </div>
    </div>
  );
};

export default RegistrationPage;





