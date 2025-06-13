import Card from '@/components/common/Card'
import TextAnimationWrapper from '@/components/others/textAnimationWrapper'
import { Button } from '@/components/ui/button'
import { Calendar, FileText, LucideIcon, Wallet } from 'lucide-react'
import { ReactNode } from 'react'

interface PolicyCardProps {
  icon: LucideIcon
  heading: string
  children?: ReactNode
  delay?: number
}

const PolicySection = () => {
  return (
    <section className='flex flex-col self-center gap-5 px-9 py-7 md:py-10 lg:py-14 xl:py-16 w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl'>
      <PolicyCard
        icon={FileText}
        heading='Hoofdlijnen van het beleidsplan'
        delay={0}
      >
        <ul className='space-y-2 text-muted text-sm md:text-base xl:text-lg list-none'>
          <li className="flex items-start gap-2 before:font-bold before:text-primary before:content-['•']">
            Begeleiding van mensen uit de bijstand naar werk en zelfstandigheid
          </li>
          <li className="flex items-start gap-2 before:font-bold before:text-primary before:content-['•']">
            Werkprojecten via webshops en dienstverlening
          </li>
          <li className="flex items-start gap-2 before:font-bold before:text-primary before:content-['•']">
            Budgetbeheer, administratieve hulp en huisvesting
          </li>
          <li className="flex items-start gap-2 before:font-bold before:text-primary before:content-['•']">
            Alle opbrengsten worden volledig ingezet voor het maatschappelijke
            doel
          </li>
          <li className="flex items-start gap-2 before:font-bold before:text-primary before:content-['•']">
            Geen beloning voor bestuursleden; alleen onkostenvergoeding
          </li>
        </ul>
        <Button className='flex flex-row gap-2 bg-[#F5E1E6] hover:bg-[#F5E1E6]/80 text-primary cursor-pointer'>
          <FileText className='size-3' />
          <p className='font-bold text-xs md:text-sm xl:text-base text-ellipsis whitespace-normal'>
            Beleidsplan Stichting Victoria's Fundación-2025
          </p>
        </Button>
      </PolicyCard>
      <PolicyCard icon={Wallet} heading='Beloningsbeleid' delay={200}>
        <p className='text-muted text-sm md:text-base xl:text-lg'>
          De bestuursleden ontvangen geen beloning voor hun werkzaamheden.
          Eventuele gemaakte kosten worden vergoed op declaratiebasis.
          Uitvoeringstaken worden indien nodig uitbesteed aan externe
          professionals of vrijwilligers.
        </p>
      </PolicyCard>
      <PolicyCard
        icon={Calendar}
        heading='Verslag van de uitgeoefende activiteiten'
        delay={400}
      >
        <section className='flex flex-col gap-2'>
          <h3 className='font-bold text-primary text-sm md:text-base xl:text-lg'>
            2025 (tot nu toe):
          </h3>
          <ul className='space-y-2 text-muted text-sm md:text-base xl:text-lg list-none'>
            <li className="flex items-start gap-2 before:font-bold before:text-primary before:content-['•']">
              Oprichting en inschrijving stichting
            </li>
            <li className="flex items-start gap-2 before:font-bold before:text-primary before:content-['•']">
              Werving eerste ondersteuning (VA, projectmanager in voorbereiding)
            </li>
            <li className="flex items-start gap-2 before:font-bold before:text-primary before:content-['•']">
              Ontwikkeling beleidsplan, website en ANBI-aanvraag
            </li>
            <li className="flex items-start gap-2 before:font-bold before:text-primary before:content-['•']">
              Opbouw webshop en intakeproces voor deelnemers
            </li>
            <li className="flex items-start gap-2 before:font-bold before:text-primary before:content-['•']">
              Eerste samenwerkingen met externe partijen voorbereid
            </li>
          </ul>
        </section>
      </PolicyCard>
    </section>
  )
}

export default PolicySection

function PolicyCard({
  icon: Icon,
  heading,
  children,
  delay = 0,
}: PolicyCardProps) {
  return (
    <TextAnimationWrapper delay={delay} animation='fade-up'>
      <Card className='flex flex-col gap-5 shadow-md md:px-8 2xl:px-12 xl:px-10 md:py-8 2xl:py-12 xl:py-10'>
        <div className='flex flex-row gap-3'>
          <Icon className='size-5 text-primary' />
          <p className='font-bold text-primary text-sm md:text-base xl:text-lg 2xl:text-xl'>
            {heading}
          </p>
        </div>
        {children}
      </Card>
    </TextAnimationWrapper>
  )
}
