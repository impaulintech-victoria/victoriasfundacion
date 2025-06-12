import FadedBgImage from '@/components/common/FadedBgImage'
import AchievementCard from './achievementCard'

const AchievementsLandingContainer = () => {
  const achievements = [
    {
      imageSrc: '/landing/achievements/achievement-card-1.png',
      title: '100+',
      description: 'Gezinnen ondersteund met directe hulp en begeleiding',
    },
    {
      imageSrc: '/landing/achievements/achievement-card-2.png',
      title: '5',
      description: 'Lopende projecten gericht op duurzame verandering',
    },
    {
      imageSrc: '/landing/achievements/achievement-card-3.png',
      title: '€50K+',
      description: "Verzameld ten behoeve van ondersteuningsprogramma's",
    },
  ]

  return (
    <div className='relative px-5 py-8 sm:py-10 lg:py-12 2xl:py-18 xl:py-14 w-full'>
      <FadedBgImage
        src={'/landing/achievements/landing-achievement-bg.png'}
        alt='achievement-bg'
        bgColor='[#F5E1E6]'
      />
      <div className='z-10 relative flex flex-col justify-center items-center gap-7 2xl:gap-14 h-full'>
        <h2 className='bg-accent px-4 py-1 border border-primary rounded-full text-base 2xl:text-lg'>
          Wat we bereiken
        </h2>
        <section className='flex flex-col items-center gap-3'>
          <h1 className='font-bold text-primary text-4xl 2xl:text-5xl'>
            Onze Impact
          </h1>
          <p className='max-w-xs 2xl:max-w-2xl text-muted text-sm 2xl:text-lg text-center'>
            Samen maken we het verschil voor gezinnen die onze steun het hardst
            nodig hebben.
          </p>
        </section>
        <section
          id='cards-section'
          className='flex sm:flex-row flex-col items-stretch gap-3 lg:gap-5 2xl:gap-10 xl:gap-7 h-full'
        >
          {achievements.map(({ imageSrc, title, description }, index) => (
            <AchievementCard
              key={index}
              imageSrc={imageSrc}
              title={title}
              description={description}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default AchievementsLandingContainer
