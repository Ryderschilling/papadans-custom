import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getPlaceData } from '@/lib/google-places'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://papadanspalmdesert.com'),
  title: {
    default: "Papa Dan's Pizza & Pasta | Palm Desert, CA",
    template: "%s | Papa Dan's Pizza & Pasta",
  },
  description:
    "Voted Best Pizza in the Coachella Valley. Papa Dan's has served Palm Desert since 1984 — hand-tossed pizza, house-made pasta, seafood, breakfast, catering & delivery.",
  keywords: [
    'pizza Palm Desert',
    'Italian restaurant Palm Desert',
    'best pizza Coachella Valley',
    'pasta Palm Desert',
    'Papa Dans Palm Desert',
    'pizza delivery Palm Desert',
    'catering Palm Desert',
    'breakfast Palm Desert',
    'seafood Palm Desert',
    'Italian food Rancho Mirage',
    'pizza near me Palm Desert CA',
    'family restaurant Palm Desert',
  ],
  authors: [{ name: "Papa Dan's Pizza & Pasta" }],
  alternates: {
    canonical: 'https://papadanspalmdesert.com',
  },
  openGraph: {
    title: "Papa Dan's Pizza & Pasta | Best Pizza in the Coachella Valley",
    description:
      "Voted Best Pizza in the Coachella Valley. Serving Palm Desert since 1984. Dine-in, takeout, delivery & catering.",
    url: 'https://papadanspalmdesert.com',
    siteName: "Papa Dan's Pizza & Pasta",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/hero-pizza.jpg',
        width: 1200,
        height: 630,
        alt: "Papa Dan's Pizza — Best Pizza in Palm Desert, CA",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Papa Dan's Pizza & Pasta | Palm Desert, CA",
    description: 'Voted Best Pizza in the Coachella Valley. Serving since 1984.',
    images: ['/hero-pizza.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: "Papa Dan's Pizza & Pasta",
  url: 'https://papadanspalmdesert.com',
  creator: {
    '@type': 'Person',
    name: 'Ryder Schilling',
    description: 'Built by Ryder Schilling',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What are Papa Dan's hours?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Papa Dan's is open Monday–Thursday 11:00 AM – 7:30 PM, Friday 11:00 AM – 8:30 PM, and Saturday–Sunday 10:00 AM – 8:30 PM. Weekend breakfast is served Saturday and Sunday from 10:00 AM – 2:00 PM.",
      },
    },
    {
      '@type': 'Question',
      name: "Does Papa Dan's offer delivery?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — Papa Dan's offers delivery. You can also order online for takeout at papadanspalmdesert.com.",
      },
    },
    {
      '@type': 'Question',
      name: "Does Papa Dan's do catering?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, Papa Dan's offers catering for events of all sizes in the Coachella Valley. Contact us at (760) 568-3267 or info@papadanspalmdesert.com for catering inquiries.",
      },
    },
    {
      '@type': 'Question',
      name: "Where is Papa Dan's Pizza located?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Papa Dan's is located at 73011 Country Club Drive, Suite F, Palm Desert, CA 92260.",
      },
    },
    {
      '@type': 'Question',
      name: "How long has Papa Dan's been open?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Papa Dan's has been serving the Coachella Valley since 1984 — over 40 years as a Palm Desert institution.",
      },
    },
    {
      '@type': 'Question',
      name: "Does Papa Dan's serve breakfast?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — Papa Dan's serves breakfast on Saturday and Sunday from 10:00 AM to 2:00 PM.",
      },
    },
  ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Fetch live data for JSON-LD schema — cached 24h, falls back to hardcoded if API isn't configured
  const placeData = await getPlaceData()

  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: "Papa Dan's Pizza & Pasta",
    image: [
      'https://papadanspalmdesert.com/hero-pizza.jpg',
      'https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/822546d0-a20b-4d6b-980b-4fb476c3ab26/papa-dans-logo-oval-light.png',
    ],
    url: 'https://papadanspalmdesert.com',
    telephone: '+17605683267',
    email: 'info@papadanspalmdesert.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '73011 Country Club Drive Suite F',
      addressLocality: 'Palm Desert',
      addressRegion: 'CA',
      postalCode: '92260',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.7339,
      longitude: -116.3723,
    },
    servesCuisine: ['Italian', 'Pizza', 'Pasta', 'Seafood', 'Breakfast'],
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card',
    hasMap: 'https://www.google.com/maps/place/73011+Country+Club+Dr+Suite+F,+Palm+Desert,+CA+92260',
    areaServed: [
      { '@type': 'City', name: 'Palm Desert' },
      { '@type': 'City', name: 'Rancho Mirage' },
      { '@type': 'City', name: 'Indian Wells' },
      { '@type': 'City', name: 'La Quinta' },
      { '@type': 'City', name: 'Palm Springs' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '11:00',
        closes: '19:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday'],
        opens: '11:00',
        closes: '20:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '20:30',
      },
    ],
    // Live from Google Places API — updates automatically every 24 hours
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(placeData.rating),
      bestRating: '5',
      worstRating: '1',
      ratingCount: String(placeData.reviewCount),
    },
    review: placeData.reviews.slice(0, 2).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: { '@type': 'Rating', ratingValue: String(r.rating) },
      reviewBody: r.text,
    })),
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
