import Badge from '@/components/Badge';

const HeroContent = () => {
  return (
    <div className="max-w-2xl w-full text-center lg:text-left">
      <Badge variant="hero" className="mb-4 md:mb-6">
        New Test Series Available
      </Badge>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight">
        PRACTICE TEST
        <br />
        SERIES
        <br />
        <span className="text-lime-400">With Us</span>
      </h1>

      <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Online Test Series Platform For Students Of Class 8 To 12 To Practice And Improve Their Exam Performance In A Real-Time Environment.
      </p>

      <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 flex-wrap">
        <div className="flex items-center gap-2">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">10K+</div>
            <div className="text-white/70 text-xs sm:text-sm">students</div>
          </div>
        </div>
        <div className="h-10 md:h-12 w-px bg-white/30"></div>
        <div className="flex items-center gap-2">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">500+</div>
            <div className="text-white/70 text-xs sm:text-sm">test</div>
          </div>
        </div>
        <div className="h-10 md:h-12 w-px bg-white/30"></div>
        <div className="flex items-center gap-2">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">4.8</div>
            <div className="text-white/70 text-xs sm:text-sm">rating</div>
          </div>
        </div>
        <div className="h-10 md:h-12 w-px bg-white/30"></div>
        <div className="flex items-center gap-2">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">₹25L</div>
            <div className="text-white/70 text-xs sm:text-sm">in Rewards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

