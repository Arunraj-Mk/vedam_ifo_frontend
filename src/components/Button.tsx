import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
    const baseStyles =
  'font-semibold rounded-[13px] transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed';

    
  const variantStyles = {
    primary: 'bg-[#0B7077] text-white hover:bg-[#095E64] focus:ring-primary-500 transition-colors',
    secondary: 'bg-[#FFFFFF] text-[#000000] focus:ring-gray-500 transition-colors',
    tertiary: 'bg-transparent text-white border border-white focus:ring-white transition-colors',
    quaternary: 'bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-500',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-7 py-2.5 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;

