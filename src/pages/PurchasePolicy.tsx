import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function PurchasePolicy() {
  return (
    <>
      <SEO 
        title="Chính Sách Mua Hàng - Bao Bì Minh Quân | Đặt Hàng, Thanh Toán, Vận Chuyển"
        description="Chính sách mua hàng bao bì trái cây tại Bao Bì Minh Quân: điều kiện đặt hàng thùng carton xuất khẩu, xốp, túi OPP, thanh toán, giao nhận và chính sách đổi trả sản phẩm."
        keywords="chính sách mua hàng, đặt hàng bao bì, thanh toán, vận chuyển, đổi trả, bảo hành, Bao Bì Minh Quân, mua bao bì trái cây"
      />
      <main className="min-h-screen bg-white">
        <div className="container py-12">
          <nav className="text-sm text-gray-600 mb-6">
            <Link className="hover:text-brand-600" to="/">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Chính sách mua hàng</span>
          </nav>

        <h1 className="text-3xl md:text-4xl font-bold">Chính sách mua hàng</h1>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Chính sách này quy định các điều kiện đặt hàng, thanh toán, giao nhận, đổi trả và bảo hành cho sản phẩm bao bì xoài &
          mít do Bao Bì Minh Quân cung cấp. Vui lòng đọc kỹ trước khi đặt hàng.
        </p>

        <section className="mt-8 space-y-6 max-w-3xl prose prose-slate">
          <div>
            <h2>1. Phạm vi áp dụng</h2>
            <p>Áp dụng cho mọi giao dịch mua bán giữa khách hàng và Bao Bì Minh Quân tại website hoặc qua kênh thương mại trực tiếp.</p>
          </div>

          <div>
            <h2>2. Đặt hàng</h2>
            <ol>
              <li>
                Khách hàng cung cấp thông tin: yêu cầu sản phẩm, kích thước, chất liệu, số lượng, file thiết kế (nếu có). Mọi
                thay đổi về thông số sau khi chốt có thể ảnh hưởng tới giá và thời gian giao.
              </li>
              <li>
                Bao Bì Minh Quân sẽ gửi báo giá chi tiết (bao gồm vật liệu, in ấn, đóng gói, phí vận chuyển nếu có) và thời gian
                hoàn thành dự kiến.
              </li>
              <li>
                Đơn hàng được xác nhận khi khách hàng đồng ý báo giá và thực hiện đặt cọc theo tỷ lệ thỏa thuận (thường 30–50%).
              </li>
            </ol>
          </div>

          <div>
            <h2>3. Mẫu thử & phê duyệt</h2>
            <p>
              Với các đơn hàng in ấn số lượng lớn hoặc yêu cầu đặc thù xuất khẩu, khách hàng có thể yêu cầu sản xuất mẫu (PACT/POC)
              để kiểm tra màu sắc, chất liệu. Thời gian và chi phí mẫu được thỏa thuận riêng. Sản xuất hàng loạt sẽ bắt đầu sau khi mẫu
              và file in được duyệt bằng văn bản hoặc email.
            </p>
          </div>

          <div>
            <h2>4. Giá cả & thanh toán</h2>
            <ul>
              <li>Giá báo là giá tạm tính theo thông tin khách hàng cung cấp; giá cuối cùng có thể điều chỉnh khi kiểm tra file, số lượng thực tế hoặc chi phí nguyên vật liệu.</li>
              <li>Hóa đơn/phiếu thu được cung cấp theo yêu cầu (VAT nếu cần).
              </li>
              <li>Phương thức thanh toán: chuyển khoản ngân hàng, tiền mặt hoặc theo thỏa thuận hợp đồng. Tiến độ thanh toán thường: đặt cọc → trước giao → sau nghiệm thu.
              </li>
            </ul>
          </div>

          <div>
            <h2>5. Giao hàng & nhận hàng</h2>
            <ul>
              <li>Thời gian sản xuất: được ghi trong báo giá; thường dao động 3–14 ngày tùy số lượng và yêu cầu kỹ thuật.</li>
              <li>Phí vận chuyển được tính riêng theo khu vực và khối lượng. Khách hàng có thể yêu cầu giao hàng bằng đơn vị vận chuyển mà mình lựa chọn.</li>
              <li>Khi nhận hàng, khách hàng có trách nhiệm kiểm tra sơ bộ về số lượng, tình trạng bề mặt và ghi nhận nếu phát hiện hư hỏng rõ rệt trên
                vận chuyển (ghi trên biên bản giao nhận) để được xử lý kịp thời.</li>
            </ul>
          </div>

          <div>
            <h2>6. Đổi trả & khiếu nại</h2>
            <p>
              Chỉ chấp nhận đổi trả khi do lỗi sản xuất, sai quy cách đã thỏa thuận (không áp dụng cho thay đổi do khách hàng yêu cầu hoặc do đặc tính vật liệu tự nhiên).
            </p>
            <ol>
              <li>Khách hàng phải thông báo trong vòng 3 ngày kể từ ngày nhận hàng kèm hình ảnh, video và mô tả chi tiết.</li>
              <li>Bao Bì Minh Quân sẽ kiểm tra và phản hồi trong vòng 3–5 ngày làm việc. Nếu xác định lỗi do phía chúng tôi, sẽ đổi/ sửa hàng hoặc hoàn tiền theo thỏa thuận.</li>
            </ol>
          </div>

          <div>
            <h2>7. Bảo hành</h2>
            <p>Bảo hành chỉ áp dụng cho lỗi kỹ thuật do sản xuất (ví dụ: in sai, cắt sai kích thước). Thời hạn bảo hành và điều kiện cụ thể sẽ được ghi trong báo giá/hợp đồng.</p>
          </div>

          <div>
            <h2>8. Quyền sở hữu trí tuệ</h2>
            <p>
              Khách hàng chịu trách nhiệm về quyền sở hữu trí tuệ đối với thiết kế/file cung cấp. Bao Bì Minh Quân không chịu trách nhiệm
              pháp lý nếu sử dụng hình ảnh/nhãn hiệu vi phạm bản quyền.
            </p>
          </div>

          <div>
            <h2>9. Force Majeure</h2>
            <p>
              Trong trường hợp bất khả kháng (thiên tai, dịch bệnh, đình công, gián đoạn cung ứng...) dẫn đến chậm giao hoặc không thể thực hiện,
              hai bên sẽ thương lượng điều chỉnh thời gian giao/hoàn thành.
            </p>
          </div>

          <div>
            <h2>10. Bảo mật & liên hệ</h2>
            <p>Mọi thông tin đơn hàng được giữ bí mật. Liên hệ hỗ trợ: Zalo/Hotline: 0913 937 841 – Email: lienhe@baobiminhquan.vn</p>
          </div>
        </section>
      </div>
    </main>
    </>
  )
}
