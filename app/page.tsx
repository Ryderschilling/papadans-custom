import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import About from '@/components/About'
import MenuHighlights from '@/components/MenuHighlights'
import Reviews from '@/components/Reviews'
import OrderCTA from '@/components/OrderCTA'
import LocationHours from '@/components/LocationHours'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <MenuHighlights />
      <Reviews />
      <OrderCTA />
      <LocationHours />
    </>
  )
}
