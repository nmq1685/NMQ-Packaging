# Bao Bì Minh Quân - Next.js Project

This project has been successfully converted from **Vite + React** to **Next.js 15**.

## Project Structure

```
├── app/                    # Next.js app directory (App Router)
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── chinh-sach-mua-hang/
│   │   └── page.tsx       # Purchase policy page
│   └── chinh-sach-bao-mat/
│       └── page.tsx       # Privacy policy page
├── components/             # Reusable React components
│   ├── Logo.tsx           # Logo component
│   ├── ScrollToTop.tsx    # Scroll to top functionality
│   └── ZaloBadge.tsx      # Contact floating badge
├── public/                 # Static files (images, videos)
│   ├── images/            # Product images
│   ├── videos/            # Product videos
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # XML sitemap
├── config/                 # Configuration files
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies
└── tailwind.config.js     # Tailwind CSS configuration
```

## What Changed

### Removed (Vite)
- `vite.config.ts` - Vite configuration
- `index.html` - HTML entry point (replaced by Next.js app directory)
- `src/` directory - Replaced by `app/` directory
- `@vitejs/plugin-react` dependency
- `vite` dependency
- `react-router-dom` dependency (replaced with Next.js Link & routing)

### Added (Next.js)
- `next.config.ts` - Next.js configuration
- `app/` directory - App Router directory structure
- `next` dependency (v15.1.0)

### Key Improvements
- **Built-in SEO**: Next.js Metadata API for better SEO management
- **File-based routing**: No need for React Router
- **Server Components**: Performance improvements
- **Image optimization**: Built-in next/image component
- **Dynamic imports**: Code splitting out of the box
- **API Routes ready**: Can add backend APIs in `app/api/`

## Installation & Running

### Install dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```
The app will run on [http://localhost:3000](http://localhost:3000)

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Linting
```bash
npm run lint
```

## Environment Variables

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=https://baobiminhnquan.com
```

## Migration Notes

### React Router → Next.js Routing
- `<Link to="/">` → `<Link href="/">`
- Client-side navigation handled automatically
- Dynamic routes: Use `[param]` naming in file structure

### SEO
- Use `Metadata` from Next.js for page-level SEO
- Open Graph tags managed via Metadata API
- Structured data via JSON-LD ready to implement

### Components
- All components converted to ES modules
- Client components marked with `'use client'`
- Server components by default for better performance

### Styling
- Tailwind CSS configuration unchanged
- CSS modules ready to use
- Global styles in `app/layout.tsx`

## Deployment

### Vercel (Recommended for Next.js)
```bash
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Other Platforms
Next.js can be deployed on any Node.js hosting platform.

## Performance Optimizations

- Image optimization with `next/image`
- Automatic code splitting
- CSS and JS minification
- Static generation for SEO pages
- Dynamic imports for large components

## SEO Features

- Meta tags management
- Open Graph support
- Twitter cards
- Canonical URLs
- XML sitemap
- Robots.txt
- Structured data ready

## Support

For issues or questions:
- 📱 Zalo/Hotline: 0913 937 841
- ✉️ Email: lienhe@baobiminhquan.vn
- 🏭 Address: Ấp Bình An, xã Bình Thành, Lấp Vò, tỉnh Đồng Tháp

## License

See LICENSE file for details.

---

**Migration completed**: Successfully converted from Vite + React to Next.js 15
