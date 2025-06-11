import type { Metadata } from 'next'
import { Overlock } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

const overlock = Overlock({
  subsets: ['latin'],
  variable: '--font-overlock',
  display: 'swap',
  weight: ['400', '700'],
  style: 'normal',
  preload: true,
  fallback: ['serif'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: "Victoria's Fundación Foundation – Building hopeful families together",
  description:
    "Victoria's Fundación ondersteunt kwetsbare gezinnen in Nederland met hulp, begeleiding en projecten voor een sterke toekomst.",
  keywords:
    "stichting voor gezinnen, hulp bij opvoeding, ondersteuning in Nederland, steun aan ouders, hulptraject gezinnen, Victoria's Fundación, hulp voor kwetsbare families",
  openGraph: {
    type: 'website',
    url: 'https://www.victoriasfundacion.nl',
    title:
      "Stichting Victoria's Fundación – Samen bouwen aan hoopvolle gezinnen",
    description:
      "Victoria's Fundación ondersteunt kwetsbare gezinnen in Nederland met hulp, begeleiding en projecten voor een sterke toekomst.",
    siteName: "Victoria's Fundación",
    images: [
      {
        url: 'https://www.victoriasfundacion.nl/img/Header/logo.png',
        alt: "Victoria's Fundación Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@',
    title:
      "Stichting Victoria's Fundación – Samen bouwen aan hoopvolle gezinnen",
    description:
      "Victoria's Fundación ondersteunt kwetsbare gezinnen in Nederland met hulp, begeleiding en projecten voor een sterke toekomst.",
    images: [
      {
        url: 'https://www.victoriasfundacion.nl/img/Header/logo.png',
        alt: "Victoria's Fundación Logo",
      },
    ],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()
  const locale = await getLocale()

  return (
    <html lang={locale} className={`bg-base text-primary ${overlock.variable}`}>
      <body className='font-overlock antialiased'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <div className='h-20' />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
