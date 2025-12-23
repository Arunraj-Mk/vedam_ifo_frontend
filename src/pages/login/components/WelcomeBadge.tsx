import React from 'react';
import fireIcon from '@/assets/icons/fire.png?url';

interface WelcomeBadgeProps {
  text?: string;
}

const WelcomeBadge: React.FC<WelcomeBadgeProps> = ({ text = 'Welcome Back' }) => {
  return (
    <div className="inline-flex items-center gap-1 h-[33px] pl-3 pr-2 py-1.5 rounded-full bg-[#F9FAFB] border border-[#EAECF0]">
      <img
        src={fireIcon}
        alt="Fire icon"
        className="w-3.5 h-3.5 flex-shrink-0 object-contain"
      />
      <span className="text-sm font-medium leading-[150%] capitalize text-[#031B1D] font-poppins whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};

export default WelcomeBadge;

