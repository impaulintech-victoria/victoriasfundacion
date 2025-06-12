'use client'

import AchievementsSection from '@/components/common/Achievement'
import ProjectHeroSection from '@/components/common/Hero'

const Projecten = () => {
  const achievements = [
    {
      imageSrc: '/landing/achievements/achievement-card-1.png',
      title: '100+',
      description: 'Gezinnen ondersteund met directe hulp en begeleiding',
    },
    {
      imageSrc: '/landing/achievements/achievement-card-2.png',
      title: '5',
      description: 'Lopende projecten gericht op duurzame verandering',
    },
    {
      imageSrc: '/landing/achievements/achievement-card-3.png',
      title: '€50K+',
      description: "Verzameld ten behoeve van ondersteuningsprogramma's",
    },
  ]

  return (
    <div id='main-container' className='flex flex-col w-full'>
      <ProjectHeroSection
        heading='Onze Projecten'
        description='Ontdek de initiatieven waarmee we gezinnen ondersteunen en een positieve impact maken in de gemeenschap.'
        backgroundImg='/assets/images/project/hero-image.png'
        height='sm'
      />
      <AchievementsSection
        bgImageSrc='/landing/achievements/landing-achievement-bg.png'
        bgImageAlt='achievement-bg'
        sectionTagline='Wat we bereiken'
        sectionTitle='Onze Impact'
        sectionSubtitle='Samen maken we het verschil voor gezinnen die onze steun het hardst nodig hebben.'
        achievements={achievements}
      />
    </div>
  )
}

export default Projecten
