'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const HOURS = [
  { label: 'Monday – Thursday', time: '11:00 AM – 7:30 PM', jsDays: [1, 2, 3, 4], openMin: 11 * 60, closeMin: 19 * 60 + 30 },
  { label: 'Friday',             time: '11:00 AM – 8:30 PM', jsDays: [5],           openMin: 11 * 60, closeMin: 20 * 60 + 30 },
  { label: 'Saturday – Sunday',  time: '10:00 AM – 8:30 PM', jsDays: [0, 6],        openMin: 10 * 60, closeMin: 20 * 60 + 30 },
  { label: 'Breakfast (Sat–Sun)', time: '10:00 AM – 2:00 PM', jsDays: [0, 6],       openMin: 10 * 60, closeMin: 14 * 60, isNote: true },
]

export default function LocationHours() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const interval = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(interval)
  }, [])

  const jsDay = now?.getDay() ?? -1
  const currentMin = now ? now.getHours() * 60 + now.getMinutes() : 0

  const isOpen = (() => {
    if (!now) return null
    const row = HOURS.find(r => r.jsDays.includes(jsDay) && !r.isNote)
    if (!row) return false
    return currentMin >= row.openMin && currentMin < row.closeMin
  })()

  return (
    <section ref={ref} className="py-0 md:py-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '580px' }}>

        {/* LEFT — Google Map */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="h-[360px] md:h-full"
        >
          <iframe
            src="https://maps.google.com/maps?q=73011+Country+Club+Dr+Suite+F+Palm+Desert+CA+92260&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Papa Dan's Pizza & Pasta — Palm Desert, CA"
          />
        </motion.div>

        {/* RIGHT — Info panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6 }}
          className="bg-white px-8 md:px-12 py-12 md:py-14 flex flex-col justify-center"
        >

          {/* Open / Closed badge */}
          {now !== null && (
            <div className="mb-8">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${
                  isOpen
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}
                />
                {isOpen ? 'Open Now' : 'Closed Now'}
              </span>
            </div>
          )}

          {/* Hours */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 bg-pd-red rounded-full" />
              <p className="text-xs font-bold tracking-widest text-pd-gold">HOURS</p>
            </div>

            <div className="space-y-1">
              {HOURS.map((row) => {
                const isToday = row.jsDays.includes(jsDay) && !row.isNote
                return (
                  <div
                    key={row.label}
                    className={`flex justify-between items-center py-2.5 px-3 rounded-lg transition-all ${
                      isToday
                        ? 'bg-pd-red/5 border-l-[3px] border-pd-red'
                        : 'border-l-[3px] border-transparent'
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        row.isNote ? 'italic text-gray-400' : isToday ? 'text-pd-red font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {row.label}
                    </span>
                    <span
                      className={`text-sm tabular-nums ${
                        row.isNote ? 'text-gray-400 italic' : isToday ? 'text-pd-red font-semibold' : 'text-gray-500'
                      }`}
                    >
                      {row.time}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 bg-pd-red rounded-full" />
              <p className="text-xs font-bold tracking-widest text-pd-gold">FIND US</p>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-pd-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-gray-700 leading-relaxed">
                73011 Country Club Drive Suite F<br />Palm Desert, CA 92260
              </p>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-pd-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              <a href="tel:7605683267" className="text-sm text-gray-700 hover:text-pd-red transition-colors font-medium">
                (760) 568-3267
              </a>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-pd-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@papadanspalmdesert.com" className="text-sm text-gray-700 hover:text-pd-red transition-colors">
                info@papadanspalmdesert.com
              </a>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://www.google.com/maps/place/73011+Country+Club+Dr+Suite+F,+Palm+Desert,+CA+92260"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pd-red hover:bg-pd-red-dark text-white px-6 py-3 rounded font-semibold transition-colors text-sm w-fit"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get Directions
          </a>

        </motion.div>
      </div>
    </section>
  )
}
