import getStartedSvg from '@/assets/svgs/get_started.svg?url';

const JourneyImage = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-md overflow-visible">
        <svg
          className="absolute -top-10 -left-10 w-full h-full z-0 pointer-events-none"
          viewBox="0 0 400 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 200 300 Q 100 200, 50 300 T 200 450"
            stroke="#0B7077"
            strokeWidth="4"
            strokeDasharray="15,8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="relative z-10 w-full h-96 rounded-lg  border-primary/50 flex items-center justify-center overflow-hidden">
          <img 
            src={getStartedSvg} 
            alt="Get Started" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default JourneyImage;

