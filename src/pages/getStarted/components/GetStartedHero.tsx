import React from 'react';
import WelcomeBadge from '@/pages/login/components/WelcomeBadge';
import GetStartedCard from './GetStartedCard';
import doubleRightIcon from '@/assets/icons/doubleRight.png?url';

const GetStartedHero: React.FC = () => {
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
        <div className="relative z-10 w-full max-w-[1279.67px] mx-auto px-4 sm:px-6 lg:px-[40.5px] py-6 sm:py-8 lg:py-16">
          {/* Two-column layout: desktop, stacked: mobile */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Left Content Section */}
            <div className="w-full lg:max-w-[626px] flex flex-col gap-[18px]">
              {/* Top Badge */}
              <div className="w-fit">
                <WelcomeBadge text="Join Our Community" />
              </div>

              {/* Main Heading */}
              <h1 className="w-full max-w-[441px] text-3xl sm:text-4xl lg:text-[48px] font-normal leading-[120%] capitalize text-white font-integral">
                Start Your
                <br />
                Journey
              </h1>

              {/* Description */}
              <p className="w-full max-w-[549px] text-base sm:text-lg lg:text-[18px] font-medium leading-[168%] text-white font-poppins">
                Join thousands of students improving their exam performance with our test series
              </p>

              {/* Feature Column Section */}
              <div className="w-full max-w-[626px] flex flex-col gap-4 mt-2">
                {[
                  'Access all tests',
                  'Track progress',
                  'Get rankings',
                ].map((label) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center flex-shrink-0">
                      <img
                        src={doubleRightIcon}
                        alt="Double right arrow"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span
                      className="text-base leading-6 text-white"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Get Started Card */}
            <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-end">
              <GetStartedCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedHero;


