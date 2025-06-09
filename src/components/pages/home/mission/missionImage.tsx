import Image from 'next/image'

const missionImage = () => {
  return (
    <div>
      <Image
        src='/landing/mission-image.png'
        alt='Mission Image'
        width={1920}
        height={1080}
        className='flex w-[250px] md:w-[350px] lg:w-[400px] 2xl:w-[600px] xl:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] 2xl:h-[500px] xl:h-[400px] object-cover'
      />
    </div>
  )
}

export default missionImage
