import React from 'react';
import PerformanceSummaryCards from './components/PerformanceSummaryCards';
import RecentTestsHistory from './components/RecentTestsHistory';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 pt-[34px] pb-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between max-w-[1343px]">
            {/* Left: Title and Subtitle */}
            <div className="w-[320px]">
              <h1 
                className="text-[24px] font-semibold leading-[100%] text-[#010715] mb-[9px]" 
                style={{ fontFamily: 'General Sans, sans-serif' }}
              >
                All Test Attempts
              </h1>
              <p 
                className="text-[14px] font-medium leading-[21px] text-[#808080]" 
                style={{ fontFamily: 'General Sans, sans-serif' }}
              >
                View your complete test history and performance
              </p>
            </div>

            {/* Right: Search Bar */}
            <div className="w-[242px] h-[42.66px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-full pl-10 pr-4 py-2 border border-[#E1E8EF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B9C91] focus:border-transparent bg-white text-gray-900"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Summary Cards */}
        <div className="max-w-[1343px]">
          <PerformanceSummaryCards />
        </div>

        {/* Recent Tests History Section */}
        <div className="max-w-[1343px]">
          <RecentTestsHistory />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;

