import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chính Sách Bảo Mật - Túi Bao Xoài Minh Quân | Bảo Vệ Thông Tin Khách Hàng',
    description: 'Chính sách bảo mật thông tin khách hàng của Túi Bao Xoài Minh Quân. Cam kết bảo vệ dữ liệu cá nhân, thông tin đơn hàng túi bao xoài một cách an toàn và bảo mật tuyệt đối.',
    keywords: 'chính sách bảo mật, bảo vệ thông tin khách hàng, an toàn dữ liệu, Túi Bao Xoài Minh Quân',
}

export default function PrivacyPolicyPage() {
    return (
        <main className="py-12 md:py-16">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
                <nav className="text-sm text-countryside-earth-600 mb-8">
                    <Link className="hover:text-countryside-leaf-600 transition" href="/">Trang chủ</Link>
                    <span className="mx-2">/</span>
                    <span className="text-countryside-wood-900 font-medium">Chính sách bảo mật</span>
                </nav>

                <div className="max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-bold text-countryside-wood-900 font-display">Chính sách bảo mật</h1>
                    <p className="mt-4 text-lg text-countryside-earth-700 leading-relaxed">
                        Chính sách này mô tả cách <strong>Túi Bao Xoài Minh Quân</strong> thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân của khách hàng. Chúng tôi cam kết bảo mật tuyệt đối mọi thông tin và tuân thủ các quy định pháp luật về bảo vệ dữ liệu cá nhân.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full kraft-paper border-2 border-countryside-straw-300 text-countryside-wood-700 text-sm font-semibold">
                        <span className="text-base">🔒</span>
                        <span>Cập nhật lần cuối: 07/10/2025</span>
                    </div>
                </div>

                <section className="mt-12 space-y-8 max-w-4xl">
                    <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
                        <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
                            <span className="text-3xl">📝</span>
                            1. Thông tin chúng tôi thu thập
                        </h2>
                        <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
                            <p>Khi bạn tương tác với chúng tôi, chúng tôi có thể thu thập các loại thông tin sau:</p>

                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">1.1. Thông tin cá nhân</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Họ tên:</strong> Để xưng hô và lập hóa đơn</li>
                                    <li><strong>Số điện thoại:</strong> Để liên hệ tư vấn, xác nhận đơn hàng</li>
                                    <li><strong>Email:</strong> Để gửi báo giá, xác nhận đơn hàng</li>
                                    <li><strong>Địa chỉ giao hàng:</strong> Để vận chuyển sản phẩm</li>
                                    <li><strong>Tên công ty/hợp tác xã:</strong> Để xuất hóa đơn GTGT</li>
                                    <li><strong>Mã số thuế:</strong> Để xuất hóa đơn đỏ</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">1.2. Thông tin đơn hàng</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Loại sản phẩm: Túi bao xoài, kích thước, số lượng</li>
                                    <li>Thông tin thanh toán: Phương thức, số tiền</li>
                                    <li>Lịch sử mua hàng: Các đơn hàng trước đây</li>
                                    <li>File thiết kế: Logo, thương hiệu in trên túi bao</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">1.3. Thông tin kỹ thuật</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Địa chỉ IP, loại trình duyệt, thiết bị</li>
                                    <li>Thời gian truy cập, trang đã xem</li>
                                    <li>Cookies và công nghệ theo dõi tương tự</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
                        <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
                            <span className="text-3xl">🎯</span>
                            2. Mục đích sử dụng thông tin
                        </h2>
                        <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
                            <p>Chúng tôi sử dụng thông tin thu thập được cho các mục đích sau:</p>

                            <div className="bg-white/60 rounded-2xl p-5 border-2 border-countryside-straw-200 space-y-3">
                                <div>
                                    <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                                        <span className="text-lg">✓</span> Xử lý đơn hàng & giao dịch
                                    </h4>
                                    <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                                        <li>Xác nhận và xử lý đơn đặt hàng túi bao xoài</li>
                                        <li>Liên hệ tư vấn sản phẩm, gửi báo giá</li>
                                        <li>Giao hàng và thông báo tình trạng đơn hàng</li>
                                        <li>Xuất hóa đơn, chứng từ thanh toán</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                                        <span className="text-lg">✓</span> Hỗ trợ khách hàng
                                    </h4>
                                    <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                                        <li>Giải đáp thắc mắc, khiếu nại</li>
                                        <li>Hỗ trợ kỹ thuật về sản phẩm</li>
                                        <li>Xử lý đổi trả, bảo hành</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                                        <span className="text-lg">✓</span> Marketing & truyền thông (chỉ khi có sự đồng ý)
                                    </h4>
                                    <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                                        <li>Gửi thông tin về sản phẩm mới, chương trình khuyến mãi</li>
                                        <li>Gửi tin tức, mẹo sử dụng</li>
                                        <li>Khảo sát ý kiến khách hàng</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                                        <span className="text-lg">✓</span> Cải thiện dịch vụ
                                    </h4>
                                    <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                                        <li>Phân tích hành vi khách hàng</li>
                                        <li>Cải thiện trải nghiệm website</li>
                                        <li>Phát triển sản phẩm mới</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
                        <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
                            <span className="text-3xl">🔐</span>
                            3. Cách chúng tôi bảo vệ thông tin
                        </h2>
                        <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
                            <p>Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức để bảo vệ thông tin cá nhân của bạn:</p>

                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">3.1. Biện pháp kỹ thuật</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Mã hóa dữ liệu:</strong> Sử dụng SSL/TLS để mã hóa dữ liệu truyền tải</li>
                                    <li><strong>Tường lửa (Firewall):</strong> Bảo vệ hệ thống khỏi truy cập trái phép</li>
                                    <li><strong>Sao lưu định kỳ:</strong> Sao lưu dữ liệu hàng ngày</li>
                                    <li><strong>Cập nhật bảo mật:</strong> Thường xuyên cập nhật các bản vá bảo mật</li>
                                    <li><strong>Kiểm tra an ninh:</strong> Kiểm tra và quét virus định kỳ</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">3.2. Biện pháp tổ chức</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Kiểm soát truy cập:</strong> Chỉ nhân viên được ủy quyền mới có quyền truy cập</li>
                                    <li><strong>Đào tạo nhân viên:</strong> Đào tạo về bảo mật thông tin</li>
                                    <li><strong>Thỏa thuận bảo mật:</strong> Nhân viên ký cam kết bảo mật</li>
                                    <li><strong>Giám sát hoạt động:</strong> Theo dõi các hành động truy cập dữ liệu</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">3.3. Lưu trữ dữ liệu</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Dữ liệu được lưu trữ trên máy chủ an toàn tại Việt Nam</li>
                                    <li>Hệ thống sao lưu dự phòng</li>
                                    <li>Phân quyền truy cập nghiêm ngặt</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
                        <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
                            <span className="text-3xl">🤝</span>
                            4. Chia sẻ thông tin với bên thứ ba
                        </h2>
                        <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
                            <p>Chúng tôi có thể chia sẻ thông tin của bạn với các bên thứ ba trong những trường hợp sau:</p>

                            <div className="bg-white/60 rounded-2xl p-5 border-2 border-countryside-straw-200 space-y-3">
                                <div>
                                    <h4 className="font-bold text-countryside-wood-800">4.1. Đối tác cung cấp dịch vụ</h4>
                                    <p className="text-sm mt-2">Chúng tôi có thể chia sẻ thông tin với:</p>
                                    <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                                        <li><strong>Đơn vị vận chuyển:</strong> Để giao hàng</li>
                                        <li><strong>Ngân hàng/Cổng thanh toán:</strong> Để xử lý giao dịch</li>
                                        <li><strong>Dịch vụ lưu trữ đám mây:</strong> Để lưu trữ dữ liệu</li>
                                        <li><strong>Dịch vụ email/SMS:</strong> Để gửi thông báo</li>
                                    </ul>
                                    <p className="text-sm mt-2 italic">Các đối tác được yêu cầu tuân thủ chính sách bảo mật.</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-countryside-wood-800">4.2. Yêu cầu pháp lý</h4>
                                    <p className="text-sm mt-2">Chúng tôi có thể tiết lộ thông tin khi:</p>
                                    <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                                        <li>Được yêu cầu bởi cơ quan nhà nước có thẩm quyền</li>
                                        <li>Để tuân thủ luật pháp, quy định</li>
                                        <li>Để bảo vệ quyền lợi, tài sản</li>
                                        <li>Để ngăn chặn gian lận, lạm dụng</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4 p-4 bg-countryside-leaf-50 border-2 border-countryside-leaf-300 rounded-lg">
                                <p className="font-bold text-countryside-wood-900">🚫 Chúng tôi CAM KẾT KHÔNG:</p>
                                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                                    <li>Bán thông tin cá nhân cho bên thứ ba</li>
                                    <li>Cho thuê dữ liệu khách hàng</li>
                                    <li>Chia sẻ cho mục đích marketing mà không có sự đồng ý</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
                        <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
                            <span className="text-3xl">📋</span>
                            5. Quyền của bạn
                        </h2>
                        <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
                            <p>Bạn có các quyền sau liên quan đến dữ liệu cá nhân của bạn:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Quyền truy cập:</strong> Bạn có quyền yêu cầu xem các thông tin cá nhân của bạn</li>
                                <li><strong>Quyền sửa đổi:</strong> Bạn có quyền cập nhật, chỉnh sửa thông tin cá nhân của bạn</li>
                                <li><strong>Quyền xóa:</strong> Bạn có quyền yêu cầu xóa thông tin (trong khung pháp lý cho phép)</li>
                                <li><strong>Quyền từ chối:</strong> Bạn có quyền từ chối nhận email quảng cáo, marketing</li>
                                <li><strong>Quyền khiếu nại:</strong> Bạn có quyền khiếu nại nếu cho rằng quyền lợi bị vi phạm</li>
                            </ul>

                            <div className="mt-4 p-4 bg-countryside-straw-50 border-l-4 border-countryside-straw-500 rounded-lg">
                                <p className="text-sm font-medium text-countryside-wood-800">📞 <strong>Để thực hiện các quyền trên, vui lòng liên hệ:</strong></p>
                                <p className="text-sm mt-2">Email: lienhe@baobiminhquan.vn | Zalo: 0913 937 841</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-gradient-to-r from-countryside-leaf-50 to-countryside-straw-50 border-2 border-countryside-leaf-300 rounded-2xl">
                        <h3 className="font-bold text-countryside-wood-900 text-lg mb-3">📞 Thông tin liên hệ & Khiếu nại</h3>
                        <div className="space-y-2 text-sm text-countryside-earth-700">
                            <p><strong>Zalo/Hotline:</strong> 0913 937 841 (Hỗ trợ 24/7)</p>
                            <p><strong>Email:</strong> lienhe@baobiminhquan.vn</p>
                            <p><strong>Văn phòng:</strong> Ấp Bình An, xã Bình Thành, Lấp Vò, tỉnh Đồng Tháp</p>
                            <p className="mt-3 text-xs italic">Nếu bạn có bất kỳ câu hỏi hoặc khiếu nại về chính sách bảo mật, vui lòng liên hệ. Chúng tôi cam kết giải quyết trong vòng 7 ngày làm việc.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
