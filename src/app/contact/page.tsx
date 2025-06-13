'use client'

import HeroSection from '@/components/common/Hero'
import TextAnimationWrapper from '@/components/others/textAnimationWrapper'
import ContactFormSection from '@/components/pages/contact'

const Contact = () => {
  return (
    <div className='relative flex flex-col w-full'>
      <HeroSection
        heading='Neem Contact Op'
        description='Heeft u een vraag, wilt u samenwerken, of heeft u ondersteuning nodig? We horen graag van u.'
        backgroundImg='/assets/images/contact/contact-bg-image.png'
        height='sm'
      />
      <TextAnimationWrapper
        delay={300}
        animation='fade-up'
        className='flex justify-center items-center w-full'
      >
        <ContactFormSection />
      </TextAnimationWrapper>
    </div>
  )
}

export default Contact
