'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function OrderCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-pd-black to-pd-gray relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-pd-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pd-gold rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Ready to Order?</h2>
        <p className="text-lg md:text-xl text-pd-cream mb-12">
          Available for Dine-In, Takeout, Delivery & Catering
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="https://orderonline.granburyrs.com/slice/menu/main"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 sm:flex-auto"
          >
            ORDER ONLINE
          </a>
          <a href="tel:7605683267" className="btn-secondary flex-1 sm:flex-auto">
            CALL US
          </a>
        </div>

        <p className="text-sm text-gray-400">
          Minimum $25 for delivery · Credit cards accepted · 3% credit card surcharge
        </p>
      </motion.div>
    </section>
  )
}
