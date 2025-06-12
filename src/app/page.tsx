import AchievementsLandingContainer from '@/components/pages/home/achievement'
import HeroLandingContainer from '@/components/pages/home/hero'
import MissionLandingContainer from '@/components/pages/home/mission/missionLandingContainer'

export default function Home() {
  return (
    <div id='main-container' className='flex flex-col w-full'>
      <HeroLandingContainer />
      <MissionLandingContainer />
      <AchievementsLandingContainer />
    </div>
  )
}
