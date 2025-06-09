import MissionButton from './missionButton'

const missionContent = () => {
  return (
    <div
      id='mission-content'
      className='flex flex-col justify-start xl:justify-center items-start self-start xl:self-center gap-3 h-full'
    >
      <span className='self-start bg-rose-100 px-3 py-1 border-2 border-primary rounded-full text-primary text-base lg:text-lg text-left'>
        Onze missie
      </span>
      <h2 className='max-w-sm md:max-w-md lg:max-w-lg font-bold text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
        Welkom bij Stichting Victoria's Origen
      </h2>
      <p className='mt-2 sm:max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl font-light text-xs md:text-sm lg:text-base xl:text-lg text-justify'>
        Wij geloven in de kracht van verbinding en ondersteuning. Onze missie is
        om families die het moeilijk hebben te voorzien van de middelen,
        begeleiding en hoop die nodig zijn om uitdagingen te overwinnen en een
        stabiele toekomst op te bouwen.
      </p>
      <MissionButton />
    </div>
  )
}

export default missionContent
