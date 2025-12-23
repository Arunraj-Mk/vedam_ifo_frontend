import React from 'react';

export interface TestHistoryItem {
  subject: string;
  date: string;
  score: number;
  status: 'Passed' | 'Failed' | 'Pending';
}

interface TestHistoryTableProps {
  tests: TestHistoryItem[];
  onViewMore?: () => void;
}

const TestHistoryTable: React.FC<TestHistoryTableProps> = ({
  tests,
  onViewMore,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Passed':
        return 'text-green-600 bg-green-50';
      case 'Failed':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-yellow-600 bg-yellow-50';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-6 border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Recent Tests History</h2>
        {onViewMore && (
          <button
            onClick={onViewMore}
            className="text-[#00B512] hover:text-[#009a0f] font-medium flex items-center gap-1 transition-colors"
          >
            View More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SUBJECT</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">DATE</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SCORE</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-gray-900 font-medium">{test.subject}</td>
                <td className="py-3 px-4 text-gray-600">{test.date}</td>
                <td className="py-3 px-4">
                  <span className="text-green-600 font-semibold">{test.score}%</span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      test.status
                    )}`}
                  >
                    {test.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestHistoryTable;

