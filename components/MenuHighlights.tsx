'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const highlights = [
  {
    title: 'Pizza',
    description: 'Hand-tossed or thin crust. Build your own or choose from 18+ specialty pizzas made fresh daily.',
    image: 'https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/1698365f-8445-411c-b94d-99537740b227/full.jpeg',
  },
  {
    title: 'Pasta',
    description: 'Classic Italian specialties made to order. Ravioli, lasagna, parmigiana, piccata, marsala and more.',
    image: 'https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/a19c439a-3d0c-4362-b1bd-965a7ef9bb98/medium.jpg',
  },
  {
    title: 'Breakfast',
    description: 'Italian-American brunch every Saturday & Sunday from 10am–2pm. Omelettes, eggs benedict, and more.',
    image: 'https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/04aa8451-abb8-4fd3-9cbb-3fec77df679f/medium.jpeg',
  },
]

export default function MenuHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-pd-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">Menu Highlights</h2>
          <p className="text-lg text-gray-400">Explore our signature offerings</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Link href="/menu">
                <div className="group relative overflow-hidden rounded-lg cursor-pointer h-96 md:h-[500px]">
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

                  {/* Gradient from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 group-hover:from-pd-red/20 transition-all duration-300">
                    <h3 className="text-4xl font-serif text-white mb-3 group-hover:text-pd-gold transition-colors">{item.title}</h3>
                    <p className="text-gray-200 mb-6 text-sm leading-relaxed">{item.description}</p>
                    <div className="flex items-center gap-2 text-pd-gold group-hover:text-white transition-colors">
                      <span className="font-semibold">EXPLORE</span>
                      <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
