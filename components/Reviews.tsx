'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reviews = [
  {
    quote: 'The best pizza in the desert, hands down. We\'ve been coming here for 20 years and it never disappoints. The crust is perfect every time.',
    author: 'Maria R.',
  },
  {
    quote: 'Papa Dan\'s is our family tradition. Every holiday, every birthday — this is where we celebrate. The Italian specialties are incredible.',
    author: 'James T.',
  },
  {
    quote: 'Voted best pizza for good reason. The specialty pizzas are creative and delicious, and the pasta is authentic Italian comfort food at its finest.',
    author: 'Sarah K.',
  },
]

export default function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-[#2A0005] to-[#1A0005] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-5">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-3-7-3s-7 1.75-7 3c0 1-5 1-5 8v3c0 1 0 7 5 7s6.002 0 7 0" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">What People Are Saying</h2>
          <p className="text-pd-gold text-sm font-semibold tracking-widest">Trusted by Yelp reviewers across the Coachella Valley</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.author}
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-sm border border-pd-gold/20 p-8 rounded-lg hover:border-pd-gold/50 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-pd-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-pd-cream text-lg mb-6 leading-relaxed italic">
                "{review.quote}"
              </blockquote>

              {/* Author */}
              <p className="text-white font-semibold">— {review.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
