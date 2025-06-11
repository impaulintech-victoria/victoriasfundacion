import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../Navbar/logo'
import FooterLinks, { FooterSection } from './footerLinks'
import SocialIcon from './socialIcon'

const Footer = () => {
  const footerSections: FooterSection[] = [
    {
      title: 'Over Ons',
      links: [
        { label: 'Over de Stichting', href: '/' },
        { label: 'Ons Team', href: '/' },
        { label: 'ANBI Status', href: '/' },
        { label: 'Jaarstukken', href: '/' },
      ],
    },
    {
      title: 'Steun Ons',
      links: [
        { label: 'Doneer', href: '/' },
        { label: 'Word Vrijwilliger', href: '/' },
        { label: 'Partners', href: '/' },
        { label: 'Bedrijven', href: '/' },
      ],
    },
    {
      title: 'Nuttige Links',
      links: [
        { label: 'Veelgestelde Vragen', href: '/' },
        { label: 'Privacy Beleid', href: '/' },
        { label: 'Algemene Voorwaarden', href: '/' },
        { label: 'Contact', href: '/' },
      ],
    },
    {
      title: 'Bedrijfsgegevens',
      links: [
        { label: 'KvK: 12345678', href: '/' },
        { label: 'IBAN: NL12 ABCD 0123 4567 89', href: '/' },
        { label: '123456789', href: '/' },
      ],
    },
  ]

  return (
    <>
      <FooterMobile footerSections={footerSections} />
      <FooterDesktop footerSections={footerSections} />
    </>
  )
}

export default Footer

function FooterDesktop({
  footerSections,
}: {
  footerSections: FooterSection[]
}) {
  return (
    <footer className='hidden md:flex flex-col gap-5 px-8 lg:px-12 2xl:px-40 xl:px-28 py-12 lg:py-20'>
      <section id='footer-top' className='flex flex-row gap-5'>
        <div className='flex xl:flex-col flex-col-reverse justify-end xl:justify-start gap-3'>
          <Logo />
          <p className='max-w-xs lg:max-w-sm text-muted text-xs lg:text-sm xl:text-base text-justify'>
            Samen bouwen aan een hoopvolle toekomst voor gezinnen in kwetsbare
            situaties, omdat ieder gezin een sterke basis verdient.
          </p>
        </div>
        <div className='flex flex-col gap-5 w-full'>
          <ul className='flex flex-row justify-evenly w-full text-sm'>
            {footerSections.map((section) => (
              <li key={section.title}>
                <h3 className='font-bold text-primary text-sm lg:text-base xl:text-lg'>
                  {section.title}
                </h3>
                <ul className='flex flex-col gap-1 mt-2'>
                  {section.links.map((link) => (
                    <li
                      key={link.label}
                      className='text-muted text-xs lg:text-sm xl:text-base'
                    >
                      {section.title === 'Bedrijfsgegevens' ? (
                        <p>{link.label}</p>
                      ) : (
                        <Link
                          href={link.href}
                          className="after:bottom-0 after:left-0 after:absolute relative after:bg-accent after:w-0 hover:after:w-full after:h-[1px] hover:text-accent after:content-[''] transition-all after:transition-all duration-200 after:duration-300"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <span className='bg-black w-full h-[2px]' />
      <section id='footer-bottom' className='flex flex-row justify-between'>
        <p className='text-muted text-xs sm:text-sm lg:text-base 2xl:text-lg'>
          © 2025 Stichting Victoria's Origen. Alle rechten voorbehouden.
        </p>
        <FooterSocials />
      </section>
    </footer>
  )
}

function FooterMobile({ footerSections }: { footerSections: FooterSection[] }) {
  return (
    <footer className='md:hidden flex flex-col-reverse self-center gap-5 px-5 py-8 w-full max-w-[1200px]'>
      <Logo />
      <section
        id='footer-extra'
        className='flex flex-row justify-evenly text-muted text-xs sm:text-sm'
      >
        <p className='hover:underline'>Privacybeleid</p>
        <p className='hover:underline'>Algemene</p>
        <p className='hover:underline'>Voorwaarden</p>
        <p className='hover:underline'>Sitemap</p>
      </section>
      <p className='mx-auto max-w-[200px] text-muted text-xs sm:text-sm text-center'>
        © 2025 Stichting Victoria's Origen. Alle rechten voorbehouden.
      </p>
      <span className='self-center bg-black w-[250px] sm:w-[350px] h-[2px]' />
      <FooterSocials />
      <FooterLinks sections={footerSections} />

      <p className='text-muted text-xs sm:text-sm text-justify'>
        Samen bouwen aan een hoopvolle toekomst voor gezinnen in kwetsbare
        situaties, omdat ieder gezin een sterke basis verdient.
      </p>
    </footer>
  )
}

function FooterSocials() {
  return (
    <section
      id='footer-socials'
      className='flex justify-center items-center gap-2 mt-3'
    >
      <SocialIcon icon={Linkedin} />
      <div className='bg-[#F5E1E6] hover:bg-accent/60 hover:shadow-md p-2 border border-primary rounded-full transition-all duration-200 cursor-pointer'>
        <Image
          src='/assets/socials/twitter-x.svg'
          alt='X'
          width={16}
          height={16}
          className=''
        />
      </div>
      <SocialIcon icon={Facebook} />
      <SocialIcon icon={Instagram} />
    </section>
  )
}
