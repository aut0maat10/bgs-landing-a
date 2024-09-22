import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bushwick Guitar Studio',
  description: 'Online and in person Guitar Lessons in Brooklyn, NY',
  openGraph: {
    title: 'Bushwick Guitar Studio',
    description: 'Online and in-person guitar lessons in brooklyn, NY',
    url: 'https://bushwickguitarstudio.com',
    siteName: 'Bushwick Guitar Studio',
    images: [
      {
        url: 'https://www.bushwickguitarstudio.com/_next/static/media/hero4.4bd65359.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="synthwave">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
