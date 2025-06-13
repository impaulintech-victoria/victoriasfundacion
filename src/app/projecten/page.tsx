'use client'

import AchievementsSection from '@/components/common/Achievement'
import ProjectHeroSection from '@/components/common/Hero'
import TextAnimationWrapper from '@/components/others/textAnimationWrapper'

const Projecten = () => {
  const achievements = [
    {
      imageSrc: '/assets/images/project/project-Noodhulp Pakketten.png',
      title: 'Noodhulp Pakketten',
      description:
        'Directe ondersteuning met voedsel, kleding en essentiële benodigdheden voor gezinnen in acute nood.',
      tag: 'Lopend',
      comingSoon: true,
    },
    {
      imageSrc: '/assets/images/project/project-Budget Begeleiding Traject.png',
      title: 'Budget Begeleiding Traject',
      description:
        'Individuele begeleidingstrajecten om gezinnen te helpen financieel stabieler te worden.',
      tag: 'Lopend',
      comingSoon: true,
    },
    {
      imageSrc:
        '/assets/images/project/project-Opvoedondersteuning Groepen.png',
      title: 'Opvoedondersteuning Groepen',
      description:
        'Workshops en groepsbijeenkomsten voor ouders om opvoedingsvaardigheden te versterken.',
      tag: 'Lopend',
      comingSoon: true,
    },
    {
      imageSrc:
        '/assets/images/project/project-Zomerkamp voor Kinderen (Planning).png',
      title: 'Zomerkamp voor Kinderen',
      description:
        'Een gepland zomerkamp om kinderen uit kwetsbare gezinnen een onvergetelijke ervaring te bieden.',
      tag: 'Toekomstig',
      comingSoon: true,
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
      <TextAnimationWrapper delay={300} animation='fade-up'>
        <AchievementsSection
          bgImageSrc='/assets/images/landing/achievements/landing-achievement-bg.png'
          bgImageAlt='achievement-bg'
          version='secondary'
          achievements={achievements}
        />
      </TextAnimationWrapper>
    </div>
  )
}

export default Projecten
