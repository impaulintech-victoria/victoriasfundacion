import AchievementsSection from '@/components/common/Achievement'
import HeroLandingContainer from '@/components/pages/home/hero'
import MissionLandingContainer from '@/components/pages/home/mission'

export default function Home() {
  const achievements = [
    {
      imageSrc: '/assets/images/landing/achievements/achievement-card-1.png',
      title: '100+',
      description: 'Gezinnen ondersteund met directe hulp en begeleiding',
      comingSoon: false,
    },
    {
      imageSrc: '/assets/images/landing/achievements/achievement-card-2.png',
      title: '5',
      description: 'Lopende projecten gericht op duurzame verandering',
      comingSoon: false,
    },
    {
      imageSrc: '/assets/images/landing/achievements/achievement-card-3.png',
      title: '€50K+',
      description: "Verzameld ten behoeve van ondersteuningsprogramma's",
      comingSoon: false,
    },
  ]
  return (
    <div id='main-container' className='flex flex-col w-full'>
      <HeroLandingContainer />
      <MissionLandingContainer />
      <AchievementsSection
        bgImageSrc='/assets/images/landing/achievements/landing-achievement-bg.png'
        bgImageAlt='achievement-bg'
        sectionTagline='Wat we bereiken'
        sectionTitle='Onze Impact'
        sectionSubtitle='Samen maken we het verschil voor gezinnen die onze steun het hardst nodig hebben.'
        achievements={achievements}
      />
    </div>
  )
}
