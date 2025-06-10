import MissionSection from '.'

const MissionLandingContainer = () => {
  return (
    <MissionSection
      tag='Onze missie'
      header="Welkom bij Stichting Victoria's Origen"
      description='Wij geloven in de kracht van verbinding en ondersteuning. Onze missie is om families die het moeilijk hebben te voorzien van de middelen, begeleiding en hoop die nodig zijn om uitdagingen te overwinnen en een stabiele toekomst op te bouwen.'
      buttonLabel='Meer over ons'
      imageSrc='/landing/mission-image.png'
      isInverted={true}
    />
  )
}

export default MissionLandingContainer
