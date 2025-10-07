import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Chính Sách Bảo Mật - Túi Bao Xoài Minh Quân | Bảo Vệ Thông Tin Khách Hàng"
        description="Chính sách bảo mật thông tin khách hàng của Túi Bao Xoài Minh Quân. Cam kết bảo vệ dữ liệu cá nhân, thông tin đơn hàng túi bao xoài một cách an toàn và bảo mật tuyệt đối."
        keywords="chính sách bảo mật, bảo vệ thông tin khách hàng, an toàn dữ liệu, Túi Bao Xoài Minh Quân, bảo mật thông tin, GDPR, quyền riêng tư"
      />
      <main className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <nav className="text-sm text-countryside-earth-600 mb-8">
            <Link className="hover:text-countryside-leaf-600 transition" to="/">Trang chủ</Link>
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
              <p>Khi bạn tương tác với chúng tôi (qua website, Zalo, email, điện thoại hoặc trực tiếp), chúng tôi có thể thu thập các loại thông tin sau:</p>
              
              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">1.1. Thông tin cá nhân</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Họ tên:</strong> Để xưng hô và lập hóa đơn</li>
                  <li><strong>Số điện thoại:</strong> Để liên hệ tư vấn, xác nhận đơn hàng và thông báo giao hàng</li>
                  <li><strong>Email:</strong> Để gửi báo giá, xác nhận đơn hàng và thông tin hỗ trợ</li>
                  <li><strong>Địa chỉ giao hàng:</strong> Để vận chuyển sản phẩm đến đúng địa chỉ</li>
                  <li><strong>Tên công ty/hợp tác xã (nếu có):</strong> Để xuất hóa đơn GTGT</li>
                  <li><strong>Mã số thuế (nếu có):</strong> Để xuất hóa đơn đỏ</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">1.2. Thông tin đơn hàng</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Loại sản phẩm: Túi bao xoài, kích thước, số lượng</li>
                  <li>Thông tin thanh toán: Phương thức thanh toán, số tiền</li>
                  <li>Lịch sử mua hàng: Các đơn hàng trước đây</li>
                  <li>File thiết kế (nếu có): Logo, thương hiệu in trên túi bao</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">1.3. Thông tin kỹ thuật</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Địa chỉ IP, loại trình duyệt, thiết bị khi truy cập website</li>
                  <li>Thời gian truy cập, trang đã xem</li>
                  <li>Cookies và công nghệ theo dõi tương tự (nếu có)</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-countryside-straw-50 border-l-4 border-countryside-straw-500 rounded-lg">
                <p className="text-sm font-medium text-countryside-wood-800">📌 <strong>Lưu ý:</strong> Chúng tôi chỉ thu thập thông tin cần thiết để thực hiện dịch vụ và không thu thập thông tin nhạy cảm không cần thiết.</p>
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
                    <li>Hỗ trợ kỹ thuật về sản phẩm túi bao xoài</li>
                    <li>Xử lý đổi trả, bảo hành</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                    <span className="text-lg">✓</span> Marketing & truyền thông (chỉ khi có sự đồng ý)
                  </h4>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>Gửi thông tin về sản phẩm mới, chương trình khuyến mãi</li>
                    <li>Gửi tin tức, mẹo sử dụng túi bao xoài hiệu quả</li>
                    <li>Khảo sát ý kiến khách hàng</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                    <span className="text-lg">✓</span> Cải thiện dịch vụ
                  </h4>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>Phân tích hành vi khách hàng để cải thiện sản phẩm</li>
                    <li>Cải thiện trải nghiệm website và dịch vụ</li>
                    <li>Phát triển sản phẩm mới phù hợp nhu cầu</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                    <span className="text-lg">✓</span> Tuân thủ pháp luật
                  </h4>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>Lưu trữ hồ sơ, chứng từ theo quy định pháp luật</li>
                    <li>Cung cấp thông tin cho cơ quan chức năng khi có yêu cầu hợp lệ</li>
                    <li>Giải quyết tranh chấp pháp lý (nếu có)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-countryside-leaf-50 border-l-4 border-countryside-leaf-500 rounded-lg">
                <p className="text-sm font-medium text-countryside-wood-800">💡 <strong>Quan trọng:</strong> Chúng tôi KHÔNG sử dụng thông tin của bạn cho bất kỳ mục đích nào khác mà không có sự đồng ý của bạn.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">⚖️</span>
              3. Cơ sở pháp lý xử lý dữ liệu
            </h2>
            <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
              <p>Chúng tôi xử lý thông tin cá nhân của bạn dựa trên các cơ sở pháp lý sau:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sự đồng ý của bạn:</strong> Khi bạn cung cấp thông tin và đồng ý với chính sách này</li>
                <li><strong>Thực hiện hợp đồng:</strong> Để hoàn thành đơn hàng túi bao xoài bạn đã đặt</li>
                <li><strong>Lợi ích hợp pháp:</strong> Để cải thiện dịch vụ, ngăn chặn gian lận</li>
                <li><strong>Tuân thủ pháp luật:</strong> Luật Bảo vệ dữ liệu cá nhân, Luật Thương mại điện tử, các quy định về thuế và kế toán</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">🔐</span>
              4. Cách chúng tôi bảo vệ thông tin
            </h2>
            <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
              <p>Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức để bảo vệ thông tin cá nhân của bạn:</p>
              
              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">4.1. Biện pháp kỹ thuật</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Mã hóa dữ liệu:</strong> Sử dụng SSL/TLS để mã hóa dữ liệu truyền tải</li>
                  <li><strong>Tường lửa (Firewall):</strong> Bảo vệ hệ thống khỏi truy cập trái phép</li>
                  <li><strong>Sao lưu định kỳ:</strong> Sao lưu dữ liệu hàng ngày để tránh mất mát</li>
                  <li><strong>Cập nhật bảo mật:</strong> Thường xuyên cập nhật các bản vá bảo mật</li>
                  <li><strong>Kiểm tra an ninh:</strong> Kiểm tra và quét virus định kỳ</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">4.2. Biện pháp tổ chức</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Kiểm soát truy cập:</strong> Chỉ nhân viên được ủy quyền mới có quyền truy cập thông tin cần thiết</li>
                  <li><strong>Đào tạo nhân viên:</strong> Đào tạo về bảo mật thông tin và quyền riêng tư</li>
                  <li><strong>Thỏa thuận bảo mật:</strong> Nhân viên ký cam kết bảo mật thông tin khách hàng</li>
                  <li><strong>Giám sát hoạt động:</strong> Theo dõi và ghi nhận các hành động truy cập dữ liệu</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-countryside-wood-800 mb-2">4.3. Lưu trữ dữ liệu</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dữ liệu được lưu trữ trên máy chủ an toàn tại Việt Nam</li>
                  <li>Hệ thống sao lưu dự phòng để đảm bảo tính toàn vẹn dữ liệu</li>
                  <li>Phân quyền truy cập nghiêm ngặt theo cấp độ</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <p className="text-sm font-medium text-red-800">⚠️ <strong>Lưu ý:</strong> Mặc dù chúng tôi nỗ lực bảo vệ thông tin, không có hệ thống nào an toàn tuyệt đối 100%. Chúng tôi khuyến khích bạn cũng nên bảo vệ thông tin cá nhân của mình (mật khẩu, thiết bị).</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">🤝</span>
              5. Chia sẻ thông tin với bên thứ ba
            </h2>
            <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
              <p>Chúng tôi có thể chia sẻ thông tin của bạn với các bên thứ ba trong những trường hợp sau:</p>
              
              <div className="bg-white/60 rounded-2xl p-5 border-2 border-countryside-straw-200 space-y-3">
                <div>
                  <h4 className="font-bold text-countryside-wood-800">5.1. Đối tác cung cấp dịch vụ</h4>
                  <p className="text-sm mt-2">Chúng tôi có thể chia sẻ thông tin với:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                    <li><strong>Đơn vị vận chuyển:</strong> Để giao hàng (tên, số điện thoại, địa chỉ)</li>
                    <li><strong>Ngân hàng/Cổng thanh toán:</strong> Để xử lý giao dịch (tên, số tiền)</li>
                    <li><strong>Dịch vụ lưu trữ đám mây:</strong> Để lưu trữ dữ liệu an toàn</li>
                    <li><strong>Dịch vụ email/SMS:</strong> Để gửi thông báo đơn hàng</li>
                  </ul>
                  <p className="text-sm mt-2 italic">Các đối tác này được yêu cầu tuân thủ chính sách bảo mật và chỉ sử dụng thông tin cho mục đích cung cấp dịch vụ.</p>
                </div>

                <div>
                  <h4 className="font-bold text-countryside-wood-800">5.2. Yêu cầu pháp lý</h4>
                  <p className="text-sm mt-2">Chúng tôi có thể tiết lộ thông tin khi:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                    <li>Được yêu cầu bởi cơ quan nhà nước có thẩm quyền (công an, tòa án, thuế vụ...)</li>
                    <li>Để tuân thủ luật pháp, quy định hoặc quy trình pháp lý</li>
                    <li>Để bảo vệ quyền lợi, tài sản của chúng tôi hoặc người khác</li>
                    <li>Để ngăn chặn gian lận, lạm dụng hoặc hành vi bất hợp pháp</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-countryside-wood-800">5.3. Chuyển nhượng kinh doanh</h4>
                  <p className="text-sm mt-2">Trong trường hợp sáp nhập, mua lại hoặc chuyển nhượng kinh doanh, thông tin khách hàng có thể được chuyển giao cho bên mua. Chúng tôi sẽ thông báo trước cho bạn về sự thay đổi này.</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-countryside-leaf-50 border-2 border-countryside-leaf-300 rounded-lg">
                <p className="font-bold text-countryside-wood-900">🚫 Chúng tôi CAM KẾT KHÔNG:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Bán thông tin cá nhân của bạn cho bên thứ ba</li>
                  <li>Chia sẻ thông tin cho mục đích quảng cáo mà không có sự đồng ý</li>
                  <li>Cho thuê danh sách khách hàng</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">⏰</span>
              6. Thời gian lưu trữ dữ liệu
            </h2>
            <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
              <p>Chúng tôi lưu trữ thông tin cá nhân của bạn trong khoảng thời gian cần thiết để:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Thông tin đơn hàng:</strong> Lưu trữ tối thiểu 5 năm theo quy định về sổ sách kế toán</li>
                <li><strong>Thông tin liên hệ:</strong> Lưu trữ cho đến khi bạn yêu cầu xóa hoặc hết mục đích sử dụng</li>
                <li><strong>Hóa đơn, chứng từ:</strong> Lưu trữ 10 năm theo Luật Kế toán</li>
                <li><strong>Dữ liệu marketing:</strong> Lưu trữ cho đến khi bạn rút lại sự đồng ý hoặc sau 2 năm không hoạt động</li>
                <li><strong>Dữ liệu kỹ thuật (logs):</strong> Lưu trữ 6-12 tháng</li>
              </ul>
              <p className="mt-4 text-sm italic">Sau thời gian lưu trữ, chúng tôi sẽ xóa hoặc ẩn danh hóa thông tin một cách an toàn.</p>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">✋</span>
              7. Quyền của bạn
            </h2>
            <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
              <p>Bạn có các quyền sau đối với thông tin cá nhân của mình:</p>
              
              <div className="space-y-4">
                <div className="bg-white/60 rounded-xl p-4 border-2 border-countryside-straw-200">
                  <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                    <span>👁️</span> Quyền truy cập
                  </h4>
                  <p className="text-sm mt-2">Yêu cầu nhận bản sao thông tin cá nhân mà chúng tôi lưu trữ về bạn.</p>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border-2 border-countryside-straw-200">
                  <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                    <span>✏️</span> Quyền chỉnh sửa
                  </h4>
                  <p className="text-sm mt-2">Yêu cầu sửa chữa thông tin không chính xác hoặc không đầy đủ.</p>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border-2 border-countryside-straw-200">
                  <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                    <span>🗑️</span> Quyền xóa
                  </h4>
                  <p className="text-sm mt-2">Yêu cầu xóa thông tin cá nhân trong các trường hợp:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                    <li>Không còn cần thiết cho mục đích thu thập</li>
                    <li>Bạn rút lại sự đồng ý và không có cơ sở pháp lý khác</li>
                    <li>Thông tin được xử lý trái pháp luật</li>
                  </ul>
                  <p className="text-sm mt-2 italic">* Lưu ý: Một số thông tin có thể không thể xóa do yêu cầu pháp lý (hóa đơn, chứng từ kế toán).</p>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border-2 border-countryside-straw-200">
                  <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                    <span>⏸️</span> Quyền hạn chế xử lý
                  </h4>
                  <p className="text-sm mt-2">Yêu cầu tạm ngừng xử lý thông tin trong một số trường hợp (tranh chấp, kiểm tra tính chính xác).</p>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border-2 border-countryside-straw-200">
                  <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                    <span>🚫</span> Quyền phản đối
                  </h4>
                  <p className="text-sm mt-2">Phản đối việc xử lý thông tin cho mục đích marketing hoặc lợi ích hợp pháp.</p>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border-2 border-countryside-straw-200">
                  <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                    <span>📦</span> Quyền di chuyển dữ liệu
                  </h4>
                  <p className="text-sm mt-2">Nhận thông tin cá nhân của bạn dưới định dạng có cấu trúc, thông dụng để chuyển cho nhà cung cấp khác.</p>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border-2 border-countryside-straw-200">
                  <h4 className="font-bold text-countryside-wood-800 flex items-center gap-2">
                    <span>📧</span> Quyền rút lại đồng ý marketing
                  </h4>
                  <p className="text-sm mt-2">Hủy đăng ký nhận email/SMS marketing bất cứ lúc nào bằng cách:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                    <li>Nhấp vào link "Hủy đăng ký" trong email</li>
                    <li>Trả lời "STOP" vào tin nhắn SMS</li>
                    <li>Liên hệ trực tiếp với chúng tôi</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-5 bg-countryside-leaf-50 border-2 border-countryside-leaf-300 rounded-2xl">
                <h4 className="font-bold text-countryside-wood-900 mb-3">📞 Cách thực hiện quyền của bạn:</h4>
                <p className="text-sm">Để thực hiện bất kỳ quyền nào ở trên, vui lòng liên hệ với chúng tôi qua:</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><strong>Email:</strong> lienhe@baobiminhquan.vn (Tiêu đề: [Yêu cầu dữ liệu cá nhân])</li>
                  <li><strong>Zalo/Hotline:</strong> 0913 937 841</li>
                  <li><strong>Địa chỉ:</strong> Ấp Bình An, xã Bình Thành, Lấp Vò, tỉnh Đồng Tháp</li>
                </ul>
                <p className="text-sm mt-3 italic">Chúng tôi sẽ xử lý yêu cầu của bạn trong vòng 30 ngày kể từ ngày nhận được yêu cầu hợp lệ.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">🍪</span>
              8. Cookies và công nghệ theo dõi
            </h2>
            <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
              <p>Website của chúng tôi có thể sử dụng cookies và công nghệ tương tự để:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies cần thiết:</strong> Để website hoạt động đúng cách (đăng nhập, giỏ hàng)</li>
                <li><strong>Cookies phân tích:</strong> Để hiểu cách người dùng sử dụng website (Google Analytics)</li>
                <li><strong>Cookies marketing:</strong> Để hiển thị quảng cáo phù hợp (nếu có, cần sự đồng ý)</li>
              </ul>
              <p className="mt-4 text-sm">Bạn có thể quản lý cookies qua cài đặt trình duyệt. Lưu ý rằng việc tắt cookies có thể ảnh hưởng đến trải nghiệm sử dụng website.</p>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">👶</span>
              9. Thông tin về trẻ em
            </h2>
            <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
              <p>Dịch vụ của chúng tôi không nhắm đến trẻ em dưới 16 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em.</p>
              <p>Nếu bạn là phụ huynh và phát hiện con em bạn đã cung cấp thông tin cá nhân cho chúng tôi mà không có sự đồng ý của bạn, vui lòng liên hệ ngay. Chúng tôi sẽ xóa thông tin đó trong thời gian sớm nhất.</p>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">🌐</span>
              10. Chuyển dữ liệu ra nước ngoài
            </h2>
            <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
              <p>Hiện tại, chúng tôi lưu trữ toàn bộ dữ liệu tại Việt Nam. Tuy nhiên, một số dịch vụ của đối tác (email, lưu trữ đám mây) có thể xử lý dữ liệu ở nước ngoài.</p>
              <p>Trong trường hợp đó, chúng tôi đảm bảo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chỉ chuyển dữ liệu đến các quốc gia/tổ chức có mức độ bảo vệ dữ liệu tương đương</li>
                <li>Ký kết thỏa thuận bảo mật với đối tác</li>
                <li>Tuân thủ các quy định pháp luật về chuyển dữ liệu ra nước ngoài</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">🔔</span>
              11. Thay đổi chính sách bảo mật
            </h2>
            <div className="mt-4 space-y-3 text-countryside-earth-700 leading-relaxed">
              <p>Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian để phản ánh:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Thay đổi trong hoạt động kinh doanh</li>
                <li>Thay đổi pháp luật về bảo vệ dữ liệu</li>
                <li>Cải thiện thực hành bảo mật</li>
              </ul>
              <p className="mt-4">Khi có thay đổi quan trọng:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chúng tôi sẽ đăng phiên bản mới trên website</li>
                <li>Cập nhật ngày "Cập nhật lần cuối" ở đầu trang</li>
                <li>Gửi thông báo qua email cho những thay đổi quan trọng (nếu cần)</li>
              </ul>
              <p className="mt-4 text-sm italic">Chúng tôi khuyến khích bạn xem lại chính sách này định kỳ để cập nhật thông tin mới nhất.</p>
            </div>
          </div>

          <div className="rounded-3xl kraft-paper border-2 border-countryside-wood-200 p-8 md:p-10 shadow-handdrawn">
            <h2 className="text-2xl font-bold text-countryside-wood-900 font-display flex items-center gap-3">
              <span className="text-3xl">📞</span>
              12. Liên hệ với chúng tôi
            </h2>
            <div className="mt-4 space-y-4 text-countryside-earth-700 leading-relaxed">
              <p>Nếu bạn có bất kỳ câu hỏi, thắc mắc hoặc khiếu nại nào liên quan đến chính sách bảo mật này hoặc cách chúng tôi xử lý thông tin cá nhân của bạn, vui lòng liên hệ:</p>
              
              <div className="p-6 bg-gradient-to-r from-countryside-leaf-50 to-countryside-straw-50 border-2 border-countryside-leaf-300 rounded-2xl">
                <h3 className="font-bold text-countryside-wood-900 text-lg mb-4">🏢 Thông tin liên hệ</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="font-bold min-w-[140px]">Tên công ty:</span>
                    <span>Túi Bao Xoài Minh Quân</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold min-w-[140px]">Người chịu trách nhiệm:</span>
                    <span>Ông Nguyễn Minh Quân</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold min-w-[140px]">Địa chỉ:</span>
                    <span>Ấp Bình An, xã Bình Thành, Lấp Vò, tỉnh Đồng Tháp</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold min-w-[140px]">Zalo/Hotline:</span>
                    <span className="text-countryside-leaf-700 font-bold">0913 937 841</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold min-w-[140px]">Email:</span>
                    <span className="text-countryside-leaf-700 font-bold">lienhe@baobiminhquan.vn</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold min-w-[140px]">Website:</span>
                    <span>baobiminhnquan.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold min-w-[140px]">Giờ hỗ trợ:</span>
                    <span>Thứ 2 - Thứ 7: 7:00 - 18:00 | Chủ nhật: 7:00 - 12:00</span>
                  </div>
                </div>
              </div>

              <p className="text-sm italic">Chúng tôi cam kết phản hồi mọi thắc mắc và yêu cầu của bạn trong thời gian sớm nhất (thường trong vòng 24-48 giờ làm việc).</p>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-countryside-leaf-500 to-countryside-leaf-600 text-white p-8 md:p-10 shadow-xl border-2 border-countryside-leaf-700">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-3xl">🤝</span>
              Cam kết bảo mật của chúng tôi
            </h2>
            <div className="space-y-3 text-countryside-straw-50">
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Bảo mật thông tin cá nhân của bạn với các biện pháp kỹ thuật và tổ chức nghiêm ngặt</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Chỉ sử dụng thông tin cho mục đích đã thông báo và được đồng ý</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Không bán, cho thuê thông tin cá nhân cho bên thứ ba</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Tôn trọng và bảo vệ quyền riêng tư của bạn</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Tuân thủ đầy đủ các quy định pháp luật về bảo vệ dữ liệu cá nhân</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Minh bạch về cách chúng tôi thu thập và sử dụng dữ liệu</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <span>Hỗ trợ bạn thực hiện mọi quyền về dữ liệu cá nhân</span>
              </p>
            </div>
          </div>

          <div className="text-center p-6 bg-countryside-straw-50 rounded-2xl border-2 border-countryside-straw-200">
            <p className="text-sm text-countryside-earth-700">
              Chính sách bảo mật này có hiệu lực từ ngày <strong>07/10/2025</strong>
            </p>
            <p className="mt-2 text-sm text-countryside-earth-600">
              Bằng cách sử dụng dịch vụ của chúng tôi, bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý với chính sách bảo mật này.
            </p>
            <p className="mt-4 text-sm font-medium text-countryside-wood-800">
              Cảm ơn bạn đã tin tưởng <strong>Túi Bao Xoài Minh Quân</strong>! 🥭
            </p>
          </div>
        </section>
        </div>
      </main>
    </>
  )
}
