'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: 'Est. 1984', label: 'Serving the Valley' },
  { value: '#1 Pizza', label: 'Voted Best in Coachella Valley' },
  { value: '4.1★', label: '810+ Google Reviews' },
  { value: '160+ Items', label: 'Pizza · Pasta · Seafood & More' },
]

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="bg-gray-100 py-0 md:py-16 border-y border-gray-200">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="container grid grid-cols-2 md:grid-cols-4 gap-0"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.value}
            variants={itemVariants}
            className={`flex flex-col items-center justify-center py-5 md:py-8 ${index !== stats.length - 1 ? 'md:border-r border-gray-200' : ''} ${index % 2 === 0 ? 'border-r border-gray-200 md:border-r-0' : ''} ${index < 2 ? 'border-b border-gray-200 md:border-b-0' : ''}`}
          >
            <h3 className="text-2xl md:text-5xl font-serif text-pd-gold mb-1">{stat.value}</h3>
            <p className="text-xs md:text-base text-gray-600 text-center px-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
