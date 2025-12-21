import JourneySteps from './JourneySteps';
import JourneyImage from './JourneyImage';
import Badge from '@/components/Badge';

const GetStarted = () => {
  return (
    <section id="about" className="py-12 md:py-16 px-4 overflow-x-hidden w-full">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 w-full overflow-hidden">
            <JourneyImage />
          </div>

          <div className="order-1 lg:order-2 w-full overflow-hidden">
            <div className="mb-4">
              <Badge>Start Your Journey</Badge>
            </div>

            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 uppercase">
              Get Started in 4 Simple Steps
            </p>
            <JourneySteps />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

