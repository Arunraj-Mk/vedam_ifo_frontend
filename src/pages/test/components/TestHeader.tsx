import React from 'react';

interface TestHeaderProps {
  title?: string;
}

const TestHeader: React.FC<TestHeaderProps> = ({ title = 'Test Page' }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
    </header>
  );
};

export default TestHeader;

