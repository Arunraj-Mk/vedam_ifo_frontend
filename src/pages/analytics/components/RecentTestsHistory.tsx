import React, { useState, useMemo } from 'react';
import TestResultCard, { TestResultData } from './TestResultCard';
import { useMyTestAttempts } from '@/hooks/useStudents';

interface RecentTestsHistoryProps {
  tests?: TestResultData[];
}

const RecentTestsHistory: React.FC<RecentTestsHistoryProps> = ({ tests: propTests }) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get test attempts from API
  const { data: attemptsData, isLoading } = useMyTestAttempts({
    status: 'COMPLETED',
    limit: 6,
    sortBy: 'date',
    order: 'desc',
  });

  // Convert API attempts to TestResultData format
  const testsData = useMemo(() => {
    if (propTests) return propTests;

    if (!attemptsData?.data.attempts) return [];

    return attemptsData.data.attempts.map((attempt, index): TestResultData => ({
      id: attempt.attemptId,
      testNumber: index + 1,
      subject: attempt.testName,
      status: (attempt.percentage && attempt.percentage >= 50 ? 'Pass' : 'Fail') as 'Pass' | 'Fail' | 'Pending',
      score: attempt.percentage || 0,
      date: new Date(attempt.submittedAt || attempt.startedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      duration: `${Math.floor((attempt.totalQuestions * 1.5) / 60)} minutes`,
      totalQuestions: attempt.totalQuestions,
      answered: attempt.answeredCount || 0,
      skipped: attempt.totalQuestions - (attempt.answeredCount || 0),
      attemptId: attempt.attemptId,
    }));
  }, [attemptsData, propTests]);

  const timeRangeOptions = ['All', 'Last 7 days', '1 month', '24 hours'];

  const handleTimeRangeChange = (range: string) => {
    setSelectedTimeRange(range);
    setIsDropdownOpen(false);
    // TODO: Implement date filtering based on range
  };


  if (isLoading) {
    return (
      <div>
        <h2
          className="text-[20px] font-semibold leading-[100%] text-[#010715] mb-6"
          style={{ fontFamily: 'General Sans, sans-serif' }}
        >
          Recent Tests History
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg p-4 border animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 w-full">
        <h2
          className="text-[20px] font-semibold leading-[100%] text-[#010715]"
          style={{ fontFamily: 'General Sans, sans-serif' }}
        >
          Recent Tests History
        </h2>

        {/* Dropdown Button */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-[7.09px] px-3 py-[6px] border border-[#E1E8EF] rounded-lg bg-white text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
            style={{
              width: '129.09px',
              height: '34px',
              borderWidth: '1.18px',
            }}
          >
            <span className="flex-1 text-left">{selectedTimeRange}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-full bg-white border border-[#E1E8EF] rounded-lg shadow-lg z-10">
              {timeRangeOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleTimeRangeChange(option)}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                    selectedTimeRange === option ? 'bg-[#4B9C91]/10 text-[#4B9C91]' : 'text-gray-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Test Cards Grid */}
      {testsData.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No test attempts yet. Start your first test!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testsData.map((test) => (
            <TestResultCard key={test.id} test={test} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentTestsHistory;

