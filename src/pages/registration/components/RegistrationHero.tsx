import React from 'react';
import RegistrationCard from './RegistrationCard';
import RegistrationImage from './RegistrationImage';

const RegistrationHero: React.FC = () => {
  return (
  

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-12 xl:gap-16 border border-4">
            {/* Left Section - Registration Form */}
            <div className="w-full lg:w-1/2 lg:flex-shrink-0 flex justify-center lg:justify-start  border">
              <RegistrationCard />
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2 lg:flex-shrink-0 flex justify-center lg:justify-end border">
              <RegistrationImage />
            </div>
          </div>
      
  
  );
};

export default RegistrationHero;

