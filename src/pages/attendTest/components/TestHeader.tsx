import React from 'react';

const TestHeader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 sm:left-16 right-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between z-30">
      {/* Search Bar */}
      <div className="flex-1 max-w-md mr-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B9C91] focus:border-transparent"
          />
          <svg
            className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
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

      {/* Right Section - Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Profile Picture */}
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-200 hover:border-[#4B9C91] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4B9C91] focus:ring-offset-2"
          aria-label="User profile"
        >
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#4B9C91] to-[#3a7a70] text-white font-semibold text-sm sm:text-base">
            U
          </div>
        </button>
      </div>
    </div>
  );
};

export default TestHeader;

