import { getPlaceData } from '@/lib/google-places'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import About from '@/components/About'
import MenuHighlights from '@/components/MenuHighlights'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import Catering from '@/components/Catering'
import OrderCTA from '@/components/OrderCTA'
import LocationHours from '@/components/LocationHours'

export default async function Home() {
  const placeData = await getPlaceData()

  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <MenuHighlights />
      <Gallery />
      <Reviews data={placeData} />
      <Catering />
      <OrderCTA />
      <LocationHours />
    </>
  )
}
