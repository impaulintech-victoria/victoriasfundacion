import AchievementsLandingContainer from "@/components/pages/home/achievement/achievementLandingContainer";
import HeroLandingContainer from "@/components/pages/home/hero/HeroLandingContainer";
import AchievementsLandingContainer from "@/components/pages/home/achievement/achievementLandingContainer";
import MissionLandingContainer from "@/components/pages/home/mission/missionLandingContainer";

export default function Home() {
  return (
    <div id="main-container" className="flex flex-col gap-10 w-full">
      <HeroLandingContainer />
      <MissionLandingContainer />
      <AchievementsLandingContainer />
    </div>
  );
}
