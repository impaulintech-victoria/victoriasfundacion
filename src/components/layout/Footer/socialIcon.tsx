import { LucideIcon } from 'lucide-react'

interface SocialIconProps {
  icon: LucideIcon
}

function SocialIcon({ icon: Icon }: SocialIconProps) {
  return (
    <div className='bg-[#F5E1E6] hover:bg-accent/60 hover:shadow-md p-2 border border-primary rounded-full transition-all duration-200 cursor-pointer'>
      <Icon className={`fill-none stroke-primary stroke-2 size-4`} />
    </div>
  )
}

export default SocialIcon
