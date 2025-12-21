interface AnimatedBottomCurveProps {
  startColor?: string
  endColor?: string
  glowColor?: string
  strokeWidth?: number
  animationDuration?: number
  direction?: 'left' | 'right' | 'top-left' | 'top-right'
  className?: string
}

const AnimatedBottomCurve = ({
  startColor = '#E0E7FF',
  endColor = '#3B82F6',
  glowColor = '#3B82F6',
  strokeWidth = 4,
  animationDuration = 3,
  direction = 'left',
  className = ''
}: AnimatedBottomCurveProps) => {
  // Define paths for all four directions
  const paths = {
    left: "M 0,600 L 0,300 Q 0,150 150,150 L 400,150 Q 600,150 600,0",
    right: "M 600,600 L 600,300 Q 600,150 450,150 L 200,150 Q 0,150 0,0",
    'top-left': "M 0,0 L 300,0 Q 450,0 450,150 L 450,400 Q 450,600 600,600",
    'top-right': "M 600,0 L 300,0 Q 150,0 150,150 L 150,400 Q 150,600 0,600"
  }

  const selectedPath = paths[direction]

  return (
    <>
      <style>
        {`
          @keyframes flowGlow-${direction} {
            0% {
              stroke-dashoffset: 2000;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
          
          @keyframes sharpPulse-${direction} {
            0%, 100% {
            //   filter: drop-shadow(0 0 6px ${glowColor}) drop-shadow(0 0 10px ${glowColor}90);
            }
            50% {
            //   filter: drop-shadow(0 0 12px ${glowColor}) drop-shadow(0 0 18px ${glowColor}CC);
            }
          }
        `}
      </style>
      <svg
        className={`w-full h-full ${className}`}
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient for color transition */}
          <linearGradient id={`curveGradient-${direction}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="50%" stopColor={endColor} stopOpacity="0.9" />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
        
        {/* Base static path (background border) */}
        <path
          d={selectedPath}
          stroke={startColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
        
        {/* Animated flowing path with visible glow */}
        <path
          d={selectedPath}
          stroke={`url(#curveGradient-${direction})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          style={{
            animation: `flowGlow-${direction} ${animationDuration}s linear infinite, sharpPulse-${direction} ${animationDuration}s ease-in-out infinite`
          }}
        />
      </svg>
    </>
  )
}

export default AnimatedBottomCurve