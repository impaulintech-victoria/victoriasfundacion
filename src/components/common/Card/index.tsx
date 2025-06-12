'use client'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: string
  rounded?: string
  shadow?: boolean
  isComingSoon?: boolean
}

const Card = ({
  children,
  className = '',
  padding = 'p-6',
  rounded = 'rounded-3xl',
  shadow = true,
  isComingSoon = false,
}: CardProps) => {
  return (
    <div
      className={`relative bg-white ${rounded} ${padding} ${
        shadow ? 'shadow-[0_10px_30px_rgba(0,0,0,0.05)]' : ''
      } ${className}`}
    >
      {isComingSoon && (
        <div className='z-10 absolute inset-0 flex justify-center items-center backdrop-blur-xs p-6 rounded-2xl'>
          <span className='font-bold text-primary text-xl'>Coming Soon</span>
        </div>
      )}
      {children}
    </div>
  )
}

export default Card
