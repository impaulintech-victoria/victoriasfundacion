'use client'

import AchievementsSection from '@/components/common/Achievement'
import ProjectHeroSection from '@/components/common/Hero'

const Projecten = () => {
  const achievements = [
    {
      imageSrc: '/assets/images/project/project-Noodhulp Pakketten.png',
      title: 'Noodhulp Pakketten',
      description:
        'Directe ondersteuning met voedsel, kleding en essentiële benodigdheden voor gezinnen in acute nood.',
      tag: 'Lopend',
    },
    {
      imageSrc: '/assets/images/project/project-Budget Begeleiding Traject.png',
      title: 'Budget Begeleiding Traject',
      description:
        'Individuele begeleidingstrajecten om gezinnen te helpen financieel stabieler te worden.',
      tag: 'Lopend',
    },
    {
      imageSrc:
        '/assets/images/project/project-Opvoedondersteuning Groepen.png',
      title: 'Opvoedondersteuning Groepen',
      description:
        'Workshops en groepsbijeenkomsten voor ouders om opvoedingsvaardigheden te versterken.',
      tag: 'Lopend',
    },
    {
      imageSrc:
        '/assets/images/project/project-Zomerkamp voor Kinderen (Planning).png',
      title: 'Zomerkamp voor Kinderen (Planning)',
      description:
        'Een gepland zomerkamp om kinderen uit kwetsbare gezinnen een onvergetelijke ervaring te bieden.',
      tag: 'Toekomstig',
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
        version='secondary'
        achievements={achievements}
      />
    </div>
  )
}

export default Projecten
