'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const details = [
  'Custom menus built around your event',
  'Private dining in-house or off-site catering',
  'Ideal for groups of 8 or more',
  'Birthdays, corporate events & celebrations',
]

export default function Catering() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} className="relative !py-0 overflow-hidden" style={{ minHeight: '600px', backgroundColor: '#0A0A0A' }}>

      {/* Background — pizza from the oven */}
      <img
        src="/hero-pizza.jpg"
        alt="Papa Dan's fresh pizza from the oven"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '30% center' }}
      />

      {/* Gradient — left fully opaque so background never bleeds through */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(100deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0.85) 35%, rgba(10,10,10,0.30) 65%, rgba(10,10,10,0.10) 100%)',
        }}
      />


      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 container flex flex-col justify-center py-24 md:py-32 max-w-2xl"
      >
        {/* Eyebrow */}
        <motion.div variants={item} className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-pd-gold" />
          <p className="text-xs font-bold tracking-[0.3em] text-pd-gold">PRIVATE EVENTS & CATERING</p>
        </motion.div>

        {/* Headline */}
        <motion.h2 variants={item} className="text-6xl md:text-7xl font-serif text-white leading-tight mb-4">
          Let Us Host<br />
          <span className="text-pd-red">Your Celebration</span>
        </motion.h2>

        {/* Divider */}
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <div className="w-8 h-0.5 bg-pd-red" />
          <div className="w-2 h-2 bg-pd-red rotate-45" />
          <div className="w-8 h-0.5 bg-pd-red" />
        </motion.div>

        {/* Body */}
        <motion.p variants={item} className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
          Forty years of Italian-American tradition behind every dish. Whether it's an intimate
          dinner or a full event, we make it memorable.
        </motion.p>

        {/* Detail list — clean, no emoji */}
        <motion.ul variants={item} className="space-y-3 mb-10">
          {details.map((d) => (
            <li key={d} className="flex items-center gap-3 text-gray-400 text-sm">
              <span className="w-4 h-px bg-pd-gold flex-shrink-0" />
              {d}
            </li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.div variants={item}>
          <a
            href="tel:7605683267"
            className="inline-flex items-center gap-3 bg-pd-red hover:bg-pd-red-dark text-white font-bold px-10 py-4 rounded transition-all duration-300 text-base tracking-wide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
            </svg>
            (760) 568-3267
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
