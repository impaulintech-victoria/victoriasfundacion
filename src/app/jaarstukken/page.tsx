'use client'

import Report from '@/assets/icon/Report'
import Card from '@/components/common/Card'
import JaarstukkenHeroSection from '@/components/common/Hero'
import TextAnimationWrapper from '@/components/others/textAnimationWrapper'

const Jaarstukken = () => {
  return (
    <div id='main-container' className='flex flex-col w-full'>
      <JaarstukkenHeroSection
        heading='Financiële verantwoording'
        description='Transparantie en verantwoording zijn belangrijke pijlers van onze stichting.'
        backgroundImg='/assets/images/team/hero-image.png'
        height='sm'
        position='middle'
        subTitle='JAARSTUKKEN'
        version='secondary'
      />
      <div className='flex justify-center items-center py-12 lg:py-24 w-full'>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 p-6 w-full max-w-[900px]'>
          <TextAnimationWrapper
            delay={300}
            animation='fade-up'
            className='md:col-span-2'
          >
            <Card>
              <div className='p-6'>
                <div className='flex items-start gap-5'>
                  <Report />
                  <h2 className='mb-6 font-bold text-[#70142E] text-2xl'>
                    Jaarrekening 2025
                  </h2>
                </div>
                <p className='text-gray-600 text-lg'>
                  De eerste jaarrekening wordt uiterlijk 30 juni 2026
                  gepubliceerd na afsluiting boekjaar 2025.
                </p>
              </div>
            </Card>
          </TextAnimationWrapper>
        </div>
      </div>
    </div>
  )
}

export default Jaarstukken
