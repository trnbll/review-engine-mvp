import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReviewEngine - Home Service Review Automation Platform',
  description: 'The leading review automation platform for home service businesses. Automate review collection, AI-powered responses, and reputation management.',
  keywords: ['review automation', 'home services', 'reputation management', 'Google reviews', 'customer feedback'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}