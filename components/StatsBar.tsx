'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: 'Est. 1984', label: 'Serving the Valley' },
  { value: '#1 Pizza', label: 'Voted Best in Coachella Valley' },
  { value: '5★', label: 'Yelp Rated' },
  { value: '3 Ways', label: 'Dine-In · Takeout · Delivery' },
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
    <section ref={ref} className="bg-pd-gray py-12 md:py-16 border-y border-white/10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="container grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.value}
            variants={itemVariants}
            className={`flex flex-col items-center justify-center py-8 ${index !== stats.length - 1 ? 'md:border-r border-white/10' : ''}`}
          >
            <h3 className="text-4xl md:text-5xl font-serif text-pd-gold mb-2">{stat.value}</h3>
            <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
