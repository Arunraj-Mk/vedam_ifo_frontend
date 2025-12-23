import React, { useState } from 'react';
import TestResultCard, { TestResultData } from './TestResultCard';

interface RecentTestsHistoryProps {
  tests?: TestResultData[];
}

const RecentTestsHistory: React.FC<RecentTestsHistoryProps> = ({ tests }) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>('Last 7 days');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const defaultTests: TestResultData[] = [
    {
      id: '1',
      testNumber: 1,
      subject: 'Mathematics',
      status: 'Pass',
      score: 85,
      date: '10 Dec 2025',
      duration: '90 minutes',
      totalQuestions: 60,
      answered: 58,
      skipped: 2,
    },
    {
      id: '2',
      testNumber: 2,
      subject: 'Science',
      status: 'Pass',
      score: 75,
      date: '10 Dec 2025',
      duration: '90 minutes',
      totalQuestions: 60,
      answered: 58,
      skipped: 2,
    },
    {
      id: '3',
      testNumber: 3,
      subject: 'English',
      status: 'Pass',
      score: 81,
      date: '10 Dec 2025',
      duration: '90 minutes',
      totalQuestions: 60,
      answered: 58,
      skipped: 2,
    },
    {
      id: '4',
      testNumber: 1,
      subject: 'Mathematics',
      status: 'Pass',
      score: 85,
      date: '10 Dec 2025',
      duration: '90 minutes',
      totalQuestions: 60,
      answered: 58,
      skipped: 2,
    },
    {
      id: '5',
      testNumber: 2,
      subject: 'Science',
      status: 'Pass',
      score: 75,
      date: '10 Dec 2025',
      duration: '90 minutes',
      totalQuestions: 60,
      answered: 58,
      skipped: 2,
    },
    {
      id: '6',
      testNumber: 3,
      subject: 'English',
      status: 'Pass',
      score: 81,
      date: '10 Dec 2025',
      duration: '90 minutes',
      totalQuestions: 60,
      answered: 58,
      skipped: 2,
    },
  ];

  const testsData = tests || defaultTests;

  const timeRangeOptions = ['Last 7 days', '1 month', '24 hours'];

  const handleTimeRangeChange = (range: string) => {
    setSelectedTimeRange(range);
    setIsDropdownOpen(false);
    // TODO: Filter tests based on time range
  };

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testsData.map((test) => (
          <TestResultCard key={test.id} test={test} />
        ))}
      </div>
    </div>
  );
};

export default RecentTestsHistory;

