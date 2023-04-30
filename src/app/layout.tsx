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
    "Delivering technology solutions that add value to people's lives.",
  twitter: {
    title: 'Spaceship Web Solutions',
    description:
      "Delivering technology solutions that add value to people's lives.",
    creator: '@jns_stunner',
    card: 'summary_large_image',
    images: `${
      process.env.isDev ? 'http://localhost:3000' : 'https://spaceshipws.com'
    }/banner.jpg`,
  },
  creator: '@jns_stunner',
  openGraph: {
    type: 'website',
    title: 'Spaceship Web Solutions',
    url: process.env.isDev
      ? 'http://localhost:3000'
      : 'https://spaceshipws.com',
    description:
      "Delivering technology solutions that add value to people's lives.",
    images: [
      {
        url: `${
          process.env.isDev
            ? 'http://localhost:3000'
            : 'https://spaceshipws.com'
        }/banner.jpg`,
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
