import React, { useState } from 'react';
import BarChart from '@/components/BarChart';
import { BarChartData } from '@/components/BarChart';

interface PerformanceChartProps {
  data: BarChartData[];
  title?: string;
  onTimeRangeChange?: (range: string) => void;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({
  data,
  title = 'Performance by Subject',
  onTimeRangeChange,
}) => {
  const [selectedRange, setSelectedRange] = useState('Last 7 days');

  const timeRanges = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'All time'];

  const handleRangeChange = (range: string) => {
    setSelectedRange(range);
    onTimeRangeChange?.(range);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <div className="relative">
          <select
            value={selectedRange}
            onChange={(e) => handleRangeChange(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00B512] focus:border-transparent"
          >
            {timeRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <BarChart
        data={data}
        dataKey="value"
        color="#02947B"
        height={300}
        showGrid={true}
        showLegend={true}
        yAxisLabel="Performance Trends"
      />
    </div>
  );
};

export default PerformanceChart;


