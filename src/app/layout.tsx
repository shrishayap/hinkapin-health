import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from '@/components/footer';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hinkapin Health',
  description: 'Hinkapin Health provides affordable, high-quality, upfront priced healthcare to patients in the greater Dallas Area',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <SpeedInsights />
        <NextIntlClientProvider messages={messages}>
          <div className='flex flex-col min-h-screen'>
            <main className='flex-grow bg-slate-50'>
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
