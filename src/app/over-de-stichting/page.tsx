import FoundationHeroSection from '@/components/common/Hero'
import FoundationMissionSection from '@/components/common/Mission'

const OverDeStichting = () => {
  const imgClassName =
    'w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] md:h-[250px] lg:h-[300px] 2xl:h-[400px] 2xl:w-[650px] xl:w-[550px] h-[200px] sm:h-[200px]  xl:h-[350px] object-cover'
  return (
    <div className='flex flex-col w-full'>
      <FoundationHeroSection
        heading="Over Stichting Victoria's Origen"
        backgroundImg='/assets/images/about-the-foundation/foundation-bg-image.png'
        height='sm'
      />
      <FoundationMissionSection
        imageSrc='/assets/images/about-the-foundation/mission/mission-1.png'
        header='Onze Missie en Visie'
        description="Stichting Victoria's Origen is toegewijd aan het ondersteunen en versterken van gezinnen in kwetsbare situaties. Wij geloven dat elk gezin de kans verdient op een stabiele en hoopvolle toekomst. Onze missie is om praktische hulp, emotionele ondersteuning en duurzame oplossingen te bieden die gezinnen helpen hun eigen kracht te (her)vinden."
        reverseOnDesktop={false}
        customImageClassName={imgClassName}
      />
      <FoundationMissionSection
        imageSrc='/assets/images/about-the-foundation/mission/mission-2.png'
        header='Onze Aanpak'
        description={`We werken nauw samen met gezinnen om hun specifieke behoeften te begrijpen en bieden op maat gemaakte ondersteuning. Dit kan variëren van materiële hulp en budgetbegeleiding tot opvoedingsondersteuning en het verbinden met andere hulpbronnen in de gemeenschap. Transparantie, respect en vertrouwen staan centraal in onze werkwijze.\n\nWaarom Victoria's Origen?\n\nDe naam "Victoria's Origen" weerspiegelt onze kernwaarden: "Victoria" staat voor overwinning en veerkracht, terwijl "Origen" verwijst naar de oorsprong, de basis – het gezin. Wij streven ernaar gezinnen te helpen hun basis te versterken en uitdagingen te overwinnen.`}
        reverseOnDesktop={true}
        customImageClassName={imgClassName}
      />
    </div>
  )
}

export default OverDeStichting
