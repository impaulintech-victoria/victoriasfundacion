import HeroLandingContainer from '@/components/pages/home/Hero/HeroLandingContainer'
import MissionLandingContainer from '@/components/pages/home/mission/missionLandingContainer'

export default function Home() {
  return (
    <div id='main-container' className='flex flex-col gap-10 w-full'>
      <HeroLandingContainer />
      <MissionLandingContainer />
    </div>
  )
}
