'use client'

import Card from '@/components/common/Card'
import TextAnimationWrapper from '@/components/others/textAnimationWrapper'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { MailIcon, MapPin, PhoneIcon } from 'lucide-react'
import { UseFormReturn, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Naam moet minimaal 2 karakters bevatten' })
    .max(50, {
      message: 'Naam mag maximaal 50 karakters bevatten',
    }),
  email: z.string().email({ message: 'Ongeldige email adres' }),
  topic: z
    .string()
    .min(2, { message: 'Onderwerp moet minimaal 2 karakters bevatten' })
    .max(50, {
      message: 'Onderwerp mag maximaal 50 karakters bevatten',
    }),
  message: z
    .string()
    .min(5, { message: 'Bericht moet minimaal 5 karakters bevatten' }),
})

const ContactFormSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      topic: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement form submission
    if (values) {
      return
    }
  }

  return (
    <section className='flex sm:flex-row flex-col justify-center items-start self-center gap-5 md:gap-7 lg:gap-14 px-5 sm:px-10 md:px-14 lg:px-20 2xl:px-44 py-9 md:py-18 w-full'>
      <TextAnimationWrapper
        delay={0}
        animation='fade-up'
        className='flex-[2] justify-center items-center self-center w-full'
      >
        <ContactFormCard form={form} onSubmit={onSubmit} />
      </TextAnimationWrapper>
      <TextAnimationWrapper
        delay={200}
        animation='fade-up'
        className='flex-[1] justify-center w-full'
      >
        <ContactInfoSection />
      </TextAnimationWrapper>
    </section>
  )
}

export default ContactFormSection

function ContactFormCard({
  form,
  onSubmit,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>
  onSubmit: (values: z.infer<typeof formSchema>) => void
}) {
  return (
    <Card className='flex flex-col gap-5 border border-muted/30 w-full xl:max-w-3xl'>
      <h2 className='font-bold text-primary text-xl md:text-2xl 2xl:text-3xl'>
        Stuur ons een bericht
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm md:text-base 2xl:text-lg'>
                  Naam
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Uw naam'
                    className='text-sm md:text-base 2xl:text-lg'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm md:text-base 2xl:text-lg'>
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='uw.email@voorbeeld.nl'
                    className='text-sm md:text-base 2xl:text-lg'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='topic'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm md:text-base 2xl:text-lg'>
                  Onderwerp
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Onderwerp van uw bericht'
                    className='text-sm md:text-base 2xl:text-lg'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm md:text-base 2xl:text-lg'>
                  Bericht
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder='Typ hier uw bericht...'
                    className='h-[100px] text-sm md:text-base 2xl:text-lg'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='py-3 md:py-5 xl:py-6 w-full text-sm md:text-base 2xl:text-lg'
          >
            Verstuur Bericht
          </Button>
        </form>
      </Form>
    </Card>
  )
}

function ContactInfoSection() {
  return (
    <section className='flex flex-col gap-5 px-3'>
      <div className='flex flex-col gap-2'>
        <h3 className='font-bold text-primary text-lg md:text-xl 2xl:text-2xl'>
          Contactgegevens
        </h3>
        <ul className='flex flex-col gap-2 text-sm md:text-base 2xl:text-lg'>
          <li className='flex items-center gap-3'>
            <MailIcon className='w-4 h-4' />
            <span className='text-muted'>info@victoriasorigen.nl</span>
          </li>
          <li className='flex items-center gap-3'>
            <PhoneIcon className='w-4 h-4' />
            <span className='text-muted'>+31 6 12345678</span>
          </li>
          <li className='flex items-center gap-3'>
            <MapPin className='w-4 h-4' />
            <span className='text-muted'>
              Voorbeeldstraat 1<br />
              1234 AB, Voorbeeldstad
              <br />
              Nederland
            </span>
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='font-bold text-primary text-lg md:text-xl 2xl:text-2xl'>
          Bedrijfsgegevens{' '}
        </h3>
        <ul className='flex flex-col gap-2 text-muted text-sm md:text-base 2xl:text-lg'>
          <li>KvK-nummer: 12345678</li>
          <li>RSIN/ANBI: 87654321</li>
        </ul>
      </div>
    </section>
  )
}
