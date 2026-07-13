'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const categories = ['All', 'Pizza', 'Pasta', 'Subs', 'Salads', 'Appetizers', 'Seafood', 'Breakfast', 'Lunch', 'Desserts', 'Bar & Drinks']

interface MenuFilterProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function MenuFilter({ activeFilter, onFilterChange }: MenuFilterProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      setTimeout(checkScroll, 500)
    }
  }

  return (
    <div className="relative py-8">
      {/* Left scroll button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow p-2 rounded-full hover:bg-white transition-colors"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Filter tabs */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-0"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className="relative whitespace-nowrap py-2 px-4 text-sm md:text-base font-medium transition-colors"
          >
            <span className={activeFilter === category ? 'text-pd-red' : 'text-gray-500 hover:text-gray-900'}>
              {category}
            </span>
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-pd-red transition-opacity duration-200"
              style={{ opacity: activeFilter === category ? 1 : 0 }}
            />
          </button>
        ))}
      </div>

      {/* Right scroll button */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow p-2 rounded-full hover:bg-white transition-colors"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
