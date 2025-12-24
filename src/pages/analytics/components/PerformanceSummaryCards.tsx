import React from 'react';
import { useMyPerformanceSummary } from '@/hooks/useStudents';

export interface PerformanceSummaryData {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

interface PerformanceSummaryCardsProps {
  data?: PerformanceSummaryData[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const PerformanceSummaryCards: React.FC<PerformanceSummaryCardsProps> = ({
  data: propData,
  columns = 4,
  className = '',
}) => {
  const { data: performanceData, isLoading } = useMyPerformanceSummary();

  // Generate data from API or use provided data
  const cardsData: PerformanceSummaryData[] = propData || [
    {
      label: 'Total Tests Taken',
      value: performanceData?.data.totalAttempts || 0,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: 'Average Score',
      value: performanceData?.data.averagePercentage
        ? `${performanceData.data.averagePercentage.toFixed(1)}%`
        : '0%',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
    {
      label: 'Completed Tests',
      value: performanceData?.data.completedAttempts || 0,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: 'In Progress',
      value: performanceData?.data.inProgressAttempts || 0,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  if (isLoading) {
    return (
      <div className={`grid ${gridCols[columns]} gap-4 mb-8 ${className}`}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white p-6 border border-[#E1E8EF] animate-pulse"
          >
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-4 mb-8 ${className}`}>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 border border-[#E1E8EF] hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-[#495057] mb-2" style={{ fontFamily: 'General Sans, sans-serif' }}>
                {card.label}
              </p>
              <p className="text-2xl font-semibold text-[#010715]" style={{ fontFamily: 'General Sans, sans-serif' }}>
                {card.value}
              </p>
            </div>
            {card.icon && (
              <div className="w-12 h-12 bg-[#4B9C91]/10 rounded-full flex items-center justify-center text-[#4B9C91] flex-shrink-0 ml-4">
                {card.icon}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceSummaryCards;

