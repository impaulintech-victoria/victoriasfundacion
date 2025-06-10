'use client'

import HeroSection from '@/components/common/Hero/HeroSection'

const HeroLandingContainer = () => {
  const handlePrimaryClick = async () => {
    // Add your primary button action here
  }

  const handleSecondaryClick = async () => {
    // Add your secondary button action here
  }
  return (
    <HeroSection
      heading='Bouwen aan een hoopvolle toekomst'
      description="Stichting Victoria's Origen zet zich in voor gezinnen in kwetsbare situaties, omdat ieder gezin een sterke basis verdient."
      primaryBtnText='Ontdek hoe u kunt helpen'
      primaryBtnOnTap={handlePrimaryClick}
      secondaryBtnText='Meer over ons'
      secondaryBtnOnTap={handleSecondaryClick}
      backgroundImg='/landing/landing-image.png'
      height='lg'
    />
  )
}

export default HeroLandingContainer
