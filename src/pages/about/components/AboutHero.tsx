import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeBadge from '@/pages/login/components/WelcomeBadge';
import ArrowButton from '@/components/ArrowButton';
import aboutGirlStudent from '@/assets/images/about_girl_student.png?url';
import playbuttonIcon from '@/assets/icons/playbutton.png?url';

const AboutHero: React.FC = () => {
  return (
    <section className="w-full py-12 lg:py-16 mt-[40px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-h-[548px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[120px]">
          {/* Left Content */}
          <div className="w-full lg:max-w-[667px] lg:min-h-[432px] flex flex-col gap-4">
            {/* Badge */}
            <div className="w-fit">
              <WelcomeBadge text="About SMMBOT" />
            </div>

            {/* White Background Container for Heading + Subheading + Description + CTA */}
            <div className="w-full max-w-[667px] rounded-[20px] bg-white  py-6 flex flex-col gap-4">
              {/* Heading + Subheading + Description Block */}
              <div className="w-full flex flex-col gap-4">
                {/* Heading */}
                <h1 className="w-full max-w-[667px] min-h-[116px] text-3xl sm:text-4xl lg:text-[48px] font-normal leading-[120%] capitalize text-black font-integral font-semibold bg-white rounded-lg py-6 flex flex-col">
                  <span className="mb-4">Empowering Students</span>
                  <span>To Excel</span>
                </h1>

                {/* Subheading */}
                <p className="text-[18px] font-semibold leading-[69%] text-[#6A7282] font-poppins capitalize">
                  Online Test Series Platform for Class 8 to 12 Students
                </p>

                {/* Description with #6A7282 background */}
                <p className="text-[16px] font-medium leading-[168%] text-[#6A7282] font-poppins capitalize bg-white rounded-[12px] py-3">
                  SMMBOT is a dedicated online test series platform that helps students from Class 8 to 12 practice,
                  improve their performance, and experience real exam-like tests. We provide comprehensive practice
                  tests designed to boost confidence and academic excellence.
                </p>
              </div>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-[80px] mt-4">
                <Link to="/get-started" className="inline-block">
                  <ArrowButton
                    text="Get start"
                    bgColor="#00B512"
                    textColor="#F9FAFB"
                    arrowBgColor="#FBF9F1"
                    arrowColor="#000000"
                    className=" h-[52px]"
                    size="md"
                  />
                </Link>
                <Link to="/#test-series">
                  <button
                    className="flex items-center justify-center gap-2 w-[206px] h-[52px] rounded-[44px] border-[0.8px] border-[#00B512] bg-white text-[#00B512] font-semibold text-base leading-[150%] font-poppins hover:bg-[#00B512] hover:text-white transition-all"
                    style={{ paddingTop: '24px', paddingRight: '30px', paddingBottom: '24px', paddingLeft: '40px' }}
                  >
                    <img
                      src={playbuttonIcon}
                      alt="Play button"
                      className="w-[42px] h-[42px] flex-shrink-0 object-contain"
                    />
                    <span className="whitespace-nowrap">View test series</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Image Card */}
          <div className="w-full lg:w-auto lg:flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-[502px] h-[548px] rounded-[20px] overflow-hidden bg-[#153F4B] flex items-center justify-center">
              <img
                src={aboutGirlStudent}
                alt="Student studying with SMMBOT"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

