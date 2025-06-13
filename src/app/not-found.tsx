'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'

export default function NotFound() {
  const router = useRouter()

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className='flex flex-col items-center text-center justify-center p-8 max-w-xl mx-auto h-screen'>
      <Image
        src='/assets/images/landing/achievements/achievement-card-2.png'
        alt='Pagina niet gevonden'
        width={300}
        height={200}
        className='mb-6'
      />
      <h1 className='text-2xl font-semibold mb-4'>Pagina niet gevonden</h1>
      <p className='text-base mb-2'>
        De opgevraagde pagina bestaat niet of is verplaatst.
      </p>
      <p className='text-base'>
        U wordt zo dadelijk teruggestuurd naar de hoofdpagina. Bedankt voor uw
        begrip.
      </p>
    </div>
  )
}
