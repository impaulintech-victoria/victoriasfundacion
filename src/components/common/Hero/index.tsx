'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface HeroProps {
  heading: string
  description?: string
  primaryBtnText?: string
  primaryBtnOnTap?: () => void | Promise<void>
  secondaryBtnText?: string
  secondaryBtnOnTap?: () => void | Promise<void>
  backgroundImg?: string
  position?: 'left' | 'right' | 'middle'
  height?: 'lg' | 'sm'
}

const HeroSection = (props: HeroProps) => {
  const {
    heading = 'Bouwen aan een hoopvolle toekomst',
    description,
    primaryBtnText,
    primaryBtnOnTap,
    secondaryBtnText,
    secondaryBtnOnTap,
    backgroundImg,
    position = 'left',
    height = 'lg',
  } = props

  return (
    <section
      id='hero-content'
      className={`z-0 relative flex 2xl:flex-row flex-col justify-end sm:justify-center bg-primary w-full overflow-hidden ${
        height === 'lg'
          ? 'h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[650px]'
          : 'h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[450px]'
      }`}
    >
      <div
        id='hero-content-text'
        className={`z-30 absolute flex flex-col justify-center self-center gap-4 2xl:gap-8 px-5 sm:px-8 md:px-10 lg:px-16 2xl:px-28 py-8 w-full ${
          position === 'left'
            ? 'items-start'
            : position === 'right'
              ? 'items-end'
              : 'items-center'
        }`}
      >
        <h1
          className={`max-w-[800px] pb-2 lg:max-w-[700px] 2xl:max-w-[950px] font-bold text-white 2xl:text-[5rem] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl line-clamp-2 ${
            position === 'left'
              ? 'text-left'
              : position === 'right'
                ? 'text-right'
                : 'text-center'
          }`}
        >
          {heading}
        </h1>
        <p
          className={`md:hidden 2xl:max-w-[950px] sm:max-w-md max-w-lg md:max-w-lg lg:max-w-lg font-light text-white text-sm ${
            position === 'left'
              ? 'text-left'
              : position === 'right'
                ? 'text-right'
                : 'text-center'
          }`}
        >
          {description}
        </p>
        <p
          className={`hidden 2xl:hidden md:block sm:max-w-md max-w-lg md:max-w-lg lg:max-w-2xl font-light text-white text-xl ${
            position === 'left'
              ? 'text-left'
              : position === 'right'
                ? 'text-right'
                : 'text-center'
          }`}
        >
          {description}
        </p>
        <p
          className={`hidden 2xl:block 2xl:max-w-[800px] sm:max-w-md max-w-lg md:max-w-lg lg:max-w-lg font-light text-white text-2xl leading-10 ${
            position === 'left'
              ? 'text-left'
              : position === 'right'
                ? 'text-right'
                : 'text-center'
          }`}
        >
          {description}
        </p>
        {primaryBtnText && secondaryBtnText && (
          <div
            id='hero-content-buttons'
            className={`flex justify-start items-center gap-3 sm:gap-5 2xl:gap-7 mt-2 sm:mt-4 2xl:mt-10 ${
              position === 'left'
                ? 'justify-start'
                : position === 'right'
                  ? 'justify-end'
                  : 'justify-center'
            }`}
          >
            {primaryBtnOnTap && primaryBtnText && (
              <Button
                variant={'default'}
                className='bg-accent hover:bg-accent/80 px-5 sm:px-7 2xl:px-10 py-5 lg:py-7 2xl:py-7 rounded-xl font-bold text-primary lg:text-md text-xs sm:text-sm lg:text-lg 2xl:text-lg cursor-pointer'
                onClick={primaryBtnOnTap}
              >
                {primaryBtnText}
              </Button>
            )}
            {secondaryBtnOnTap && secondaryBtnText && (
              <Button
                variant={'outline'}
                className='bg-transparent px-5 sm:px-7 2xl:px-10 py-5 lg:py-7 2xl:py-7 border-accent rounded-xl font-bold text-accent lg:text-md text-xs sm:text-sm lg:text-lg 2xl:text-lg cursor-pointer'
                onClick={secondaryBtnOnTap}
              >
                {secondaryBtnText}
              </Button>
            )}
          </div>
        )}
      </div>
      <div id='hero-background' className='relative flex justify-end w-full'>
        <Image
          src={backgroundImg || ''}
          alt='Hero Background'
          width={1920}
          height={1080}
          className='z-0 w-full sm:w-[500px] lg:w-[700px] 2xl:w-[1000px] xl:w-[850px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] 2xl:h-[700px] xl:h-[600px] object-cover'
        />
        <div className='top-0 left-0 z-20 absolute bg-gradient-to-t sm:bg-gradient-to-r from-[#521D2A] via-[#521D2A]/90 sm:via-[#521D2A]/100 to-transparent w-full h-full pointer-events-none' />
      </div>
      <div className='sm:hidden bg-primary w-full h-[150px] pointer-events-none' />
    </section>
  )
}

export default HeroSection
