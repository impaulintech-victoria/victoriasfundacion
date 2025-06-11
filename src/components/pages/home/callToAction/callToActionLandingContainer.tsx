import HeroCenterTextButton from '@/components/common/Hero/HeroCenterTextButton'

const CallToActionLandingContainer = () => {
  return (
    <HeroCenterTextButton
      tag='Make a Difference for Families'
      header='Help ons om meer gezinnen te ondersteunen'
      description='Elke bijdrage, groot of klein, maakt een verschil in het leven van gezinnen die onze hulp nodig hebben. Samen kunnen we voor meer mensen een hoopvolle toekomst creëren.'
      buttonLabel='Word donateur'
      imageSrc='/landing/cta-image.png'
      imageOpacity={0.95}
    />
  )
}

export default CallToActionLandingContainer
