import ArrowDown from '@/assets/icon/ArrowDown'
import CloseIcon from '@/assets/icon/CloseIcon'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { Lang, MenuItem } from '.'
import { LanguageSwitcher } from './languageSwitcher'

const SideBar = ({
  sidebarOpen,
  setSidebarOpen,
  menuItems,
  lang,
  setLang,
}: {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
  menuItems: MenuItem[]
  lang: Lang
  setLang: (lang: Lang) => void
}) => {
  return (
    <motion.aside
      initial={{ x: '100%' }}
      animate={{ x: sidebarOpen ? 0 : '100%' }}
      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
      className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg flex flex-col p-6`}
      style={{ pointerEvents: sidebarOpen ? 'auto' : 'none' }}
    >
      <div className='flex justify-between items-center mb-4'>
        <div className='xl:hidden flex gap-1 rounded-full bg-[#f3dce2] px-2 py-1 text-xs font-semibold self-start'>
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
        <button
          className='p-2 rounded hover:bg-gray-100 cursor-pointer'
          aria-label='Close menu'
          onClick={() => setSidebarOpen(false)}
        >
          <CloseIcon />
        </button>
      </div>

      <ul className='flex flex-col gap-2'>
        {menuItems.map(({ label, href, dropdown, submenu }) => (
          <li key={label}>
            {dropdown && submenu ? (
              <details className='group'>
                <summary className='flex items-center justify-between cursor-pointer px-2 py-2 rounded hover:bg-[#f3dce2] text-[#70142E] hover:text-[#FFBFA0] text-[18px]'>
                  {label}
                  <ArrowDown className='ml-1 h-4 w-4 text-[#70142E] group-open:rotate-180 transition-transform' />
                </summary>
                <ul className='ml-4 mt-1 flex flex-col gap-1'>
                  {submenu.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className='block px-2 py-1 rounded text-[#70142E] text-[18px] hover:bg-[#f3dce2] hover:text-[#FFBFA0] cursor-pointer'
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link
                href={href}
                className='block px-2 py-2 rounded text-[#70142E] text-[18px] hover:bg-[#f3dce2] hover:text-[#FFBFA0] cursor-pointer'
                onClick={() => setSidebarOpen(false)}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </motion.aside>
  )
}

export default SideBar
