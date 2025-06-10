import Image from 'next/image'

interface AchievementCardProps {
  imageSrc: string
  title: string
  description: string
}

const AchievementCard = (props: AchievementCardProps) => {
  return (
    <div
      id='achievement-card'
      className='group flex flex-col flex-1 gap-4 bg-white shadow-lg px-3 lg:px-5 2xl:px-7 py-5 lg:py-7 2xl:py-10 border border-black rounded-xl'
    >
      <Image
        src={props.imageSrc}
        alt={props.title}
        width={500}
        height={500}
        className='items-center group-hover:shadow-md group-hover:rounded-lg w-[250px] lg:w-[300px] 2xl:w-[400px] h-[150px] lg:h-[200px] 2xl:h-[300px] object-cover group-hover:scale-105 transition-all duration-300 ease-in-out'
      />
      <h1 className='font-bold text-primary text-xl lg:text-2xl 2xl:text-4xl text-center group-hover:scale-110 transition-all duration-300 ease-in-out'>
        {props.title}
      </h1>
      <section className='flex flex-col items-center gap-2 lg:gap-4 2xl:gap-6'>
        <span className='bg-accent border border-primary rounded-full w-[130px] lg:w-[150px] 2xl:w-[200px] group-hover:w-full h-[7px] transition-all duration-300 ease-in-out' />
        <p className='max-w-[250px] lg:max-w-sm 2xl:max-w-sm text-muted text-sm lg:text-base 2xl:text-xl text-center'>
          {props.description}
        </p>
      </section>
    </div>
  )
}

export default AchievementCard
