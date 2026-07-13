'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { menuItems } from '@/data/menu'
import MenuFilter from '@/components/menu/MenuFilter'
import MenuGrid from '@/components/menu/MenuGrid'

const DRAWING_URL = 'https://static.spotapps.co/web/papadanspalmdesert--com/custom/order_back.png'

export default function MenuPage() {
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) setActiveFilter(category)
  }, [searchParams])

  return (
    <>
      {/* Italian drawings — fixed to viewport sides, always visible while on this page */}
      <div
        className="fixed top-0 left-0 h-full w-64 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `url(${DRAWING_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          opacity: 0.06,
          maskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 100%)',
        }}
      />
      <div
        className="fixed top-0 right-0 h-full w-64 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `url(${DRAWING_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          opacity: 0.06,
          maskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 100%)',
        }}
      />

      {/* Menu Section */}
      <section className="bg-white pt-20 relative">

        {/* Sticky filter bar — sits just below the nav */}
        <div className="sticky top-20 bg-white z-30 border-b border-gray-100 shadow-sm">
          <div className="container py-4">
            <MenuFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>
        </div>

        {/* Scrollable menu content */}
        <div className="container py-12 relative z-10">
          <MenuGrid items={menuItems} activeFilter={activeFilter} />

          {/* CTA at bottom */}
          <div className="mt-20 pt-20 border-t border-gray-200 text-center">
            <p className="text-lg text-gray-600 mb-8">Ready to place an order?</p>
            <a
              href="https://orderonline.granburyrs.com/slice/menu/main"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
