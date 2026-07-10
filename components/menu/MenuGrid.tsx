'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MenuItem } from '@/data/menu'

interface MenuGridProps {
  items: MenuItem[]
  activeFilter: string
}

export default function MenuGrid({ items, activeFilter }: MenuGridProps) {
  const groupByCategory = (items: MenuItem[]) => {
    return items.reduce(
      (acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = []
        }
        acc[item.category].push(item)
        return acc
      },
      {} as Record<string, MenuItem[]>
    )
  }

  const filteredItems = activeFilter === 'All' ? items : items.filter((item) => item.category === activeFilter)

  const groupedItems = activeFilter === 'All' ? groupByCategory(filteredItems) : { [activeFilter]: filteredItems }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.02,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key={activeFilter} variants={containerVariants} initial="hidden" animate="visible" exit="exit">
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category} className="mb-16">
            {activeFilter === 'All' && (
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl md:text-4xl font-serif text-white">{category}</h3>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-pd-red to-transparent"></div>
              </div>
            )}

            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
              {categoryItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="group bg-pd-gray/50 hover:bg-pd-gray border border-white/10 hover:border-pd-red/50 rounded-lg p-6 md:p-8 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-pd-red/20"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl md:text-2xl font-serif text-white group-hover:text-pd-gold transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-xs font-semibold text-pd-gold bg-pd-red/20 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-2xl md:text-3xl font-serif text-pd-gold group-hover:text-pd-cream transition-colors whitespace-nowrap">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
