import { useState, useEffect, useRef } from 'react';
import star from '@/assets/images/star.png';
import tick from '@/svg/tick.svg'

export default function HeroSection() {
  const headlines = ['Building Intelligent', 'Intelligence Engine', 'Build Smart', 'Building Intelligent'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const blobRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const blob = blobRef.current;
    if (!blob) return;

    const rect = button.getBoundingClientRect();
    // Always position blob at bottom center
    blob.style.left = `${rect.width / 2}px`;
    blob.style.top = `${rect.height}px`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const blob = blobRef.current;
    if (!blob) return;

    const rect = button.getBoundingClientRect();
    // Reset to bottom center
    blob.style.left = `${rect.width / 2}px`;
    blob.style.top = `${rect.height}px`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[30px]" style={{
      background: `
        radial-gradient(ellipse at top, rgba(138, 255, 255, 0.6) 0%, transparent 50%),
        radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 30%, transparent 60%),
        radial-gradient(ellipse at bottom left, rgba(128, 179, 254, 0.5) 0%, transparent 50%),
        radial-gradient(ellipse at bottom right, rgba(128, 179, 254, 0.6) 0%, transparent 50%),
        linear-gradient(180deg, rgba(230, 250, 255, 1) 0%, rgba(200, 225, 255, 1) 100%)
      `, margin:'15px', 
    }}>

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* New Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 shadow-sm border-2 border-white">
          <span 
            className="px-3 py-1 text-xs font-semibold"
            style={{
              borderRadius: '26px',
              background: '#DEEDFF',
              color: '#2A73FE'
            }}
          >
            New
          </span>
          <span 
            className="text-center"
            style={{
              color: '#606162',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal'
            }}
          >
            Automate marketing using AI
          </span>
        </div>

        {/* Main Heading with Animation - Desktop */}
        <div className="mb-4 hidden sm:block">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight flex items-center justify-center flex-wrap gap-2">
            <div 
              className="inline-block overflow-hidden relative"
              style={{
                height: '1.5em',
                minWidth: '700px',
                lineHeight: '1.5em'
              }}
            >
              <div className="relative w-full h-full">
                {headlines.map((headline, index) => {
                  const position = index - currentIndex;
                  
                  return (
                    <span
                      key={`${headline}-${index}`}
                      className="absolute left-0 top-0 inline-block font-semibold whitespace-nowrap text-[#2A73FE] transition-transform duration-1000"
                      style={{
                        transform: `translateY(${position * 100}%)`,
                        transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
                        lineHeight: '1.5em'
                      }}
                    >
                      {headline}
                    </span>
                  );
                })}
              </div>
            </div>
            <img src={star} alt="Growth" style={{ width: '100px', height: '100px' }} />
            <span className="text-gray-900">Growth</span>
          </h1>
        </div>

        {/* Main Heading with Animation - Mobile */}
        <div className="mb-4 block sm:hidden">
          {/* Animated headline on top */}
          <div className="flex justify-center mb-4">
            <div 
              className="inline-block overflow-hidden relative "
              style={{
                height: '2.6em',
                width: '100%',
                maxWidth: '100%',
                lineHeight: '1.5em'
              }}
            >
              <div className="relative w-full h-full flex justify-center  h-[100px]">
                {headlines.map((headline, index) => {
                  const position = index - currentIndex;
                  
                  return (
                    <span
                      key={`${headline}-mobile-${index}`}
                      className="absolute  left-[290px] -translate-x-1/2 inline-block font-semibold whitespace-nowrap text-[#2A73FE] transition-transform duration-1000 text-3xl"
                      style={{
                        transform: `translateX(-50%) translateY(${position * 100}%)`,
                        transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
                        lineHeight: '1.5em'
                      }}
                    >
                      {headline}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Image and Growth text below */}
          <div className="flex items-center justify-center gap-2">
            <img src={star} alt="Growth" style={{ width: '80px', height: '80px' }} />
            <span className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Growth</span>
          </div>
        </div>

        <h2 
          className="text-2xl sm:text-4xl lg:text-6xl font-serif italic text-gray-800 mb-8"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Systems for the Modern Brand
        </h2>

        {/* Description with strikethrough line */}
        <div className="relative inline-block mb-12">
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where creativity <span className="font-semibold">meets</span> data. Where automation <span className="font-semibold">meets intention</span>.
            <br />
            Here, brands do not <span className="relative inline-block">
              <span className="text-gray-500">just grow</span>
              <span className="absolute left-0 top-1/2 w-full h-0.5 bg-red-400"></span>
            </span>. <span className="font-bold text-gray-900">They compound.</span>
          </p>
        </div>

        {/* CTA Button and Reviews */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          {/* Animated Button */}
          <button 
            className="blob-btn group text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl relative overflow-hidden z-10"
            style={{
              display: 'inline-flex',
              padding: '10px 10px 10px 17px',
              alignItems: 'center',
              gap: '16px',
              color: '#ffffff',
              backgroundColor: '#256BF1',
              border: 'none',
              borderRadius: '100px',
              transition: 'color 0.5s',
              height: '50px',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span 
              className="relative z-10"
              style={{
                color: 'var(--Miscellaneous-Floating-Tab---Pill-Fill, #FFF)',
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal'
              }}
            >
              Start the conversation
            </span>
            <div className="relative w-8 h-8 bg-white rounded-full flex items-center justify-center z-10">
              <svg className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            
            {/* Position-Aware Blob */}
            <span ref={blobRef} className="blob-btn__blob"></span>
          </button>
          
          {/* Reviews */}
          <div className="flex items-center gap-3 bg-white/40 backdrop-blur-sm rounded-3xl px-4 py-3">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/150?img=1" alt="Client" className="w-9 h-9 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/150?img=2" alt="Client" className="w-9 h-9 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/150?img=3" alt="Client" className="w-9 h-9 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/150?img=4" alt="Client" className="w-9 h-9 rounded-full border-2 border-white" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
                <span className="text-sm font-semibold ml-1 text-gray-900">5.0</span>
              </div>
              <p className="text-xs text-gray-700">from client reviews</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-700">
          <div className="flex items-center gap-2">


            <img src={tick} alt="Check1" style={{ height: '34px', width: 'auto' }} />

            <span className="text-xs sm:text-sm">Data informed</span>
          </div>
          <div className="flex items-center gap-2">
          <img src={tick} alt="Check2" style={{ height: '34px', width: 'auto' }} />
          <span className="text-xs sm:text-sm">Technology powered</span>
          </div>
          <div className="flex items-center gap-2">
          <img src={tick} alt="Check3" style={{ height: '34px', width: 'auto' }} />
          <span className="text-xs sm:text-sm">Human centered</span>
          </div>
        </div>
      </div>
    </div>
  );
}