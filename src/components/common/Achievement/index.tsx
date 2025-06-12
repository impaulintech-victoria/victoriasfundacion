import FadedBgImage from '@/components/common/FadedBgImage'
import clsx from 'clsx'
import Image from 'next/image'

export type AchievementItem = {
  imageSrc: string
  title?: string
  description?: string
  tag?: string
  comingSoon?: boolean
}

type AchievementsSectionProps = {
  bgImageSrc: string
  bgImageAlt?: string
  bgColor?: string
  sectionTagline?: string
  sectionTitle?: string
  sectionSubtitle?: string
  achievements: AchievementItem[]
  version?: 'primary' | 'secondary'
  comingSoon?: boolean
}

const AchievementsSection = ({
  bgImageSrc,
  bgImageAlt = '',
  bgColor = '[#F5E1E6]',
  sectionTagline,
  sectionTitle,
  sectionSubtitle,
  achievements,
  version = 'primary',
}: AchievementsSectionProps) => {
  return (
    <div className='relative px-5 py-32 w-full'>
      <FadedBgImage src={bgImageSrc} alt={bgImageAlt} bgColor={bgColor} />

      <div className='z-10 relative flex flex-col justify-center items-center gap-10 2xl:gap-16'>
        {sectionTagline && (
          <h2 className='bg-accent px-4 py-1 border border-primary rounded-full text-base 2xl:text-lg'>
            {sectionTagline}
          </h2>
        )}

        {(sectionTitle || sectionSubtitle) && (
          <section className='flex flex-col items-center gap-4 text-center'>
            {sectionTitle && (
              <h1 className='font-bold text-primary text-4xl 2xl:text-5xl'>
                {sectionTitle}
              </h1>
            )}
            {sectionSubtitle && (
              <p className='max-w-xl text-muted text-sm sm:text-base 2xl:text-lg'>
                {sectionSubtitle}
              </p>
            )}
          </section>
        )}

        <section
          id='cards-section'
          className='flex flex-wrap justify-center gap-5 xl:gap-7 2xl:gap-10 max-w-screen-xl w-full'
        >
          {achievements.map(
            ({ imageSrc, title, description, tag, comingSoon }, index) => (
              <div
                key={index}
                className={clsx(
                  'relative group flex flex-col items-center gap-4 bg-white shadow-lg px-4 py-6 lg:px-6 lg:py-8 rounded-xl',
                  'w-full sm:w-[48%] md:w-[31%] lg:w-[22%] max-w-xs',
                  version === 'secondary' && 'p-4 lg:p-5',
                )}
              >
                {version === 'secondary' && tag && (
                  <span className='absolute top-3 right-3 bg-[#70142e] text-white text-md px-5 py-2 rounded-full shadow-sm z-30'>
                    {tag}
                  </span>
                )}

                <div className='relative w-full'>
                  <Image
                    src={imageSrc}
                    alt={title || `achievement-${index}`}
                    width={220}
                    height={130}
                    className={clsx(
                      'rounded-md object-cover w-full h-[120px] sm:h-[140px] lg:h-[160px] transition-all duration-300 ease-in-out',
                      comingSoon && 'blur-sm brightness-75',
                    )}
                  />
                  {comingSoon && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className='text-white text-sm sm:text-base lg:text-lg font-semibold px-3 py-1 rounded'>
                        Binnenkort beschikbaar
                      </span>
                    </div>
                  )}
                </div>

                {title && (
                  <h3 className='font-bold text-primary text-xl lg:text-2xl text-center'>
                    {title}
                  </h3>
                )}

                {description && (
                  <section className='flex flex-col items-center gap-2 text-center'>
                    {version === 'primary' && (
                      <span className='bg-accent border border-primary rounded-full w-[100px] sm:w-[130px] h-[6px] group-hover:w-full transition-all duration-300 ease-in-out' />
                    )}
                    <p
                      className={clsx(
                        'text-muted text-sm sm:text-base max-w-[220px]',
                        version === 'secondary' && 'mt-2 text-center',
                      )}
                    >
                      {description}
                    </p>
                  </section>
                )}
              </div>
            ),
          )}
        </section>
      </div>
    </div>
  )
}

export default AchievementsSection
