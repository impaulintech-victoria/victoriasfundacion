'use client'

import ProjectHeroSection from '@/components/common/Hero'

const Projecten = () => {
  return (
    <div id='main-container' className='flex flex-col w-full'>
      <ProjectHeroSection
        heading='Onze Projecten'
        description='Ontdek de initiatieven waarmee we gezinnen ondersteunen en een positieve impact maken in de gemeenschap.'
        backgroundImg='/assets/images/project/hero-image.png'
        height='sm'
      />
    </div>
  )
}

export default Projecten
