import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface MissionSectionProps {
  tag: string
  header: string
  description?: string
  buttonOnTap?: () => void
  buttonLabel?: string
  isInverted?: boolean
  imageSrc?: string
}

const MissionSection = (props: MissionSectionProps) => {
  const { isInverted = false } = props

  return (
    <section
      id='mission-section'
      className='flex sm:flex-row flex-col justify-center items-center gap-5 sm:gap-10 md:gap-12 lg:gap-16 2xl:gap-40 xl:gap-16 px-5 py-7 sm:py-9 lg:py-12 2xl:py-14 xl:py-12 w-full h-full'
    >
      {isInverted ? (
        <>
          <MissionImage {...props} />
          <MissionContent {...props} />
        </>
      ) : (
        <>
          <MissionContent {...props} />
          <MissionImage {...props} />
        </>
      )}
    </section>
  )
}

export default MissionSection

function MissionContent(props: MissionSectionProps) {
  const { tag, header, description, buttonOnTap, buttonLabel } = props

  return (
    <div
      id='mission-content'
      className='flex flex-col justify-start xl:justify-center items-start self-start xl:self-center gap-3 h-full'
    >
      <span className='self-start bg-rose-100 px-3 py-1 border-2 border-primary rounded-full text-primary text-base lg:text-lg text-left'>
        {tag}
      </span>
      <h2 className='max-w-sm md:max-w-md lg:max-w-lg font-bold text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
        {header}
      </h2>
      <p className='mt-2 sm:max-w-xs md:max-w-sm max-w-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl font-light text-xs md:text-sm lg:text-base xl:text-lg text-justify'>
        {description}
      </p>
      {buttonOnTap && buttonLabel && (
        <Button
          variant={'outline'}
          className='flex mt-5 border-primary hover:border-transparent lg:h-10 xl:h-14 cursor-pointer'
        >
          <p className='font-bold text-primary md:text-lg xl:text-xl'>
            Lees meer over ons
          </p>
          <ArrowRight className='text-primary' />
        </Button>
      )}
    </div>
  )
}

function MissionImage(props: MissionSectionProps) {
  const { imageSrc } = props
  return (
    <div>
      <Image
        src={imageSrc || ''}
        alt='Mission Image'
        width={1920}
        height={1080}
        className='flex w-[250px] md:w-[350px] lg:w-[400px] 2xl:w-[600px] xl:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] 2xl:h-[500px] xl:h-[400px] object-cover'
      />
    </div>
  )
}
