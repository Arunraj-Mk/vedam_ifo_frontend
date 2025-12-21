import React from 'react';

export interface FeatureCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  iconBgColor?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  bgColor = 'bg-white',
  textColor = 'text-black',
  iconBgColor = 'bg-primary',
  className = '',
}) => {
  return (
    <div
      className={`rounded-lg p-6 ${bgColor} ${className}`}
    >
      {icon && (
        <div className={`${iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
          {icon}
        </div>
      )}
      <h3 className={`text-xl  ${textColor} mb-2`}>
        {title}
      </h3>
      {description && (
        <p className={`text-sm ${textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default FeatureCard;

