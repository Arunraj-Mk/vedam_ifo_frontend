import bag from '@/svg/bag.svg'
import network from '@/svg/network.svg'
import cart from '@/svg/cart.svg'
import { motion } from 'framer-motion'

const HowItWorksMobile = () => {
  const steps = [
    {
      number: '1',
      title: 'Audit & Market Clarity',
      description: 'We start by understanding your current marketing performance. We audit what\'s working, what\'s not, and study your market, competitors, and audience to find real growth opportunities.',
      icon: bag,
    },
    {
      number: '2',
      title: 'Design & Build',
      description: 'Based on insights, we design a custom marketing system. This includes strategy, automation, and AI-driven optimizations to build a smooth, scalable growth engine.',
      icon: network,
    },
    {
      number: '3',
      title: 'Launch & Optimize',
      description: 'We launch, track, and continuously improve performance. What works is scaled, what doesn\'t is fixed—driving consistent and measurable growth.',
      icon: cart,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section className="py-6 bg-white relative overflow-hidden md:hidden">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#292929] mb-2">
            How it works
          </h2>
          <p className="text-base text-[#292929] max-w-2xl mx-auto">
            We help ambitious brands unite creativity, data, and technology to build precise, scalable growth engines.
          </p>
        </motion.div>

        {/* Steps - Vertical Layout for Mobile */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="mb-4">
                <img
                  src={step.icon}
                  alt={`Step ${step.number} icon`}
                  className="w-16 h-20 mx-auto"
                />
              </div>

              {/* Number and Title */}
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <h3 className="font-semibold text-lg text-[#292929]">
                  {step.title}
                </h3>
                <div className="text-6xl font-bold text-gray-200 leading-none">
                  {step.number}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 max-w-sm mx-auto px-4">
                {step.description}
              </p>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="mt-6 flex justify-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-blue-400 to-blue-200"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksMobile
