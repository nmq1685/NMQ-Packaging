/**
 * SEO Keywords & Metadata Configuration
 * Bao Bì Minh Quân - Tối ưu SEO với đa dạng từ khóa
 */

export const SEO_CONFIG = {
  siteName: 'Bao Bì Minh Quân',
  siteUrl: 'https://baobiminhnquan.com',
  
  // Từ khóa chính - Primary Keywords
  primaryKeywords: [
    'bao bì trái cây',
    'bao bì xoài',
    'bao bì mít',
    'thùng carton xuất khẩu',
    'bao bì xuất khẩu',
  ],
  
  // Từ khóa sản phẩm - Product Keywords
  productKeywords: [
    'thùng carton thoáng khí',
    'thùng carton 5 lớp',
    'thùng carton 7 lớp',
    'khay xốp trái cây',
    'xốp PE chống dập',
    'giấy định hình',
    'túi lưới PE',
    'túi OPP trong suốt',
    'túi bảo vệ trái cây',
    'tem QR truy xuất',
    'tem nhãn trái cây',
    'màng co POF',
    'giấy gói xoài',
    'giấy gói mít',
    'giấy phủ silicone',
  ],
  
  // Từ khóa theo loại trái cây - Fruit-specific Keywords
  fruitKeywords: [
    'bao bì xoài cát hòa lộc',
    'bao bì mít thái',
    'bao bì sầu riêng',
    'bao bì thanh long',
    'bao bì bưởi',
    'bao bì măng cụt',
    'bao bì chôm chôm',
    'bao bì nhãn',
    'bao bì vải thiều',
  ],
  
  // Từ khóa tiêu chuẩn - Standard Keywords
  standardKeywords: [
    'VietGAP',
    'GlobalGAP',
    'bao bì chuẩn xuất khẩu',
    'bao bì organic',
    'bao bì an toàn thực phẩm',
  ],
  
  // Từ khóa địa phương - Location Keywords
  locationKeywords: [
    'bao bì Đồng Tháp',
    'bao bì Tiền Giang',
    'bao bì Bến Tre',
    'bao bì ĐBSCL',
    'bao bì miền Tây',
    'bao bì Cần Thơ',
    'bao bì Vĩnh Long',
    'bao bì An Giang',
    'bao bì Long An',
  ],
  
  // Từ khóa dịch vụ - Service Keywords
  serviceKeywords: [
    'cung cấp bao bì trái cây',
    'sản xuất bao bì trái cây',
    'in ấn bao bì',
    'thiết kế bao bì',
    'bao bì giá reiẻ',
    'bao bì số lượng lớn',
    'đại lý bao bì',
    'nhà phân phối bao bì',
  ],
  
  // Long-tail keywords (từ khóa dài)
  longTailKeywords: [
    'mua thùng carton đựng xoài xuất khẩu',
    'bao bì trái cây chuẩn quốc tế',
    'thùng carton thoáng khí cho xoài',
    'túi lưới PE bảo vệ trái cây',
    'tem QR truy xuất nguồn gốc trái cây',
    'bao bì xoài cát hòa lộc xuất khẩu',
    'giấy gói xoài chống côn trùng',
    'xốp chống dập cho mít thái',
    'màng co POF bao bì trái cây',
    'bao bì nông sản ĐBSCL',
  ],
  
  // Meta descriptions cho các trang
  pages: {
    home: {
      title: 'Bao Bì Minh Quân - Bao Bì Trái Cây Xuất Khẩu | Thùng Carton, Xốp, Túi OPP',
      description: 'Chuyên cung cấp bao bì xoài, mít xuất khẩu: thùng carton thoáng khí 5-7 lớp, khay xốp PE chống dập, túi lưới/OPP, tem QR truy xuất, màng co POF. Chuẩn VietGAP, GlobalGAP. Giao toàn quốc.',
      keywords: 'bao bì trái cây, bao bì xoài, bao bì mít, thùng carton xuất khẩu, khay xốp, túi OPP, tem QR, VietGAP',
    },
    privacy: {
      title: 'Chính Sách Bảo Mật - Bao Bì Minh Quân',
      description: 'Chính sách bảo mật thông tin khách hàng của Bao Bì Minh Quân - Cam kết bảo vệ dữ liệu cá nhân',
      keywords: 'chính sách bảo mật, bảo vệ thông tin, Bao Bì Minh Quân',
    },
    purchase: {
      title: 'Chính Sách Mua Hàng - Bao Bì Minh Quân',
      description: 'Chính sách mua hàng, thanh toán, vận chuyển và đổi trả sản phẩm bao bì trái cây tại Bao Bì Minh Quân',
      keywords: 'chính sách mua hàng, thanh toán, vận chuyển, đổi trả, Bao Bì Minh Quân',
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
