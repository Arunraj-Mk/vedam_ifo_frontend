import React from 'react';
import { Link } from 'react-router-dom';
import ArrowButton from '@/components/ArrowButton';
import aboutGirlStudent from '@/assets/images/about_girl_student.png?url';

const AboutCTA: React.FC = () => {
  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-[1336px] mx-auto rounded-[20px] bg-[#00162C] p-8 lg:p-12 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-integral capitalize">
                Ready To Start Your Practice?
              </h2>
              <p className="text-base md:text-lg mb-8 text-white/90 max-w-lg mx-auto lg:mx-0 leading-relaxed font-poppins">
                Join thousands of students improving their scores today with SMMBOT.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/get-started">
                  <ArrowButton
                    text="Get start"
                    bgColor="#00B512"
                    textColor="#F9FAFB"
                    arrowBgColor="#FBF9F1"
                    arrowColor="#000000"
                    size="md"
                  />
                </Link>
                <Link to="/contact">
                  <button className="px-6 py-3 rounded-[44px] border-[0.8px] border-[#00B512] bg-white text-[#00B512] font-semibold text-base leading-[150%] font-poppins hover:bg-[#00B512] hover:text-white transition-all">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-[502px] h-[548px] rounded-[20px] overflow-hidden bg-[#153F4B] flex items-center justify-center">
                <img
                  src={aboutGirlStudent}
                  alt="Student with SMMBOT"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;

