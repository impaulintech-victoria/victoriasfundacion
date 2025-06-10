import { Button } from '@/components/ui/button'
import FadedBgImage from '../FadedBgImage'

interface HeroCenterTextButtonProps {
  tag: string
  header: string
  description?: string
  buttonOnTap?: () => void
  buttonLabel?: string
  imageSrc?: string
  imageOpacity?: number
}

const HeroCenterTextButton = (props: HeroCenterTextButtonProps) => {
  return (
    <div className='relative justify-center items-center px-5 py-8 lg:py-10 2xl:py-20 xl:py-12 w-full'>
      <FadedBgImage
        src={props.imageSrc || ''}
        alt='achievement-bg'
        bgColor='primary'
        opacity={props.imageOpacity || 0.95}
      />
      <div className='z-10 relative flex flex-col justify-center items-center gap-3 2xl:gap-7 h-full'>
        <h2 className='px-8 py-1 border border-white rounded-full text-white text-sm md:text-base 2xl:text-lg'>
          {props.tag}
        </h2>
        <h1 className='2xl:max-w-2xl font-bold text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl text-center leading-8 sm:leading-10 md:leading-12 lg:leading-14 2xl:leading-20'>
          {props.header}
        </h1>
        <p className='max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-3xl font-light text-white text-xs sm:text-sm 2xl:text-lg text-center'>
          {props.description}
        </p>
        <Button
          variant={'default'}
          className='bg-accent hover:bg-accent/90 mt-4 md:mt-6 2xl:mt-10 px-3 md:px-5 py-3 md:py-5 font-bold text-primary text-sm 2xl:text-base cursor-pointer'
          onClick={props.buttonOnTap}
        >
          {props.buttonLabel}
        </Button>
      </div>
    </div>
  )
}

export default HeroCenterTextButton
