import React from 'react';

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
  data, 
  columns = 4,
  className = '' 
}) => {
  const defaultData: PerformanceSummaryData[] = [
    {
      label: 'Total Tests Taken',
      value: '5',
    },
    {
      label: 'Average Score',
      value: '78%',
    },
    {
      label: 'Upcoming Tests',
      value: '2',
    },
    {
      label: 'Pending Review',
      value: '0',
    },
  ];

  const cardsData = data || defaultData;

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

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

