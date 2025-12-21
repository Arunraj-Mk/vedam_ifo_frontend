import React from 'react'
import StatCard from "./StatCard"
import CreativeTechBadge from "./CreativeTechBadge"
import logo from '@/svg/logo.svg'
import { motion } from 'framer-motion'

import AnimatedBottomCurve from "./AnimatedBottomCurve"
import AnimationSectionMobile from "./AnimationSectionMobile"

// Icon components
const AutomationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const RevenueIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3V21H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 16L12 11L16 15L21 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 10V3H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const GrowthChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="4" height="18" rx="1" fill="white"/>
    <rect x="9" y="8" width="4" height="13" rx="1" fill="white"/>
    <rect x="15" y="13" width="4" height="8" rx="1" fill="white"/>
  </svg>
)

const CampaignIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
    <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const CreativeTechIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="12" height="12" rx="1" stroke="white" strokeWidth="2" fill="none" />
    <rect x="8" y="4" width="1.5" height="2" fill="white" />
    <rect x="11" y="4" width="1.5" height="2" fill="white" />
    <rect x="14.5" y="4" width="1.5" height="2" fill="white" />
    <rect x="8" y="18" width="1.5" height="2" fill="white" />
    <rect x="11" y="18" width="1.5" height="2" fill="white" />
    <rect x="14.5" y="18" width="1.5" height="2" fill="white" />
    <rect x="4" y="8" width="2" height="1.5" fill="white" />
    <rect x="4" y="11" width="2" height="1.5" fill="white" />
    <rect x="4" y="14.5" width="2" height="1.5" fill="white" />
    <rect x="18" y="8" width="2" height="1.5" fill="white" />
    <rect x="18" y="11" width="2" height="1.5" fill="white" />
    <rect x="18" y="14.5" width="2" height="1.5" fill="white" />
  </svg>
)

// Color mapping
const colorMap: { [key: string]: string } = {
  'bg-green-500': '#10B981',
  'bg-pink-600': '#DB2777',
  'bg-yellow-500': '#EAB308',
  'bg-blue-500': '#3B82F6',
  'bg-cyan-500': '#06B6D4',
}

interface Feature {
  id: string
  title: string
  icon: React.ReactNode
  iconBg: string
  position: string
  x: string
  y: string
  card?: {
    title: string
    metric: string
    change: string
    icon: string
  }
}

const AnimationSection = () => {
  const features: Feature[] = [
    {
      id: 'automation',
      title: 'Automation',
      icon: <AutomationIcon />,
      iconBg: 'bg-green-500',
      position: 'top-middle',
      x: '50%',
      y: '10%',
    },
    {
      id: 'revenue',
      title: 'Revenue',
      icon: <RevenueIcon />,
      iconBg: 'bg-pink-600',
      position: 'top-left',
      x: '15%',
      y: '15%',
      card: {
        title: 'Revenue',
        metric: '8,500,000',
        change: '+150%',
        icon: '⚡',
      },
    },
    {
      id: 'growth',
      title: 'Growth Chart',
      icon: <GrowthChartIcon />,
      iconBg: 'bg-yellow-500',
      position: 'top-right',
      x: '85%',
      y: '15%',
      card: {
        title: 'Growth chart',
        metric: '$6,240.28',
        change: '+2%',
        icon: 'K',
      },
    },
    {
      id: 'campaign',
      title: 'Campaign engine',
      icon: <CampaignIcon />,
      iconBg: 'bg-blue-500',
      position: 'bottom-left',
      x: '20%',
      y: '85%',
    },
    {
      id: 'creative',
      title: 'Creative technology',
      icon: <CreativeTechIcon />,
      iconBg: 'bg-cyan-500',
      position: 'bottom-right',
      x: '80%',
      y: '85%',
    },
  ]

  // Generate curved path from center to a point (using viewBox coordinates: 0-1000 width, 0-700 height)
  // Available for future use when connecting lines are needed
  // const generateCurvedPath = (x: string, y: string) => {
  //   // Center of the viewBox
  //   const centerX = 500  // 50% of 1000
  //   const centerY = 350  // 50% of 700
  //   
  //   // Convert percentage to viewBox coordinates
  //   const nodeX = (parseFloat(x) / 100) * 1000
  //   const nodeY = (parseFloat(y) / 100) * 700
  //   
  //   // Calculate control point for smooth curve
  //   const dx = nodeX - centerX
  //   const dy = nodeY - centerY
  //   
  //   // Control point positioned to create a smooth arc (adjusts based on direction)
  //   const controlX = centerX + dx * 0.5
  //   const controlY = centerY + dy * 0.3 - Math.abs(dy) * 0.15
  //   
  //   return `M ${centerX} ${centerY} Q ${controlX} ${controlY}, ${nodeX} ${nodeY}`
  // }

  return (
    <div>
      {/* Mobile View - Separate Component */}
      <div className="md:hidden">
        <AnimationSectionMobile />
      </div>

      {/* Desktop View - Original Code Unchanged */}
      <div className="hidden md:block">


  <motion.div 
    className="absolute z-10 left-[40px] top-[1800px]"
    initial={{ opacity: 0, scale: 0.8, x: -50 }}
    whileInView={{ opacity: 1, scale: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ 
      duration: 1, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    }}
    whileHover={{ 
      scale: 1.05,
      y: -5,
      transition: { type: "spring", stiffness: 300 }
    }}
  >
    <StatCard 
      title="Growth chart "
      value="$125K"
      change="+12.5%"
      tiltDirection="right"
      tiltDegree={2}
      className="h-[120px] w-[260px]"
    />
  </motion.div>


{/* Tilt RIGHT (+3deg) */}

<motion.div 
  className="z-10 absolute right-[40px] top-[1800px]"
  initial={{ opacity: 0, y: -50, x: 50 }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ 
    duration: 1.2, 
    ease: "easeOut", 
    delay: 0.3,
    type: "spring",
    stiffness: 100
  }}
  whileHover={{ 
    scale: 1.05,
    y: -5,
    transition: { type: "spring", stiffness: 300 }
  }}
>
  <StatCard 
    title="Revenue"
    value="10.2K"
    change="+8.3%"
    tiltDirection="left"
    className="h-[120px] w-[260px]"
    tiltDegree={3}
  />
</motion.div>

<motion.div 
  className="absolute w-[240px] h-[240px] z-10 left-[450px] top-[2000px]"
  style={{
    transform: 'rotate(90deg)',
  }}
  initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <AnimatedBottomCurve direction="left" />
</motion.div>

<motion.div 
  className="absolute w-[240px] h-[240px] z-10 left-[830px] top-[2000px]"
  style={{
    transform: 'rotate(180deg)',
  }}
  initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, delay: 0.7 }}
>
  <AnimatedBottomCurve direction="left" />
</motion.div>

<motion.div 
  className="absolute w-[240px] h-[240px] z-10 left-[830px] top-[2250px]"
  style={{
    transform: 'rotate(90deg)',
  }}
  initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  <AnimatedBottomCurve direction="left" />
</motion.div>

<motion.div 
  className="absolute w-[240px] h-[240px] z-10 left-[430px] top-[2250px]"
  style={{
    transform: 'rotate(360deg)',
  }}
  initial={{ opacity: 0, scale: 0.5, rotate: 360 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, delay: 0.9 }}
>
  <AnimatedBottomCurve direction="left" />
</motion.div>


  {/* <div className="absolute w-[240px]  h-[240px]  z-10 left-[480px] top-[2100px]"
style={{
  transform: 'rotate(90deg)',
}}
>
<AnimatedBottomCurve direction="left" />
  </div> */}



  {/* <div className="absolute w-[240px]  h-[240px]  z-10 left-[690px] top-[2100px]"
style={{
  transform: 'rotate(90deg)',
}}
>
<AnimatedBottomCurve direction="left" />
  </div> */}


  {/* <div className="absolute w-[240px]  h-[240px]  z-10 left-[700px] top-[2100px]"
style={{
  transform: 'rotate(90deg)',
}}
>
<AnimatedBottomCurve direction="left" />
  </div> */}





    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}







        <div className="text-center mb-16">
         
        
        </div>

        {/* Central Hub with Connected Nodes */}
        <div className="relative h-[600px] lg:h-[700px] max-w-5xl mx-auto" id="animation-container">
          {/* SVG for animated connecting lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            style={{ overflow: 'visible' }}
            viewBox="0 0 1000 700"
            preserveAspectRatio="xMidYMid meet"
          >
            {features.map(() => (
              <></>
            ))}
          </svg>

          {/* Central Node */}
          <motion.div
            className="absolute bg-white flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-full p-3 border-4 border-[#95BBFF]"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              delay: 0.3,
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.6 }
            }}
          >
            <img src={logo} alt="logo" className=" " />
          </motion.div>

          {/* Feature Nodes */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="absolute z-20"
              style={{
                left: feature.x,
                top: feature.y,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: 0.5 + index * 0.15,
              }}
              whileHover={{ 
                scale: 1.15,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <CreativeTechBadge 
                text={feature.title}
                icon={feature.icon}
                iconBgColor={colorMap[feature.iconBg] || '#18A0FB'}
              />

              {/* Data Cards for specific features */}
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
      </div>
    </div>
  )
}

export default AnimationSection
