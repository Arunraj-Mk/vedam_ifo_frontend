import cashRewardSvg from '@/assets/svgs/cash_reward.svg';

const HeroImage = () => {
  return (
    <div className="flex items-center justify-center flex-1 w-full max-w-md lg:max-w-md xl:max-w-lg">
      <img 
        src={cashRewardSvg} 
        alt="Cash Reward" 
        className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]"
      />
    </div>
  );
};

export default HeroImage;

