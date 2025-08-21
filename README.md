# Bao Bì Minh Quân

Website giới thiệu sản phẩm bao bì cho cửa hàng Bao Bì Minh Quân. Xây dựng bằng Vite + React + TypeScript + TailwindCSS + Framer Motion.

## Tính năng
- Landing page hiện đại, nhiều hiệu ứng chuyển động mượt mà.
- Danh mục sản phẩm với hover animation.
- Khu vực giới thiệu dịch vụ/ưu điểm.
- Form liên hệ (demo, chưa kết nối backend).
- Responsive đầy đủ.

## Chạy dự án
Yêu cầu: Node.js 18+.

```powershell
# Cài đặt phụ thuộc
npm install

# Chạy dev
npm run dev

# Build production
npm run build

# Xem build
npm run preview
```

## Tùy biến nhanh
- Thay logo/tên tại `index.html` và Navbar trong `src/App.tsx`.
- Cập nhật màu sắc trong `tailwind.config.js` (mục `colors.brand`).
- Cập nhật hình ảnh sản phẩm và thông tin liên hệ trong `src/App.tsx`.

## Cấu trúc
- `src/App.tsx`: Trang chính và các section.
- `src/index.css`: Style Tailwind và tiện ích.
- `vite.config.ts`: Cấu hình Vite.

## Triển khai
Có thể deploy lên Vercel/Netlify/Static hosting (dùng thư mục `dist/`).
