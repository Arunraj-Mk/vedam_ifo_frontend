import { motion } from "framer-motion";

interface CurvedLineProps {
  startColor?: string;
  endColor?: string;
  glowColor?: string;
  strokeWidth?: number;
  animationDuration?: number;
  direction?: "left" | "right";
  className?: string;
}

const CurvedLine = ({
  startColor = "#E0E7FF",
  endColor = "#3B82F6",
  glowColor: _glowColor = "#3B82F6",
  strokeWidth = 4,
  animationDuration = 3,
  direction = "left",
  className = "",
}: CurvedLineProps) => {
  const paths = {
    left: "M 0,0 L 0,300 Q 0,450 150,450 L 400,450 Q 600,450 600,600",
    right: "M 600,0 L 600,300 Q 600,450 450,450 L 200,450 Q 0,450 0,600",
  };

  const selectedPath = paths[direction];
  const gradientId = `curveGradient-${direction}`;
  const glowId = `glow-${direction}`;

  return (
    <svg
      className={`w-full h-full ${className}`}
      viewBox="0 0 600 600"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Gradient */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={startColor} />
          <stop offset="60%" stopColor={endColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>

        {/* Glow filter */}
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background static path */}
      <path
        d={selectedPath}
        stroke={startColor}
        strokeWidth={strokeWidth}
        opacity={0.35}
        fill="none"
        strokeLinecap="round"
      />

      {/* Glow layer */}
      <motion.path
        d={selectedPath}
        // stroke={glowColor}
        strokeWidth={strokeWidth + 2}
        fill="none"
        strokeLinecap="round"
        filter={`url(#${glowId})`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: animationDuration,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        opacity={0.6}
      />

      {/* Main animated path */}
      <motion.path
        d={selectedPath}
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: animationDuration,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </svg>
  );
};

export default CurvedLine;
