'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ROW_1 = [
  { src: 'https://static.spotapps.co/spots/ba/e3271f5bfa494b8138a056cf076415/full',     alt: 'House-made spaghetti' },
  { src: 'https://static.spotapps.co/spots/93/ce4b70692f4c25b345a572a0eaa1e1/full',     alt: 'Crispy wings'         },
  { src: 'https://static.spotapps.co/spots/64/4255f833c1466189295a9378ebaa31/full',     alt: 'Lasagna'              },
  { src: 'https://static.spotapps.co/spots/af/46b5f70f8a4d50a16865942cea7d99/full',     alt: 'Chocolate dessert'    },
  { src: 'https://static.spotapps.co/spots/75/4c9bcc71bb46ef84cf5d33846e017d/full',     alt: 'Pasta primavera'      },
  { src: 'https://static.spotapps.co/spots/0e/fc4bc198c74421b3cab89795e403cf/full',     alt: 'Fresh fruit plate'    },
  { src: 'https://static.spotapps.co/spots/ea/026beb1fbc4322b332f913598ba502/full',     alt: 'Cocktails & drinks'   },
]

const ROW_2 = [
  { src: 'https://static.spotapps.co/spots/2b/4c95f846a54b398f3880a639ed8e54/full',     alt: 'Fresh fruit salad'   },
  { src: 'https://static.spotapps.co/spots/00/c88f7da5634941afb3674753e6fd73/full',     alt: 'Fresh from the oven' },
  { src: 'https://static.spotapps.co/spots/f2/3c9de3a5584d0a92545e575621bef9/full',     alt: 'Spaghetti marinara'  },
  { src: 'https://static.spotapps.co/spots/83/492fb346004a9682e2aff47baa25c2/full',     alt: 'Pizza oven'          },
  { src: 'https://static.spotapps.co/spots/ea/026beb1fbc4322b332f913598ba502/full',     alt: 'Cocktails & drinks'  },
  { src: 'https://static.spotapps.co/spots/b1/a9b3fe5ba7410082adeedce672c943/full',     alt: 'Italian subs'        },
  { src: 'https://static.spotapps.co/spots/29/4c7b16a37148fbbff78c79815373fe/full',     alt: 'Pizza making'        },
  { src: 'https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/a19c439a-3d0c-4362-b1bd-965a7ef9bb98/medium.jpg', alt: 'Fresh pizza' },
]

function MarqueeRow({
  images,
  direction,
  delay = 0,
}: {
  images: typeof ROW_1
  direction: 'left' | 'right'
  delay?: number
}) {
  // Duplicate so the loop is seamless
  const doubled = [...images, ...images]
  const animName = direction === 'left' ? 'marquee-left' : 'marquee-right'

  return (
    <div
      className="flex gap-4 w-max"
      style={{
        animation: `${animName} 38s linear infinite`,
        animationDelay: `${delay}s`,
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = 'paused')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = 'running')}
    >
      {doubled.map((img, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-72 h-52 rounded-xl overflow-hidden relative"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          {/* Subtle dark film — lifts on hover */}
          <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-500" />
        </div>
      ))}
    </div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 overflow-hidden"
      style={{
        backgroundColor: '#C41E3A',
        backgroundImage: 'url(https://static.spotapps.co/web/papadanspalmdesert--com/custom/order_back.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-8 px-4"
      >
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="w-10 h-px bg-pd-gold/50" />
          <p className="text-xs font-bold tracking-[0.3em] text-pd-gold">THE FOOD</p>
          <div className="w-10 h-px bg-pd-gold/50" />
        </div>
        <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">
          {' '}
          <em className="text-pd-red not-italic">Remembered</em>
        </h2>
      </motion.div>

      {/* Gallery rows with edge fades */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative"
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #C41E3A, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #C41E3A, transparent)' }}
        />

        <div className="flex flex-col gap-4">
          <div className="overflow-hidden">
            <MarqueeRow images={ROW_1} direction="left" />
          </div>
          <div className="overflow-hidden">
            <MarqueeRow images={ROW_2} direction="right" delay={-4} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
