import React from 'react';
import WelcomeSection from './components/WelcomeSection';
import KPICards, { KPIData } from './components/KPICards';
import TestHistoryTable, { TestHistoryItem } from './components/TestHistoryTable';
import PerformanceChart from './components/PerformanceChart';
import { BarChartData } from '@/components/BarChart';

const DashboardPage: React.FC = () => {
  // Sample data - replace with actual API calls
  const kpiData: KPIData[] = [
    {
      label: 'Tests Completed',
      value: '5',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: 'Average Score',
      value: '78%',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: 'Best Subject',
      value: 'Kannada',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
  ];

  const testHistory: TestHistoryItem[] = [
    {
      subject: 'Mathematics',
      date: '10 Dec 2025',
      score: 85,
      status: 'Passed',
    },
    {
      subject: 'Science',
      date: '08 Dec 2025',
      score: 90,
      status: 'Passed',
    },
    {
      subject: 'English',
      date: '05 Dec 2025',
      score: 95,
      status: 'Passed',
    },
  ];

  const performanceData: BarChartData[] = [
    { name: 'Mathematics', value: 90 },
    { name: 'Science', value: 80 },
    { name: 'English', value: 70 },
    { name: 'Kannada', value: 50 },
    { name: 'Social Studies', value: 30 },
  ];

  const handleViewTestHistory = () => {
    // TODO: Navigate to test history page
    console.log('View test history');
  };

  const handleStartNewTest = () => {
    // TODO: Navigate to test selection page
    console.log('Start new test');
  };

  const handleViewMore = () => {
    // TODO: Navigate to full test history page
    console.log('View more tests');
  };

  const handleTimeRangeChange = (range: string) => {
    // TODO: Fetch data for selected time range
    console.log('Time range changed:', range);
  };

  return (
    <div className=" p-2">
      <WelcomeSection
        studentName="Rahul Sharma"
        studentId="STU2024001"
        badges={[
          {
            label: 'Top Performer',
            variant: 'info',
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ),
          },
          { label: '5 Tests Completed', variant: 'default' },
          { label: 'Payment Completed', variant: 'success' },
        ]}
        onViewTestHistory={handleViewTestHistory}
        onStartNewTest={handleStartNewTest}
      />

      <KPICards data={kpiData} />

      <TestHistoryTable tests={testHistory} onViewMore={handleViewMore} />

      <PerformanceChart
        data={performanceData}
        title="Performance by Subject"
        onTimeRangeChange={handleTimeRangeChange}
      />
    </div>
  );
};

export default DashboardPage;

