# Papa Dan's Pizza & Pasta - Assets & Integrations

## External Image Assets (Squarespace CDN)

All images are hosted on Squarespace CDN and referenced directly in the codebase.

### Used in Components

#### 1. Logo (Used in Nav & Footer)
```
https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/822546d0-a20b-4d6b-980b-4fb476c3ab26/papa-dans-logo-oval-light.png
```
- Location: `components/Nav.tsx`, `components/Footer.tsx`
- Size: Responsive (h-12 default)
- Format: PNG with transparency

#### 2. Hero Background (Hero Section)
```
https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/1698365f-8445-411c-b94d-99537740b227/full.jpeg
```
- Location: `components/Hero.tsx`
- Size: Full viewport (object-cover)
- Format: JPEG
- Also used in: `components/MenuHighlights.tsx` (Pizza card)

#### 3. Storefront (About & Location Sections)
```
https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/d2fdf73e-97ea-4006-b13f-afd9e8e5f676/IMG_8394.jpg
```
- Location: `components/About.tsx`, `components/LocationHours.tsx`
- Size: Responsive with border
- Format: JPEG

#### 4. Pizza 2 (Menu Highlights - Pasta Card)
```
https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/a19c439a-3d0c-4362-b1bd-965a7ef9bb98/medium.jpg
```
- Location: `components/MenuHighlights.tsx` (Pasta)
- Format: JPEG

#### 5. Pizza 3 (Menu Highlights - Breakfast Card)
```
https://images.squarespace-cdn.com/content/6a04e4600f337923d09154c8/04aa8451-abb8-4fd3-9cbb-3fec77df679f/medium.jpeg
```
- Location: `components/MenuHighlights.tsx` (Breakfast)
- Format: JPEG

## External Links & Integrations

### Order Online
```
https://orderonline.granburyrs.com/slice/menu/main
```
- Target: `_blank` (new tab)
- Used in: Nav, Hero, MenuHighlights, OrderCTA, Menu page
- Functionality: Opens third-party ordering system

### Contact Links

#### Phone
```
tel:7605683267
```
- Display: (760) 568-3267
- Used in: Nav (mobile), Footer, LocationHours, OrderCTA

#### Email
```
mailto:info@papadanspalmdesert.com
```
- Used in: Footer, LocationHours

### Google Maps
```
https://maps.google.com/?q=73011+Country+Club+Drive+Suite+F+Palm+Desert+CA
```
- Display: "View on Google Maps" button
- Target: `_blank` (new tab)
- Used in: LocationHours section

## Social Media Links (Footer)

### Facebook
- Icon: SVG (included inline)
- URL: `https://facebook.com` (update with actual page)
- Aria Label: "Facebook"

### Instagram
- Icon: SVG (included inline)
- URL: `https://instagram.com` (update with actual page)
- Aria Label: "Instagram"

### Yelp
- Icon: SVG (included inline)
- URL: `https://yelp.com` (update with actual page)
- Aria Label: "Yelp"

## Google Fonts Used

### In globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700&display=swap');
```

#### Playfair Display
- Weights: 700, 900
- Use: All headings (h1-h6)
- Style: Serif, elegant, premium

#### Inter
- Weights: 400, 500, 600, 700
- Use: Body text, navigation, UI
- Style: Sans-serif, modern, clean

## Image Optimization Configuration

### Next.js Image Optimization (`next.config.js`)

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.squarespace-cdn.com',
    },
  ],
},
```

Allows optimization of Squarespace CDN images through Next.js.

## CDN Configuration

All external images use standard `<img>` tags instead of `next/image` to avoid potential CDN compatibility issues. This still provides full control over responsive design through CSS.

## Favicon

- Location: `app/favicon.ico`
- Can be updated with Papa Dan's logo

## How to Update Assets

### Update a Logo
1. Upload new logo to Squarespace
2. Copy new CDN URL
3. Replace URL in `components/Nav.tsx` and `components/Footer.tsx`

### Update Photos
1. Upload new image to Squarespace
2. Copy CDN URL
3. Replace URL in the relevant component

### Update External Links
1. For order system: Update URL in components using `orderonline.granburyrs.com`
2. For social media: Update URLs in `components/Footer.tsx`
3. For Google Maps: Update coordinates in `components/LocationHours.tsx`

## Performance Notes

- All images are loaded via CDN (fast delivery)
- Images use modern formats (JPEG, PNG)
- CSS uses Tailwind (optimized, minified)
- Fonts use Google Fonts (Google CDN, cached)
- No custom fonts uploaded to server

## Security

- All external resources use HTTPS
- No sensitive data in image URLs
- All external links have proper security attributes (`rel="noopener noreferrer"`)

