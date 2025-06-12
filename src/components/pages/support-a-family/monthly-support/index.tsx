import { Button } from '@/components/ui/button'

const MonthlySupportSection = () => {
  const supportAmounts = [10, 25, 50, 100]

  return (
    <section className='flex md:flex-row flex-col gap-4 md:gap-10 px-4 lg:px-14 2xl:px-40 xl:px-20 py-7 lg:py-10 2xl:py-20 xl:py-16 w-full'>
      <div className='flex flex-col flex-[1] justify-center items-center gap-5 w-full'>
        <TestimonialCard
          quote='"Dankzij de steun van de stichting hebben we weer hoop voor de
      toekomst. Het voelt alsof we er niet meer alleen voor staan."'
          author='Een ondersteund gezin'
        />
        <TestimonialCard
          quote='"Door uw steun hebben we hoop voor de toekomst en voelen we ons niet meer alleen."'
          author='Een dankbaar gezin voor de steun.'
        />
      </div>
      <div className='flex flex-col flex-[1] gap-2 mt-5 w-full'>
        <h1 className='font-bold text-primary text-2xl lg:text-3xl 2xl:text-4xl'>
          Word Maandelijkse Donateur
        </h1>
        <p className='text-muted text-sm lg:text-base 2xl:text-lg'>
          Met uw structurele steun kunnen we duurzame hulp bieden en de toekomst
          van gezinnen veiligstellen.
        </p>
        <div className='gap-3 grid grid-cols-2 mt-5'>
          {supportAmounts.map((amount) => (
            <MonthlySupportCard key={amount} amount={amount} />
          ))}
        </div>
        <Button variant={'default'} className='mt-3 xl:py-6 xl:text-lg'>
          Doneer Maandelijks
        </Button>
      </div>
    </section>
  )
}

export default MonthlySupportSection

function MonthlySupportCard(props: { amount: number }) {
  return (
    <section className='flex flex-col justify-center items-center gap-2 p-4 border-2 border-black rounded-lg'>
      <h2 className='font-black text-primary text-2xl xl:text-3xl'>
        €{props.amount}
      </h2>
      <p className='text-muted text-sm xl:text-base'>per maand</p>
    </section>
  )
}

function TestimonialCard(props: { quote: string; author: string }) {
  return (
    <section className='flex flex-col justify-center items-center gap-5 p-4 lg:p-6 2xl:p-8 border-2 border-muted rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md 2xl:max-w-xl'>
      <p className='text-muted text-sm lg:text-base xl:text-lg 2xl:text-2xl text-center'>
        {props.quote}
      </p>
      <p className='text-muted text-xs lg:text-sm 2xl:text-lg text-center'>
        {props.author}
      </p>
    </section>
  )
}
