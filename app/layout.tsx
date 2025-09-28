import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Netter - Automate sourcing through employee referrals',
  description: 'Netter maps your company network, finds relevant profiles when roles open, and motivates employees to make warm introductions. The strongest and easiest way to hire.',
  keywords: ['sourcing', 'employee referrals', 'recruitment', 'HR tech', 'talent acquisition'],
  authors: [{ name: 'Netter' }],
  creator: 'Netter',
  publisher: 'Netter',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://netter.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Netter - Automate sourcing through employee referrals',
    description: 'Netter maps your company network, finds relevant profiles when roles open, and motivates employees to make warm introductions. The strongest and easiest way to hire.',
    url: 'https://netter.com',
    siteName: 'Netter',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Netter - Automate hiring through employee referrals',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netter - Automate sourcing through employee referrals',
    description: 'Netter maps your company network, finds relevant profiles when roles open, and motivates employees to make warm introductions. The strongest and easiest way to hire.',
    images: ['/og-image.png'],
    creator: '@netter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100`}>
        {children}
      </body>
    </html>
  )
}
