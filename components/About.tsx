'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = ['Dine In', 'Take Out', 'Delivery', 'Catering']

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT — Stacked photos */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          {/* Decorative gold frame offset behind */}
          <div className="absolute -bottom-5 -left-5 w-full h-full border-2 border-pd-gold/30 rounded-sm z-0" />

          {/* Main food photo */}
          <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
            <img
              src="https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/1698365f-8445-411c-b94d-99537740b227/full.jpeg"
              alt="Papa Dan's signature pizza"
              className="w-full h-[480px] object-cover"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Storefront inset photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-8 -right-6 z-20 w-44 h-32 rounded-sm overflow-hidden border-4 border-white shadow-xl"
          >
            <img
              src="https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/d2fdf73e-97ea-4006-b13f-afd9e8e5f676/IMG_8394.jpg"
              alt="Papa Dan's Palm Desert"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Est. 1984 circular badge */}
          <motion.div
            initial={{ opacity: 0, rotate: -20, scale: 0.6 }}
            animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -top-5 -left-5 z-30 w-24 h-24 rounded-full bg-pd-red shadow-xl border-4 border-white flex flex-col items-center justify-center"
          >
            <p className="text-white text-[8px] font-bold tracking-[0.2em] mb-0.5">EST.</p>
            <p className="text-white text-2xl font-serif font-bold leading-none">1984</p>
            <div className="w-10 h-px bg-white/50 mt-1" />
            <p className="text-white/70 text-[7px] tracking-widest mt-1">PALM DESERT</p>
          </motion.div>
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          {/* Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-pd-gold" />
            <p className="text-xs font-bold tracking-[0.25em] text-pd-gold">OUR STORY</p>
            <div className="flex-1 h-px bg-pd-gold/20" />
          </div>

          {/* Pull quote */}
          <div className="mb-6 pl-4 border-l-2 border-pd-red">
            <p className="text-xl md:text-2xl font-serif italic text-gray-500 leading-relaxed">
              "Born in the valley.<br />Built on tradition."
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
            40 Years of<br />
            <span className="text-pd-red">Italian Tradition</span>
          </h2>

          {/* Thin red divider */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-0.5 bg-pd-red" />
            <div className="w-2 h-2 bg-pd-red rotate-45" />
            <div className="w-8 h-0.5 bg-pd-red" />
          </div>

          {/* Body */}
          <p className="text-gray-600 mb-5 leading-relaxed">
            Born in the Coachella Valley in 1984, Papa Dan's has spent four decades perfecting the art of Italian-American cooking. From hand-tossed dough to house-made sauces, every dish tells a story of tradition, family, and flavor.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            What started as a neighborhood pizza joint has become a Palm Desert institution — a place where regulars feel like family and every meal is worth remembering.
          </p>

          {/* Service pills */}
          <div className="flex flex-wrap gap-3">
            {services.map((s) => (
              <span
                key={s}
                className="px-5 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-full hover:border-pd-red hover:text-pd-red transition-colors duration-200"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
