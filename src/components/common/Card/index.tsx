'use client'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: string
  rounded?: string
  shadow?: boolean
}

const Card = ({
  children,
  className = '',
  padding = 'p-6',
  rounded = 'rounded-3xl',
  shadow = true,
}: CardProps) => {
  return (
    <div
      className={`bg-white ${rounded} ${padding} ${shadow ? 'shadow-[0_10px_30px_rgba(0,0,0,0.05)]' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
