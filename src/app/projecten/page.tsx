'use client'
import HeroSection from '@/components/common/Hero'

const Projecten = () => {
  return (
    <div id='main-container' className='flex flex-col w-full'>
      <HeroSection
        heading='Bouwen aan een hoopvolle toekomst'
        description="Stichting Victoria's Origen zet zich in voor gezinnen in kwetsbare situaties, omdat ieder gezin een sterke basis verdient."
        primaryBtnText='Ontdek hoe u kunt helpen'
        secondaryBtnText='Meer over ons'
        backgroundImg='/landing/hero-image.png'
        height='lg'
      />
    </div>
  )
}

export default Projecten
