# Minh Quân Packaging

A marketing website for Minh Quân Packaging showcasing their packaging products and services. Built with Vite, React, TypeScript, Tailwind CSS and Framer Motion.

## Features
- Modern landing page with smooth motion effects.
- Product catalog with hover animations.
- Sections to present services and key advantages.
- Contact form (demo only — not connected to a backend).
- Fully responsive layout.

## Running the project
Requirements: Node.js 18+.

```powershell
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Quick customizations
- Replace the logo and site title in `index.html` and the Navbar inside `src/App.tsx`.
- Update brand colors in `tailwind.config.js` (the `colors.brand` section).
- Change product images and contact details in `src/App.tsx`.

## Project structure
- `src/App.tsx`: Main page and sections.
- `src/index.css`: Tailwind imports and utilities.
- `vite.config.ts`: Vite configuration.

## Deployment
You can deploy the `dist/` output to Vercel, Netlify, or any static hosting provider.
