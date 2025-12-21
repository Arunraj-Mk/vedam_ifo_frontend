import React from 'react'
import StatCard from "./StatCard"
import CreativeTechBadge from "./CreativeTechBadge"
import logo from '@/svg/logo.svg'
import { motion } from 'framer-motion'

// Icon components (shared with desktop)
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
}

const AnimationSectionMobile = () => {
  const features: Feature[] = [
    {
      id: 'automation',
      title: 'Automation',
      icon: <AutomationIcon />,
      iconBg: 'bg-green-500',
    },
    {
      id: 'revenue',
      title: 'Revenue',
      icon: <RevenueIcon />,
      iconBg: 'bg-pink-600',
    },
    {
      id: 'growth',
      title: 'Growth Chart',
      icon: <GrowthChartIcon />,
      iconBg: 'bg-yellow-500',
    },
    {
      id: 'campaign',
      title: 'Campaign engine',
      icon: <CampaignIcon />,
      iconBg: 'bg-blue-500',
    },
    {
      id: 'creative',
      title: 'Creative technology',
      icon: <CreativeTechIcon />,
      iconBg: 'bg-cyan-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const centerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 15,
        delay: 0.2,
      },
    },
  }

  return (
    <section className="py-12 bg-white relative overflow-hidden md:hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stat Cards for Mobile - At the Top */}
        <div className="space-y-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <StatCard
              title="Growth chart"
              value="$125K"
              change="+12.5%"
              tiltDirection="right"
              tiltDegree={2}
              className="h-[100px] w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StatCard
              title="Revenue"
              value="10.2K"
              change="+8.3%"
              tiltDirection="left"
              tiltDegree={3}
              className="h-[100px] w-full"
            />
          </motion.div>
        </div>

        {/* Central Hub */}
        <motion.div
          className="flex justify-center mb-12"
          variants={centerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-white flex items-center justify-center rounded-full p-4 border-4 border-[#95BBFF] shadow-lg"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="logo" className="w-16 h-16" />
          </motion.div>
        </motion.div>

        {/* Feature Nodes - Single Column Layout for Mobile */}
        <motion.div
          className="flex flex-col items-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="w-full flex justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CreativeTechBadge
                text={feature.title}
                icon={feature.icon}
                iconBgColor={colorMap[feature.iconBg] || '#18A0FB'}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AnimationSectionMobile
