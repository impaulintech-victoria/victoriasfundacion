import FadedBgImage from "@/components/common/FadedBgImage";
import React from "react";

const CallToActionLandingContainer = () => {
  return (
    <div className="relative px-5 py-8 2xl:py-14 w-full">
      <FadedBgImage
        src={"/landing/achievements/landing-achievement-bg.png"}
        alt="achievement-bg"
        bgColor="bg-primary"
      />
      <div className="z-10 relative flex flex-col justify-center items-center gap-7 2xl:gap-14 h-full">
        <h2 className="bg-accent px-4 py-1 border border-primary rounded-full text-base 2xl:text-lg">
          Wat we bereiken
        </h2>
      </div>
    </div>
  );
};

export default CallToActionLandingContainer;
