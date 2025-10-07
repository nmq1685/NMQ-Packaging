/**
 * SEO Keywords & Metadata Configuration
 * Túi Bao Xoài Minh Quân - Tối ưu SEO tập trung vào túi bao xoài
 */

export const SEO_CONFIG = {
  siteName: 'Túi Bao Xoài Minh Quân',
  siteUrl: 'https://baobiminhnquan.com',
  
  // Từ khóa chính - Primary Keywords (Tập trung vào túi bao xoài)
  primaryKeywords: [
    'túi bao xoài',
    'túi bọc xoài',
    'túi giấy bao xoài',
    'túi bảo vệ xoài',
    'giấy phủ silicone bao xoài',
  ],
  
  // Từ khóa sản phẩm - Product Keywords (Đặc tính túi bao xoài)
  productKeywords: [
    'túi bao xoài chống côn trùng',
    'túi bao xoài chống thấm',
    'túi bao xoài xuất khẩu',
    'túi bao xoài cát hòa lộc',
    'túi bọc xoài chống ruồi',
    'túi bao xoài chống sâu bệnh',
    'giấy gói xoài chống côn trùng',
    'giấy phủ silicone 2 mặt bao xoài',
    'túi bao xoài giấy kraft',
    'túi bảo vệ xoài non',
    'túi bọc xoài trên cây',
    'túi che xoài chống nắng',
  ],
  
  // Từ khóa theo loại xoài - Mango Variety Keywords
  fruitKeywords: [
    'túi bao xoài cát hòa lộc',
    'túi bao xoài cát chu',
    'túi bao xoài Úc',
    'túi bao xoài Đài Loan',
    'túi bao xoài keo',
    'túi bao xoài tượng',
    'túi bao xoài ghép',
  ],
  
  // Từ khóa tiêu chuẩn - Standard Keywords
  standardKeywords: [
    'túi bao xoài VietGAP',
    'túi bao xoài GlobalGAP',
    'túi bao xoài chuẩn xuất khẩu',
    'túi bao xoài organic',
    'túi bao xoài an toàn',
  ],
  
  // Từ khóa địa phương - Location Keywords
  locationKeywords: [
    'túi bao xoài Đồng Tháp',
    'túi bao xoài Tiền Giang',
    'túi bao xoài Bến Tre',
    'túi bao xoài ĐBSCL',
    'túi bao xoài miền Tây',
    'túi bao xoài Cần Thơ',
    'túi bao xoài Vĩnh Long',
    'túi bao xoài An Giang',
    'túi bao xoài Cao Lãnh',
  ],
  
  // Từ khóa dịch vụ - Service Keywords
  serviceKeywords: [
    'bán sỉ túi bao xoài',
    'bán lẻ túi bao xoài',
    'đại lý túi bao xoài',
    'cung cấp túi bao xoài',
    'sản xuất túi bao xoài',
    'túi bao xoài giá rẻ',
    'túi bao xoài số lượng lớn',
    'nhà phân phối túi bao xoài',
  ],
  
  // Long-tail keywords (từ khóa dài)
  longTailKeywords: [
    'mua túi bao xoài chống côn trùng',
    'túi bao xoài giấy phủ silicone 2 mặt',
    'túi bọc xoài chống thấm nước ngoài trời',
    'túi bao xoài cát hòa lộc xuất khẩu',
    'giấy gói xoài chống ruồi trái cây',
    'túi bao xoài chống sâu đục quả',
    'túi bảo vệ xoài non trên cây',
    'túi bao xoài ĐBSCL giá rẻ',
    'đại lý túi bao xoài toàn quốc',
    'bán sỉ túi bao xoài Đồng Tháp',
  ],
  
  // Meta descriptions cho các trang
  pages: {
    home: {
      title: 'Túi Bao Xoài Minh Quân - Giấy Phủ Silicone Chống Thấm, Chống Côn Trùng | Bán Sỉ Lẻ & Tuyển Đại Lý',
      description: 'Chuyên sản xuất túi bao xoài chất liệu giấy phủ silicone 2 mặt chống thấm nước, chống côn trùng xâm hại hiệu quả. Bán sỉ, bán lẻ và tuyển đại lý cấp 1 toàn quốc. Giao hàng tận nơi, giá cạnh tranh.',
      keywords: 'túi bao xoài, túi bọc xoài, giấy phủ silicone, chống côn trùng, bán sỉ túi bao xoài, đại lý túi bao xoài',
    },
    privacy: {
      title: 'Chính Sách Bảo Mật - Túi Bao Xoài Minh Quân',
      description: 'Chính sách bảo mật thông tin khách hàng của Túi Bao Xoài Minh Quân - Cam kết bảo vệ dữ liệu cá nhân',
      keywords: 'chính sách bảo mật, bảo vệ thông tin, Túi Bao Xoài Minh Quân',
    },
    purchase: {
      title: 'Chính Sách Mua Hàng - Túi Bao Xoài Minh Quân',
      description: 'Chính sách mua hàng, thanh toán, vận chuyển và đổi trả sản phẩm túi bao xoài tại Túi Bao Xoài Minh Quân',
      keywords: 'chính sách mua hàng, thanh toán, vận chuyển, đổi trả, túi bao xoài',
    },
  },
}

// Helper function để tạo keywords string
export const getAllKeywords = (): string => {
  return [
    ...SEO_CONFIG.primaryKeywords,
    ...SEO_CONFIG.productKeywords,
    ...SEO_CONFIG.fruitKeywords,
    ...SEO_CONFIG.standardKeywords,
    ...SEO_CONFIG.locationKeywords,
    ...SEO_CONFIG.serviceKeywords,
    ...SEO_CONFIG.longTailKeywords,
  ].join(', ')
}

// Helper function để update page title
export const updatePageMeta = (page: keyof typeof SEO_CONFIG.pages) => {
  const pageConfig = SEO_CONFIG.pages[page]
  if (typeof document !== 'undefined') {
    document.title = pageConfig.title
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', pageConfig.description)
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', pageConfig.keywords)
    }
  }
}
