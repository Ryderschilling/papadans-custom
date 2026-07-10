'use client'

import { useState } from 'react'
import { menuItems } from '@/data/menu'
import MenuFilter from '@/components/menu/MenuFilter'
import MenuGrid from '@/components/menu/MenuGrid'
import { motion } from 'framer-motion'

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-pd-gray to-pd-black pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-6xl md:text-7xl font-serif text-white mb-4">Our Menu</h1>
          <p className="text-lg text-pd-cream">Explore our full range of authentic Italian-American cuisine</p>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="py-20 md:py-32 bg-pd-black">
        <div className="container">
          {/* Filter */}
          <MenuFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

          {/* Grid */}
          <div className="mt-12">
            <MenuGrid items={menuItems} activeFilter={activeFilter} />
          </div>

          {/* CTA at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-20 border-t border-white/10 text-center"
          >
            <p className="text-lg text-gray-400 mb-8">Ready to place an order?</p>
            <a
              href="https://orderonline.granburyrs.com/slice/menu/main"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              ORDER NOW
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
