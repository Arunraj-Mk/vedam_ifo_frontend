import React from 'react';

export interface DashboardBadgeProps {
  label: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'info';
  className?: string;
}

const DashboardBadge: React.FC<DashboardBadgeProps> = ({
  label,
  icon,
  variant = 'default',
  className = '',
}) => {
  const getBadgeStyles = (variant: string = 'default') => {
    switch (variant) {
      case 'success':
        return 'bg-[#E3FCEE] text-[#069745]';
      case 'info':
        return 'bg-[#1F4EB91A] text-[#1F4EB9]';
      default:
        return 'bg-gray-50 text-[#6E757C] border border-gray-200';
    }
  };

  return (
    <div
      className={`px-3 py-1 rounded-full flex items-center gap-2 ${getBadgeStyles(variant)} ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default DashboardBadge;


