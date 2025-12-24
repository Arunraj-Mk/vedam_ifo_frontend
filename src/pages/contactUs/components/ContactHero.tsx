import React from 'react';
import WelcomeBadge from '@/pages/login/components/WelcomeBadge';
import ContactForm from './ContactForm';

const ContactHero: React.FC = () => {
  const contactInfo = [
    {
      label: 'E-mail',
      value: 'info@Vedaminfo.in',
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '+91 9342234188',
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
    },
    {
      label: 'Timings',
      value: 'Mon - Sat: 10 AM - 7 PM, Sunday: Closed',
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: 'Address',
      value: 'No 2844, 13th Main E Block, 2nd Stage, Rajaji Nagar, Bangalore 560010',
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[48px]">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col mt-20 gap-6">
              {/* Badge */}
              <div className="w-fit">
                <WelcomeBadge text="We're Here To Help" />
              </div>

              {/* Heading */}
              <h1 
                className="text-[48px] font-normal leading-[120%] capitalize text-black font-integral"
                style={{
                  width: '667px',
                  height: '58px',
                  fontFamily: "FONTSPRING DEMO - Integral CF, sans-serif"
                }}
              >
                We're Here To Help
              </h1>

              {/* Description */}
              <p 
                className="text-[18px] font-medium leading-[168%] capitalize text-[#6A7282] font-poppins"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500
                }}
              >
                Whether you're a student looking for test information, a parent seeking guidance, or facing technical issues, our dedicated support team is ready to assist you.
              </p>

              {/* Contact Information List */}
              <div 
                className="flex flex-col mt-4"
                style={{
                  width: '667px',
                  height: '292px',
                  gap: '18px'
                }}
              >
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="w-10 h-10 rounded-full bg-[#00B512] flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    {/* Text Content */}
                    <div className="flex flex-col gap-1">
                      <span 
                        className="font-normal text-[#6A7282]"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '20px'
                        }}
                      >
                        {item.label}
                      </span>
                      <span className="text-base font-normal text-black font-poppins">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div  className="w-full lg:w-1/2 flex justify-center lg:justify-end" >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

