import React from 'react';
import aboutGirlStudent from '@/assets/images/about_girl_student.png?url';

const RegistrationImage: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1 w-full h-full overflow-hidden">
      <div className="w-full max-w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src={aboutGirlStudent}
          alt="Student studying"
          className="w-full h-full max-w-full max-h-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default RegistrationImage;





