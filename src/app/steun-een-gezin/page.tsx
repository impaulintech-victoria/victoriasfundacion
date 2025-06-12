import SupportHeroSection from '@/components/common/Hero'
import AdditionalSupportSection from '@/components/pages/support-a-family/additional-support'
import MonthlySupportSection from '@/components/pages/support-a-family/monthly-support'

const SteunEenGezin = () => {
  return (
    <div className='flex flex-col w-full'>
      <SupportHeroSection
        heading='Steun een gezin'
        description='Uw bijdrage maakt een direct verschil in het leven van gezinnen die onze hulp nodig hebben. Kies de manier die het beste bij u past.'
        backgroundImg='/assets/images/support-a-family/support-a-family-bg-image.png'
        height='sm'
      />
      <MonthlySupportSection />
      <AdditionalSupportSection />
    </div>
  )
}

export default SteunEenGezin
