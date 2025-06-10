<<<<<<< HEAD
<<<<<<< HEAD
import HeroLandingContainer from '@/components/pages/home/Hero/HeroLandingContainer'
import AchievementsLandingContainer from '@/components/pages/home/achievement/achievementLandingContainer'
import CallToActionLandingContainer from '@/components/pages/home/callToAction/callToActionLandingContainer'
import MissionLandingContainer from '@/components/pages/home/mission/missionLandingContainer'

export default function Home() {
  return (
    <div id='main-container' className='flex flex-col w-full'>
=======
=======
import AchievementsLandingContainer from "@/components/pages/home/achievement/achievementLandingContainer";
<<<<<<< HEAD
>>>>>>> 62348b1 (feat(achievements): create achievements section with reusable card)
=======
import CallToActionLandingContainer from "@/components/pages/home/callToAction/callToActionLandingContainer";
>>>>>>> a691aa9 (feat(cta): implement call to action section with reusable bg image and card)
import HeroLandingContainer from "@/components/pages/home/hero/HeroLandingContainer";
import MissionLandingContainer from "@/components/pages/home/mission/missionLandingContainer";

export default function Home() {
  return (
<<<<<<< HEAD
    <div id="main-container" className="flex flex-col gap-10 w-full">
>>>>>>> 22934ab (rebased to main)
=======
    <div id="main-container" className="flex flex-col w-full">
>>>>>>> a691aa9 (feat(cta): implement call to action section with reusable bg image and card)
      <HeroLandingContainer />
      <MissionLandingContainer />
      <AchievementsLandingContainer />
      <CallToActionLandingContainer />
    </div>
  );
}
