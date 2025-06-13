import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className='order-1 xl:order-none'>
      <Image
        src='/assets/images/victorias-fundacion.png'
        alt="Victoria's Fundacion Logo"
        width={260}
        height={50}
        priority
      />
    </Link>
  )
}

export default Logo
