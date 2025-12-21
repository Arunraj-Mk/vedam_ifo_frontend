import { motion } from "framer-motion";

interface AnimatedBottomCurveProps {
  startColor?: string;
  endColor?: string;
  glowColor?: string;
  strokeWidth?: number;
  animationDuration?: number;
  direction?:
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "straight-vertical"
    | "straight-horizontal";
  className?: string;
}

const AnimatedBottomCurve = ({
  startColor = "#E0E7FF",
  endColor = "#3B82F6",
  glowColor = "#3B82F6",
  strokeWidth = 4,
  animationDuration = 3,
  direction = "left",
  className = "",
}: AnimatedBottomCurveProps) => {
  const paths: Record<string, string> = {
    left: "M 0,600 L 0,300 Q 0,150 150,150 L 400,150 Q 600,150 600,0",
    right: "M 600,600 L 600,300 Q 600,150 450,150 L 200,150 Q 0,150 0,0",
    "top-left": "M 0,0 L 300,0 Q 450,0 450,150 L 450,400 Q 450,600 600,600",
    "top-right": "M 600,0 L 300,0 Q 150,0 150,150 L 150,400 Q 150,600 0,600",

    // Straight lines
    "straight-vertical": "M 300 0 L 300 600",
    "straight-horizontal": "M 0 300 L 600 300",
  };

  const selectedPath = paths[direction];
  const isStraight =
    direction === "straight-vertical" ||
    direction === "straight-horizontal";

  const gradientId = `gradient-${direction}`;
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

      {/* Static base path */}
      <path
        d={selectedPath}
        stroke={startColor}
        strokeWidth={strokeWidth}
        opacity={0.25}
        fill="none"
        strokeLinecap="round"
      />

      {/* Glow animated path */}
      <motion.path
        d={selectedPath}
        stroke={glowColor}
        strokeWidth={strokeWidth + 2}
        fill="none"
        strokeLinecap="round"
        filter={`url(#${glowId})`}
        strokeDasharray={isStraight ? "16 16" : undefined}
        initial={
          isStraight
            ? { strokeDashoffset: 32 }
            : { pathLength: 0 }
        }
        animate={
          isStraight
            ? { strokeDashoffset: 0 }
            : { pathLength: 1 }
        }
        transition={{
          duration: animationDuration,
          ease: isStraight ? "linear" : "easeInOut",
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
        strokeDasharray={isStraight ? "16 16" : undefined}
        initial={
          isStraight
            ? { strokeDashoffset: 32 }
            : { pathLength: 0 }
        }
        animate={
          isStraight
            ? { strokeDashoffset: 0 }
            : { pathLength: 1 }
        }
        transition={{
          duration: animationDuration,
          ease: isStraight ? "linear" : "easeInOut",
          repeat: Infinity,
        }}
      />
    </svg>
  );
};

export default AnimatedBottomCurve;
