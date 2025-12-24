import React from 'react';
import WelcomeBadge from '@/pages/login/components/WelcomeBadge';
import aboutBoyStudent from '@/assets/images/about_boy_student.png?url';
import userFriendlyIcon from '@/assets/icons/userFriendly.png?url';
import comprehensiveIcon from '@/assets/icons/comprehensive.png?url';
import studentDashboardIcon from '@/assets/icons/studentDashboard.png?url';
import accessibleAnywhereIcon from '@/assets/icons/accessibleAnywhere.png?url';
import expertDesignIcon from '@/assets/icons/ExpertDesign.png?url';
import instantAnalysisIcon from '@/assets/icons/instantAnalysis.png?url';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'User-Friendly Dashboard',
      description: 'We Provide The Tools You Need To Succeed In Your Academic Journey',
      icon: userFriendlyIcon,
    },
    {
      title: 'Comprehensive Syllabus',
      description: 'Topic-Wise And Full Syllabus Test Series Covering All Major Subjects',
      icon: comprehensiveIcon,
    },
    {
      title: 'Student Dashboard',
      description: 'Easy-To-Use Dashboard To Track Progress, History, And Upcoming Tests.',
      icon: studentDashboardIcon,
    },
    {
      title: 'Accessible Anywhere',
      description: 'Practice From The Comfort Of Your Home On Any Device At An Affordable Price.',
      icon: accessibleAnywhereIcon,
    },
    {
      title: 'Expert Designed',
      description: 'Tests Crafted By Experienced Teachers Following The Latest Board Patterns.',
      icon: expertDesignIcon,
    },
    {
      title: 'Instant Analysis',
      description: 'Get Detailed Performance Reports And Rankings Immediately After Submission.',
      icon: instantAnalysisIcon,
    },
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Container: width 1336px, height 548px, gap 120px */}
        <div className="w-full max-w-[1336px] min-h-[548px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-[120px]">
          {/* Left - Image Section: width 502px, height 548px */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <div className="w-full max-w-[502px] h-[548px] rounded-[20px] overflow-hidden bg-[#153F4B] flex items-center justify-center">
              <img
                src={aboutBoyStudent}
                alt="Student with Vedam Info"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right - Content Card: width 714px, height 444px, gap 34px */}
          <div className="w-full lg:w-auto lg:max-w-[714px] lg:max-h-[548px] lg:min-h-[444px] flex flex-col gap-[20px]">
            {/* Badge */}
            <div className="w-fit">
              <WelcomeBadge text="Why Choose Us" />
            </div>

            {/* Heading: width 667px, height 116px */}
            <h2 className="w-full max-w-[667px] min-h-[116px] text-3xl sm:text-4xl lg:text-[48px] font-normal leading-[120%] capitalize text-black font-semibold bg-white rounded-lg px-4 flex flex-col">
              <span className="mb-4">Everything You Need</span>
              <span>To Succeed</span>
            </h2>

            {/* Description: width 714px, height 169px, gap 4px */}
            <div className="w-full max-w-[714px] max-h-[169px] flex flex-col ">
              <p className="text-[18px] font-medium leading-[168%] text-[#6A7282] font-poppins capitalize rounded-[12px] py-3">
                We Provide The Tools You Need To Succeed In Your Academic Journey.
              </p>
            </div>

            {/* Feature Items Grid: 2 columns, gap 12px */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="w-full max-w-[233px] min-h-[60px] flex flex-col gap-3"
                >
                  <div className="flex items-start gap-3">
                    {/* Icon Container: width 25px, height 25px, border-radius 19.05px, padding 5.36px */}
                    <div className="w-[25px] h-[25px] rounded-[19.05px] bg-[#00B512] p-[5.36px] flex items-center justify-center flex-shrink-0">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Text Content: width 196px, gap 6px */}
                    <div className="w-full max-w-[196px] flex flex-col gap-1.5">
                      <h3 className="text-sm font-semibold text-gray-900 font-poppins">
                        {feature.title}
                      </h3>
                      <p className="text-xs font-normal text-gray-600 font-poppins leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

