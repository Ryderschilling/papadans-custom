'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function OrderCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: '#C41E3A',
        backgroundImage: 'url(https://static.spotapps.co/web/papadanspalmdesert--com/custom/order_back.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

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
            className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded font-semibold transition-all duration-300 flex-1 sm:flex-auto"
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
