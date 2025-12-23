import React, { useState } from 'react';
import WelcomeBadge from '@/pages/login/components/WelcomeBadge';
import aboutGirlStudent from '@/assets/images/about_girl_student.png?url';

const HowCanWeHelp: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>('Test Series & Syllabus');

  const categories = [
    {
      title: 'Test Series & Syllabus',
      description: 'Questions about available tests, syllabus coverage, and exam patterns.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Registration & Payment',
      description: 'Help with account creation, payment methods, and refund policies.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Technical Issues',
      description: 'Assistance with test interface, timer Issues, or submission problems.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.198-.948 2.286-1.56.38-1.56 2.6 0 2.98a1.532 1.532 0 01.948 2.286c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.286.948c.38 1.56 2.6 1.56 2.98 0a1.533 1.533 0 012.286-.948c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.948-2.286c1.56-.38 1.56-2.6 0-2.98a1.532 1.532 0 01-.948-2.286c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.286-.948zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Feedback & Suggestions',
      description: 'Share your experience and help us improve our platform.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[48px] items-center">
            {/* Left Content - Circular Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="w-full max-w-[400px] h-[400px] rounded-full border-2 border-dashed border-[#E5E7EB] overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src={aboutGirlStudent}
                  alt="Support representative"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              {/* Badge */}
              <div className="w-fit">
                <WelcomeBadge text="Browse Topics To Find The Help You Need" />
              </div>

              {/* Heading */}
              <h2 className="w-full text-3xl sm:text-4xl lg:text-[48px] font-normal leading-[120%] capitalize text-black font-integral">
                How Can We Help You?
              </h2>

              {/* Help Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                {categories.map((category) => (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => setActiveCategory(category.title)}
                    className={`
                      p-6 rounded-[12px] border border-[#E5E7EB] bg-white
                      flex flex-col gap-3 text-left transition-all
                      hover:bg-[#F0FDF4]
                      ${activeCategory === category.title ? 'border-[#00B512] bg-[#F0FDF4]' : ''}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#00B512] flex items-center justify-center flex-shrink-0">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-black font-poppins">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-sm font-normal text-black font-poppins leading-relaxed">
                      {category.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCanWeHelp;

