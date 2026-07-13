'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { PlaceData } from '@/lib/google-places'

const STAR_PATH =
  'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'

function StarDisplay({ rating, size = 6 }: { rating: number; size?: number }) {
  const full = Math.floor(rating)
  const partial = Math.round((rating - full) * 100)
  const empty = 5 - full - (partial > 0 ? 1 : 0)
  const cls = `w-${size} h-${size}`

  return (
    <div className="flex gap-1">
      {[...Array(full)].map((_, i) => (
        <svg key={`f${i}`} className={`${cls} text-pd-gold`} fill="currentColor" viewBox="0 0 20 20">
          <path d={STAR_PATH} />
        </svg>
      ))}
      {partial > 0 && (
        <svg className={cls} viewBox="0 0 20 20" fill="none">
          <defs>
            <linearGradient id="partial-star-grad">
              <stop offset={`${partial}%`} stopColor="#D4AF37" />
              <stop offset={`${partial}%`} stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path d={STAR_PATH} fill="url(#partial-star-grad)" />
        </svg>
      )}
      {[...Array(empty)].map((_, i) => (
        <svg key={`e${i}`} className={`${cls} text-gray-300`} fill="currentColor" viewBox="0 0 20 20">
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  )
}

interface ReviewsProps {
  data: PlaceData
}

export default function Reviews({ data }: ReviewsProps) {
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
    <section ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
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
          {/* Google badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-gray-500 font-medium text-sm tracking-wide">Google Reviews</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">What People Are Saying</h2>

          {/* Live rating display */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl font-bold text-gray-900">{data.rating.toFixed(1)}</span>
            <StarDisplay rating={data.rating} size={6} />
            <a
              href="https://www.google.com/maps/place/73011+Country+Club+Dr+Suite+F,+Palm+Desert,+CA+92260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pd-red transition-colors text-sm underline underline-offset-2"
            >
              {data.reviewCount.toLocaleString()}+ reviews
            </a>
          </div>
        </motion.div>

        {/* Mobile: horizontal scroll | Desktop: 4-col grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex-none w-[80vw] md:w-auto snap-center bg-white shadow-md border border-gray-200 p-6 rounded-lg flex flex-col h-[260px] md:h-[280px]"
            >
              {/* Stars */}
              <div className="mb-4">
                <StarDisplay rating={review.rating} size={4} />
              </div>

              {/* Quote — clamped so all cards same height */}
              <blockquote className="text-gray-700 text-sm mb-4 leading-relaxed italic flex-1 overflow-hidden line-clamp-5">
                "{review.text}"
              </blockquote>

              {/* Author + time */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <p className="text-gray-900 font-semibold text-sm">— {review.author}</p>
                {review.relativeTime && (
                  <span className="text-gray-400 text-xs">{review.relativeTime}</span>
                )}
              </div>
            </motion.div>
          ))}

          {/* "See All Reviews" as the final card */}
          <motion.a
            variants={itemVariants}
            href="https://www.google.com/maps/place/73011+Country+Club+Dr+Suite+F,+Palm+Desert,+CA+92260"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none w-[80vw] md:w-auto snap-center border-2 border-dashed border-gray-200 hover:border-pd-red rounded-lg flex flex-col items-center justify-center gap-4 h-[260px] md:h-[280px] group transition-all duration-300 cursor-pointer"
          >
            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="text-center px-4">
              <p className="font-semibold text-gray-800 group-hover:text-pd-red transition-colors">See All Reviews</p>
              <p className="text-gray-400 text-xs mt-1">{data.reviewCount.toLocaleString()}+ on Google</p>
            </div>
            <svg className="w-5 h-5 text-gray-300 group-hover:text-pd-red group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
