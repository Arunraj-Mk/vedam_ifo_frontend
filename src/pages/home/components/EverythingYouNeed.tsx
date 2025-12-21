import { Badge } from "@/components";
import FeatureCard from './FeatureCard';
import UserFriendly from './UserFriendly';

const EverythingYouNeed = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="w-full flex justify-center mb-4">
        <Badge variant="secondary" children="Feature" />

        </div>
       <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 uppercase text-center">
       Everything you need to Excel</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our platform provides all the tools and resources you need to excel in your exams
        </p>
      <div className="mb-6">
        <UserFriendly />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FeatureCard
          title="Test series and schedules"
          description="Stay Organized With Clear Timelines For All Upcoming Tests."
          icon={
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          }
        />
        <FeatureCard
          title="Real-time exam environment"
          description="Simulated Exam Timer And Interface For Better Preparation."
          bgColor="bg-[#001027]"
          textColor="text-white"
          icon={
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Attempted Test History"
          description="Instant Result And Ranking Know Your Score Immediately And Compare With Others."
          bgColor="bg-lime-400"
          textColor="text-black"
          iconBgColor="bg-primary"
         
        />
        <FeatureCard
          title="Instant Result And Ranking"
          icon={
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          }
        />
        <FeatureCard
          title="Answer Sheet PDF"
          description="Download Detailed Solutions And Answer Keys For Review."
          bgColor="bg-teal-600"
          textColor="text-white"
         
        />
      </div>
      </div>
    </section>
  );
};

export default EverythingYouNeed;

