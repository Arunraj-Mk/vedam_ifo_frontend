import React from 'react';
import PracticeCard from './PracticeCard';

interface PracticeReason {
  id: number;
  icon: React.ReactNode;
  iconBgColor: string;
  title: string;
  description: string;
  buttonVariant?: 'default' | 'primary';
}

const WhyPractice = () => {
  const reasons: PracticeReason[] = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconBgColor: 'bg-blue-100',
      title: 'Real Exam Environment',
      description: 'Experience the pressure and format of actual exams with our simulated test interface designed to match board standards.',
      buttonVariant: 'default',
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      iconBgColor: 'bg-purple-100',
      title: 'Instant Result & Ranking',
      description: 'Get detailed performance analysis immediately after submission. Know where you stand among peers with our leaderboard.',
      buttonVariant: 'default',
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconBgColor: 'bg-yellow-100',
      title: 'Affordable Test Series',
      description: 'Get detailed performance analysis immediately after submission. Know where you stand among peers with our leaderboard.',
      buttonVariant: 'primary',
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      iconBgColor: 'bg-blue-100',
      title: 'Detailed Analytics',
      description: 'Practice with questions designed by experienced educators and subject matter experts to ensure quality learning.',
      buttonVariant: 'default',
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      iconBgColor: 'bg-purple-100',
      title: 'Expert-Curated',
      description: 'Track your progress with in-depth reports that highlight your strong and weak areas chapter by chapter.',
      buttonVariant: 'default',
    },
    {
      id: 6,
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      iconBgColor: 'bg-purple-100',
      title: 'Flexible Learning',
      description: 'Practice anytime, anywhere at your own pace. Our platform is accessible on all devices for seamless learning.',
      buttonVariant: 'default',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center uppercase">Why Practice With Vedam Info?</h2>
        <p className="text-[#696984] text-center mb-12 max-w-2xl mx-auto">
        We provide the best tools and environment to help you ace your exams        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <PracticeCard
              key={reason.id}
              icon={reason.icon}
              iconBgColor={reason.iconBgColor}
              title={reason.title}
              description={reason.description}
              buttonVariant={reason.buttonVariant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPractice;

