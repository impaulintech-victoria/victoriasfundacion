'use client'

import ArrowDown from '@/assets/icon/ArrowDown'
import HamburgerMenu from '@/assets/icon/HamburgerMenu'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LanguageSwitcher } from './languageSwitcher'
import Logo from './logo'
import SideBar from './sideBar'

export type Lang = 'nl' | 'es' | 'en'

interface SubMenuItem {
  label: string
  href: string
}

export interface MenuItem {
  label: string
  href: string
  highlight?: boolean
  dropdown?: boolean
  submenu?: SubMenuItem[]
}

const Navbar = () => {
  const [locale, setLocale] = useState('nl')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const t = useTranslations('home.nav')

  const menuItems: MenuItem[] = [
    { label: t('home'), href: '/', highlight: true },
    {
      label: t('foundation'),
      href: '#',
      dropdown: true,
      submenu: [
        { label: t('submenu.foundation'), href: '/over-de-stichting' },
        { label: t('submenu.team'), href: '/ons-team' },
        { label: t('submenu.transparency'), href: '/anbi-transparantie' },
        { label: t('submenu.financials'), href: '/jaarstukken' },
      ],
    },
    { label: t('support'), href: '/steun-een-gezin' },
    { label: t('projects'), href: '/projecten' },
    { label: t('contact'), href: '/contact' },
  ]

  useEffect(() => {
    const cookieLocale =
      document.cookie
        .split('; ')
        .find((row) => row.startsWith('VICTORIAS_LOCALE'))
        ?.split('=')[1] ?? 'nl'

    if (cookieLocale) {
      setLocale(cookieLocale)
    } else {
      const browserLocale = navigator.language.slice(0, 2)
      setLocale(browserLocale)
      document.cookie = `VICTORIAS_LOCALE=${browserLocale};`
      router.refresh()
    }
  }, [router])

  const handleLocaleChange = (newLocale: Lang) => {
    setLocale(newLocale)
    document.cookie = `VICTORIAS_LOCALE=${newLocale};`
    router.refresh()
  }

  return (
    <nav className='bg-white fixed top-0 w-full px-4 flex items-center justify-between xl:justify-center xl:gap-40 h-20 shadow-sm z-50'>
      <Logo />

      <ul className='hidden xl:flex items-center gap-6 font-medium'>
        {menuItems.map(({ label, href, highlight, dropdown, submenu }) => (
          <li key={label} className='group relative'>
            {dropdown && submenu ? (
              <>
                <button className='group flex items-center text-[20px] text-[#70142E] hover:text-[#FFBFA0] cursor-pointer bg-transparent'>
                  {label}
                  <span className='ml-1 inline-block transition-transform duration-200 group-hover:rotate-180'>
                    <ArrowDown className='h-4 w-4 text-[#70142E]' />
                  </span>
                </button>
                <div className='absolute left-0 top-full mt-0 hidden min-w-[200px] rounded-xl border bg-white p-2 shadow-md group-hover:block z-20 w-[250px]'>
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {submenu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className='block hover:text-[#FFBFA0] text-[20px] w-full px-4 py-2 text-left text-[#70142E] hover:bg-gray-100 rounded-md cursor-pointer'
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              </>
            ) : (
              <Link
                href={href}
                className={`text-[20px] transition-colors hover:text-[#FFBFA0] ${
                  highlight ? 'text-[#70142E]' : 'text-[#70142E]'
                } cursor-pointer`}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className='hidden xl:flex items-center gap-1 rounded-full bg-[#f3dce2] px-1 py-1 text-xs font-semibold'>
        <LanguageSwitcher
          locale={locale as Lang}
          setLocale={handleLocaleChange}
        />
      </div>

      <button
        className='xl:hidden flex items-center justify-center order-2 z-30 cursor-pointer'
        aria-label='Open menu'
        onClick={() => setSidebarOpen(true)}
      >
        <HamburgerMenu />
      </button>

      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed inset-0 z-40 bg-black'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        menuItems={menuItems}
        locale={locale as Lang}
        setLocale={handleLocaleChange}
      />
    </nav>
  )
}

export default Navbar
