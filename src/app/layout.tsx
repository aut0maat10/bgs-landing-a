import type { Metadata } from 'next'
import React from 'react'
import Script from 'next/script'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guitar Lessons Brooklyn NY | Online | In Person',
  description:
    'Want to take your guitar playing to the next level? Learn to play with bands and come up with your own parts that fit the song? Take lessons with an experienced guitar teacher and musician – online or in-person.',
  openGraph: {
    title: 'Bushwick Guitar Studio',
    description: 'Online and in-person guitar lessons in Brooklyn, NY',
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
      <head>
        <GoogleAnalytics gaId="G-7E2HZHZ1Y0" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16871823694"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16871823694"
          strategy="afterInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16871823694');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
    // <html lang="en" data-theme="synthwave">
    //   <GoogleTagManager gtmId="AW-16871823694" />
    //   <GoogleAnalytics gaId="G-7E2HZHZ1Y0" />
    //   <body className={inter.className}>{children}</body>
    // </html>
  )
}
