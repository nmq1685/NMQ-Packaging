export interface Product {
    id: string
    name: string
    tag: string
    price: string
    description: string
    fullDescription: string
    specs: string[]
    features: string[]
    image: string
    images: string[]
    category: string
    inStock: boolean
}

export const products: Product[] = [
    {
        id: 'tui-bao-xoai-chong-con-trung',
        name: 'Túi bao xoài chống côn trùng',
        tag: 'Sản phẩm chính',
        price: 'Liên hệ',
        description: 'Túi bao xoài chuyên dụng làm từ giấy phủ silicone 2 mặt, chống thấm nước ngoài trời và bảo vệ hiệu quả xoài khỏi côn trùng, ruồi trái cây xâm hại.',
        fullDescription: `Túi bao xoài Minh Quân là sản phẩm chuyên dụng được phát triển dành riêng cho nông dân trồng xoài cát hòa lộc. Chất liệu giấy phủ silicone 2 mặt tạo lớp bảo vệ hoàn toàn chống thấm nước ngoài trời, giúp xoài được bảo vệ an toàn khỏi các tác động từ yếu tố thời tiết và sâu bệnh.

Với công nghệ phủ silicone 2 mặt hiện đại, túi bao xoài giúp:
- Chống thấm nước 100% khi tiếp xúc với nước mưa hay nước tưới tiêu
- Chống côn trùng xâm hại, ruồi trái cây, sâu đục quả
- Giữ độ tươi của xoài trong quá trình sinh trưởng
- Tạo môi trường ẩm độ lý tưởng bên trong túi

Túi bao xoài được thiết kế với nhiều kích thước khác nhau phù hợp với các loại xoài: Cát Hòa Lộc, Cát Chu, Xoài Úc và các giống xoài khác. Chúng tôi cung cấp các kích thước S, M, L với khả năng tùy chỉnh kích thước theo yêu cầu của khách hàng.`,
        specs: [
            'Chất liệu: Giấy phủ silicone 2 mặt chống thấm 100%',
            'Kích thước có sẵn: S (8x12cm), M (10x14cm), L (12x16cm)',
            'Kích thước tùy chỉnh: Có thể đặt hàng kích thước đặc biệt',
            'Màu sắc: Trắng tự nhiên, có thể in logo tùy chỉnh',
            'Độ bền: Chống rách, chống thủng cạnh',
            'An toàn: Không độc hại, thân thiện môi trường',
            'Khả năng chức năng: Chống côn trùng, chống thấm nước, thoáng khí',
        ],
        features: [
            'Giấy phủ silicone 2 mặt chống thấm',
            'Bảo vệ khỏi ruồi trái cây, sâu đục quả, côn trùng',
            'Kích thước đa dạng: S, M, L phù hợp mọi loại xoài',
            'Giá cạnh tranh, hỗ trợ bán sỉ',
            'Đóng gói cẩn thận, giao hàng nhanh 2-3 ngày',
            'Hỗ trợ kỹ thuật: Hướng dẫn sử dụng chi tiết',
        ],
        image: '/images/baobi/1.png',
        images: ['/images/baobi/1.png', '/images/baobi/2.png', '/images/baobi/3.png', '/images/baobi/4.png'],
        category: 'tui-bao-xoai',
        inStock: true,
    },
    {
        id: 'tui-bao-xoai-ban-si',
        name: 'Bán sỉ và bán lẻ',
        tag: 'Giá cạnh tranh',
        price: 'Liên hệ',
        description: 'Cung cấp túi bao xoài với số lượng linh hoạt từ bán lẻ cho nông dân đến bán sỉ cho hợp tác xã, doanh nghiệp xuất khẩu.',
        fullDescription: `Chúng tôi cung cấp túi bao xoài với các chính sách bán hàng linh hoạt phù hợp với nhu cầu của từng khách hàng:

**Bán lẻ cho nông dân:**
- Số lượng từ 50 túi trở lên
- Giá bán lẻ hợp lý, phù hợp với túi tiền nông dân
- Hỗ trợ giao hàng tận nơi
- Cung cấp hướng dẫn sử dụng chi tiết

**Bán sỉ cho hợp tác xã và doanh nghiệp:**
- Số lượng từ 1000 túi trở lên
- Giá sỉ hấp dẫn, chiết khấu theo số lượng
- Có thể in logo công ty trên túi
- Hỗ trợ đóng gói theo yêu cầu
- Thời gian giao hàng nhanh 2-3 ngày

**Hỗ trợ thanh toán:**
- Thanh toán tiền mặt khi giao hàng
- Hỗ trợ chuyển khoản ngân hàng
- Có thể thương lượng điều khoản thanh toán cho đơn hàng lớn`,
        specs: [
            'Bán lẻ tối thiểu: 50 túi',
            'Bán sỉ tối thiểu: 1000 túi',
            'Giá lẻ: Liên hệ để biết giá cụ thể',
            'Giá sỉ: Chiết khấu theo số lượng',
            'Đóng gói: Thùng carton 500 túi/thùng',
            'Vận chuyển: Giao hàng tận nơi',
            'Thời gian giao: 2-3 ngày trong nội thành, 3-5 ngày ngoại thành',
        ],
        features: [
            'Giá cạnh tranh nhất thị trường',
            'Linh hoạt về số lượng',
            'Hỗ trợ in logo tùy chỉnh',
            'Thanh toán linh hoạt',
            'Giao hàng nhanh chóng',
            'Hỗ trợ sau bán tuyệt vời',
        ],
        image: '/images/baobi/2.png',
        images: ['/images/baobi/2.png', '/images/baobi/1.png', '/images/baobi/3.png'],
        category: 'ban-si',
        inStock: true,
    },
    {
        id: 'chuong-trinh-dai-ly',
        name: 'Chương trình đại lý cấp 1',
        tag: 'Cơ hội kinh doanh',
        price: 'Liên hệ',
        description: 'Tuyển đại lý cấp 1 toàn quốc phân phối túi bao xoài với chính sách hỗ trợ toàn diện, lợi nhuận cao và bảo vệ vùng độc quyền.',
        fullDescription: `Bao Bì Minh Quân đang tuyển đại lý cấp 1 toàn quốc để mở rộng hệ thống phân phối. Chúng tôi cung cấp cho các đại lý một cơ hội kinh doanh có lợi nhuận cao với sự hỗ trợ toàn diện từ công ty.

**Chính sách giá đại lý:**
- Chiết khấu 20-30% tùy theo khối lượng đơn hàng
- Giá đặc biệt cho đại lý phát triển vùng
- Hỗ trợ tuyên truyền và quảng cáo

**Quyền lợi đại lý:**
- Bảo vệ vùng độc quyền phân phối
- Không cạnh tranh trực tiếp với công ty
- Hỗ trợ marketing: banner, brochure, mẫu miễn phí
- Đào tạo kỹ thuật về sản phẩm và công nghệ bảo vệ xoài
- Hỗ trợ tiếp cận khách hàng và hợp tác xã

**Yêu cầu đại lý:**
- Cam kết mua hàng hàng tháng (tối thiểu 5000 túi/tháng)
- Phát triển vùng kinh doanh gán định
- Có năng lực tài chính để kinh doanh ổn định
- Tuân thủ chính sách giá do công ty quy định

**Hỗ trợ từ công ty:**
- Cấp phát đơn hàng nhanh chóng
- Hỗ trợ giải quyết các vấn đề liên quan sản phẩm
- Tư vấn kỹ thuật cho khách hàng của đại lý
- Xây dựng mối quan hệ dài hạn, phát triển cùng nhau`,
        specs: [
            'Vùng phân phối: Toàn quốc',
            'Tối thiểu đơn hàng: 5000 túi/tháng',
            'Chiết khấu: 20-30%',
            'Bảo vệ vùng: Có',
            'Thời gian hợp tác: Tối thiểu 1 năm',
            'Hỗ trợ marketing: Có',
            'Đào tạo: Có hỗ trợ',
        ],
        features: [
            'Chính sách giá đại lý ưu đãi lên đến 30%',
            'Hỗ trợ marketing: banner, brochure, mẫu miễn phí',
            'Bảo vệ vùng độc quyền',
            'Đào tạo kỹ thuật cho nhân viên đại lý',
            'Hỗ trợ tiếp cận khách hàng',
            'Xây dựng quan hệ dài hạn, phát triển cùng nhau',
        ],
        image: '/images/baobi/3.png',
        images: ['/images/baobi/3.png', '/images/baobi/1.png', '/images/baobi/2.png'],
        category: 'dai-ly',
        inStock: true,
    },
]

export function getProductById(id: string): Product | undefined {
    return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
    return products.filter((p) => p.category === category)
}
