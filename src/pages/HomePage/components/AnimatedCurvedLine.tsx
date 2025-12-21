interface AnimatedCurvedLineProps {
  path: string
  startColor?: string
  endColor?: string
  strokeWidth?: number
  animationDuration?: number
  uniqueId: string
}

const AnimatedCurvedLine = ({
  path,
  startColor = '#DBEAFE',
  endColor = '#60A5FA',
  strokeWidth = 2.5,
  animationDuration = 3,
  uniqueId
}: AnimatedCurvedLineProps) => {
  return (
    <>
      <style>
        {`
          @keyframes flowLine-${uniqueId} {
            0% {
              stroke-dashoffset: 2000;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
      <g>
        {/* Base static path (background) */}
        <path
          d={path}
          stroke={startColor}
          strokeWidth={strokeWidth - 0.5}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
        {/* Animated flowing path */}
        <path
          d={path}
          stroke={endColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          style={{
            animation: `flowLine-${uniqueId} ${animationDuration}s linear infinite`,
            filter: 'drop-shadow(0 0 3px rgba(96, 165, 250, 0.6))'
          }}
        />
      </g>
    </>
  )
}

export default AnimatedCurvedLine



