import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container py-12">
        <nav className="text-sm text-gray-600 mb-6">
          <Link className="hover:text-brand-600" to="/">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Chính sách bảo mật</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold">Chính sách bảo mật</h1>
        <p className="mt-3 text-gray-600 max-w-3xl">Chính sách này mô tả cách Bao Bì Minh Quân thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân của khách hàng.</p>

        <section className="mt-8 space-y-6 max-w-3xl prose prose-slate">
          <div>
            <h2>1. Thông tin thu thập</h2>
            <p>Chúng tôi thu thập các loại thông tin sau khi khách hàng tương tác với chúng tôi: họ tên, số điện thoại, email, địa chỉ giao hàng, thông tin đơn hàng, file thiết kế và các thông tin bổ sung mà khách hàng cung cấp.</p>
          </div>

          <div>
            <h2>2. Mục đích sử dụng</h2>
            <ul>
              <li>Liên hệ tư vấn, gửi báo giá và thực hiện đơn hàng.</li>
              <li>Quản lý đơn hàng, giao nhận và hỗ trợ sau bán hàng.</li>
              <li>Gửi thông tin khuyến mãi chỉ khi khách hàng đồng ý nhận thông tin tiếp thị.</li>
            </ul>
          </div>

          <div>
            <h2>3. Cơ sở pháp lý</h2>
            <p>Chúng tôi xử lý thông tin cá nhân dựa trên sự đồng ý của khách hàng, để thực hiện hợp đồng mua bán, hoặc khi có nghĩa vụ pháp lý liên quan.</p>
          </div>

          <div>
            <h2>4. Lưu trữ và bảo mật</h2>
            <ul>
              <li>Thông tin được lưu trữ trên hệ thống an toàn, có sao lưu định kỳ.</li>
              <li>Chỉ nhân sự được ủy quyền mới có quyền truy cập thông tin cần thiết để xử lý đơn hàng.</li>
              <li>Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức hợp lý để bảo vệ dữ liệu chống truy cập trái phép, mất mát hoặc rò rỉ.</li>
            </ul>
          </div>

          <div>
            <h2>5. Chia sẻ thông tin</h2>
            <p>Chúng tôi có thể chia sẻ thông tin với các bên thứ ba như đơn vị vận chuyển, cung cấp dịch vụ thanh toán khi cần để thực hiện đơn hàng. Chúng tôi không bán thông tin cá nhân cho bên thứ ba để phục vụ mục đích quảng cáo.</p>
          </div>

          <div>
            <h2>6. Quyền của bạn</h2>
            <ul>
              <li>Truy cập: Yêu cầu nhận bản sao thông tin cá nhân mà chúng tôi lưu trữ.</li>
              <li>Sửa đổi: Yêu cầu cập nhật thông tin không chính xác hoặc không đầy đủ.</li>
              <li>Xóa: Yêu cầu xóa thông tin trong các trường hợp pháp luật cho phép.</li>
              <li>Rút đồng ý: Rút lại đồng ý tiếp thị bất cứ lúc nào.</li>
            </ul>
            <p>Mọi yêu cầu thực hiện quyền hãy gửi về email: lienhe@baobiminhquan.vn hoặc liên hệ Zalo/Hotline: 0913 937 841.</p>
          </div>

          <div>
            <h2>7. Lưu ý cho phụ huynh</h2>
            <p>Nếu bạn là phụ huynh và phát hiện con em bạn cung cấp dữ liệu cá nhân, vui lòng liên hệ để chúng tôi xử lý theo yêu cầu.</p>
          </div>

          <div>
            <h2>8. Thay đổi chính sách</h2>
            <p>Chúng tôi có thể cập nhật chính sách này theo thời gian. Mọi cập nhật sẽ được đăng trên trang chính sách bảo mật và có hiệu lực khi được công bố.</p>
          </div>

          <div>
            <h2>9. Liên hệ</h2>
            <p>Mọi thắc mắc liên quan đến chính sách bảo mật, vui lòng liên hệ: Zalo/Hotline: 0913 937 841 – Email: lienhe@baobiminhquan.vn</p>
          </div>
        </section>
      </div>
    </main>
  )
}
