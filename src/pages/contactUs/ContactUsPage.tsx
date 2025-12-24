import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components';
import ContactHero from './components/ContactHero';
import CommonQuestions from './components/CommonQuestions';
import ReadyToImprove from '@/pages/home/components/ReadyToImprove';
import GetStarted from '../home/components/GetStarted';

const ContactUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <div className="pt-[80px] px-4 sm:px-5 lg:px-12">
        <ContactHero />
        <GetStarted />
        <CommonQuestions />
        <ReadyToImprove showContactUs={true} />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;

