# Papa Dan's Pizza & Pasta - Project Index

## Quick Links

- **Start Here:** [QUICKSTART.md](QUICKSTART.md)
- **Full Docs:** [README_PAPADANS.md](README_PAPADANS.md)
- **Assets & Links:** [ASSETS_AND_INTEGRATIONS.md](ASSETS_AND_INTEGRATIONS.md)
- **Project Overview:** [PROJECT_SUMMARY.txt](PROJECT_SUMMARY.txt)

## File Navigation

### Pages (What Users See)
- `app/page.tsx` - Home page with 7 sections
- `app/menu/page.tsx` - Menu page with filters

### Components (Reusable UI)
- `components/Nav.tsx` - Top navigation (sticky, mobile menu)
- `components/Hero.tsx` - Full-screen hero banner
- `components/StatsBar.tsx` - 4 stats display
- `components/About.tsx` - Story section with image
- `components/MenuHighlights.tsx` - 3 featured categories
- `components/Reviews.tsx` - Customer testimonials
- `components/OrderCTA.tsx` - Call-to-action section
- `components/LocationHours.tsx` - Hours & contact info
- `components/Footer.tsx` - Footer with links
- `components/menu/MenuFilter.tsx` - Filter tabs (11 categories)
- `components/menu/MenuGrid.tsx` - Menu items grid

### Data
- `data/menu.ts` - 60+ menu items (all categories)

### Styling
- `app/globals.css` - Global styles, fonts, animations
- `tailwind.config.ts` - Color theme & typography
- `app/layout.tsx` - Root layout & metadata

### Config
- `package.json` - Dependencies
- `next.config.js` - Next.js settings
- `tsconfig.json` - TypeScript config
- `postcss.config.js` - CSS processing
- `.eslintrc.json` - Code linting

## What's Where

### I want to change...

| Task | File |
|------|------|
| Colors | `tailwind.config.ts` |
| Fonts | `app/globals.css` |
| Menu items | `data/menu.ts` |
| Hero background | `components/Hero.tsx` |
| Restaurant name | Multiple (search & replace) |
| Phone number | Multiple (search & replace) |
| Hours | `components/LocationHours.tsx` |
| Social links | `components/Footer.tsx` |
| Logo | `components/Nav.tsx`, `components/Footer.tsx` |
| Home page layout | `app/page.tsx` |
| Menu page layout | `app/menu/page.tsx` |

## Directory Structure

```
papadans-custom/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── menu/
│       └── page.tsx         # Menu page
├── components/
│   ├── Nav.tsx              # Navigation
│   ├── Hero.tsx             # Hero section
│   ├── StatsBar.tsx         # Stats
│   ├── About.tsx            # About section
│   ├── MenuHighlights.tsx   # Featured items
│   ├── Reviews.tsx          # Reviews
│   ├── OrderCTA.tsx         # Order section
│   ├── LocationHours.tsx    # Location
│   ├── Footer.tsx           # Footer
│   └── menu/
│       ├── MenuFilter.tsx   # Filters
│       └── MenuGrid.tsx     # Menu grid
├── data/
│   └── menu.ts              # Menu data
├── public/                  # Public assets
├── package.json
├── tailwind.config.ts       # Tailwind config
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
├── postcss.config.js        # PostCSS config
└── .gitignore

Documentation Files:
├── QUICKSTART.md                # Get started in 2 minutes
├── README_PAPADANS.md           # Full documentation
├── ASSETS_AND_INTEGRATIONS.md   # External resources
├── PROJECT_SUMMARY.txt          # Complete overview
└── INDEX.md                     # This file
```

## Development Commands

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

## Deployment

```bash
# Deploy to Vercel
vercel deploy
```

See [QUICKSTART.md](QUICKSTART.md) for more.

## Key Features Implemented

- Sticky navigation with glassmorphism
- Full-screen hero with animations
- 7 home page sections
- Animated statistics bar
- 3 featured menu categories
- Customer testimonials
- 60+ menu items with filters
- 11 category filters with smooth transitions
- Responsive mobile design
- Dark cinematic theme
- Google Maps integration
- Call/email links
- Social media links
- SEO optimized

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- React 18
- Tailwind CSS
- Framer Motion
- Google Fonts

## Next Steps

1. **Setup:** `npm install && npm run dev`
2. **Preview:** Visit `http://localhost:3000`
3. **Customize:** Edit files (see "What's Where" table above)
4. **Deploy:** `vercel deploy`

---

**Built for Papa Dan's Pizza & Pasta**  
Built by builtbyRyder
