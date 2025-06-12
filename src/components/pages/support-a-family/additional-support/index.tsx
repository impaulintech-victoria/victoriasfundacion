import Card from '@/components/common/Card'
import FadedBgImage from '@/components/common/FadedBgImage'
import { Button } from '@/components/ui/button'

const AdditionalSupportSection = () => {
  const additionalSupportCards = [
    {
      title: 'Giften & Eenmalige Donaties',
      description:
        'Elke eenmalige bijdrage, groot of klein, helpt ons direct om gezinnen te ondersteunen met essentiële benodigdheden of onverwachte kosten.',
      buttonText: 'Doe een Eenmalige Gift',
    },
    {
      title: 'Sponsoring',
      description:
        'Word sponsor van een specifiek project of programma en zie direct de impact van uw betrokkenheid. Neem contact op voor de mogelijkheden.',
      buttonText: 'Neem Contact Op',
    },
    {
      title: 'Periodieke Ondersteuning',
      description:
        'Naast maandelijkse donaties kunt u ook kiezen voor een andere periodieke bijdrage (bv. per kwartaal). Neem contact op om dit te regelen.',
      buttonText: 'Neem Contact Op',
    },
    {
      title: 'Nalatenschappen',
      description:
        "Overweeg Stichting Victoria's Origen op te nemen in uw testament en laat een blijvende impact na voor toekomstige generaties.",
      buttonText: 'Meer Informatie',
    },
    {
      title: 'Verbinden aan een Gezin',
      description:
        'Wilt u een specifiek gezin langdurig ondersteunen? Informeer naar de mogelijkheden om een directe verbinding aan te gaan.',
      buttonText: 'Informeer Naar Mogelijkheden',
    },
  ]
  return (
    <div className='relative w-full'>
      <FadedBgImage
        src='/assets/images/landing/achievements/landing-achievement-bg.png'
        alt='support-a-family-bg-image'
        bgColor='[#F5E1E6]'
        className='z-0'
      />
      <div className='z-20 flex flex-col justify-center items-center gap-5 px-5 lg:px-10 2xl:px-48 xl:px-32 py-10 lg:py-14 2xl:py-24 xl:py-20'>
        <h1 className='z-20 font-bold text-primary text-2xl lg:text-3xl'>
          Andere Manieren om te Steunen
        </h1>
        <section className='flex flex-col gap-5 sm:grid sm:grid-cols-3 mt-5 w-full'>
          {/* First row: first three cards */}
          {additionalSupportCards.slice(0, 3).map((card) => (
            <AdditionalSupportCard key={card.title} {...card} />
          ))}
          {/* Second row: last two cards, side by side on desktop */}
          <div className='flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:col-span-3 w-full'>
            {additionalSupportCards.slice(3).map((card) => (
              <AdditionalSupportCard key={card.title} {...card} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdditionalSupportSection

interface AdditionalSupportCardProps {
  title: string
  description: string
  buttonText: string
  className?: string
}

function AdditionalSupportCard({
  title,
  description,
  buttonText,
  className,
}: AdditionalSupportCardProps) {
  return (
    <Card
      className={`z-20 flex flex-col justify-center items-center gap-5 border-2 border-primary h-full ${className}`}
      isComingSoon={true}
    >
      <h2 className='font-bold text-primary text-lg lg:text-xl text-center'>
        {title}
      </h2>
      <p className='text-muted text-sm lg:text-base text-center'>
        {description}
      </p>
      <Button
        variant={'outline'}
        className='border-primary w-full font-bold cursor-pointer'
      >
        {buttonText}
      </Button>
    </Card>
  )
}
