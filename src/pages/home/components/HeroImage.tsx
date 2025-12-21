import cashRewardSvg from '@/assets/svgs/cash_reward.svg';

const HeroImage = () => {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1 max-w-md xl:max-w-lg">
      <img 
        src={cashRewardSvg} 
        alt="Cash Reward" 
        className="w-[700px] h-[700px] max-w-md xl:max-w-lg"
      />
    </div>
  );
};

export default HeroImage;

