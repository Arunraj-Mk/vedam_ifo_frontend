import { ReactNode } from 'react'

// Default microchip icon component
const DefaultMicrochipIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    {/* Microchip/Processor icon */}
    <rect x="6" y="6" width="12" height="12" rx="1" stroke="white" strokeWidth="2" fill="none" />
    {/* Top pins */}
    <rect x="8" y="4" width="1.5" height="2" fill="white" />
    <rect x="11" y="4" width="1.5" height="2" fill="white" />
    <rect x="14.5" y="4" width="1.5" height="2" fill="white" />
    {/* Bottom pins */}
    <rect x="8" y="18" width="1.5" height="2" fill="white" />
    <rect x="11" y="18" width="1.5" height="2" fill="white" />
    <rect x="14.5" y="18" width="1.5" height="2" fill="white" />
    {/* Left pins */}
    <rect x="4" y="8" width="2" height="1.5" fill="white" />
    <rect x="4" y="11" width="2" height="1.5" fill="white" />
    <rect x="4" y="14.5" width="2" height="1.5" fill="white" />
    {/* Right pins */}
    <rect x="18" y="8" width="2" height="1.5" fill="white" />
    <rect x="18" y="11" width="2" height="1.5" fill="white" />
    <rect x="18" y="14.5" width="2" height="1.5" fill="white" />
  </svg>
)

interface CreativeTechBadgeProps {
  text: string
  icon?: ReactNode
  iconBgColor?: string
}

const CreativeTechBadge = ({
  text,
  icon,
  iconBgColor = '#18A0FB'
}: CreativeTechBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2.5 shadow-md border border-gray-200">
      {/* Circular icon container */}
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: iconBgColor }}
      >
        {icon || <DefaultMicrochipIcon />}
      </div>
      
      {/* Text */}
      <span className="text-[#1A204C] font-medium text-sm whitespace-nowrap">
        {text}
      </span>
    </div>
  )
}

export default CreativeTechBadge
