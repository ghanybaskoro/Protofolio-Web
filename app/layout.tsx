import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ghany Widito Baskoro - Portfolio',
  description: 'Industrial Engineering & Technology Management Professional | Product Owner | ERP Finance Specialist',
  keywords: ['Ghany Widito Baskoro', 'Product Owner', 'ERP Finance', 'Technology Management', 'Industrial Engineering'],
  authors: [{ name: 'Ghany Widito Baskoro' }],
  openGraph: {
    title: 'Ghany Widito Baskoro - Portfolio',
    description: 'Industrial Engineering & Technology Management Professional',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
