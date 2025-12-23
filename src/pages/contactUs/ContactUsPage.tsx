import React from 'react';
import LoginNavbar from '@/pages/login/components/LoginNavbar';
import { Footer } from '@/components';
import ContactHero from './components/ContactHero';
import CommonQuestions from './components/CommonQuestions';
import ReadyToImprove from '@/pages/home/components/ReadyToImprove';
import GetStarted from '../home/components/GetStarted';

const ContactUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-[42px] px-4 sm:px-5 lg:px-12">
      <LoginNavbar />
      <div> 
      <ContactHero />
      </div>
      <GetStarted />
      <CommonQuestions />
      <ReadyToImprove showContactUs={true} />
      <Footer />
    </div>
  );
};

export default ContactUsPage;

