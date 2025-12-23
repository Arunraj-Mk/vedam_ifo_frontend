import React from 'react';
import LoginCard from './LoginCard';
import WelcomeBadge from './WelcomeBadge';

const LoginHero: React.FC = () => {
  return (
    <section className="w-full mt-8 sm:mt-12 lg:mt-16 mb-12 relative">
      {/* Outer Container */}
      <div className="w-full max-w-[1361px] mx-auto rounded-[20px] bg-[#00162C] relative overflow-hidden">
        {/* Decorative Ellipse - Top Right */}
        <div
          className="hidden lg:block absolute w-[522px] h-[522px] rounded-full bg-[#209181] opacity-20 blur-[400px] -right-[200px] -top-[100px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Decorative Ellipse - Bottom Center (behind card) */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute w-[900px] h-[900px] rounded-full pointer-events-none -z-10"
          style={{
            left: '50%',
            bottom: '-260px',
            transform: 'translateX(-50%)',
            background:
              'radial-gradient(circle at 50% 80%, rgba(32,145,129,0.8) 0%, rgba(32,145,129,0.45) 35%, rgba(32,145,129,0.15) 55%, transparent 70%)',
            filter: 'blur(80px)',
            zIndex: 1,
          }}
        />



        {/* Inner Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1279.67px] mx-auto px-4 sm:px-6 lg:px-[40.5px] py-8 sm:py-12 lg:py-[125px]">
          {/* Two-column layout: desktop, stacked: mobile */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Left Content Section - Gap between elements: 26px */}
            <div className="w-full lg:max-w-[667px] flex flex-col gap-[26px]">
              {/* Welcome Badge */}
              <div className="w-fit">
              <WelcomeBadge  text="Welcome Back" />
              </div>
              {/* Main Heading */}
              <h1 className="w-full max-w-[441px] text-3xl sm:text-4xl lg:text-[48px] font-normal leading-[120%] capitalize text-white font-integral">
                Good to see you back
              </h1>

              {/* Subtext */}
              <p className="w-full max-w-[549px] text-base sm:text-lg lg:text-[18px] font-medium leading-[168%] capitalize text-white font-poppins">
                Log in to manage your examination series and monitor development
              </p>
            </div>

            {/* Right Section - Login Card */}
            <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-end">
              <LoginCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
