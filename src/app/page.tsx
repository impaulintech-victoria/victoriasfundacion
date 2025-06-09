import HeroBgImage from '@/components/pages/home/Hero/heroBgImage'
import HeroButtons from '@/components/pages/home/Hero/heroButtons'

export default function Home() {
  return (
    <div id='main-container' className='flex flex-col w-full'>
      <section
        id='hero-content'
        className='z-0 relative flex 2xl:flex-row flex-col justify-end sm:justify-center bg-[#521D2A] w-full'
      >
        <div
          id='hero-content-text'
          className='z-30 fixed flex flex-col justify-center self-center gap-4 2xl:gap-8 px-5 sm:px-8 md:px-10 lg:px-16 2xl:px-28 py-8 w-full'
        >
          <h1 className='max-w-[800px] lg:max-w-[700px] 2xl:max-w-[950px] font-bold text-white xl:text-h1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl line-clamp-2'>
            Bouwen aan een hoopvolle toekomst
          </h1>
          <p className='md:hidden 2xl:max-w-[950px] sm:max-w-md max-w-lg md:max-w-lg lg:max-w-lg font-light text-white text-sm'>
            Stichting Victoria's Origen zet zich in voor gezinnen in kwetsbare
            situaties, omdat ieder gezin een sterke basis verdient.
          </p>
          <p className='hidden 2xl:hidden md:block 2xl:max-w-[950px] sm:max-w-md max-w-lg md:max-w-lg lg:max-w-lg font-light text-white text-lg'>
            Stichting Victoria's Origen zet zich in voor gezinnen in kwetsbare
            situaties, omdat ieder gezin een sterke basis verdient.
          </p>
          <p className='hidden 2xl:block 2xl:max-w-[700px] sm:max-w-md max-w-lg md:max-w-lg lg:max-w-lg font-light text-white text-xl'>
            Stichting Victoria's Origen zet zich in voor gezinnen in kwetsbare
            situaties, omdat ieder gezin een sterke basis verdient.
          </p>
          <HeroButtons />
        </div>
        <HeroBgImage />
      </section>
    </div>
  )
}
