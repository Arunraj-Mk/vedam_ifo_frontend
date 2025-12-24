import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeSection from './components/WelcomeSection';
import PerformanceSummaryCards, { PerformanceSummaryData } from '@/pages/analytics/components/PerformanceSummaryCards';
import TestHistoryTable, { TestHistoryItem } from './components/TestHistoryTable';
import PerformanceChart from './components/PerformanceChart';
import { BarChartData } from '@/components/BarChart';
import { useDashboardData, usePerformanceBySubject } from '@/hooks/useStudents';
import toast from 'react-hot-toast';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '3m' | 'all'>('30d');
  
  // Map API time range to display format
  const displayTimeRange = useMemo(() => {
    const timeRangeMap: Record<'7d' | '30d' | '3m' | 'all', string> = {
      '7d': 'Last 7 days',
      '30d': 'Last 30 days',
      '3m': 'Last 3 months',
      'all': 'All time',
    };
    return timeRangeMap[timeRange];
  }, [timeRange]);

  // Fetch dashboard data
  const { data: dashboardData, isLoading, error } = useDashboardData({
    timeRange,
    recentTestsLimit: 5,
  });

  // Fetch performance by subject when time range changes
  const { data: performanceData } = usePerformanceBySubject(timeRange);

  // Map dashboard data to KPI cards
  const kpiData: PerformanceSummaryData[] = useMemo(() => {
    if (!dashboardData?.data) return [];

    const { kpis } = dashboardData.data;
    
    return [
      {
        label: kpis.testsCompleted.label,
        value: kpis.testsCompleted.value.toString(),
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        label: kpis.averageScore.label,
        value: `${kpis.averageScore.value}${kpis.averageScore.unit}`,
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        label: kpis.bestSubject.label,
        value: kpis.bestSubject.value,
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ),
      },
    ];
  }, [dashboardData]);

  // Map recent tests to TestHistoryItem format
  const testHistory: TestHistoryItem[] = useMemo(() => {
    if (!dashboardData?.data?.recentTests) return [];

    return dashboardData.data.recentTests.map((test) => ({
      subject: test.subject,
      date: new Date(test.date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      score: Math.round(test.percentage),
      status: test.status === 'PASSED' ? 'Passed' : 'Failed',
    }));
  }, [dashboardData]);

  // Map performance by subject to BarChartData format
  const performanceChartData: BarChartData[] = useMemo(() => {
    const data = performanceData?.data?.performanceBySubject || dashboardData?.data?.performanceBySubject || [];
    
    return data.map((item) => ({
      name: item.subject,
      value: Math.round(item.averageScore),
    }));
  }, [performanceData, dashboardData]);

  // Map badges for WelcomeSection
  const badges = useMemo(() => {
    if (!dashboardData?.data?.badges) return [];

    return dashboardData.data.badges.map((badge) => {
      let variant: 'default' | 'success' | 'info' = 'default';
      let icon: React.ReactNode = undefined;

      if (badge.type === 'TOP_PERFORMER') {
        variant = 'info';
        icon = (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (badge.type === 'PAYMENT_COMPLETED') {
        variant = 'success';
      }

      return {
        label: badge.label,
        variant,
        icon,
      };
    });
  }, [dashboardData]);

  const handleViewTestHistory = () => {
    navigate('/analytics');
  };

  const handleStartNewTest = () => {
    navigate('/test');
  };

  const handleViewMore = () => {
    navigate('/profile');
  };

  const handleTimeRangeChange = (range: string) => {
    // Map frontend time range to API time range
    const timeRangeMap: Record<string, '7d' | '30d' | '3m' | 'all'> = {
      'Last 7 days': '7d',
      'Last 30 days': '30d',
      'Last 3 months': '3m',
      'All time': 'all',
    };

    const apiTimeRange = timeRangeMap[range] || '30d';
    setTimeRange(apiTimeRange);
  };

  // Handle errors
  if (error) {
    toast.error('Failed to load dashboard data');
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="p-2">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-gray-500">Loading dashboard...</div>
        </div>
      </div>
    );
  }

  // Show empty state if no data
  if (!dashboardData?.data) {
    return (
      <div className="p-2">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-gray-500">No dashboard data available</div>
        </div>
      </div>
    );
  }

  const { student } = dashboardData.data;

  return (
    <div className="p-2">
      <WelcomeSection
        studentName={student.name}
        studentId={student.studentCode}
        badges={badges}
        onViewTestHistory={handleViewTestHistory}
        onStartNewTest={handleStartNewTest}
      />

      <PerformanceSummaryCards data={kpiData} columns={3} />

      <TestHistoryTable tests={testHistory} onViewMore={handleViewMore} />

      <PerformanceChart
        data={performanceChartData}
        title="Performance by Subject"
        selectedTimeRange={displayTimeRange}
        onTimeRangeChange={handleTimeRangeChange}
      />
    </div>
  );
};

export default DashboardPage;

