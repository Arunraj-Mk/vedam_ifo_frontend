import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DashboardHeaderProps {
  userName?: string;
  userAvatar?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userName = 'User',
  userAvatar,
}) => {
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate('/profile');
  };

  return (
    <div className="fixed top-0 left-16 right-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-30">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B512] focus:border-transparent"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Right Section - Profile */}
      <div className="flex items-center gap-4">
        {/* Profile Picture */}
        <button
          onClick={handleAvatarClick}
          className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-200 hover:border-[#02947B] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#02947B] focus:ring-offset-2"
          aria-label="Go to profile"
        >
          {userAvatar ? (
            <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#00B512] to-[#009a0f] text-white font-semibold">
              {userName.charAt(0).toUpperCase()}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;

