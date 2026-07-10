'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled ? 'glassmorphism' : 'bg-transparent'
  }`

  return (
    <nav className={navClass}>
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/822546d0-a20b-4d6b-980b-4fb476c3ab26/papa-dans-logo-oval-light.png"
            alt="Papa Dan's Pizza & Pasta"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/menu" className="text-white hover:text-pd-red transition-colors">
            MENU
          </Link>
          <a
            href="https://orderonline.granburyrs.com/slice/menu/main"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pd-red transition-colors"
          >
            ORDER
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <a
            href="https://orderonline.granburyrs.com/slice/menu/main"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            ORDER NOW
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 border-b border-white/10 py-4"
        >
          <div className="container flex flex-col gap-4">
            <Link
              href="/menu"
              className="text-white hover:text-pd-red transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              MENU
            </Link>
            <a
              href="https://orderonline.granburyrs.com/slice/menu/main"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pd-red transition-colors py-2"
            >
              ORDER
            </a>
            <a
              href="https://orderonline.granburyrs.com/slice/menu/main"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              ORDER NOW
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
