import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  const locale = (await cookies()).get('VICTORIAS_LOCALE')?.value || 'nl'

  return {
    locale,
    messages: (await import(`../lib/messages/${locale}.json`)).default,
  }
})
