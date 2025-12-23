import React, { useState } from 'react';

interface WelcomeSectionProps {
  studentName?: string;
  studentId?: string;
  badges?: Array<{
    label: string;
    icon?: React.ReactNode;
    variant?: 'default' | 'success' | 'info';
  }>;
  onViewTestHistory?: () => void;
  onStartNewTest?: () => void;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  studentName = 'Rahul Sharma',
  studentId = 'STU2024001',
  badges = [
    { label: 'Top Performer', variant: 'info' },
    { label: '5 Tests Completed', variant: 'default' },
    { label: 'Payment Completed', variant: 'success' },
  ],
  onViewTestHistory,
  onStartNewTest,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(studentId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getBadgeStyles = (variant: string = 'default') => {
    switch (variant) {
      case 'success':
        return 'bg-[#E3FCEE] text-[#069745]';
      case 'info':
        return 'bg-[#1F4EB91A] text-[#1F4EB9] ';
      default:
        return 'bg-gray-50 text-[#6E757C] border border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      {/* Welcome Message and Action Buttons */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome, {studentName}! 👋
          </h1>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onViewTestHistory}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View Test History
          </button>
          <button
            onClick={onStartNewTest}
            className="px-4 py-2 bg-[#00B512] text-white rounded-lg hover:bg-[#009a0f] transition-colors flex items-center gap-2"
          >
            Start New Test
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Student ID */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-600">Student ID: {studentId}</span>
        <button
          onClick={copyToClipboard}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          title="Copy Student ID"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-3">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`px-3 py-1 rounded-full flex items-center gap-2 ${getBadgeStyles(badge.variant)}`}
          >
            {badge.icon && <span>{badge.icon}</span>}
            <span className="text-sm font-medium">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSection;

