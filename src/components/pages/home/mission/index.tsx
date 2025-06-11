import Image from 'next/image'
import MissionButton from './missionButton'

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
      className='flex sm:flex-row flex-col justify-center items-center gap-5 sm:gap-10 md:gap-12 lg:gap-16 2xl:gap-40 xl:gap-16 px-5 py-3 sm:py-5 lg:py-10 2xl:py-14 xl:py-12 w-full h-full'
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
  return (
    <div
      id='mission-content'
      className='flex flex-col justify-start xl:justify-center items-start self-start xl:self-center gap-3 h-full'
    >
      <span className='self-start bg-rose-100 px-3 py-1 border-2 border-primary rounded-full text-primary text-base lg:text-lg text-left'>
        {props.tag}
      </span>
      <h2 className='max-w-sm md:max-w-md lg:max-w-lg font-bold text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
        {props.header}
      </h2>
      <p className='mt-2 sm:max-w-xs md:max-w-sm max-w-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl font-light text-xs md:text-sm lg:text-base xl:text-lg text-justify'>
        {props.description}
      </p>
      <MissionButton />
    </div>
  )
}

function MissionImage(props: MissionSectionProps) {
  return (
    <div>
      <Image
        src={props.imageSrc || ''}
        alt='Mission Image'
        width={1920}
        height={1080}
        className='flex w-[250px] md:w-[350px] lg:w-[400px] 2xl:w-[600px] xl:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] 2xl:h-[500px] xl:h-[400px] object-cover'
      />
    </div>
  )
}
