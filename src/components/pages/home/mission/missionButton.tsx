import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const missionButton = () => {
  return (
    <Button
      variant={'outline'}
      className='flex mt-5 border-primary hover:border-transparent lg:h-10 xl:h-14 cursor-pointer'
    >
      <p className='font-bold text-primary md:text-lg xl:text-xl'>
        Lees meer over ons
      </p>
      <ArrowRight className='text-primary' />
    </Button>
  )
}

export default missionButton
