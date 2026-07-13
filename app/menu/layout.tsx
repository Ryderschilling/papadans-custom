import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Full Menu',
  description:
    "Browse Papa Dan's full menu — hand-tossed pizza, house-made pasta, fresh seafood, breakfast, and more. Order online or visit us at 73011 Country Club Dr, Palm Desert, CA.",
  alternates: {
    canonical: 'https://papadanspalmdesert.com/menu',
  },
  openGraph: {
    title: "Full Menu | Papa Dan's Pizza & Pasta",
    description:
      "From hand-tossed pizza to house-made pasta — explore the full Papa Dan's menu and order online.",
    url: 'https://papadanspalmdesert.com/menu',
  },
}

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  // Suspense required because the menu page uses useSearchParams()
  return <Suspense>{children}</Suspense>
}
