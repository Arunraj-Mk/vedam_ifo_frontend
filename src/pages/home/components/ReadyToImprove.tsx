import readyToImproveSvg from '@/assets/svgs/ready_to_improve.svg?url';
import ArrowButton from '@/components/ArrowButton';
import { Link } from 'react-router-dom';

interface ReadyToImproveProps {
  showContactUs?: boolean;
}

const ReadyToImprove: React.FC<ReadyToImproveProps> = ({ showContactUs = false }) => {
  return (
    <div className="p-2">
      <section
        className="relative py-16 md:py-0 px-4 overflow-hidden rounded-[20px]"
        style={{
          background: 'linear-gradient(to right, #0a1929 0%, #0f2d4a 40%, #0d9488 80%, #14b8a6 100%)',
        }}
      >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              READY TO IMPROVE
              <br />
              YOUR SCORE?
            </h2>
            <p className="text-base md:text-lg mb-8 text-white/90 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Join thousands of students who are already practicing with Vedam Info.
            </p>
            <div className={`flex ${showContactUs ? 'flex-col sm:flex-row' : ''} gap-4 justify-center lg:justify-start`}>
              <Link to="/get-started">
                <ArrowButton 
                  text="Get Started"
                  bgColor="#00C853"
                  textColor="#FFFFFF"
                  arrowBgColor="#F5F5DC"
                  arrowColor="#333333"
                  size="md"
                />
              </Link>
              {showContactUs && (
                <Link to="/contact">
                  <button className="px-6 mx-12 sm:my-0 py-3 rounded-[44px] border-[0.8px] border-[#00B512] bg-transparent text-[#00B512] font-semibold text-base leading-[150%] font-poppins hover:bg-[#00B512] hover:text-white transition-all whitespace-nowrap">
                    Contact Us
                  </button>
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src={readyToImproveSvg}
                alt="Student ready to improve"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
 
  );
};

export default ReadyToImprove;

