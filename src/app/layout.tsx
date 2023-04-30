import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Spaceship Web Solutions',
  description:
    'Entregando soluções de tecnologia que agregam valor a vida das pessoas.',
  twitter: {
    title: 'Spaceship Web Solutions',
    description:
      'Entregando soluções de tecnologia que agregam valor a vida das pessoas.',
    creator: '@jns_stunner',
    card: 'summary_large_image',
    images: `${process.env.publicUrl}/web/images/banner.jpg`,
  },
  creator: '@jns_stunner',
  openGraph: {
    type: 'website',
    title: 'Spaceship Web Solutions',
    url: process.env.publicUrl,
    description:
      'Entregando soluções de tecnologia que agregam valor a vida das pessoas.',
    images: [
      {
        url: `${process.env.publicUrl}/web/images/banner.jpg`,
      },
    ],
    siteName: 'Spaceship Web Solutions',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-[#0D0E11] ${poppins.className}`}>{children}</body>
    </html>
  )
}
