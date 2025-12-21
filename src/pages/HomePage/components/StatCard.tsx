import React from 'react';

interface StatCardProps {
  title: string
  value: string
  change: string
  changeColor?: 'green' | 'red'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  tiltDirection?: 'left' | 'right'
  tiltDegree?: number
  className?: string
}

const StatCard = ({
  title,
  value,
  change,
  changeColor = 'green',
  leftIcon,
  rightIcon,
  tiltDirection = 'left',
  tiltDegree = 2,
  className = ''
}: StatCardProps) => {
  const isPositive = change.startsWith('+')
  const changeColorClass = changeColor === 'green' || isPositive ? 'text-green-600' : 'text-red-600'

  // Calculate rotation based on direction
  const rotation = tiltDirection === 'left' ? -tiltDegree : tiltDegree

  return (
    <div
      className={` bg-white rounded-2xl p-2 shadow-xl transform hover:rotate-0 transition-transform duration-300 ${className}`}
      style={{
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1)',
        transform: `rotate(${rotation}deg)`
      }}
    >
      {/* Top Section - Two Icons */}
      <div className="flex items-center justify-between mb-2">
        {/* Left Icon */}
        <div className="text-yellow-500 text-xl">
          {leftIcon || '⚡'}
        </div>

        {/* Right Icon */}
        <div className="text-gray-600">
          {rightIcon || (
            <svg 
              className="w-5 h-5 opacity-60" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="mb-2">
        <span className="text-sm  text-gray-600">{title}</span>
      </div>

      {/* Main Value */}
      <div className="mb-2 flex">
        <h3 className="text-lg text-gray-900 ">{value}</h3>

        <span className={`text-base font-semibold ${changeColorClass}`}>
          {change}
        </span>
      </div>

      {/* Percentage Change */}
      <div>
     
      </div>
    </div>
  )
}


export default StatCard