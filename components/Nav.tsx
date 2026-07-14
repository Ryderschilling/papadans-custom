'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [canClose, setCanClose] = useState(true)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === '/'
  const transparent = isHomePage && !isScrolled

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const linkClass =
    'text-sm font-semibold tracking-[0.18em] text-white hover:text-pd-gold transition-colors duration-300'

  return (
    <nav
      style={{ transform: 'translateZ(0)' }}
      className={`fixed w-full top-0 z-[9999] transition-all duration-500 ease-in-out ${
        transparent
          ? 'bg-transparent'
          : 'bg-pd-red border-b border-pd-gold/25 shadow-[0_2px_30px_rgba(0,0,0,0.4)]'
      }`}
    >
      {/* ── DESKTOP ── */}
      <div className="container relative hidden md:flex items-center justify-between h-20">
        <div className="flex items-center gap-4">
          <Link href="/menu" className={linkClass}>MENU</Link>
          <span className="text-white/30 text-xs select-none">·</span>
          <a href="https://orderonline.granburyrs.com/slice/menu/main" target="_blank" rel="noopener noreferrer" className={linkClass}>ORDER</a>
          <span className="text-white/30 text-xs select-none">·</span>
          <a href="/#about" className={linkClass}>ABOUT</a>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <img
            src="/chef-logo.png"
            alt="Papa Dan's Pizza & Pasta"
            className="h-12 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/PapaDansPizza/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/papadanspizzaandpasta" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
            </a>
            <a href="https://www.yelp.com/biz/papa-dans-pizza-and-pasta-palm-desert-3" target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="text-white/70 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.452c-.624.182-.986-.813-.437-1.196l4.276-2.995c.46-.322 1.082.1.97.64l-.363 1.748a.734.734 0 01-.451.351zM12.752 9.45l1.456-4.994c.182-.624-.812-.987-1.196-.437L10.017 8.29c-.322.46.1 1.082.64.97l1.748-.363a.734.734 0 00.347-.447zM11.47 14.24l-4.99 1.46c-.624.183-.624 1.092 0 1.275l4.99 1.46c.493.144.986-.35.842-.843l-1.46-4.99c-.183-.624-1.092-.624-1.275 0l-1.46 4.99zm1.28-1.28l4.99 1.46c.624.183.986-.812.437-1.196l-4.276-2.995c-.46-.322-1.082.1-.97.64l.363 1.748a.734.734 0 00.456.343z"/></svg>
            </a>
          </div>
          <div className="w-px h-5 bg-white/20" />
          <a
            href="https://orderonline.granburyrs.com/slice/menu/main"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-black text-white text-sm tracking-[0.12em] px-8 py-3 rounded font-semibold transition-all duration-300"
          >
            ORDER NOW
          </a>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="md:hidden flex items-center justify-between h-16 px-4">
        <Link href="/">
          <img
            src="/chef-logo.png"
            alt="Papa Dan's Pizza & Pasta"
            className="h-10 w-auto"
          />
        </Link>
        <button
          className="flex flex-col gap-1.5 cursor-pointer p-2"
          onClick={() => {
            setIsMenuOpen(true)
            setCanClose(false)
            setTimeout(() => setCanClose(true), 400)
          }}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile overlay — portaled to document.body to escape all page stacking contexts */}
      {mounted && createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[99999] flex flex-col"
              style={{ background: 'linear-gradient(160deg, #8b0000 0%, #c41e3a 40%, #6b0000 100%)', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
            >
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }} />

              <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                <Link href="/" onClick={() => { if (canClose) setIsMenuOpen(false) }}>
                  <img
                    src="/chef-logo.png"
                    alt="Papa Dan's Pizza & Pasta"
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  className="flex flex-col gap-1.5 cursor-pointer p-2"
                  onClick={() => { if (canClose) setIsMenuOpen(false) }}
                  aria-label="Close menu"
                >
                  <span className="block h-0.5 w-6 bg-white rotate-45 translate-y-2" />
                  <span className="block h-0.5 w-6 bg-white opacity-0" />
                  <span className="block h-0.5 w-6 bg-white -rotate-45 -translate-y-2" />
                </button>
              </div>

              <div className="flex flex-col justify-center flex-1 px-8 gap-1">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="text-pd-gold/80 text-xs tracking-[0.3em] uppercase font-semibold mb-6"
                >
                  Pizza & Pasta · Palm Desert · Since 1984
                </motion.p>

                {[
                  { label: 'Menu', href: '/menu', internal: true },
                  { label: 'Order Online', href: 'https://orderonline.granburyrs.com/slice/menu/main', internal: false },
                  { label: 'About', href: '/#about', internal: true },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {item.internal ? (
                      <Link href={item.href} onClick={() => { if (canClose) setIsMenuOpen(false) }} className="block py-4 border-b border-white/10 group">
                        <span className="font-serif text-4xl text-white group-hover:text-pd-gold transition-colors duration-300 leading-none">{item.label}</span>
                      </Link>
                    ) : (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => { if (canClose) setIsMenuOpen(false) }} className="block py-4 border-b border-white/10 group">
                        <span className="font-serif text-4xl text-white group-hover:text-pd-gold transition-colors duration-300 leading-none">{item.label}</span>
                      </a>
                    )}
                  </motion.div>
                ))}

                <motion.a
                  href="https://orderonline.granburyrs.com/slice/menu/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { if (canClose) setIsMenuOpen(false) }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  className="mt-8 block text-center py-4 rounded-lg font-semibold tracking-[0.15em] text-sm text-pd-red"
                  style={{ background: 'linear-gradient(135deg, #d4af37, #b8922e)' }}
                >
                  ORDER NOW →
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="px-8 pb-10 border-t border-white/10 pt-6 space-y-4"
              >
                <div className="flex justify-between text-white/70 text-xs tracking-wide">
                  <div>
                    <p className="text-pd-gold/90 font-semibold mb-1 tracking-[0.15em] text-xs uppercase">Hours</p>
                    <p>Sun–Thu · 11am–9pm</p>
                    <p>Fri–Sat · 11am–10pm</p>
                  </div>
                  <div className="text-right">
                    <p className="text-pd-gold/90 font-semibold mb-1 tracking-[0.15em] text-xs uppercase">Call Us</p>
                    <a href="tel:+17607732882" className="hover:text-white transition-colors">(760) 773-2882</a>
                    <p className="mt-1">Palm Desert, CA</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 pt-2">
                  <a href="https://www.facebook.com/PapaDansPizza/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/50 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/papadanspizzaandpasta" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                  </a>
                  <a href="https://www.yelp.com/biz/papa-dans-pizza-and-pasta-palm-desert-3" target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="text-white/50 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594l-4.995 1.452c-.624.182-.986-.813-.437-1.196l4.276-2.995c.46-.322 1.082.1.97.64l-.363 1.748a.734.734 0 01-.451.351zM12.752 9.45l1.456-4.994c.182-.624-.812-.987-1.196-.437L10.017 8.29c-.322.46.1 1.082.64.97l1.748-.363a.734.734 0 00.347-.447zM11.47 14.24l-4.99 1.46c-.624.183-.624 1.092 0 1.275l4.99 1.46c.493.144.986-.35.842-.843l-1.46-4.99c-.183-.624-1.092-.624-1.275 0l-1.46 4.99zm1.28-1.28l4.99 1.46c.624.183.986-.812.437-1.196l-4.276-2.995c-.46-.322-1.082.1-.97.64l.363 1.748a.734.734 0 00.456.343z"/></svg>
                  </a>
                  <span className="text-white/20 text-xs tracking-[0.2em] ml-auto">EST. 1984</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  )
}
