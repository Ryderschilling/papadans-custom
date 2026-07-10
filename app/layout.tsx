import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: "Papa Dan's Pizza & Pasta | Palm Desert, CA",
  description:
    'Voted Best Pizza in the Coachella Valley. Serving Palm Desert since 1984. Dine-in, takeout, delivery & catering.',
  keywords: 'pizza, pasta, Italian restaurant, Palm Desert, Coachella Valley, dining',
  authors: [{ name: 'Papa Dan\'s Pizza & Pasta' }],
  openGraph: {
    title: "Papa Dan's Pizza & Pasta | Palm Desert, CA",
    description: 'Voted Best Pizza in the Coachella Valley. Serving since 1984.',
    url: 'https://papadanspalmdesert.com',
    siteName: "Papa Dan's Pizza & Pasta",
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
