import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import capIcon from '@/assets/svgs/sidebar/cap.svg?url';
import homeIcon from '@/assets/svgs/sidebar/Home-simple-door.svg?url';
import pageIcon from '@/assets/svgs/sidebar/Page.svg?url';
import reportsIcon from '@/assets/svgs/sidebar/Reports.svg?url';
import helpIcon from '@/assets/svgs/sidebar/Help-circle.svg?url';
import logoutIcon from '@/assets/svgs/sidebar/Log-out.svg?url';

interface SidebarItem {
  icon: string;
  label: string;
  path: string;
  isActive?: boolean;
}

interface SidebarProps {
  items?: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const defaultItems: SidebarItem[] = [
    {
      icon: capIcon,
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      icon: homeIcon,
      label: 'Home',
      path: '/',
    },
    {
      icon: pageIcon,
      label: 'Tests',
      path: '/tests',
    },
    {
      icon: reportsIcon,
      label: 'Analytics',
      path: '/analytics',
    },
    {
      icon: helpIcon,
      label: 'Help',
      path: '/help',
    },
    {
      icon: logoutIcon,
      label: 'Logout',
      path: '/logout',
    },
  ];

  const sidebarItems = items || defaultItems;
  
  // Split items into main navigation and bottom items
  const mainItems = sidebarItems.slice(0, -2);
  const bottomItems = sidebarItems.slice(-2);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const renderIconButton = (item: SidebarItem, index: number) => (
    <button
      key={index}
      onClick={() => navigate(item.path)}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200
        ${
          isActive(item.path)
            ? 'bg-[#4B9C91] shadow-lg'
            : 'bg-gray-100 hover:bg-gray-200'
        }
      `}
      title={item.label}
    >
      <img
        src={item.icon}
        alt={item.label}
        className={`w-6 h-6 ${
          isActive(item.path) ? 'brightness-0 invert' : ''
        }`}
      />
    </button>
  );

  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-4 h-screen fixed left-0 top-0 z-40">
      {/* Main navigation items */}
      <div className="flex flex-col items-center gap-4">
        {mainItems.map((item, index) => renderIconButton(item, index))}
      </div>
      
      {/* Bottom items - pushed to bottom with mt-auto */}
      <div className="flex flex-col items-center gap-4 mt-auto">
        {bottomItems.map((item, index) => renderIconButton(item, mainItems.length + index))}
      </div>
    </div>
  );
};

export default Sidebar;

