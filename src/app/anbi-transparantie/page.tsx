import TransparencyHeroSection from '@/components/common/Hero'
import PolicySection from '@/components/pages/anbi-transparency/policy'

const AnbiTransparency = () => {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <TransparencyHeroSection
        subTitle='ANBI TRANSPARANTIE'
        heading='Transparant en betrouwbaar'
        description='Als ANBI-stichting voldoen wij aan alle eisen van transparantie en goed bestuur. Hier vindt u een overzicht van onze belangrijkste beleidspunten en verantwoording.'
        position='middle'
        height='sm'
        backgroundImg='/assets/images/landing/mission-image.png'
        version='secondary'
        showSubtitleOnMobile={true}
      />
      <PolicySection />
    </div>
  )
}

export default AnbiTransparency
