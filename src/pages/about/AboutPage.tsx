import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components';
import AboutHero from './components/AboutHero';
import WhyChooseUs from './components/WhyChooseUs';
import StudentFocusedApproach from './components/StudentFocusedApproach'; 
import ReadyToImprove from '../home/components/ReadyToImprove';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <div className="pt-[80px] px-4 sm:px-5 lg:px-12">
        <AboutHero />
        <WhyChooseUs />
        <StudentFocusedApproach />  
        <ReadyToImprove showContactUs={true} />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

