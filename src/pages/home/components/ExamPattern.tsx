import React from 'react';
import examPatternSvg from '@/assets/svgs/exampattern.svg?url';

interface PatternFeature {
  id: number;
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ExamPattern = () => {
  const features: PatternFeature[] = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM10 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM10 10a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" />
        </svg>
      ),
      label: 'Questions',
      value: '60 per subject',
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
          <path d="M8 2v4a2 2 0 002 2h4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      ),
      label: 'Duration',
      value: '90 minutes',
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex items-center justify-center">
            <img
              src={examPatternSvg}
              alt="Exam Pattern Illustration"
              className="w-full h-auto object-contain max-w-lg"
            />
          </div>

          <div className="text-gray-900">
            <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-700">
              Subjects are displayed after registration. While taking mock tests, the pattern is identical to the main exam to help you adapt.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm md:text-base mb-1">{feature.label}</p>
                    <p className="text-gray-900 text-xl md:text-2xl font-bold">{feature.value}</p>
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

export default ExamPattern;

