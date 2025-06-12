import { cn } from '@/lib/utils/utils'
import Image from 'next/image'

interface FadedBgImageProps {
  src: string
  alt?: string
  className?: string
  bgColor?: string
  opacity?: number
}

const FadedBgImage = ({
  src,
  alt = 'Hero Background',
  className,
  bgColor,
  opacity = 0.5,
}: FadedBgImageProps) => {
  return (
    <div className=''>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn('object-cover z-10', className)}
        priority
      />
      <div
        className={`absolute inset-0 z-0 bg-${bgColor}`}
        style={{ opacity: opacity }}
      />
    </div>
  )
}

export default FadedBgImage
