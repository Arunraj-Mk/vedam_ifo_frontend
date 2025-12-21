import React from 'react'

interface TechBadgeProps {
  icon: React.ReactNode | string
  text: string
  iconBgColor?: string
  iconColor?: string
  className?: string
}

const TechBadge = ({ 
  icon, 
  text, 
  iconBgColor = 'bg-blue-500', 
  iconColor = 'text-white',
  className = '' 
}: TechBadgeProps) => {
  return (
    <div 
      className={`inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg ${className}`}
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* Icon Circle */}
      <div className={`w-12 h-12 rounded-full ${iconBgColor} ${iconColor} flex items-center justify-center flex-shrink-0`}>
        {typeof icon === 'string' ? (
          <img src={icon} alt="" className="w-6 h-6" />
        ) : (
          icon
        )}
      </div>
      
      {/* Text */}
      <span className="text-lg lg:text-xl font-semibold text-gray-900 whitespace-nowrap">
        {text}
      </span>
    </div>
  )
}

export default TechBadge