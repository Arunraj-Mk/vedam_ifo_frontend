import React from 'react';

export interface TopicBadgeProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const TopicBadge: React.FC<TopicBadgeProps> = ({
  icon,
  title,
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-[40px] px-2 py-2 flex items-center w-full gap-3 shadow-lg ${className}`}
    >
      <div className="w-10 h-10 bg-primary rounded-[50%] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <span className="text-black font-medium text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">{title}</span>
    </div>
  );
};

export default TopicBadge;

