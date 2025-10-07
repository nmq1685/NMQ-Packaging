import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function PurchasePolicy() {
  return (
    <>
      <SEO 
        title="Chính Sách Mua Hàng - Túi Bao Xoài Minh Quân | Đặt Hàng, Thanh Toán, Vận Chuyển"
        description="Chính sách mua hàng túi bao xoài tại Túi Bao Xoài Minh Quân: điều kiện đặt hàng, thanh toán, giao nhận và chính sách đổi trả sản phẩm túi bao xoài giấy phủ silicone."
        keywords="chính sách mua hàng, đặt hàng túi bao xoài, thanh toán, vận chuyển, đổi trả, bảo hành, Túi Bao Xoài Minh Quân"
      />
      <main className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <nav className="text-sm text-countryside-earth-600 mb-8">
            <Link className="hover:text-countryside-leaf-600 transition" to="/">Trang chủ</Link>
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
                  <li>Thực hiện đặt cọc theo tỷ lệ thỏa thuận:
                    <ul className="list-circle pl-6 mt-1">
                      <li>Đơn hàng &lt; 5.000 túi: Đặt cọc 30%</li>
                      <li>Đơn hàng 5.000 - 20.000 túi: Đặt cọc 40%</li>
                      <li>Đơn hàng &gt; 20.000 túi: Đặt cọc 50%</li>
                    </ul>
                  </li>
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
              <span className="text-3xl">📦</span>
              3. Mẫu thử & kiểm tra chất lượng
            </h2>
            <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
              <p>Để đảm bảo sản phẩm đáp ứng đúng nhu cầu của khách hàng, chúng tôi cung cấp dịch vụ mẫu thử:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Đơn hàng lần đầu hoặc đơn hàng lớn (&gt; 10.000 túi):</strong> Được gửi mẫu thử MIỄN PHÍ để kiểm tra kích thước, chất liệu và độ phù hợp với xoài</li>
                <li><strong>Thời gian gửi mẫu:</strong> 1-2 ngày làm việc kể từ khi xác nhận</li>
                <li><strong>Phí vận chuyển mẫu:</strong> Khách hàng chịu phí vận chuyển hoặc được miễn phí nếu đơn hàng &gt; 20.000 túi</li>
                <li><strong>Phê duyệt mẫu:</strong> Sản xuất hàng loạt chỉ bắt đầu sau khi khách hàng phê duyệt mẫu bằng văn bản (email/Zalo)</li>
              </ul>
              <div className="mt-4 p-4 bg-countryside-leaf-50 border-l-4 border-countryside-leaf-500 rounded-lg">
                <p className="text-sm font-medium text-countryside-wood-800">💡 <strong>Lưu ý:</strong> Sau khi phê duyệt mẫu, mọi thay đổi về kích thước, chất liệu sẽ được xem như đơn hàng mới và có thể ảnh hưởng đến giá cả và thời gian giao hàng.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">💰</span>
              4. Giá cả & thanh toán
            </h2>
            <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">4.1. Chính sách giá</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Giá niêm yết là giá tham khảo dựa trên thông tin ban đầu của khách hàng</li>
                  <li>Giá cuối cùng có thể điều chỉnh dựa trên số lượng thực tế, kích thước tùy chỉnh và chi phí nguyên vật liệu</li>
                  <li>Giá đã bao gồm thuế GTGT (VAT) nếu khách hàng yêu cầu xuất hóa đơn đỏ</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">4.2. Chiết khấu theo số lượng</h3>
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
                        <td className="px-4 py-3 border-b border-countryside-wood-200">10.001 - 20.000 túi</td>
                        <td className="px-4 py-3 border-b border-countryside-wood-200">Giảm 15%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Trên 20.000 túi</td>
                        <td className="px-4 py-3">Giảm 20-30% (thỏa thuận)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">4.3. Phương thức thanh toán</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chuyển khoản ngân hàng:</strong> Ưu tiên (giảm thêm 2% cho đơn hàng &gt; 10.000 túi)</li>
                  <li><strong>Tiền mặt:</strong> Thanh toán khi nhận hàng (COD) hoặc trực tiếp tại văn phòng</li>
                  <li><strong>Ví điện tử:</strong> Momo, ZaloPay (áp dụng cho đơn hàng nhỏ)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">4.4. Tiến độ thanh toán</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Thanh toán lần 1 (Đặt cọc):</strong> 30-50% giá trị đơn hàng khi xác nhận đơn</li>
                  <li><strong>Thanh toán lần 2 (Trước giao hàng):</strong> 40-50% khi hàng sản xuất xong, trước khi giao</li>
                  <li><strong>Thanh toán lần 3 (Sau nghiệm thu):</strong> 0-20% sau khi khách hàng nhận và kiểm tra hàng (áp dụng cho đơn hàng lớn)</li>
                </ul>
                <p className="mt-3 text-sm italic">* Với khách hàng thân thiết hoặc đại lý lâu năm: Có thể thỏa thuận tiến độ thanh toán linh hoạt hơn.</p>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">4.5. Hóa đơn & chứng từ</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hóa đơn GTGT (hóa đơn đỏ) được xuất theo yêu cầu, thuế GTGT 10% được tính vào giá bán</li>
                  <li>Phiếu thu/biên lai được cung cấp cho mọi giao dịch</li>
                  <li>Chứng từ giao hàng, biên bản nghiệm thu được lập cho đơn hàng lớn</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-countryside-straw-50 border-l-4 border-countryside-straw-500 rounded-lg">
                <p className="text-sm font-medium text-countryside-wood-800">📌 <strong>Thông tin chuyển khoản:</strong></p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Tên tài khoản: NGUYỄN MINH QUÂN</li>
                  <li>• Số tài khoản: [Số tài khoản]</li>
                  <li>• Ngân hàng: [Tên ngân hàng] - Chi nhánh [Tên chi nhánh]</li>
                  <li>• Nội dung CK: [Tên KH] - Đơn túi bao xoài - [Số điện thoại]</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">🚚</span>
              5. Giao hàng & nhận hàng
            </h2>
            <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">5.1. Thời gian sản xuất & giao hàng</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Đơn hàng thường (50 - 5.000 túi):</strong> 2-3 ngày làm việc</li>
                  <li><strong>Đơn hàng lớn (5.001 - 20.000 túi):</strong> 4-7 ngày làm việc</li>
                  <li><strong>Đơn hàng rất lớn (&gt; 20.000 túi):</strong> 7-14 ngày làm việc</li>
                  <li><strong>Đơn hàng tùy chỉnh đặc biệt:</strong> Thỏa thuận riêng</li>
                </ul>
                <p className="mt-3 text-sm italic">* Thời gian trên được tính từ khi nhận đủ đặt cọc và phê duyệt mẫu (nếu có).</p>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">5.2. Phạm vi giao hàng</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Đồng Tháp và tỉnh lân cận (Tiền Giang, Vĩnh Long, An Giang):</strong> Giao hàng trực tiếp miễn phí cho đơn &gt; 5.000 túi</li>
                  <li><strong>Các tỉnh ĐBSCL khác:</strong> Phí vận chuyển ưu đãi, miễn phí cho đơn &gt; 10.000 túi</li>
                  <li><strong>Các tỉnh khác trên toàn quốc:</strong> Vận chuyển qua đơn vị vận tải uy tín (giao hàng nhanh, vận tải ô tô)</li>
                  <li><strong>Khách hàng tự đến lấy hàng:</strong> Được giảm thêm 3% giá trị đơn hàng</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">5.3. Phí vận chuyển</h3>
                <p>Phí vận chuyển được tính dựa trên:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Khoảng cách từ nhà xưởng đến địa điểm giao hàng</li>
                  <li>Khối lượng và thể tích hàng hóa</li>
                  <li>Yêu cầu giao hàng nhanh/hỏa tốc</li>
                </ul>
                <p className="mt-3">Phí vận chuyển được thông báo cụ thể trong báo giá. Khách hàng có thể lựa chọn đơn vị vận chuyển của mình để tiết kiệm chi phí.</p>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">5.4. Trách nhiệm khi nhận hàng</h3>
                <p className="font-medium text-countryside-wood-800">Khi nhận hàng, khách hàng cần:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Kiểm tra bên ngoài:</strong> Kiện hàng có bị móp méo, ướt, rách hay không</li>
                  <li><strong>Kiểm tra số lượng:</strong> Đếm số lượng thùng/kiện so với phiếu giao hàng</li>
                  <li><strong>Kiểm tra chất lượng sơ bộ:</strong> Mở 1-2 kiện mẫu để kiểm tra chất lượng túi bao</li>
                  <li><strong>Ký nhận:</strong> Ký vào biên bản giao nhận, ghi chú nếu phát hiện vấn đề</li>
                </ul>
                <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                  <p className="text-sm font-medium text-red-800">⚠️ <strong>Quan trọng:</strong> Nếu phát hiện hư hỏng rõ rệt khi nhận hàng, khách hàng PHẢI ghi chú cụ thể vào biên bản giao nhận và chụp ảnh/quay video làm bằng chứng. Nếu không ghi chú, khiếu nại sau này sẽ không được chấp nhận.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">🔄</span>
              6. Chính sách đổi trả & khiếu nại
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
                <h3 className="font-bold text-countryside-wood-800 mb-2">6.1. Điều kiện đổi trả</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Thông báo trong vòng <strong>3 ngày</strong> kể từ ngày nhận hàng</li>
                  <li>Cung cấp hình ảnh/video rõ ràng về lỗi sản phẩm</li>
                  <li>Sản phẩm chưa qua sử dụng, còn nguyên bao bì</li>
                  <li>Có biên bản giao nhận hoặc phiếu giao hàng</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">6.2. Các trường hợp KHÔNG được đổi trả</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Khách hàng đặt nhầm kích thước nhưng đã phê duyệt mẫu</li>
                  <li>Thay đổi ý định, không còn nhu cầu sử dụng</li>
                  <li>Hư hỏng do bảo quản không đúng cách (ẩm ướt, nhiệt độ cao)</li>
                  <li>Đã sử dụng một phần sản phẩm</li>
                  <li>Quá thời hạn 3 ngày mà không thông báo</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">6.3. Quy trình giải quyết khiếu nại</h3>
                <div className="space-y-3 mt-3">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-countryside-leaf-500 text-white flex items-center justify-center font-bold">1</div>
                    <div>
                      <p className="font-medium">Khách hàng gửi khiếu nại</p>
                      <p className="text-sm">Qua Zalo/Email kèm hình ảnh, video và mô tả chi tiết vấn đề</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-countryside-leaf-500 text-white flex items-center justify-center font-bold">2</div>
                    <div>
                      <p className="font-medium">Chúng tôi xác minh</p>
                      <p className="text-sm">Kiểm tra thông tin, ảnh/video trong vòng 24 giờ</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-countryside-leaf-500 text-white flex items-center justify-center font-bold">3</div>
                    <div>
                      <p className="font-medium">Phản hồi & đưa ra giải pháp</p>
                      <p className="text-sm">Trong vòng 3-5 ngày làm việc, chúng tôi sẽ đưa ra phương án xử lý phù hợp</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-countryside-leaf-500 text-white flex items-center justify-center font-bold">4</div>
                    <div>
                      <p className="font-medium">Thực hiện đổi trả/bồi thường</p>
                      <p className="text-sm">Tùy theo mức độ lỗi: Đổi hàng mới, hoàn tiền một phần/toàn bộ hoặc bù trừ vào đơn hàng sau</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">6.4. Chi phí đổi trả</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Lỗi do chúng tôi:</strong> Chịu toàn bộ chi phí vận chuyển đổi trả</li>
                  <li><strong>Lỗi do khách hàng:</strong> Khách hàng chịu chi phí vận chuyển (nếu chấp nhận đổi)</li>
                  <li><strong>Lỗi do vận chuyển:</strong> Đơn vị vận chuyển chịu trách nhiệm bồi thường</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">🛡️</span>
              7. Chính sách bảo hành
            </h2>
            <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
              <p>Túi bao xoài được bảo hành trong các trường hợp sau:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Lỗi chống thấm:</strong> Nếu phát hiện túi không chống thấm nước trong vòng 7 ngày kể từ ngày nhận hàng</li>
                <li><strong>Lỗi kích thước:</strong> Kích thước sai lệch &gt; 5% so với quy cách đã thỏa thuận</li>
                <li><strong>Lỗi chất liệu:</strong> Giấy bị rách, bong tróc lớp phủ silicone trong điều kiện sử dụng bình thường</li>
              </ul>
              <div className="mt-4 p-4 bg-countryside-straw-50 border-l-4 border-countryside-straw-500 rounded-lg">
                <p className="text-sm"><strong>Thời hạn bảo hành:</strong> 15 ngày kể từ ngày nhận hàng (với điều kiện chưa sử dụng hoặc sử dụng đúng cách)</p>
                <p className="text-sm mt-2"><strong>Hình thức bảo hành:</strong> Đổi sản phẩm mới cùng loại hoặc hoàn tiền theo giá trị lỗi</p>
              </div>
              <p className="mt-4 text-sm italic">* Bảo hành không áp dụng cho hư hỏng do bảo quản sai cách, ngâm nước lâu, nhiệt độ quá cao hoặc do thiên tai, hỏa hoạn.</p>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">©️</span>
              8. Quyền sở hữu trí tuệ
            </h2>
            <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
              <p>Nếu khách hàng yêu cầu in logo, thương hiệu hoặc thiết kế riêng trên túi bao xoài:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Khách hàng phải đảm bảo có quyền sở hữu hợp pháp đối với thiết kế, logo, hình ảnh cung cấp</li>
                <li>Khách hàng chịu hoàn toàn trách nhiệm pháp lý nếu thiết kế vi phạm bản quyền, nhãn hiệu của bên thứ ba</li>
                <li>Túi Bao Xoài Minh Quân không chịu trách nhiệm về các tranh chấp pháp lý liên quan đến quyền sở hữu trí tuệ</li>
                <li>Chúng tôi cam kết không sử dụng thiết kế của khách hàng cho mục đích thương mại khác mà không có sự cho phép</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">⚡</span>
              9. Trường hợp bất khả kháng (Force Majeure)
            </h2>
            <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
              <p>Trong các trường hợp bất khả kháng sau, chúng tôi có thể chậm giao hàng hoặc tạm ngưng thực hiện đơn hàng:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Thiên tai:</strong> Lũ lụt, bão, động đất, hỏa hoạn...</li>
                <li><strong>Dịch bệnh:</strong> Dịch bệnh lan rộng, chính sách giãn cách xã hội</li>
                <li><strong>Sự kiện bất ngờ:</strong> Đình công, chiến tranh, bạo loạn</li>
                <li><strong>Gián đoạn nguồn cung:</strong> Thiếu hụt nguyên vật liệu nghiêm trọng từ nhà cung cấp</li>
                <li><strong>Sự cố kỹ thuật:</strong> Hỏng hóc máy móc thiết bị nghiêm trọng</li>
              </ul>
              <p className="mt-4">Khi xảy ra trường hợp bất khả kháng:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chúng tôi sẽ thông báo ngay cho khách hàng trong vòng 24 giờ</li>
                <li>Hai bên sẽ thương lượng để điều chỉnh thời gian giao hàng hoặc hủy đơn hàng</li>
                <li>Nếu hủy đơn, chúng tôi sẽ hoàn trả toàn bộ số tiền đã đặt cọc trong vòng 7-10 ngày làm việc</li>
                <li>Không bên nào phải chịu phạt do vi phạm hợp đồng trong trường hợp này</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">🤝</span>
              10. Chính sách khách hàng thân thiết & đại lý
            </h2>
            <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">10.1. Khách hàng thân thiết</h3>
                <p>Khách hàng mua hàng định kỳ hoặc tổng giá trị đơn hàng lớn sẽ được hưởng:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Ưu tiên sản xuất và giao hàng nhanh</li>
                  <li>Chiết khấu thêm 3-5% so với giá niêm yết</li>
                  <li>Miễn phí mẫu thử cho đơn hàng mới</li>
                  <li>Tư vấn kỹ thuật miễn phí về cách sử dụng túi bao xoài hiệu quả</li>
                  <li>Thanh toán linh hoạt (có thể trả chậm cho khách hàng uy tín)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">10.2. Chương trình đại lý cấp 1</h3>
                <p>Đại lý cấp 1 được hưởng đặc quyền:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Giá ưu đãi lên đến 30% so với giá bán lẻ</li>
                  <li>Bảo vệ vùng độc quyền (1 đại lý/1 khu vực)</li>
                  <li>Hỗ trợ marketing: Banner, brochure, mẫu sản phẩm miễn phí</li>
                  <li>Đào tạo kỹ thuật và kỹ năng bán hàng</li>
                  <li>Chính sách đổi trả hàng tồn kho (theo điều kiện)</li>
                  <li>Thanh toán linh hoạt, có thể công nợ 15-30 ngày</li>
                </ul>
                <div className="mt-4 p-4 bg-countryside-leaf-50 border-2 border-countryside-leaf-300 rounded-lg">
                  <p className="font-bold text-countryside-wood-900">📞 Liên hệ ngay để đăng ký đại lý:</p>
                  <p className="mt-2">Zalo/Hotline: <strong>0913 937 841</strong></p>
                  <p>Email: <strong>lienhe@baobiminhquan.vn</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">🔒</span>
              11. Bảo mật thông tin & liên hệ
            </h2>
            <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
              <p>Chúng tôi cam kết bảo mật tuyệt đối các thông tin của khách hàng bao gồm:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Thông tin cá nhân: Họ tên, số điện thoại, email, địa chỉ</li>
                <li>Thông tin đơn hàng: Số lượng, giá cả, thời gian giao hàng</li>
                <li>Thông tin thiết kế: Logo, thương hiệu, file thiết kế (nếu có)</li>
              </ul>
              <p className="mt-4">Mọi thông tin chỉ được sử dụng cho mục đích thực hiện đơn hàng và không được chia sẻ cho bên thứ ba mà không có sự đồng ý của khách hàng.</p>
              
              <div className="mt-6 p-6 bg-gradient-to-r from-countryside-leaf-50 to-countryside-straw-50 border-2 border-countryside-leaf-300 rounded-2xl">
                <h3 className="font-bold text-countryside-wood-900 text-lg mb-3">📞 Thông tin liên hệ hỗ trợ</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Zalo/Hotline:</strong> 0913 937 841 (Hỗ trợ 24/7)</p>
                  <p><strong>Email:</strong> lienhe@baobiminhquan.vn</p>
                  <p><strong>Văn phòng & nhà xưởng:</strong> Ấp Bình An, xã Bình Thành, Lấp Vò, tỉnh Đồng Tháp</p>
                  <p><strong>Website:</strong> baobiminhnquan.com</p>
                  <p><strong>Giờ làm việc:</strong> Thứ 2 - Thứ 7: 7:00 - 18:00 | Chủ nhật: 7:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-countryside-leaf-500 to-countryside-leaf-600 text-white p-8 md:p-10 shadow-xl border-2 border-countryside-leaf-700">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-3xl">✅</span>
              Cam kết của chúng tôi
            </h2>
            <div className="space-y-3 text-countryside-straw-50">
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Sản phẩm túi bao xoài chất lượng cao, đúng quy cách cam kết</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Giao hàng đúng hạn, đóng gói cẩn thận</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Giá cả minh bạch, cạnh tranh nhất thị trường</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Hỗ trợ khách hàng nhiệt tình, chuyên nghiệp</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Giải quyết khiếu nại nhanh chóng, công bằng</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Bảo mật thông tin khách hàng tuyệt đối</span>
              </p>
            </div>
          </div>

          <div className="text-center p-6 bg-countryside-straw-50 rounded-2xl border-2 border-countryside-straw-200">
            <p className="text-sm text-countryside-earth-700">
              Chính sách này có hiệu lực từ ngày <strong>07/10/2025</strong> và có thể được cập nhật bất cứ lúc nào.
            </p>
            <p className="mt-2 text-sm text-countryside-earth-600">
              Mọi thắc mắc về chính sách mua hàng, vui lòng liên hệ với chúng tôi để được giải đáp.
            </p>
          </div>
        </section>
        </div>
      </main>
    </>
  )
}
