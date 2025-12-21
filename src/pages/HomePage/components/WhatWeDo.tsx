import { useState, useEffect, useRef } from 'react'

// Import images for Section 01
import Frame1 from '@/assets/images/Frame 1984080280 (1).png'
import Frame2 from '@/assets/images/Frame 1984080280 (2).png'
import Frame3 from '@/assets/images/Frame 1984080280 (1).png'

// Import images for Section 02 (Automation)
import AutomationFirst from '@/assets/images/automationFirstView.png'
import AutomationSecond from '@/assets/images/automationSecondView.png'
import AutomationThird from '@/assets/images/automationThirdView.png'
import AutomationFourth from '@/assets/images/automationFourthView.png'

// Import image for Section 03 (Branding)
import BrandingImage from '@/assets/images/branding.png'

// Import image for Section 04 (Demand Generation)
import DemandImage from '@/assets/images/demand.png'

// Import image for Section 05 (Sales Training)
import SalesImage from '@/assets/images/sales.png'

// Import image for Section 06 (Video Marketing)
import VideoImage from '@/assets/images/video.png'

// Animated Image Carousel Component for Section 01
// Animation triggers once when user scrolls to the component
const AnimatedImageCarousel = () => {
  const images = [Frame1, Frame2, Frame3]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When component comes into view and hasn't animated yet
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            
            // Start the animation sequence
            // Show image 1 (already showing), then after 2s show image 2
            setTimeout(() => {
              setCurrentIndex(1)
            }, 2000)
            
            // After 4s total, show image 3
            setTimeout(() => {
              setCurrentIndex(2)
            }, 4000)
            
            // Animation ends at image 3 - no more changes
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of component is visible
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <div ref={containerRef} className="relative w-full max-w-lg">
    
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Chart ${index + 1}`}
            className={`w-full h-auto transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 relative' : 'opacity-0 absolute top-0 left-0'
            }`}
          />
        ))}
     
    </div>
  )
}

// Animated Automation Visual for Section 02
// Shows images 1 → 2 → 3 on scroll, then bounces slowly between all 4
const AutomationVisual = () => {
  const images = [AutomationFirst, AutomationSecond, AutomationThird, AutomationFourth]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isBouncing, setIsBouncing] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            
            // Show image 1 (already showing), then after 2s show image 2
            setTimeout(() => {
              setCurrentIndex(1)
            }, 2000)
            
            // After 4s total, show image 3
            setTimeout(() => {
              setCurrentIndex(2)
            }, 4000)
            
            // After 6s, start the slow bounce animation
            setTimeout(() => {
              setIsBouncing(true)
            }, 6000)
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  // Slow continuous bounce animation
  useEffect(() => {
    if (!isBouncing) return

    let bounceIndex = 2 // Start from image 3
    let direction = 1 // 1 = forward, -1 = backward

    const bounceInterval = setInterval(() => {
      bounceIndex += direction
      
      // Reverse direction at boundaries
      if (bounceIndex >= images.length - 1) {
        direction = -1
      } else if (bounceIndex <= 0) {
        direction = 1
      }
      
      setCurrentIndex(bounceIndex)
    }, 1800) // Change every 1.8 seconds

    return () => clearInterval(bounceInterval)
  }, [isBouncing, images.length])

  return (
    <div ref={containerRef} className="relative w-full max-w-lg">
     
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Automation view ${index + 1}`}
            className={`w-full h-auto transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 relative' : 'opacity-0 absolute top-0 left-0'
            }`}
          />
        ))}
      
    </div>
  )
}

// Branding visual for Section 03
const BrandingVisual = () => (
  <div className="relative flex justify-center w-full max-w-lg">
    <img 
        src={BrandingImage} 
        alt="Branding and Experience Design" 
        className="w-full h-auto"
      />
  </div>
)

// Demand Generation visual for Section 04
const DemandVisual = () => (
  <div className="relative flex justify-center w-full max-w-lg">
 <img 
        src={DemandImage} 
        alt="Demand Generation and Market Positioning" 
        className="w-full h-auto"
      />
  </div>
)

// Sales Training visual for Section 05
const SalesVisual = () => (
  <div className="relative flex justify-center w-full max-w-lg">
      <img 
        src={SalesImage} 
        alt="Sales Training and Outsourcing Solutions" 
        className="w-full h-auto"
      />
  </div>
)

// Video Marketing visual for Section 06
const VideoVisual = () => (
  <div className="relative flex justify-center w-full max-w-lg bor">
     <img 
        src={VideoImage} 
        alt="Video Marketing and Outsourcing Solutions" 
        className="w-full h-auto"
      />
  </div>
)

interface ServiceData {
  number: string
  highlight: string
  subtitle?: string
  description: string
  tags: string[]
  visual: React.ReactNode
  reverse: boolean
}

const WhatWeDo = () => {
  const services: ServiceData[] = [
    {
      number: '01',
      highlight: 'Data Backed',
      subtitle: 'Growth Marketing',
      description: 'Every decision begins with insight. Every campaign ends with measurable impact. We combine analytics, behavioral understanding, and creative thinking to attract audiences that convert and customers that stay.',
      tags: ['Higher ROI', 'Efficient Acquisition', 'Long Term Brand Equity'],
      visual: <AnimatedImageCarousel />,
      reverse: false
    },
    {
      number: '02',
      highlight: 'Automation and',
      subtitle: 'Nurturing Systems',
      description: 'Automation is not noise. It is structure and intelligence. We build systems that anticipate behavior, score leads, and nurture relationships consistently.',
      tags: ['smooth workflows', 'steady engagement', 'scalable momentum'],
      visual: <AutomationVisual />,
      reverse: true
    },
    {
      number: '03',
      highlight: 'Branding and',
      subtitle: 'Experience Design',
      description: 'A brand is a promise. The experience is how you keep it. We create visual and verbal identities that last. Every touchpoint builds trust, strengthens perception, and improves recognition.',
      tags: ['unified identity', 'stronger perception', 'meaningful connection'],
      visual: <BrandingVisual />,
      reverse: false
    },
    {
      number: '04',
      highlight: 'Demand Generation and',
      subtitle: 'Market Positioning',
      description: 'Visibility is not enough. Relevance is what wins. We align message, content, and targeting to position your brand at the moment of decision.',
      tags: ['qualified demand', 'a consistent pipeline', 'credible authority'],
      visual: <DemandVisual />,
      reverse: true
    },
    {
      number: '05',
      highlight: 'Sales Training and',
      subtitle: 'Outsourcing Solutions',
      description: 'A strong marketing system needs an equally strong sales engine. We train, build, and supply sales teams equipped with behavioral insight, analytics, and proven methods.',
      tags: ['higher close rates', 'skilled sales talent', 'scalable revenue systems'],
      visual: <SalesVisual />,
      reverse: false
    },
    {
      number: '06',
      highlight: 'Video Marketing &',
      subtitle: 'Outsourcing Solutions',
      description: 'People skim, but they stop for video. We create story-driven videos, explainers, and performance content that turn complexity into clarity and emotion into action.',
      tags: ['deeper engagement', 'stronger recall', 'higher conversion'],
      visual: <VideoVisual />,
      reverse: true
    }
  ]

  return (
    <section className="bg-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-[#292929] mb-4">What We Do</h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            We help ambitious brands align creativity with data and technology.
            <br />
            We build growth engines that run with precision.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-12 lg:space-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-4 lg:gap-8 items-start lg:items-center`}
            >
              {/* Content Side */}
              <div className="flex-1 w-full lg:max-w-xl">
                {/* Number */}
                <div className="text-7xl lg:text-8xl font-bold text-gray-200 mb-3 leading-none">
                  {service.number}
                </div>
                
                {/* Title with Highlight Tag inline */}
                <div className="mb-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    <span className="inline-block bg-blue-600 text-white text-base lg:text-lg font-semibold px-3 py-1.5 rounded mr-2">
                      {service.highlight}
                    </span>
                    {service.subtitle}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-sm text-gray-800 bg-white border border-gray-300 rounded-lg px-4 py-2 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Visual Side */}
              <div className={`flex-1 flex w-full ${service.reverse ? 'justify-center lg:justify-start' : 'justify-center lg:justify-end'}`}>
                {service.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
