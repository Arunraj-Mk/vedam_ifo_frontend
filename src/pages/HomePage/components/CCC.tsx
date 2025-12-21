import ShieldSvg from '@/assets/svg/shield'

const CCC = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Calm Clear Continuous
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything begins with understanding. <span className="font-bold">We listen to your data, your market,</span> and your goals to build growth systems that last.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CLARITY Card - Tall, spans 2 rows */}
          <div 
            className="md:row-span-2 rounded-2xl p-6 relative overflow-hidden"
            style={{ 
              border: '1px solid #E5E7EB',
              background: 'linear-gradient(180deg, #ffffff 40%, #E0F7FA 100%)',
              minHeight: '500px'
            }}
          >
            <div className="relative z-10">
              <h3 className="text-sm font-semibold text-gray-500 tracking-wide mb-2">CLARITY</h3>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-bold text-gray-900">100%</span>
                <span className="text-base text-gray-500">Brand Coherence</span>
              </div>
            </div>
            
            {/* Dartboard Image - using shield.tsx SVG */}
            <div className="absolute -bottom-10 -left-16 w-[400px] h-[400px]">
              <ShieldSvg className="w-full h-full drop-shadow-2xl" />
            </div>
          </div>

          {/* Consistency Card */}
          <div 
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(180deg, #166534 0%, #15803d 100%)',
              minHeight: '280px'
            }}
          >
            <h3 className="text-3xl font-bold text-white mb-1">Consistency</h3>
            <p className="text-white/80 mb-6">alignment across every channel.</p>
            
            {/* Wave Chart */}
            <div className="absolute bottom-0 left-0 right-0 h-32">
              <svg className="w-full h-full" viewBox="0 0 408 127" preserveAspectRatio="none" fill="none">
                {/* Filled gradient area */}
                <path d="M-10.5264 31.5789L-3.18887 36.8586C4.19154 41.9408 19.0811 52.7961 33.6703 60.5428C48.3024 68.5855 62.8486 73.5197 77.8669 63.1579C92.4561 52.7961 107.045 26.1513 122.064 26.2993C136.61 26.1513 151.242 52.7961 165.831 60.5428C180.721 68.5855 195.439 57.7303 210.028 63.1579C224.874 68.5855 239.635 89.3092 254.224 81.5625C268.985 73.5197 283.832 37.0066 298.421 39.4737C313.139 41.9408 328.028 61.1978 342.618 82.0695C357.25 103.139 371.796 103.139 386.814 89.9642C403.443 77.3539 411.561 72.4211 429.443 65.4756C448.306 59.1019 460.189 68.5855 474.778 57.8783C489.668 47.3684 504.386 15.7895 518.975 10.5099C533.822 5.42763 548.583 26.1513 563.172 28.9638C577.932 31.5789 592.779 15.7895 600.074 7.89474L607.368 0V126.316H600.031C592.65 126.316 577.761 126.316 563.172 126.316C548.54 126.316 533.993 126.316 518.975 126.316C504.386 126.316 489.797 126.316 474.778 126.316C460.232 126.316 445.6 126.316 431.011 126.316C416.121 126.316 401.403 126.316 386.814 126.316C371.968 126.316 357.207 126.316 342.618 126.316C327.857 126.316 313.01 126.316 298.421 126.316C283.703 126.316 268.814 126.316 254.224 126.316C239.592 126.316 225.046 126.316 210.028 126.316C195.439 126.316 180.849 126.316 165.831 126.316C151.285 126.316 136.653 126.316 122.064 126.316C107.174 126.316 92.4561 126.316 77.8669 126.316C63.0203 126.316 48.2594 126.316 33.6703 126.316C18.9095 126.316 4.06281 126.316 -3.23178 126.316H-10.5264V31.5789Z" fill="url(#paint0_linear_215_442)"/>
                
                {/* White outline stroke on top of the wave */}
                <path 
                  d="M-10.5264 31.5789L-3.18887 36.8586C4.19154 41.9408 19.0811 52.7961 33.6703 60.5428C48.3024 68.5855 62.8486 73.5197 77.8669 63.1579C92.4561 52.7961 107.045 26.1513 122.064 26.2993C136.61 26.1513 151.242 52.7961 165.831 60.5428C180.721 68.5855 195.439 57.7303 210.028 63.1579C224.874 68.5855 239.635 89.3092 254.224 81.5625C268.985 73.5197 283.832 37.0066 298.421 39.4737C313.139 41.9408 328.028 61.1978 342.618 82.0695C357.25 103.139 371.796 103.139 386.814 89.9642" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.7)" 
                  strokeWidth="2.5"
                />
                
                <defs>
                  <linearGradient id="paint0_linear_215_442" x1="298.421" y1="126.316" x2="298.421" y2="1.52317e-06" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#39663C"/>
                    <stop offset="1" stopColor="#89E18C"/>
                  </linearGradient>
                </defs>
                
                {/* Data points with white circles */}
                <circle cx="122" cy="26" r="6" fill="white" />
                <circle cx="122" cy="26" r="10" fill="rgba(255,255,255,0.3)" />
                <circle cx="210" cy="63" r="6" fill="white" />
                <circle cx="210" cy="63" r="10" fill="rgba(255,255,255,0.3)" />
                <circle cx="298" cy="39" r="6" fill="white" />
                <circle cx="298" cy="39" r="10" fill="rgba(255,255,255,0.3)" />
              </svg>
            </div>

            {/* Score Card - positioned in middle-right area */}
            <div className="absolute bottom-22 right-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-xs text-gray-500 mb-1">Consistency Score</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">94%</span>
                <span className="text-sm text-green-600 font-semibold flex items-center">
                  <svg className="w-3 h-3 mr-0.5" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 2L10 7H2L6 2Z" />
                  </svg>
                  8
                </span>
              </div>
            </div>
          </div>

          {/* CONTINUITY Card */}
          <div 
            className="rounded-2xl p-6 relative"
            style={{ 
              border: '1px solid #E5E7EB',
              minHeight: '280px'
            }}
          >
            <h3 className="text-sm font-semibold text-gray-500 tracking-wide mb-1">CONTINUITY</h3>
            <p className="text-gray-600 mb-4">growth that compounds over time.</p>
            
            {/* Semi-circle Donut Chart - positioned to the right, larger */}
            <div className="absolute right-0 bottom-0 w-64 h-48">
              <svg className="w-full h-full" viewBox="0 0 200 150">
                {/* Blue segment (bottom-left) */}
                <path
                  d="M 20,140 A 90,90 0 0,1 45,40"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                
                {/* Green segment (top) */}
                <path
                  d="M 52,32 A 90,90 0 0,1 148,32"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                
                {/* Orange segment (bottom-right) */}
                <path
                  d="M 155,40 A 90,90 0 0,1 180,140"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Center text - positioned inside the arc */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <span className="text-4xl font-bold text-gray-900">47%</span>
                <p className="text-sm text-gray-500">avg. growth rate</p>
              </div>
            </div>
          </div>

          {/* Bottom Motto Card - spans 2 columns */}
          <div 
            className="md:col-span-2 rounded-2xl p-8 relative overflow-hidden flex items-center justify-between"
            style={{ 
              background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #d1fae5 100%)',
              minHeight: '180px'
            }}
          >
            <div className="relative z-10 max-w-lg">
              <p className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 leading-tight">
                We prefer precision over noise.
              </p>
              <p className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                Quiet competence often beats loud ambition.
              </p>
            </div>
            
            {/* Megaphone Illustration */}
            <div className="hidden md:block relative w-48 h-32 flex-shrink-0">
              <svg viewBox="0 0 180 120" className="w-full h-full">
                {/* Lightning bolts */}
                <path d="M 120,15 L 132,28 L 124,28 L 136,45 L 118,32 L 126,32 Z" fill="#facc15" stroke="#eab308" strokeWidth="0.5" />
                <path d="M 135,45 L 147,58 L 139,58 L 151,75 L 133,62 L 141,62 Z" fill="#facc15" stroke="#eab308" strokeWidth="0.5" />
                <path d="M 110,55 L 122,68 L 114,68 L 126,85 L 108,72 L 116,72 Z" fill="#facc15" stroke="#eab308" strokeWidth="0.5" />
                
                {/* Megaphone - grayscale style */}
                <defs>
                  <linearGradient id="megaphoneBody" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6b7280" />
                    <stop offset="50%" stopColor="#4b5563" />
                    <stop offset="100%" stopColor="#374151" />
                  </linearGradient>
                  <linearGradient id="megaphoneCone" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4b5563" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </linearGradient>
                </defs>
                
                {/* Megaphone cone */}
                <path d="M 45,50 L 100,25 L 100,95 L 45,70 Z" fill="url(#megaphoneCone)" />
                
                {/* Megaphone bell */}
                <ellipse cx="100" cy="60" rx="8" ry="35" fill="#374151" />
                
                {/* Handle/grip */}
                <ellipse cx="40" cy="60" rx="18" ry="15" fill="url(#megaphoneBody)" />
                <rect x="22" y="52" width="12" height="16" rx="3" fill="#1f2937" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CCC
