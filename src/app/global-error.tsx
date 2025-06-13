'use client'

import * as Sentry from '@sentry/nextjs'
import { getLocale } from 'next-intl/server'
import NextError from 'next/error'
import { useEffect } from 'react'

export default async function GlobalError({
  error,
}: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  )
}
