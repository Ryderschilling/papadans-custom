'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function LocationHours() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const hours = [
    { day: 'Monday - Thursday', time: '11:00 AM - 7:30 PM' },
    { day: 'Friday', time: '11:00 AM - 8:30 PM' },
    { day: 'Saturday - Sunday', time: '10:00 AM - 8:30 PM' },
    { day: 'Breakfast (Sat-Sun)', time: '10:00 AM - 2:00 PM' },
  ]

  return (
    <section ref={ref} className="relative py-0 md:py-0">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/d2fdf73e-97ea-4006-b13f-afd9e8e5f676/IMG_8394.jpg"
          alt="Papa Dan's Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 py-20 md:py-32">
        {/* Left - Hours */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-pd-red"></div>
            <p className="text-sm font-semibold tracking-widest text-pd-gold">HOURS</p>
          </div>

          <table className="w-full">
            <tbody>
              {hours.map((hour, index) => (
                <tr key={hour.day} className="border-b border-white/10 last:border-b-0">
                  <td className="py-4 pr-8 text-white font-medium">{hour.day}</td>
                  <td className="py-4 text-pd-gold text-right">{hour.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Right - Contact & Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-pd-red"></div>
            <p className="text-sm font-semibold tracking-widest text-pd-gold">CONTACT</p>
          </div>

          <div className="space-y-6 mb-10">
            <div>
              <p className="text-sm text-gray-400 mb-1">Address</p>
              <p className="text-white text-lg">73011 Country Club Drive Suite F</p>
              <p className="text-white text-lg">Palm Desert, CA</p>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Phone</p>
              <a href="tel:7605683267" className="text-pd-gold hover:text-pd-cream text-lg font-medium transition-colors">
                (760) 568-3267
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a href="mailto:info@papadanspalmdesert.com" className="text-pd-gold hover:text-pd-cream text-lg font-medium transition-colors">
                info@papadanspalmdesert.com
              </a>
            </div>
          </div>

          {/* Google Maps Link */}
          <a
            href="https://maps.google.com/?q=73011+Country+Club+Drive+Suite+F+Palm+Desert+CA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-secondary"
          >
            View on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}
