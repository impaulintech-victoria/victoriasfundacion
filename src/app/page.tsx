import Image from 'next/image'

export default function Home() {
  return (
    <div id='main-container' className='flex w-full flex-col'>
      <section
        id='hero-background'
        className='relative flex w-full justify-end z-0 bg-[#521D2A]'
      >
        <div className='relative'>
          <Image
            src='/landing/landing-image.png'
            alt='Hero Background'
            width={1920}
            height={1080}
            className='object-cover w-[1000px] h-[700px] z-0'
          />
          <div className='absolute top-0 left-0 w-full h-full z-20 pointer-events-none bg-gradient-to-r from-[#521D2A] via-[#521D2A]/70 to-transparent' />
        </div>
      </section>
    </div>
  )
}
