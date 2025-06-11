import { LucideIcon } from 'lucide-react'

interface SocialIconProps {
  icon: LucideIcon
  strokeWidth?: number
  strokeColor?: string
}

function SocialIcon({
  icon: Icon,
  strokeWidth = 1,
  strokeColor = 'black',
}: SocialIconProps) {
  return (
    <div className='bg-[#F5E1E6] p-2 border border-primary rounded-full'>
      <Icon
        className={`fill-primary stroke-${strokeColor} size-4`}
        strokeWidth={strokeWidth}
      />
    </div>
  )
}

export default SocialIcon
