import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className='order-1 xl:order-none'>
      <Image
        src='/assets/images/victorias-origen.png'
        alt="Victoria's Origen Logo"
        width={160}
        height={40}
        priority
      />
    </Link>
  )
}

export default Logo
