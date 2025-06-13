'use client'

import { useEffect, useRef, useState } from 'react'

interface TextAnimationWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
}

export default function TextAnimationWrapper({
  children,
  delay = 0,
  className = '',
  animation = 'fade-up',
}: TextAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  const getAnimationClasses = () => {
    if (!isVisible) {
      return 'opacity-0 translate-y-8'
    }

    switch (animation) {
      case 'fade-up':
        return 'opacity-100 translate-y-0'
      case 'fade-in':
        return 'opacity-100'
      case 'slide-left':
        return 'opacity-100 translate-x-0'
      case 'slide-right':
        return 'opacity-100 translate-x-0'
      default:
        return 'opacity-100 translate-y-0'
    }
  }

  const getInitialClasses = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-8'
      case 'fade-in':
        return 'opacity-0'
      case 'slide-left':
        return 'opacity-0 translate-x-8'
      case 'slide-right':
        return 'opacity-0 -translate-x-8'
      default:
        return 'opacity-0 translate-y-8'
    }
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? getAnimationClasses() : getInitialClasses()
      } ${className}`}
    >
      {children}
    </div>
  )
}
