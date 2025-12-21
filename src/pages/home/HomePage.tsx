import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeHero from './components/HomeHero';
import TestSeriesSection from './components/TestSeriesSection';
import GetStarted from './components/GetStarted';
import EverythingYouNeed from './components/EverythingYouNeed';
import WhyPractice from './components/WhyPractice';
import TopicsCovered from './components/TopicsCovered';
import ExamPattern from './components/ExamPattern';
import ReadyToImprove from './components/ReadyToImprove';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HomeHero />
      <TestSeriesSection />
      <GetStarted />
      <EverythingYouNeed />
      <WhyPractice />
      <TopicsCovered />
      <ExamPattern />
      <ReadyToImprove />
      <Footer />
    </div>
  );
};

export default HomePage;

