import FadedBgImage from '@/components/common/FadedBgImage'
import TextAnimationWrapper from '@/components/others/textAnimationWrapper'
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
    <div className='relative px-5 py-10 2xl:py-32 w-full'>
      <FadedBgImage src={bgImageSrc} alt={bgImageAlt} bgColor={bgColor} />

      <div className='z-10 relative flex flex-col justify-center items-center gap-10 2xl:gap-16'>
        {sectionTagline && (
          <TextAnimationWrapper delay={0} animation='fade-in'>
            <h2 className='bg-accent px-4 py-1 border border-primary rounded-full text-base 2xl:text-lg'>
              {sectionTagline}
            </h2>
          </TextAnimationWrapper>
        )}

        {(sectionTitle || sectionSubtitle) && (
          <section className='flex flex-col items-center gap-4 text-center'>
            {sectionTitle && (
              <TextAnimationWrapper delay={200} animation='fade-up'>
                <h1 className='font-bold text-primary text-4xl 2xl:text-5xl'>
                  {sectionTitle}
                </h1>
              </TextAnimationWrapper>
            )}
            {sectionSubtitle && (
              <TextAnimationWrapper delay={400} animation='fade-up'>
                <p className='max-w-xl text-muted text-sm sm:text-base 2xl:text-lg'>
                  {sectionSubtitle}
                </p>
              </TextAnimationWrapper>
            )}
          </section>
        )}

        <section
          id='cards-section'
          className='flex flex-wrap justify-center gap-5 2xl:gap-10 xl:gap-7 px-5 w-screen'
        >
          {achievements.map(
            ({ imageSrc, title, description, tag, comingSoon }, index) => (
              <TextAnimationWrapper
                key={index}
                delay={600 + index * 200}
                animation='fade-up'
                className='w-full sm:w-[48%] md:w-[31%] lg:w-[30%] max-w-[400px]'
              >
                <div
                  className={clsx(
                    'group relative flex flex-col items-center gap-4 bg-white shadow-lg px-4 lg:px-6 py-6 lg:py-8 rounded-xl h-full',
                    version === 'secondary' && 'p-4 lg:p-5',
                  )}
                >
                  {version === 'secondary' && tag && (
                    <span className='top-3 right-3 z-30 absolute bg-[#70142e] shadow-sm px-5 py-2 rounded-full text-md text-white'>
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
                        'rounded-md w-full h-[120px] sm:h-[140px] lg:h-[160px] object-cover transition-all duration-300 ease-in-out',
                        comingSoon && 'blur-sm brightness-75',
                      )}
                    />
                    {comingSoon && (
                      <div className='absolute inset-0 flex justify-center items-center'>
                        <span className='px-3 py-1 rounded font-semibold text-white text-sm sm:text-base lg:text-lg'>
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
                        <span className='bg-accent border border-primary rounded-full w-full sm:w-[130px] group-hover:w-full h-[6px] transition-all duration-300 ease-in-out' />
                      )}
                      <p
                        className={clsx(
                          'w-full max-w-[300px] text-muted text-sm sm:text-base',
                          version === 'secondary' && 'mt-2 text-center',
                        )}
                      >
                        {description}
                      </p>
                    </section>
                  )}
                </div>
              </TextAnimationWrapper>
            ),
          )}
        </section>
      </div>
    </div>
  )
}

export default AchievementsSection
