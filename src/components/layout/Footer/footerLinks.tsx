import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

export interface FooterSection {
  title: string
  links: {
    label: string
    href: string
  }[]
}

interface FooterLinksProps {
  sections: FooterSection[]
}

function FooterLinks({ sections }: FooterLinksProps) {
  return (
    <section id='footer-links'>
      <Accordion type='single' collapsible className='flex flex-col gap-4'>
        {sections.map((section) => (
          <AccordionItem
            key={section.title}
            value={section.title.toLowerCase().replace(/\s+/g, '-')}
          >
            <AccordionTrigger className='bg-[#F5E1E6] px-3 py-2 border border-black font-bold text-primary'>
              {section.title}
            </AccordionTrigger>
            <AccordionContent className='px-3 py-2 border-x border-b border-black rounded-sm'>
              <ul className='flex flex-col gap-1 text-muted text-sm'>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default FooterLinks
