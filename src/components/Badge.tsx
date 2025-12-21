import React from 'react';

export interface BadgeProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'hero';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  icon,
  children,
  variant = 'default',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-[#EAECF0] text-black border-white/20 border-2 px-4 py-2',
    primary: 'bg-primary text-white border-primary/20 border-2 px-4 py-2',
    secondary: 'bg-gray-100 text-gray-800 border-gray-300 border-2 px-4 py-2',
    hero: 'bg-white/10 backdrop-blur-sm text-white border border-white/20 px-3 py-1.5 md:px-4 md:py-2',
  };

  const defaultIcon = (
    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
    </svg>
  );

  const heroIcon = (
    <svg className="w-3 h-3 md:w-4 md:h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
    </svg>
  );

  const iconToShow = icon !== undefined ? icon : variant === 'hero' ? heroIcon : defaultIcon;
  const textSize = variant === 'hero' ? 'text-xs md:text-sm' : 'text-sm';

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full ${variantStyles[variant]} ${className}`}
    >
      {iconToShow}
      <span className={`${textSize} font-medium`}>{children}</span>
    </div>
  );
};

export default Badge;

