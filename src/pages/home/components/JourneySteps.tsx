import JourneyStepCard, { JourneyStepCardProps } from './JourneyStepCard';

const JourneySteps = () => {
  const steps: Omit<JourneyStepCardProps, 'step'>[] = [
    {
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Create Account',
      description: 'Register for free to access your personalized dashboard',
      isActive: true,
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      title: 'Select Class',
      description: 'Choose your grade and preferred subjects to practice',
      isActive: false,
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: 'Subscribe',
      description: 'Purchase a test series plan that fits your needs',
      isActive: false,
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      ),
      title: 'Start Practicing',
      description: 'Take unlimited tests and improve your ranking',
      isActive: false,
    },
  ];

  return (
    <div className="space-y-4 md:space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar scrollbar-left">
      {steps.map((step, index) => (
        <JourneyStepCard key={index} step={index + 1} {...step} />
      ))}
    </div>
  );
};

export default JourneySteps;

