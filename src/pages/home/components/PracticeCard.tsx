import React from 'react';

export interface PracticeCardProps {
  icon: React.ReactNode;
  iconBgColor?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonVariant?: 'default' | 'primary';
  className?: string;
}

const PracticeCard: React.FC<PracticeCardProps> = ({
  icon,
  iconBgColor = 'bg-blue-100',
  title,
  description,
  buttonText = 'Explore courses',
  buttonVariant = 'default',
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg p-6 flex flex-col shadow-[4px_4px_8px_rgba(0,0,0,0.1)] ${className}`}>
        <div className="flex items-center justify-center">
        <div className={`${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
        </div>
     
      
      <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 text-center">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm md:text-base mb-6 flex-1 text-center">
        {description}
      </p>
      
      <button
        className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
          buttonVariant === 'primary'
            ? 'bg-primary text-white hover:bg-primary-600'
            : 'bg-white border border-gray-300 text-primary hover:bg-gray-50'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PracticeCard;

