import OurBoard from '@/assets/icon/OurBoard'
import OurSupport from '@/assets/icon/OurSupport'
import OurTeam from '@/assets/icon/OurTeam'
import Card from '@/components/common/Card'
import OnsTeamHeroSection from '@/components/common/Hero'

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
      <div className='flex items-center justify-center w-full py-12 lg:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6 w-full max-w-[1500px]'>
          <Card>
            <div className='p-6'>
              <div className='flex gap-5 items-start'>
                <OurBoard />
                <h2 className='text-2xl font-bold mb-6 text-[#70142E]'>
                  Ons bestuur
                </h2>
              </div>
              <div className='space-y-6'>
                <div className='bg-[#f3dce2] p-5 rounded-md'>
                  <h3 className='text-xl font-bold text-[#70142E]'>
                    Joselina Victoria
                  </h3>
                  <p className='text-[#70142E] text-md'>Voorzitter</p>
                </div>
                <div className='bg-[#f3dce2] p-5 rounded-md'>
                  <h3 className='text-xl font-bold text-[#70142E]'>
                    Joselin de Jesus
                  </h3>
                  <p className='text-[#70142E] text-md'>
                    Secretaris & Penningmeester
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className='p-6'>
              <div className='flex gap-5 items-start'>
                <OurSupport />
                <h2 className='text-2xl font-bold mb-6 text-[#70142E]'>
                  Onze ondersteuning
                </h2>
              </div>
              <p className='text-gray-600 text-lg'>
                We werken met een kleine, flexibele basis van freelancers en
                virtuele assistenten. Deze professionals ondersteunen ons in
                communicatie, organisatie en projectopbouw—altijd in dienst van
                het maatschappelijke doel.
              </p>
            </div>
          </Card>
          <div className='md:col-span-2'>
            <Card>
              <div className='p-6'>
                <div className='flex gap-5 items-start'>
                  <OurTeam />
                  <h2 className='text-2xl font-bold mb-6 text-[#70142E]'>
                    Binnenkort breiden wij ons team uit met
                  </h2>
                </div>
                <ul className='list-disc marker:text-[#70142E] pl-5 text-xl space-y-2'>
                  <li>Een projectmanager</li>
                  <li>Extra administratieve ondersteuning</li>
                  <li>
                    Vrijwilligers en ervaringsdeskundigen uit onze trajecten
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnsTeam
