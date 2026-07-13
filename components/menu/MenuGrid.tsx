'use client'

import { MenuItem } from '@/data/menu'

interface MenuGridProps {
  items: MenuItem[]
  activeFilter: string
}

export default function MenuGrid({ items, activeFilter }: MenuGridProps) {
  const groupByCategory = (items: MenuItem[]) => {
    return items.reduce(
      (acc, item) => {
        if (!acc[item.category]) acc[item.category] = []
        acc[item.category].push(item)
        return acc
      },
      {} as Record<string, MenuItem[]>
    )
  }

  const filteredItems = activeFilter === 'All' ? items : items.filter((item) => item.category === activeFilter)
  const groupedItems = activeFilter === 'All' ? groupByCategory(filteredItems) : { [activeFilter]: filteredItems }

  return (
    // key re-mounts on filter change → CSS animation re-fires
    <div key={activeFilter} className="animate-fade-in">
      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <div key={category} className="mb-16">
          {activeFilter === 'All' && (
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900">{category}</h3>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-pd-red to-transparent" />
            </div>
          )}

          <div className="space-y-4">
            {categoryItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white hover:bg-gray-50 border border-gray-200 hover:border-pd-red/50 rounded-lg p-6 md:p-8 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-pd-red/20 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h4 className="text-xl md:text-2xl font-serif text-gray-900 group-hover:text-pd-red transition-colors break-words">
                        {item.name}
                      </h4>
                      <span className="text-xs font-semibold text-pd-gold bg-pd-red/20 px-3 py-1 rounded-full shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed break-words">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <p className="text-2xl md:text-3xl font-serif text-pd-gold group-hover:text-pd-red transition-colors">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
