import Image from 'next/image'

const heroBgImage = () => {
  return (
    <>
      <div id='hero-background' className='relative flex justify-end w-full'>
        <Image
          src='/landing/hero-image.png'
          alt='Hero Background'
          width={1920}
          height={1080}
          className='z-0 w-full sm:w-[500px] lg:w-[700px] 2xl:w-[1000px] xl:w-[850px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] 2xl:h-[700px] xl:h-[600px] object-cover'
        />
        <div className='top-0 left-0 z-20 absolute bg-gradient-to-t sm:bg-gradient-to-r from-[#521D2A] via-[#521D2A]/90 sm:via-[#521D2A]/100 to-transparent w-full h-full pointer-events-none' />
      </div>
      <div className='sm:hidden bg-primary w-full h-[150px] pointer-events-none' />
    </>
  )
}

export default heroBgImage
