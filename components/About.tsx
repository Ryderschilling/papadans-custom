'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-pd-black">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left - Image */}
        <motion.div variants={itemVariants} className="relative">
          <div className="border-4 border-pd-red overflow-hidden rounded-sm shadow-2xl">
            <img
              src="https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/d2fdf73e-97ea-4006-b13f-afd9e8e5f676/IMG_8394.jpg"
              alt="Papa Dan's Storefront"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-pd-gold opacity-30"></div>
        </motion.div>

        {/* Right - Content */}
        <motion.div variants={rightVariants}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 bg-pd-red"></div>
            <p className="text-sm font-semibold tracking-widest text-pd-gold">OUR STORY</p>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">40 Years of Tradition</h2>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Born in the Coachella Valley in 1984, Papa Dan's has spent four decades perfecting the art of Italian-American cooking. From our hand-tossed dough to our house-made sauces, every dish tells a story of tradition, family, and flavor.
          </p>

          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            What started as a neighborhood pizza joint has become a Palm Desert institution — a place where regulars feel like family and every meal is worth remembering.
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pd-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-pd-cream">Dine In</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pd-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-pd-cream">Take Out</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pd-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-pd-cream">Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pd-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-pd-cream">Catering</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
