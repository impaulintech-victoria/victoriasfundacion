import Report from '@/assets/icon/Report'
import Card from '@/components/common/Card'
import JaarstukkenHeroSection from '@/components/common/Hero'

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
      <div className='flex items-center justify-center w-full py-12 lg:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6 w-full max-w-[900px]'>
          <div className='md:col-span-2'>
            <Card>
              <div className='p-6'>
                <div className='flex gap-5 items-start'>
                  <Report />
                  <h2 className='text-2xl font-bold mb-6 text-[#70142E]'>
                    Jaarrekening 2025
                  </h2>
                </div>
                <p className='text-gray-600 text-lg'>
                  De eerste jaarrekening wordt uiterlijk 30 juni 2026
                  gepubliceerd na afsluiting boekjaar 2025.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jaarstukken
