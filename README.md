# Vape Lot Smoke Shop

A modern, premium smoke shop static website for cigar, tobacco, vape juice, Geek Bar,
hookah, kratom, CBD, cigarettes, and more. Built with React, TypeScript, Vite,
Tailwind CSS, React Router, and local JSON product data.

## Features

- Dark luxury theme with electric cyan, vapor violet, and neon mint accents
- Responsive pages for home, catalog, product details, categories, new arrivals, about, and contact
- Static JSON product catalog
- Product search, category filtering, brand filtering, and sorting
- Reusable components for navigation, hero, cards, grids, testimonials, newsletter, and footer

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The default production build is configured for Zoho Catalyst Web Client Hosting,
where the app is served from `/app/`.

For root-domain static hosts, use:

```bash
npm run build:root
```

## Zoho Catalyst Deployment

On Windows:

```bat
cd C:\Users\DELL\vape
npm install
npm run deploy:catalyst
```

If you want to build and copy first, then deploy manually:

```bat
npm run build:catalyst
catalyst deploy --only client
```

The `client/client-package.json` file must remain in the `client` folder when
deploying. The generated build files copied from `dist` are ignored by Git.
