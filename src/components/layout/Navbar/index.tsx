'use client'

import ArrowDown from '@/assets/icon/ArrowDown'
import HamburgerMenu from '@/assets/icon/HamburgerMenu'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { LanguageSwitcher } from './languageSwitcher'
import Logo from './logo'
import SideBar from './sideBar'

export type Lang = 'NL' | 'ES' | 'EN'

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

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/', highlight: true },
  {
    label: 'Over de Stichting',
    href: '#',
    dropdown: true,
    submenu: [
      { label: 'Over de Stichting', href: '/over-de-stichting' },
      { label: 'Ons Team', href: '/ons-team' },
      { label: 'ANBI Transparantie', href: '/anbi-transparantie' },
      { label: 'Jaarstukken', href: '/jaarstukken' },
    ],
  },
  { label: 'Steun een Gezin', href: '/steun-een-gezin' },
  { label: 'Projecten', href: '/projecten' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [lang, setLang] = useState<Lang>('NL')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <nav className='bg-white w-full px-4 flex items-center justify-between xl:justify-center xl:gap-40 h-20 shadow-sm font-inter relative'>
      <Logo />

      <ul className='hidden xl:flex items-center gap-6 font-medium'>
        {menuItems.map(({ label, href, highlight, dropdown, submenu }) => (
          <li key={label} className='group relative'>
            {dropdown && submenu ? (
              <>
                <button className='flex items-center text-[18px] text-[#70142E] hover:text-[#FFBFA0] cursor-pointer bg-transparent'>
                  {label}
                  <ArrowDown className='ml-1 inline-block h-4 w-4 text-[#70142E]' />
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
                        className='block hover:text-[#FFBFA0] text-[18px] w-full px-4 py-2 text-left text-[#70142E] hover:bg-gray-100 rounded-md cursor-pointer'
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
                className={`text-[18px] transition-colors hover:text-[#FFBFA0] ${
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
        <LanguageSwitcher lang={lang} setLang={setLang} />
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
        lang={lang}
        setLang={setLang}
      />
    </nav>
  )
}

export default Navbar
