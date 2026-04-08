import type { Metadata, Viewport } from 'next'
import './globals.css'

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
    <html lang="en" className="grain">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="mesh-gradient dot-grid bg-surface text-text-primary">
        {children}
      </body>
    </html>
  )
}
