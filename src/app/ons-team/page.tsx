'use client'

import OurBoard from '@/assets/icon/OurBoard'
import OurSupport from '@/assets/icon/OurSupport'
import OurTeam from '@/assets/icon/OurTeam'
import Card from '@/components/common/Card'
import OnsTeamHeroSection from '@/components/common/Hero'
import TextAnimationWrapper from '@/components/others/textAnimationWrapper'

const OnsTeam = () => {
  return (
    <div id='main-container' className='flex flex-col w-full'>
      <OnsTeamHeroSection
        heading='Samen maken we het verschil'
        description="Alle bestuursleden en toekomstige samenwerkers binnen Stichting Victoria' s Fundación delen één visie:een eerlijke, structurele aanpak voor mensen die het nodig hebben. We werken vanuit vertrouwen, daadkracht en maatschappelijke betrokkenheid."
        backgroundImg='/assets/images/team/hero-image.png'
        height='sm'
        position='middle'
        subTitle='Ons Team'
        version='secondary'
      />
      <div className='flex justify-center items-center py-12 lg:py-24 w-full'>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 p-6 w-full max-w-[1500px]'>
          <TextAnimationWrapper delay={300} animation='fade-up'>
            <Card>
              <div className='p-6'>
                <div className='flex items-start gap-5'>
                  <OurBoard />
                  <h2 className='mb-6 font-bold text-[#70142E] text-2xl'>
                    Ons bestuur
                  </h2>
                </div>
                <div className='space-y-6'>
                  <div className='bg-[#f3dce2] p-5 rounded-md'>
                    <h3 className='font-bold text-[#70142E] text-xl'>
                      Joselina Victoria
                    </h3>
                    <p className='text-[#70142E] text-md'>Voorzitter</p>
                  </div>
                  <div className='bg-[#f3dce2] p-5 rounded-md'>
                    <h3 className='font-bold text-[#70142E] text-xl'>
                      Joselin de Jesus
                    </h3>
                    <p className='text-[#70142E] text-md'>
                      Secretaris & Penningmeester
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TextAnimationWrapper>
          <TextAnimationWrapper delay={500} animation='fade-up'>
            <Card>
              <div className='p-6'>
                <div className='flex items-start gap-5'>
                  <OurSupport />
                  <h2 className='mb-6 font-bold text-[#70142E] text-2xl'>
                    Onze ondersteuning
                  </h2>
                </div>
                <p className='text-gray-600 text-lg'>
                  We werken met een kleine, flexibele basis van freelancers en
                  virtuele assistenten. Deze professionals ondersteunen ons in
                  communicatie, organisatie en projectopbouw—altijd in dienst
                  van het maatschappelijke doel.
                </p>
              </div>
            </Card>
          </TextAnimationWrapper>
          <TextAnimationWrapper
            delay={700}
            animation='fade-up'
            className='md:col-span-2'
          >
            <Card>
              <div className='p-6'>
                <div className='flex items-start gap-5'>
                  <OurTeam />
                  <h2 className='mb-6 font-bold text-[#70142E] text-2xl'>
                    Binnenkort breiden wij ons team uit met
                  </h2>
                </div>
                <ul className='space-y-2 pl-5 marker:text-[#70142E] text-xl list-disc'>
                  <li>Een projectmanager</li>
                  <li>Extra administratieve ondersteuning</li>
                  <li>
                    Vrijwilligers en ervaringsdeskundigen uit onze trajecten
                  </li>
                </ul>
              </div>
            </Card>
          </TextAnimationWrapper>
        </div>
      </div>
    </div>
  )
}

export default OnsTeam
