import React from 'react';
import quotationIcon from '@/assets/icons/comma.png';

const StudentFocusedApproach: React.FC = () => {
  return (
    <section className="w-full py-12 lg:py-8 mb-[60px]" style={{ background: '#093541F2' }}>
      {/* Main Container: width 1442px, height 738px - Full width */}
      <div className="w-full max-w-[1442px] min-h-[738px] mx-auto rounded-[24px] p-8 lg:p-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-end">
            {/* Heading: width 667px, height 114px */}
            <h2 className="w-full max-w-[667px] min-h-[114px] text-3xl sm:text-4xl lg:text-[48px] font-normal leading-[120%] capitalize text-white font-integral rounded-lg py-6 flex items-center">
              Our Student-Focused Approach
            </h2>
            
            {/* Description */}
            <p className="text-base lg:text-lg text-white leading-relaxed font-poppins">
              SMMBOT, We Believe That Every Student Has The Potential To Excel If Given The Right Guidance And Practice. Our Platform Is Built Around The Core Needs Of Students—Clarity, Consistency, And Confidence. We Don't Just Provide Tests; We Provide A Pathway To Improvement. By Analyzing Mistakes And Understanding Weak Areas Through Our Detailed Reports, Students Can Turn Their Weaknesses Into Strengths Before The Actual Exam.
            </p>

            {/* Highlighted Quote Card: background #E2FF54 */}
            <div className="bg-[#E2FF54] rounded-2xl p-6 mt-4">
              <div className="flex items-start gap-4">
                <img
                  src={quotationIcon}
                  alt="Quotation marks"
                  className="w-12 h-12 flex-shrink-0 object-contain"
                />
                <p
                  className="text-[37px] font-medium leading-[140%] capitalize text-[#093541] flex-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Practice, Analyse, Improve This is the core approach of SMMBOT
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Two Cards Side by Side, aligned to bottom */}
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-6 lg:items-end">
            {/* Card 1: Our Mission - Dark Blue */}
            <div className="w-full lg:w-1/2 bg-[#00162C] rounded-2xl p-6 flex flex-col gap-3 min-h-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00B512] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white font-integral">Our Mission</h3>
              </div>
              <p className="text-sm text-white/90 leading-relaxed font-poppins flex-1">
                Our Mission Is To Help Students Build Confidence By Giving Them Regular Practice Through Quality Test Series Based On The Latest Syllabus And Exam Pattern. We Strive To Make Exam Preparation Accessible, Effective, And Stress-Free For Every Student.
              </p>
            </div>

            {/* Card 2: Our Vision - White */}
            <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6 flex flex-col gap-3 min-h-[300px]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00B512] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#093541] font-integral">Our Vision</h3>
              </div>
              <p className="text-sm text-[#093541] leading-relaxed font-poppins flex-1">
                Our Vision Is To Become A Trusted Online Practice Partner For Students Across India Preparing For School Exams And Competitive Exams. We Aim To Transform How Students Prepare And Excel In Their Academic Journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentFocusedApproach;

