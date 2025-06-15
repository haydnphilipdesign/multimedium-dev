import React from 'react'
import RobustImage from './RobustImage'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'full' | 'icon' | 'text'
  className?: string
}

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'full', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10', 
    lg: 'h-14',
    xl: 'h-20'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }

  if (variant === 'icon') {
    return (
      <RobustImage 
        src="/multimedium-logo.png" 
        alt="Multimedium Logo"
        className={`${sizeClasses[size]} w-auto object-contain ${className}`}
        loading="eager"
        fallbackSrc="/logo.svg"
      />
    )
  }

  if (variant === 'text') {
    return (
      <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${className}`}>
        Multimedium
      </span>
    )
  }

  return (
    <RobustImage 
      src="/multimedium-logo.png" 
      alt="Multimedium - Professional Web Development"
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
      loading="eager"
      fallbackSrc="/logo.svg"
    />
  )
}

export default Logo