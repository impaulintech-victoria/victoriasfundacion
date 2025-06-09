import type { Metadata } from 'next'
import { Overlock } from 'next/font/google'
import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`bg-base text-primary ${overlock.variable}`}>
      <body className='font-overlock antialiased'>{children}</body>
    </html>
  )
}
