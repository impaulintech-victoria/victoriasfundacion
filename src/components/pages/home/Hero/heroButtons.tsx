'use client'

import { Button } from '@/components/ui/button'

const heroButtons = () => {
  return (
    <div
      id='hero-content-buttons'
      className='flex justify-start items-center gap-3 sm:gap-5 2xl:gap-10 mt-2 sm:mt-4 2xl:mt-10'
    >
      <Button
        variant={'default'}
        className='bg-accent hover:bg-accent/80 px-5 sm:px-7 2xl:px-10 py-5 lg:py-7 2xl:py-7 rounded-xl font-bold text-primary lg:text-md text-xs sm:text-sm lg:text-lg 2xl:text-lg cursor-pointer'
      >
        Ontdek hoe u kunt helpen
      </Button>
      <Button
        variant={'outline'}
        className='bg-transparent px-5 sm:px-7 2xl:px-10 py-5 lg:py-7 2xl:py-7 border-accent rounded-xl font-bold text-accent lg:text-md text-xs sm:text-sm lg:text-lg 2xl:text-lg cursor-pointer'
      >
        Meer over ons
      </Button>
    </div>
  )
}

export default heroButtons
