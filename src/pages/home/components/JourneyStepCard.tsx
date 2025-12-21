import React from 'react';

export interface JourneyStepCardProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
}

const JourneyStepCard: React.FC<JourneyStepCardProps> = ({
  icon,
  title,
  description,
  isActive = false,
}) => {
  return (
    <div
      className={`rounded-lg p-4 md:p-6 border-2 transition-all ${
        isActive
          ? 'border'
          : ' border-gray-200'
      }`}
      style={isActive ? { backgroundColor: '#F1FFD2' } : {}}
    >
      <div className="flex items-center gap-3 md:gap-4 ">
        <div
          className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${
            isActive ? 'bg-white' : 'bg-white/10'
          }`}
        >
          {icon}
        </div>
        <h3
          className={`text-lg md:text-xl font-bold ${
            isActive ? 'text-black' : 'text'
          }`}
        >
          {title}
        </h3>
      </div>
      <p
        className={`text-sm md:text-base ml-0 md:ml-14 ${
          isActive ? 'text-gray-700' : 'text-[#6B6969]'
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default JourneyStepCard;

