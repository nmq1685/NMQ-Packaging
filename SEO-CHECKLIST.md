# ✅ SEO Deployment Checklist

## Pre-Deploy (Trước khi deploy)
- [x] Tối ưu meta tags trong `index.html`
- [x] Thêm Structured Data (Schema.org)
- [x] Tạo `robots.txt`
- [x] Tạo `sitemap.xml`
- [x] Thêm SEO component cho tất cả pages
- [x] Test build thành công (`npm run build`)
- [ ] Cập nhật domain trong `index.html` (thay `baobiminhnquan.com` bằng domain thật)
- [ ] Cập nhật số điện thoại trong Structured Data
- [ ] Cập nhật email trong Structured Data

## Deploy Day (Ngày deploy)
- [ ] Deploy website lên hosting
- [ ] Verify website hoạt động
- [ ] Check HTTPS working
- [ ] Test responsive trên mobile
- [ ] Test tốc độ load trang

## Post-Deploy - Ngay Lập Tức (Trong 24h)
- [ ] **Google Search Console**
  - [ ] Đăng ký & xác minh domain
  - [ ] Submit sitemap.xml (`https://yourdomain.com/sitemap.xml`)
  - [ ] Request indexing cho trang chủ
  
- [ ] **Google Rich Results Test**
  - [ ] Test URL: https://search.google.com/test/rich-results
  - [ ] Verify Structured Data hợp lệ
  
- [ ] **Mobile-Friendly Test**
  - [ ] Test URL: https://search.google.com/test/mobile-friendly
  - [ ] Verify mobile responsive
  
- [ ] **PageSpeed Insights**
  - [ ] Test URL: https://pagespeed.web.dev
  - [ ] Score > 80 cho mobile & desktop

## Week 1 (Tuần đầu tiên)
- [ ] **Google My Business**
  - [ ] Tạo hồ sơ doanh nghiệp
  - [ ] Xác minh địa chỉ (qua thư hoặc điện thoại)
  - [ ] Upload logo, hình ảnh sản phẩm (10-20 ảnh)
  - [ ] Điền đầy đủ thông tin: giờ mở cửa, mô tả, dịch vụ
  - [ ] Chọn danh mục phù hợp
  
- [ ] **Google Analytics**
  - [ ] Tạo property mới
  - [ ] Cài tracking code vào website
  - [ ] Verify data tracking

- [ ] **Social Media**
  - [ ] Update link website trên Zalo
  - [ ] Tạo Facebook Business Page (nếu chưa có)
  - [ ] Link website trên Facebook

## Month 1 (Tháng đầu)
- [ ] **Content**
  - [ ] Viết bài blog #1: "Cách chọn bao bì xoài xuất khẩu"
  - [ ] Viết bài blog #2: "Tiêu chuẩn VietGAP cho bao bì"
  - [ ] Tạo FAQs page
  
- [ ] **Reviews**
  - [ ] Thu thập 3-5 review từ khách hàng
  - [ ] Thêm review vào Google My Business
  
- [ ] **Backlinks**
  - [ ] Đăng ký 3-5 thư mục doanh nghiệp
  - [ ] List:
    - [ ] Zalo Business
    - [ ] Vietbiz.vn
    - [ ] Muaban.net
    - [ ] Rongbay.com
    - [ ] Thongtinongsan.vn

## Month 2-3 (Tháng 2-3)
- [ ] **Monitoring**
  - [ ] Check Google Search Console weekly
  - [ ] Monitor top keywords
  - [ ] Analyze user behavior in GA
  
- [ ] **Optimization**
  - [ ] Cập nhật nội dung based on keyword performance
  - [ ] Thêm 2-3 từ khóa mới nếu cần
  - [ ] Cải thiện CTR của meta descriptions
  
- [ ] **Local SEO**
  - [ ] Đăng ký Google Maps
  - [ ] Tạo citations (NAP - Name, Address, Phone) consistent
  - [ ] Liên hệ báo địa phương cho PR

## Ongoing (Liên tục)
- [ ] Cập nhật Google My Business posts weekly
- [ ] Trả lời reviews & câu hỏi trên GMB
- [ ] Viết blog mới mỗi tháng
- [ ] Monitor competitors
- [ ] Track rankings với SEO tools
- [ ] Cập nhật sitemap khi thêm pages mới

## Important URLs to Update
Sau khi có domain thật, find & replace trong các file sau:
- [ ] `index.html` - Tất cả `https://baobiminhnquan.com/`
- [ ] `src/components/SEO.tsx` - Biến `siteUrl`
- [ ] `public/sitemap.xml` - Tất cả URLs
- [ ] Social media links

## Contact Info to Update
- [ ] Số điện thoại: `+84-xxx-xxx-xxx` → số thật
- [ ] Email: `lienhe@baobiminhquan.vn` → email thật
- [ ] Địa chỉ cụ thể (thêm số nhà, đường)
- [ ] Tọa độ GPS chính xác

## Tools Setup
- [ ] Google Search Console
- [ ] Google Analytics
- [ ] Google Tag Manager (optional)
- [ ] Google My Business
- [ ] Facebook Pixel (optional)
- [ ] Hotjar / Microsoft Clarity (optional - heatmaps)

---

## Quick Reference

### Important Files for SEO:
- `index.html` - Meta tags, Structured Data
- `src/config/seo.ts` - Keywords configuration
- `src/components/SEO.tsx` - SEO component
- `public/robots.txt` - Crawler instructions
- `public/sitemap.xml` - Site structure
- `SEO-GUIDE.md` - Detailed guide

### Tools to Use:
1. **Google Search Console** - https://search.google.com/search-console
2. **Google Analytics** - https://analytics.google.com
3. **Rich Results Test** - https://search.google.com/test/rich-results
4. **PageSpeed Insights** - https://pagespeed.web.dev
5. **Mobile-Friendly Test** - https://search.google.com/test/mobile-friendly

---

**In ra checklist này và tick ✅ từng mục!**
