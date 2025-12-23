import React, { useState } from 'react';

interface ProfileHeroProps {
  studentName?: string;
  studentId?: string;
  badges?: Array<{
    label: string;
    icon?: React.ReactNode;
    variant?: 'default' | 'success' | 'info';
  }>;
}

const ProfileHero: React.FC<ProfileHeroProps> = ({
  studentName = 'Rahul Sharma',
  studentId = 'STU2024001',
  badges = [
    { label: 'Top Performer', variant: 'info' },
    { label: '5 Tests Completed', variant: 'default' },
    { label: 'Payment Completed', variant: 'success' },
  ],
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(studentId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-r from-[#02947B] to-[#07C5A0] rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-white">
            {studentName}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-white/90">Student ID: {studentId}</span>
            <button
              onClick={copyToClipboard}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              title="Copy Student ID"
            >
              {copied ? (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Right side - Badges and Buttons */}
        <div className="flex flex-col items-end gap-4">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 justify-end">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="px-3 py-1 rounded-full flex items-center gap-2 bg-white/20 backdrop-blur-sm"
              >
                {badge.icon && (
                  <span className="text-white">
                    {typeof badge.icon === 'object' && 'props' in badge.icon
                      ? React.cloneElement(badge.icon as React.ReactElement, { className: 'w-4 h-4' })
                      : badge.icon}
                  </span>
                )}
                <span className="text-sm font-medium text-white">{badge.label}</span>
              </div>
            ))}
          </div>

 
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;


