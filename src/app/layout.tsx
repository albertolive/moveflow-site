import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const clashDisplay = localFont({
  src: [
    { path: './fonts/ClashDisplay-Extralight.woff2', weight: '200' },
    { path: './fonts/ClashDisplay-Light.woff2', weight: '300' },
    { path: './fonts/ClashDisplay-Regular.woff2', weight: '400' },
    { path: './fonts/ClashDisplay-Medium.woff2', weight: '500' },
    { path: './fonts/ClashDisplay-Semibold.woff2', weight: '600' },
    { path: './fonts/ClashDisplay-Bold.woff2', weight: '700' },
  ],
  variable: '--font-clash-display',
  display: 'swap',
})

const satoshi = localFont({
  src: [
    { path: './fonts/Satoshi-Light.woff2', weight: '300' },
    { path: './fonts/Satoshi-Regular.woff2', weight: '400' },
    { path: './fonts/Satoshi-Medium.woff2', weight: '500' },
    { path: './fonts/Satoshi-Bold.woff2', weight: '700' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MoveFlow — Beat Your Sedentary Brain',
  description: 'The anti-sedentary Mac app that uses 7 behavioral psychology mechanisms to make skipping breaks harder than taking them.',
  openGraph: {
    title: 'MoveFlow — Beat Your Sedentary Brain',
    description: 'The anti-sedentary Mac app that uses 7 behavioral psychology mechanisms to make skipping breaks harder than taking them.',
    type: 'website',
    url: 'https://moveflow.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoveFlow — Beat Your Sedentary Brain',
    description: '7 psychology tricks that make skipping breaks harder than taking them.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`grain ${clashDisplay.variable} ${satoshi.variable} ${jetbrainsMono.variable}`}>
      <body className="mesh-gradient dot-grid bg-surface text-text-primary">
        {children}
      </body>
    </html>
  )
}
