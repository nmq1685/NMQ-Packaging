import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chính Sách Mua Hàng - Túi Bao Xoài Minh Quân | Đặt Hàng, Thanh Toán, Vận Chuyển',
    description: 'Chính sách mua hàng túi bao xoài tại Túi Bao Xoài Minh Quân: điều kiện đặt hàng, thanh toán, giao nhận và chính sách đổi trả sản phẩm túi bao xoài giấy phủ silicone.',
    keywords: 'chính sách mua hàng, đặt hàng túi bao xoài, thanh toán, vận chuyển, đổi trả, bảo hành',
}

export default function PurchasePolicyPage() {
    return (
        <main className="py-12 md:py-16">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
                <nav className="text-sm text-countryside-earth-600 mb-8">
                    <Link className="hover:text-countryside-leaf-600 transition" href="/">Trang chủ</Link>
                    <span className="mx-2">/</span>
                    <span className="text-countryside-wood-900 font-medium">Chính sách mua hàng</span>
                </nav>

                <div className="max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-bold text-countryside-wood-900 font-display">Chính sách mua hàng</h1>
                    <p className="mt-4 text-lg text-countryside-earth-700 leading-relaxed">
                        Chính sách này quy định các điều kiện đặt hàng, thanh toán, giao nhận, đổi trả và bảo hành cho sản phẩm túi bao xoài do Túi Bao Xoài Minh Quân cung cấp. Vui lòng đọc kỹ trước khi đặt hàng để đảm bảo quyền lợi của bạn.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full kraft-paper border-2 border-countryside-straw-300 text-countryside-wood-700 text-sm font-semibold">
                        <span className="text-base">📄</span>
                        <span>Cập nhật lần cuối: 07/10/2025</span>
                    </div>
                </div>

                <section className="mt-12 space-y-8 max-w-4xl">
                    <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
                        <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
                            <span className="text-3xl">📋</span>
                            1. Phạm vi áp dụng
                        </h2>
                        <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
                            <p>Chính sách này áp dụng cho mọi giao dịch mua bán túi bao xoài giữa khách hàng và <strong>Túi Bao Xoài Minh Quân</strong> thông qua các kênh sau:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Website chính thức: baobiminhnquan.com</li>
                                <li>Liên hệ trực tiếp qua Zalo/Hotline: 0913 937 841</li>
                                <li>Email: lienhe@baobiminhquan.vn</li>
                                <li>Tại văn phòng & nhà xưởng: Ấp Bình An, xã Bình Thành, Lấp Vò, tỉnh Đồng Tháp</li>
                            </ul>
                            <p className="mt-4 text-sm italic text-countryside-wood-700">Khách hàng khi đặt hàng được xem như đã đọc, hiểu và chấp nhận toàn bộ các điều khoản trong chính sách này.</p>
                        </div>
                    </div>

                    <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
                        <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
                            <span className="text-3xl">🛒</span>
                            2. Quy trình đặt hàng
                        </h2>
                        <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
                            <div className="bg-white/60 rounded-2xl p-5 border-2 border-countryside-straw-200">
                                <h3 className="font-bold text-countryside-wood-800 mb-2">Bước 1: Tư vấn & xác định nhu cầu</h3>
                                <p>Khách hàng cung cấp thông tin chi tiết về:</p>
                                <ul className="list-disc pl-6 space-y-1 mt-2">
                                    <li>Loại xoài cần bao (Cát Hòa Lộc, Cát Chu, Xoài Úc, Xoài Đài Loan...)</li>
                                    <li>Kích thước túi bao mong muốn (S, M, L hoặc kích thước tùy chỉnh)</li>
                                    <li>Số lượng cần đặt (từ 50 túi trở lên)</li>
                                    <li>Thời gian cần giao hàng</li>
                                    <li>Địa chỉ giao hàng cụ thể</li>
                                </ul>
                            </div>

                            <div className="bg-white/60 rounded-2xl p-5 border-2 border-countryside-straw-200">
                                <h3 className="font-bold text-countryside-wood-800 mb-2">Bước 2: Báo giá & xác nhận</h3>
                                <p>Chúng tôi sẽ gửi báo giá chi tiết bao gồm:</p>
                                <ul className="list-disc pl-6 space-y-1 mt-2">
                                    <li>Đơn giá túi bao xoài theo số lượng (có chiết khấu theo khối lượng)</li>
                                    <li>Chi phí vận chuyển (nếu có)</li>
                                    <li>Thời gian sản xuất và giao hàng dự kiến</li>
                                    <li>Các điều khoản thanh toán</li>
                                </ul>
                            </div>

                            <div className="bg-white/60 rounded-2xl p-5 border-2 border-countryside-straw-200">
                                <h3 className="font-bold text-countryside-wood-800 mb-2">Bước 3: Đặt cọc & xác nhận đơn hàng</h3>
                                <p>Đơn hàng được chính thức xác nhận khi:</p>
                                <ul className="list-disc pl-6 space-y-1 mt-2">
                                    <li>Khách hàng đồng ý với báo giá</li>
                                    <li>Thực hiện đặt cọc theo tỷ lệ thỏa thuận (30-50%)</li>
                                </ul>
                            </div>

                            <div className="bg-white/60 rounded-2xl p-5 border-2 border-countryside-straw-200">
                                <h3 className="font-bold text-countryside-wood-800 mb-2">Bước 4: Sản xuất & giao hàng</h3>
                                <p>Sau khi nhận đặt cọc, chúng tôi sẽ:</p>
                                <ul className="list-disc pl-6 space-y-1 mt-2">
                                    <li>Tiến hành sản xuất theo đúng quy cách đã thỏa thuận</li>
                                    <li>Thông báo tiến độ sản xuất cho khách hàng</li>
                                    <li>Đóng gói cẩn thận và giao hàng đúng hạn</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
                        <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
                            <span className="text-3xl">💰</span>
                            3. Giá cả & thanh toán
                        </h2>
                        <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">3.1. Chính sách giá</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Giá niêm yết là giá tham khảo dựa trên thông tin ban đầu của khách hàng</li>
                                    <li>Giá cuối cùng có thể điều chỉnh dựa trên số lượng thực tế, kích thước tùy chỉnh và chi phí nguyên vật liệu</li>
                                    <li>Giá đã bao gồm thuế GTGT (VAT) nếu khách hàng yêu cầu xuất hóa đơn đỏ</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">3.2. Chiết khấu theo số lượng</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-2 border-countryside-wood-200 rounded-lg overflow-hidden">
                                        <thead className="bg-countryside-leaf-100">
                                            <tr>
                                                <th className="px-4 py-3 text-left border-b-2 border-countryside-wood-200">Số lượng</th>
                                                <th className="px-4 py-3 text-left border-b-2 border-countryside-wood-200">Chiết khấu</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            <tr>
                                                <td className="px-4 py-3 border-b border-countryside-wood-200">50 - 1.000 túi</td>
                                                <td className="px-4 py-3 border-b border-countryside-wood-200">Giá bán lẻ</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 border-b border-countryside-wood-200">1.001 - 5.000 túi</td>
                                                <td className="px-4 py-3 border-b border-countryside-wood-200">Giảm 5%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 border-b border-countryside-wood-200">5.001 - 10.000 túi</td>
                                                <td className="px-4 py-3 border-b border-countryside-wood-200">Giảm 10%</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3">Trên 10.000 túi</td>
                                                <td className="px-4 py-3">Giảm 15-30%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">3.3. Phương thức thanh toán</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Chuyển khoản ngân hàng:</strong> Ưu tiên</li>
                                    <li><strong>Tiền mặt:</strong> Thanh toán khi nhận hàng (COD)</li>
                                    <li><strong>Ví điện tử:</strong> Momo, ZaloPay</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
                        <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
                            <span className="text-3xl">🚚</span>
                            4. Giao hàng & nhận hàng
                        </h2>
                        <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">4.1. Thời gian sản xuất & giao hàng</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Đơn hàng thường (50 - 5.000 túi):</strong> 2-3 ngày làm việc</li>
                                    <li><strong>Đơn hàng lớn (5.001 - 20.000 túi):</strong> 4-7 ngày làm việc</li>
                                    <li><strong>Đơn hàng rất lớn (&gt; 20.000 túi):</strong> 7-14 ngày làm việc</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">4.2. Phạm vi giao hàng</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Đồng Tháp và tỉnh lân cận:</strong> Giao hàng trực tiếp miễn phí cho đơn &gt; 5.000 túi</li>
                                    <li><strong>Các tỉnh khác:</strong> Vận chuyển qua đơn vị vận tải uy tín</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
                        <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
                            <span className="text-3xl">🔄</span>
                            5. Chính sách đổi trả & khiếu nại
                        </h2>
                        <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
                            <div className="p-4 bg-countryside-leaf-50 rounded-2xl border-2 border-countryside-leaf-200">
                                <p className="font-bold text-countryside-wood-900">Chúng tôi chỉ chấp nhận đổi trả trong các trường hợp sau:</p>
                                <ul className="list-disc pl-6 space-y-1 mt-2">
                                    <li>Lỗi sản xuất: Túi bị rách, lỗi phủ silicone, không chống thấm</li>
                                    <li>Sai quy cách: Kích thước không đúng như đã thỏa thuận</li>
                                    <li>Thiếu số lượng: Số lượng giao ít hơn đơn hàng</li>
                                    <li>Hư hỏng do vận chuyển: Có xác nhận từ đơn vị vận chuyển</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">5.1. Điều kiện đổi trả</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Thông báo trong vòng <strong>3 ngày</strong> kể từ ngày nhận hàng</li>
                                    <li>Cung cấp hình ảnh/video rõ ràng về lỗi sản phẩm</li>
                                    <li>Sản phẩm chưa qua sử dụng, còn nguyên bao bì</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-countryside-wood-800 mb-2">5.2. Các trường hợp KHÔNG được đổi trả</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Khách hàng đặt nhầm kích thước nhưng đã phê duyệt mẫu</li>
                                    <li>Thay đổi ý định, không còn nhu cầu sử dụng</li>
                                    <li>Hư hỏng do bảo quản không đúng cách</li>
                                    <li>Quá thời hạn 3 ngày mà không thông báo</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-gradient-to-r from-countryside-leaf-50 to-countryside-straw-50 border-2 border-countryside-leaf-300 rounded-2xl">
                        <h3 className="font-bold text-countryside-wood-900 text-lg mb-3">📞 Thông tin liên hệ hỗ trợ</h3>
                        <div className="space-y-2 text-sm text-countryside-earth-700">
                            <p><strong>Zalo/Hotline:</strong> 0913 937 841 (Hỗ trợ 24/7)</p>
                            <p><strong>Email:</strong> lienhe@baobiminhquan.vn</p>
                            <p><strong>Văn phòng & nhà xưởng:</strong> Ấp Bình An, xã Bình Thành, Lấp Vò, tỉnh Đồng Tháp</p>
                            <p><strong>Website:</strong> baobiminhnquan.com</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
