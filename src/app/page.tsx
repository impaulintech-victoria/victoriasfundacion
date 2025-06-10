<<<<<<< HEAD
import HeroLandingContainer from '@/components/pages/home/Hero/HeroLandingContainer'
import AchievementsLandingContainer from '@/components/pages/home/achievement/achievementLandingContainer'
import CallToActionLandingContainer from '@/components/pages/home/callToAction/callToActionLandingContainer'
import MissionLandingContainer from '@/components/pages/home/mission/missionLandingContainer'

export default function Home() {
  return (
    <div id='main-container' className='flex flex-col w-full'>
=======
import HeroLandingContainer from "@/components/pages/home/hero/HeroLandingContainer";
import AchievementsLandingContainer from "@/components/pages/home/achievement/achievementLandingContainer";
import MissionLandingContainer from "@/components/pages/home/mission/missionLandingContainer";

export default function Home() {
  return (
    <div id="main-container" className="flex flex-col gap-10 w-full">
>>>>>>> 22934ab (rebased to main)
      <HeroLandingContainer />
      <MissionLandingContainer />
      <AchievementsLandingContainer />
      <CallToActionLandingContainer />
    </div>
  );
}
