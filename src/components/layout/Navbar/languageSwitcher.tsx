'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import EN from '@/assets/icon/flags/EN'
import ES from '@/assets/icon/flags/ES'
import NL from '@/assets/icon/flags/NL'

type Lang = 'NL' | 'ES' | 'EN'

interface LanguageSwitcherProps {
  lang: Lang
  setLang: (lang: Lang) => void
  className?: string
}

const FLAGS: Record<Lang, React.ElementType> = {
  NL,
  ES,
  EN,
}

const LABELS: Record<Lang, string> = {
  NL: 'Nederlands',
  ES: 'Español',
  EN: 'English',
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  lang,
  setLang,
  className = '',
}) => {
  const FlagIcon = FLAGS[lang]
  const availableLangs = Object.keys(FLAGS) as Lang[]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className={`cursor-pointer flex items-center gap-2 px-3 py-1.5 text-xs rounded-full bg-[#f3dce2] text-[#70142e] hover:bg-[#f7e8eb] ${className}`}
        >
          <FlagIcon className='w-4 h-auto rounded-sm' />
          {lang}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-36'>
        {availableLangs.map((option) => {
          const OptionFlag = FLAGS[option]
          return (
            <DropdownMenuItem
              key={option}
              onClick={() => setLang(option)}
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
