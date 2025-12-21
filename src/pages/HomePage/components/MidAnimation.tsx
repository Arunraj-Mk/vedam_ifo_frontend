import React, { useState, useEffect } from 'react'

// Import all SVG variants
import defaultSvg from '@/svg/Property 1=Default.svg'
import variant2 from '@/svg/Property 1=Variant2.svg'
import variant4 from '@/svg/Property 1=Variant4.svg'
import variant4_1 from '@/svg/Property 1=Variant4-1.svg'
import variant5 from '@/svg/Property 1=Variant5.svg'
import variant6 from '@/svg/Property 1=Variant6.svg'
import variant7 from '@/svg/Property 1=Variant7.svg'
import variant8 from '@/svg/Property 1=Variant8.svg'

interface MidAnimationProps {
  animationSpeed?: number // milliseconds between frames
  className?: string
}

const MidAnimation: React.FC<MidAnimationProps> = ({ 
  animationSpeed = 800,
  className = ''
}) => {
  const svgVariants = [
    defaultSvg,
    variant2,
    variant4,
    variant4_1,
    variant5,
    variant6,
    variant7,
    variant8,
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasShownDefault, setHasShownDefault] = useState(false)

  useEffect(() => {
    // Show default first, then after a delay start cycling from variant2
    if (!hasShownDefault) {
      const timeout = setTimeout(() => {
        setHasShownDefault(true)
        setCurrentIndex(1) // Start from variant2 (index 1)
      }, 1000) // Show default for 1 second first time

      return () => clearTimeout(timeout)
    }
  }, [hasShownDefault])

  useEffect(() => {
    // Only start cycling after default has been shown
    if (!hasShownDefault) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Cycle from variant2 (index 1) to the end, then back to variant2
        const nextIndex = prevIndex + 1
        if (nextIndex >= svgVariants.length) {
          return 2 // Go back to variant2 instead of default
        }
        return nextIndex
      })
    }, animationSpeed)

    return () => clearInterval(interval)
  }, [animationSpeed, svgVariants.length, hasShownDefault])

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}>
      <img
        src={svgVariants[currentIndex]}
        alt={`Animation frame ${currentIndex + 1}`}
        className="w-full h-auto object-contain"
        draggable={false}
      />
    </div>
  )
}

export default MidAnimation
