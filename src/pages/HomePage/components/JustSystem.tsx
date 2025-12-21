import DashboardImage from '@/assets/images/dashboard.png'
import { useRef } from 'react';

const JustSystem = () => {
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

  const stats = [
    {
      value: '100+',
      label: 'Brand scaled',
    },
    {
      value: '4.9',
      label: 'Client rating',
    },
    {
      value: '127%',
      label: 'Avg. ROI',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Subtitle */}
            <p className="text-gray-500 text-base lg:text-lg mb-4">
              Just systems
            </p>

            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              built for predictable GROWTH.
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className={`${index < stats.length - 1 ? 'border-r border-gray-300' : ''}`}>
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
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
          </div>

          {/* Right Side - Dashboard Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={DashboardImage} 
                alt="Perform100x Analytics Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JustSystem
