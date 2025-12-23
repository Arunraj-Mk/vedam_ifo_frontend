import React, { useState } from 'react';
import WelcomeBadge from '@/pages/login/components/WelcomeBadge';

interface FAQItem {
  question: string;
  answer: string;
}

const CommonQuestions: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How long does it take to respond to my query?',
      answer:
        'We typically respond within 24 hours on business days. For urgent technical issues during a live test, please call our support number immediately.',
    },
    {
      question: 'How can I get help if my test stops in between?',
      answer:
        'If your test stops unexpectedly, please contact our support team immediately via phone or email. We will help you resume your test or provide a solution based on the situation.',
    },
    {
      question: 'Do you provide phone support?',
      answer:
        'Yes, we provide phone support during our business hours (Mon - Sat: 10 AM - 7 PM). You can reach us at +91 9342234188 for immediate assistance.',
    },
    {
      question: 'Can I change my registered email or phone number?',
      answer:
        'Yes, you can update your registered email or phone number by logging into your account and accessing the profile settings. If you face any issues, please contact our support team.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[48px]">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {/* Badge */}
              <div className="w-fit">
                <WelcomeBadge text="FAQ" />
              </div>

              {/* Heading */}
              <h2 className="w-full text-3xl sm:text-4xl lg:text-[48px] font-normal leading-[120%] capitalize text-black font-integral">
                Common Questions
              </h2>

              {/* Description */}
              <p className="w-full text-base lg:text-[18px] font-normal leading-[168%] text-[#6A7282] font-poppins">
                Quick answers to common questions about our test series.
              </p>
            </div>

            {/* Right Content - FAQ List */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] rounded-[12px] p-5 bg-white transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                    aria-expanded={expandedIndex === index}
                  >
                    <h3 className="text-base font-semibold text-black font-poppins flex-1">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-[#00B512] flex-shrink-0 transition-transform ${
                        expandedIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedIndex === index && (
                    <p className="mt-4 text-sm font-normal text-black font-poppins leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;

