import React from 'react';
import Button from '@/components/Button';

export interface SubjectCardProps {
  id: string;
  subjectName: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  numberOfQuestions: number;
  testTiming: string; // e.g., "90 Mins"
  onStartTest?: (subjectId: string) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  id,
  subjectName,
  description,
  icon,
  image,
  numberOfQuestions,
  testTiming,
  onStartTest,
}) => {
  const handleStartTest = () => {
    if (onStartTest) {
      onStartTest(id);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow w-full">
      <div 
        className="relative h-32 bg-gray-50 overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
        }}
      >
        {/* Overlay to make background faint */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-4 mb-4">
          {/* Left side - Subject info */}
          <div className="flex-1">
            {/* Subject Header with Icon */}
            <div className="flex items-center gap-2 mb-2">
              <div className="text-gray-500 flex-shrink-0">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{subjectName}</h3>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600">{description}</p>
          </div>

          {/* Right side - Test Statistics */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">{numberOfQuestions}</p>
              <p className="text-xs text-gray-600">No. of Questions</p>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">{testTiming}</p>
              <p className="text-xs text-gray-600">Test Timing</p>
            </div>
          </div>
        </div>

        {/* Start Test Button */}
        <Button
          variant="primary"
          size="md"
          onClick={handleStartTest}
          className="bg-[#02947B] hover:bg-[#027a6a] text-white rounded-lg"
        >
          Start Test →
        </Button>
      </div>
    </div>
  );
};

export default SubjectCard;

