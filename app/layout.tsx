import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Southern Cities Realty | Charlotte NC Real Estate Brokerage',
  description: 'Full-service real estate brokerage serving Charlotte and beyond. Licensed, experienced, and backed by Southern Cities Enterprises vertically integrated ecosystem.',
  keywords: 'Charlotte real estate, NC realtor, home buying, home selling, investment property, Southern Cities',
  icons: {
    icon: '/logos/sc-enterprises-01.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
