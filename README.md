# Bao Bì Minh Quân - Packaging Website

Website tiếp thị cho Bao Bì Minh Quân - Chuyên cung cấp bao bì trái cây xuất khẩu. Được xây dựng với Vite, React, TypeScript, Tailwind CSS và Framer Motion.

## ✨ Tính Năng

- ✅ Trang landing hiện đại với hiệu ứng chuyển động mượt mà
- ✅ Catalog sản phẩm với hover animations
- ✅ Sections giới thiệu dịch vụ và ưu điểm
- ✅ Form liên hệ (demo - chưa kết nối backend)
- ✅ Layout responsive đầy đủ (mobile, tablet, desktop)
- 🔍 **SEO được tối ưu với 100+ từ khóa đa dạng**
- 🎯 **Structured Data (Schema.org) cho Google Rich Snippets**
- 📱 **Open Graph tags cho social media**

## 🔍 SEO Features

Website đã được tối ưu SEO toàn diện:

### Meta Tags
- Title tags với từ khóa chính
- Meta descriptions hấp dẫn
- Meta keywords (100+ từ khóa)
- Open Graph (Facebook)
- Twitter Cards
- Geo tags (định vị địa lý)

### Structured Data
- LocalBusiness schema
- Organization schema
- Product catalog schema
- Khu vực phục vụ

### Từ Khóa Chính
- Bao bì trái cây, xoài, mít
- Thùng carton xuất khẩu
- Khay xốp, túi OPP, tem QR
- VietGAP, GlobalGAP
- Bao bì Đồng Tháp, ĐBSCL

📖 **Xem chi tiết**: [SEO-GUIDE.md](./SEO-GUIDE.md)

## 🚀 Chạy Dự Án

Yêu cầu: Node.js 18+

```powershell
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Xem preview production build
npm run preview
```

## 🎨 Tùy Chỉnh Nhanh

### Logo & Site Title
- Thay đổi logo trong `public/images/logo.png`
- Cập nhật title trong `index.html`
- Sửa Navbar trong `src/App.tsx`

### Màu Sắc Thương Hiệu
- Chỉnh sửa `tailwind.config.js` (section `colors.brand`)

### Sản Phẩm & Liên Hệ
- Cập nhật trong `src/App.tsx`
- Thêm hình ảnh vào `public/images/`

### SEO Metadata
- Chỉnh sửa meta tags: `index.html`
- Cập nhật từ khóa: `src/config/seo.ts`
- Sửa SEO cho từng trang: Thêm component `<SEO />` trong page

## 📁 Cấu Trúc Dự Án

```
├── public/
│   ├── images/          # Hình ảnh, logo
│   ├── videos/          # Video demo
│   ├── robots.txt       # SEO robots
│   ├── sitemap.xml      # SEO sitemap
│   └── .htaccess        # Apache config
├── src/
│   ├── components/      # React components
│   │   ├── Layout.tsx
│   │   ├── Logo.tsx
│   │   ├── SEO.tsx     # ⭐ SEO component
│   │   └── ...
│   ├── config/
│   │   └── seo.ts      # ⭐ SEO configuration
│   ├── pages/          # Pages
│   │   ├── PrivacyPolicy.tsx
│   │   └── PurchasePolicy.tsx
│   ├── App.tsx         # Main page
│   ├── main.tsx        # Entry point
│   └── index.css       # Tailwind imports
├── index.html          # HTML với meta tags
├── vite.config.ts      # Vite config
├── tailwind.config.js  # Tailwind config
└── SEO-GUIDE.md        # ⭐ Hướng dẫn SEO

```

## 🌐 Deploy

### Build Production
```powershell
npm run build
```

Folder `dist/` sẽ chứa file build sẵn sàng deploy.

### Hosting Providers
- **Vercel** (Recommended) - Zero config
- **Netlify** - Drag & drop
- **Cloudflare Pages** - Fast CDN
- **Traditional Hosting** - Upload `dist/` folder

### SEO Post-Deploy Checklist
1. ✅ Xác minh domain với Google Search Console
2. ✅ Submit `sitemap.xml`
3. ✅ Test với Google Rich Results Test
4. ✅ Kiểm tra Mobile-Friendly
5. ✅ Tạo Google My Business
6. ✅ Monitor traffic với Google Analytics

## 📊 SEO Tools

### Kiểm Tra SEO
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Seobility SEO Checker](https://www.seobility.net)

### Analytics
- Google Analytics
- Google Tag Manager
- Facebook Pixel (optional)

## 🛠️ Technologies

- **Vite** - Build tool
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **React Icons** - Icon library

## 📞 Support

Mọi thắc mắc về SEO và website, xem file [SEO-GUIDE.md](./SEO-GUIDE.md)

---

**Được tối ưu SEO bởi GitHub Copilot** 🚀

