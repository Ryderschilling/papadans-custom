# Papa Dan's Pizza & Pasta - Custom Next.js Website

A premium, cinematic website for Papa Dan's Pizza & Pasta restaurant in Palm Desert, California.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Playfair Display (serif), Inter (sans)

## Color Palette

- Primary Black: `#0A0A0A`
- Italian Red: `#C41E3A`
- Dark Red: `#8B0000`
- Cream/Gold: `#F5E6D3`
- Gold Accent: `#D4AF37`
- Dark Gray: `#1A1A1A`

## Project Structure

```
app/
├── globals.css          # Global styles, fonts, animations
├── layout.tsx           # Root layout (Nav + Footer wrapper)
├── page.tsx             # Home page
└── menu/
    └── page.tsx         # Menu page with filters

components/
├── Nav.tsx              # Sticky navigation with mobile menu
├── Hero.tsx             # Full-screen hero section
├── StatsBar.tsx         # Stats bar with animated counters
├── About.tsx            # Story section
├── MenuHighlights.tsx   # 3 featured category cards
├── Reviews.tsx          # Customer testimonials
├── OrderCTA.tsx         # Call-to-action section
├── LocationHours.tsx    # Hours, contact, location
├── Footer.tsx           # Footer with links and social
└── menu/
    ├── MenuFilter.tsx   # Horizontal filter tabs
    └── MenuGrid.tsx     # Menu items grid with animations

data/
└── menu.ts              # Menu data structure (60+ items)
```

## Features

### Home Page
- **Hero Section:** Full-screen background image with animated text overlay
- **Stats Bar:** 4 key metrics (Est. 1984, #1 Pizza, 5★ Rating, 3 Ways to Order)
- **About Section:** Story of 40 years with storefront image
- **Menu Highlights:** 3 featured categories (Pizza, Pasta, Breakfast) with hover effects
- **Reviews:** 3 customer testimonials with star ratings
- **Order CTA:** Prominent call-to-action buttons
- **Location & Hours:** Full contact info with Google Maps link

### Menu Page
- **Smart Filtering:** 11 category filters (All, Pizza, Pasta, Subs, Salads, Appetizers, Seafood, Breakfast, Lunch, Desserts, Bar & Drinks)
- **Smooth Animations:** Filter transitions with Framer Motion
- **Category Grouping:** "All" filter groups items by category with section headers
- **Responsive Grid:** Mobile-friendly layout with hover effects
- **60+ Menu Items:** Complete restaurant menu with descriptions and prices

### Interactive Elements
- Smooth scroll behavior throughout
- Glassmorphism navigation on scroll
- Mobile hamburger menu with animations
- Scroll-to-reveal animations (useInView)
- Hover effects on all interactive elements
- Smooth filter transitions

## Setup & Development

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production
```bash
npm run build
npm start
```

## Key Components Breakdown

### Nav.tsx
- Sticky navigation that adds glassmorphism effect on scroll
- Mobile hamburger menu with smooth animations
- Links to menu and order online

### Hero.tsx
- Full viewport height with background image
- Animated heading, subtitle, and CTA buttons
- Scroll indicator arrow that fades out on scroll

### MenuFilter.tsx
- Horizontally scrollable tabs on mobile
- Smooth sliding indicator under active tab
- Left/right scroll buttons for keyboard navigation

### MenuGrid.tsx
- AnimatePresence for smooth filter transitions
- Staggered item animations
- Hover effects with glow and scale

## External Assets

All images are loaded from Squarespace CDN:
- Logo: Papa Dan's oval logo (light)
- Storefront: Restaurant exterior
- Pizza 1-3: Food photography for menu categories

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
```ts
colors: {
  'pd-red': '#C41E3A',
  'pd-gold': '#D4AF37',
  // etc.
}
```

### Typography
Global fonts imported in `globals.css`:
- Playfair Display: Headlines (serif)
- Inter: Body text (sans)

### Menu Items
Edit `data/menu.ts` to add/remove items. Each item has:
- `id`: Unique identifier
- `name`: Item name
- `description`: Item description
- `price`: Item price
- `category`: Category (Pizza, Pasta, etc.)

## Deployment

### Deploy to Vercel (Recommended)
```bash
vercel deploy
```

The site is optimized for Vercel with:
- Image optimization
- Edge functions support
- Automatic deployments from git

### Environment Variables
None required for basic setup. Add to `.env.local` if needed:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Performance Optimizations

- Image optimization with next/image
- CSS-in-JS with Tailwind (minified)
- Code splitting with Next.js App Router
- Lazy loading animations
- Smooth scroll behavior

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 14+, Chrome Android 90+

## License

Built for Papa Dan's Pizza & Pasta. All rights reserved.

---

**Built by builtbyRyder** — Custom web development & AI automation
