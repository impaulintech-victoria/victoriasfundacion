'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import en from '@/assets/icon/flags/EN'
import es from '@/assets/icon/flags/ES'
import nl from '@/assets/icon/flags/NL'

type Lang = 'nl' | 'es' | 'en'

interface LanguageSwitcherProps {
  locale: Lang
  setLocale: (lang: Lang) => void
  className?: string
}

const FLAGS: Record<Lang, React.ElementType> = {
  nl,
  es,
  en,
}

const LABELS: Record<Lang, string> = {
  nl: 'Nederlands',
  es: 'Español',
  en: 'English',
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  locale,
  setLocale,
  className = '',
}) => {
  const FlagIcon = FLAGS[locale]
  const availableLocales = Object.keys(FLAGS) as Lang[]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className={`cursor-pointer flex items-center gap-2 px-3 py-1.5 text-xs rounded-full bg-[#f3dce2] text-[#70142e] hover:bg-[#f7e8eb] ${className}`}
        >
          <FlagIcon className='w-4 h-auto rounded-sm' />
          <p className='uppercase'>{locale}</p>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-36'>
        {availableLocales.map((option) => {
          const OptionFlag = FLAGS[option]
          return (
            <DropdownMenuItem
              key={option}
              onClick={() => setLocale(option)}
              className='cursor-pointer flex items-center gap-2 px-2 py-1.5 text-sm text-[#70142e] hover:bg-[#f3dce2] focus:bg-[#f3dce2]'
            >
              <OptionFlag className='w-4 h-auto rounded-sm' />
              {LABELS[option]}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
