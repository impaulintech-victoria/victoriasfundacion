import FadedBgImage from '@/components/common/FadedBgImage'
import Image from 'next/image'

export type AchievementItem = {
  imageSrc: string
  title?: string
  description?: string
}

type AchievementsSectionProps = {
  bgImageSrc: string
  bgImageAlt?: string
  bgColor?: string
  sectionTagline?: string
  sectionTitle?: string
  sectionSubtitle?: string
  achievements: AchievementItem[]
}

const AchievementsSection = ({
  bgImageSrc,
  bgImageAlt = '',
  bgColor = '[#F5E1E6]',
  sectionTagline,
  sectionTitle,
  sectionSubtitle,
  achievements,
}: AchievementsSectionProps) => {
  return (
    <div className='relative px-5 py-8 sm:py-10 lg:py-12 2xl:py-18 xl:py-14 w-full'>
      <FadedBgImage src={bgImageSrc} alt={bgImageAlt} bgColor={bgColor} />
      <div className='z-10 relative flex flex-col justify-center items-center gap-7 2xl:gap-14 h-full'>
        {sectionTagline && (
          <h2 className='bg-accent px-4 py-1 border border-primary rounded-full text-base 2xl:text-lg'>
            {sectionTagline}
          </h2>
        )}

        {(sectionTitle || sectionSubtitle) && (
          <section className='flex flex-col items-center gap-3'>
            {sectionTitle && (
              <h1 className='font-bold text-primary text-4xl 2xl:text-5xl'>
                {sectionTitle}
              </h1>
            )}
            {sectionSubtitle && (
              <p className='max-w-xs 2xl:max-w-2xl text-muted text-sm 2xl:text-lg text-center'>
                {sectionSubtitle}
              </p>
            )}
          </section>
        )}

        <section
          id='cards-section'
          className='flex sm:flex-row flex-col items-stretch gap-3 lg:gap-5 2xl:gap-10 xl:gap-7 h-full'
        >
          {achievements.map(({ imageSrc, title, description }, index) => (
            <div
              key={index}
              id='achievement-card'
              className='group flex flex-col flex-1 gap-4 bg-white shadow-lg px-3 lg:px-5 2xl:px-7 py-5 lg:py-7 2xl:py-10 border border-black rounded-xl'
            >
              <Image
                src={imageSrc}
                alt={title || `achievement-${index}`}
                width={500}
                height={500}
                className='items-center group-hover:shadow-md group-hover:rounded-lg w-[250px] lg:w-[300px] 2xl:w-[400px] h-[150px] lg:h-[200px] 2xl:h-[300px] object-cover group-hover:scale-105 transition-all duration-300 ease-in-out'
              />

              {title && (
                <h1 className='font-bold text-primary text-xl lg:text-2xl 2xl:text-4xl text-center group-hover:scale-110 transition-all duration-300 ease-in-out'>
                  {title}
                </h1>
              )}

              {description && (
                <section className='flex flex-col items-center gap-2 lg:gap-4 2xl:gap-6'>
                  <span className='bg-accent border border-primary rounded-full w-[130px] lg:w-[150px] 2xl:w-[200px] group-hover:w-full h-[7px] transition-all duration-300 ease-in-out' />
                  <p className='max-w-[250px] lg:max-w-sm 2xl:max-w-sm text-muted text-sm lg:text-base 2xl:text-xl text-center'>
                    {description}
                  </p>
                </section>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default AchievementsSection
