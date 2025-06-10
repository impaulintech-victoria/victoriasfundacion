'use client'

import HeroBgImage from '@/components/pages/home/hero/HeroBgImg'
import { Button } from '@/components/ui/button'

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

  const handlePrimaryClick = () => {
    if (primaryBtnOnTap) {
      primaryBtnOnTap()
    }
  }

  const handleSecondaryClick = () => {
    if (secondaryBtnOnTap) {
      secondaryBtnOnTap()
    }
  }

  return (
    <section
      id='hero-content'
      className={`z-0 relative flex 2xl:flex-row flex-col justify-end sm:justify-center bg-primary w-full overflow-hidden ${
        height === 'lg' ? 'h-[650px]' : 'h-[450px]'
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
          className={`max-w-[800px] lg:max-w-[700px] 2xl:max-w-[950px] font-bold text-white 2xl:text-[5rem] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl line-clamp-2 ${
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
          <Button
            variant={'default'}
            className='bg-accent hover:bg-accent/80 px-5 sm:px-7 2xl:px-10 py-5 lg:py-7 2xl:py-7 rounded-xl font-bold text-primary lg:text-md text-xs sm:text-sm lg:text-lg 2xl:text-lg cursor-pointer'
            onClick={handlePrimaryClick}
          >
            {primaryBtnText}
          </Button>
          <Button
            variant={'outline'}
            className='bg-transparent px-5 sm:px-7 2xl:px-10 py-5 lg:py-7 2xl:py-7 border-accent rounded-xl font-bold text-accent lg:text-md text-xs sm:text-sm lg:text-lg 2xl:text-lg cursor-pointer'
            onClick={handleSecondaryClick}
          >
            {secondaryBtnText}
          </Button>
        </div>
      </div>
      <HeroBgImage img={backgroundImg || ''} />
    </section>
  )
}

export default HeroSection
