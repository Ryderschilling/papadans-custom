# Papa Dan's - Quick Start Guide

## Get Running in 2 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```

Visit `http://localhost:3000` - site is live.

### 3. View Menu Page
Go to `http://localhost:3000/menu` to see the dynamic menu with filters.

## What's Built

### Pages
- **Home** (`/`) - 7 sections showcasing the restaurant
- **Menu** (`/menu`) - 60+ items with 11 category filters

### Key Features
- Premium dark theme (cinematic Italian-American aesthetic)
- Smooth animations throughout (Framer Motion)
- Mobile responsive design
- Glassmorphism effects on nav
- Animated menu filters with smooth transitions
- External ordering integration
- Google Maps integration
- Call/email links

## File Locations

| What | Where |
|------|-------|
| Home page | `/app/page.tsx` |
| Menu page | `/app/menu/page.tsx` |
| Nav/Footer | `/components/Nav.tsx`, `/components/Footer.tsx` |
| Menu data | `/data/menu.ts` |
| Styles | `/app/globals.css` + Tailwind |
| Colors | `tailwind.config.ts` |

## Customize in 30 Seconds

### Change Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  'pd-red': '#C41E3A',      // Italian red
  'pd-gold': '#D4AF37',     // Gold accents
  'pd-black': '#0A0A0A',    // Main black
}
```

### Update Business Info
Find & replace:
- `Papa Dan's` → Your name
- `(760) 568-3267` → Your phone
- `info@papadanspalmdesert.com` → Your email
- `73011 Country Club Drive Suite F, Palm Desert, CA` → Your address

### Add Menu Items
Edit `/data/menu.ts`:
```ts
{
  id: 'pizza-custom',
  name: 'Your Pizza Name',
  description: 'Delicious description',
  price: '$19.99',
  category: 'Pizza',
}
```

### Update Images
Replace URLs in components:
- Logo: `components/Nav.tsx`, `components/Footer.tsx`
- Hero: `components/Hero.tsx`
- Photos: `components/About.tsx`, `components/MenuHighlights.tsx`

## Deploy to Vercel (1 minute)

```bash
npm install -g vercel
vercel deploy
```

Follow prompts, done. Site is live.

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check for errors |

## File Structure Cheat Sheet

```
papadans-custom/
├── app/
│   ├── page.tsx          ← Home page
│   ├── menu/page.tsx     ← Menu page
│   ├── layout.tsx        ← Nav + Footer wrapper
│   └── globals.css       ← Global styles
├── components/
│   ├── Nav.tsx           ← Top navigation
│   ├── Hero.tsx          ← Big banner
│   ├── About.tsx         ← Story section
│   ├── MenuHighlights.tsx ← 3 featured items
│   ├── Reviews.tsx       ← Testimonials
│   ├── OrderCTA.tsx      ← Call to action
│   ├── LocationHours.tsx ← Contact info
│   ├── Footer.tsx        ← Bottom nav
│   └── menu/
│       ├── MenuFilter.tsx ← Filter tabs
│       └── MenuGrid.tsx  ← Menu items grid
├── data/
│   └── menu.ts           ← 60+ menu items
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Common Edits

### Change Home Page Title
`/app/layout.tsx`:
```ts
title: "Your Restaurant Name | Your City",
```

### Update Hours
`/components/LocationHours.tsx`:
```ts
const hours = [
  { day: 'Monday - Thursday', time: '11:00 AM - 7:30 PM' },
  // Update these
]
```

### Change Hero Image
`/components/Hero.tsx`:
```tsx
<img src="YOUR_NEW_IMAGE_URL" alt="..." />
```

### Update Order Link
Search `orderonline.granburyrs.com` → replace with your ordering URL

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Styles not loading?
```bash
npm run build
npm start
```

### Images not showing?
- Check URL is accessible (paste in browser)
- Ensure HTTPS
- Check for typos in URL

## Performance Tips

- Images are already optimized on CDN
- CSS is minified via Tailwind
- Next.js handles code splitting
- Deploy to Vercel for edge functions

## What's Next?

1. Customize colors in `tailwind.config.ts`
2. Update business info throughout
3. Add your own images
4. Deploy to Vercel
5. Add Google Analytics (optional)

## Support

Questions? Check:
- `README_PAPADANS.md` - Full documentation
- `ASSETS_AND_INTEGRATIONS.md` - External links & images
- `PROJECT_SUMMARY.txt` - Complete overview

---

Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.
