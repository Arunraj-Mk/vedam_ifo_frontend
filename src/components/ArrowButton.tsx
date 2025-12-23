import React from 'react';

interface ArrowButtonProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
  arrowBgColor?: string;
  arrowColor?: string;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ 
  text = "Get Started", 
  bgColor = "#00C853", 
  textColor = "#FFFFFF",
  arrowBgColor = "#F5F5DC",
  arrowColor = "#333333",
  onClick,
  className = "",
  size = "lg",
  type = "button"
}) => {
  
  const sizeClasses: Record<'sm' | 'md' | 'lg', { button: string; arrow: string; icon: number }> = {
    sm: {
      button: "text-sm px-6 py-2",
      arrow: "w-10 h-10",
      icon: 20
    },
    md: {
      button: "text-base px-8 py-3",
      arrow: "w-12 h-12",
      icon: 24
    },
    lg: {
      button: "text-xl px-10 py-4",
      arrow: "w-16 h-16",
      icon: 28
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center font-normal transition-transform hover:scale-105 active:scale-95 ${currentSize.button} ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: '9999px',
        paddingRight: `calc(${currentSize.arrow.split(' ')[0].replace('w-', '')} * 0.25rem + 1rem)`,
        border: 'none',
        cursor: 'pointer'
      }}
    >
      <span className="relative z-10 text-center">{text}</span>
      
      <div 
        className={`absolute right-[-40px] ${currentSize.arrow} rounded-full flex items-center justify-center transition-transform group-hover:rotate-45`}
        style={{
          backgroundColor: arrowBgColor,
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke={arrowColor}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
    </button>
  );
};

export default ArrowButton;