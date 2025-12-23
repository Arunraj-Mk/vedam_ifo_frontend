import React from 'react';
import LoginNavbar from '@/pages/login/components/LoginNavbar';
import { Footer } from '@/components';
import AboutHero from './components/AboutHero';
import WhyChooseUs from './components/WhyChooseUs';
import StudentFocusedApproach from './components/StudentFocusedApproach'; 
import ReadyToImprove from '../home/components/ReadyToImprove';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-[42px] px-4 sm:px-5 lg:px-12">
      <LoginNavbar />
      <AboutHero />
      <WhyChooseUs />
      <StudentFocusedApproach />  
      <ReadyToImprove showContactUs={true} />
      <Footer />
    </div>
  );
};

export default AboutPage;

