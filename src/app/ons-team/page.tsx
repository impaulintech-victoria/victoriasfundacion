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
    </div>
  )
}

export default OnsTeam
