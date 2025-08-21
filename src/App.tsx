import { FiBox, FiPhoneCall, FiShield, FiStar } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Section = ({ id, className = '', children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`container py-20 ${className}`}>
    {children}
  </section>
)

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="rounded-2xl bg-white/70 backdrop-blur shadow-lg p-6 border border-gray-100">
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-xl bg-brand-50 text-brand-700"><Icon size={24} /></div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  </motion.div>
)

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="container flex items-center justify-between py-4">
          <a href="#home" className="font-bold text-xl tracking-tight">
            <span className="gradient-text">Bao Bì Minh Quân</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-brand-600" href="#san-pham">Sản phẩm</a>
            <a className="hover:text-brand-600" href="#ve-chung-toi">Về chúng tôi</a>
            <a className="hover:text-brand-600" href="#lien-he">Liên hệ</a>
          </nav>
          <a href="#lien-he" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition">
            <FiPhoneCall /> Báo giá nhanh
          </a>
        </div>
      </header>

      {/* Hero */}
      <Section id="home" className="pt-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Giải pháp bao bì hiện đại cho thương hiệu của bạn
            </motion.h1>
            <p className="mt-5 text-gray-600">
              Bao Bì Minh Quân chuyên thiết kế, in ấn và sản xuất bao bì: hộp giấy, túi giấy, tem nhãn, bìa carton... với chất lượng cao, giá cạnh tranh, giao hàng đúng hẹn.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#san-pham" className="px-5 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition">Khám phá sản phẩm</a>
              <a href="#lien-he" className="px-5 py-3 rounded-xl bg-white border border-gray-200 hover:border-brand-300 shadow-sm">Nhận tư vấn miễn phí</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><FiShield className="text-green-600" /> Bảo hành chất lượng</div>
              <div className="flex items-center gap-2"><FiStar className="text-yellow-500" /> Hơn 500+ khách hàng</div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-brand-600 via-blue-400 to-emerald-400 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-3 gap-4 p-6 opacity-90">
                {[...Array(9)].map((_, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.04 }} className="rounded-xl bg-white/30 backdrop-blur border border-white/40"></motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <Section id="ve-chung-toi">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Tại sao chọn Minh Quân?</h2>
          <p className="mt-3 text-gray-600">Chúng tôi kết hợp công nghệ in hiện đại với đội ngũ giàu kinh nghiệm để mang đến sản phẩm vượt kỳ vọng.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature icon={FiBox} title="Sản phẩm đa dạng" desc="Hộp giấy, túi giấy, tem nhãn, thùng carton, catalogue..." />
          <Feature icon={FiShield} title="Chất lượng đảm bảo" desc="Vật liệu cao cấp, kiểm soát chất lượng nghiêm ngặt." />
          <Feature icon={FiStar} title="Thiết kế ấn tượng" desc="Đội ngũ thiết kế sáng tạo, tối ưu nhận diện thương hiệu." />
          <Feature icon={FiPhoneCall} title="Dịch vụ nhanh chóng" desc="Tư vấn 24/7, báo giá nhanh, giao hàng đúng hẹn." />
        </div>
      </Section>

      {/* Products */}
      <Section id="san-pham" className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Danh mục sản phẩm</h2>
          <p className="mt-3 text-gray-600">Giải pháp bao bì phù hợp cho mọi ngành hàng.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Hộp giấy cao cấp', img: 'https://images.unsplash.com/photo-1513863325-7b69e54d5088?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Túi giấy thời trang', img: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Thùng carton', img: 'https://images.unsplash.com/photo-1585386959984-a4155223168f?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Tem nhãn', img: 'https://images.unsplash.com/photo-1594125674946-6c1f8894fb00?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Catalogue/ brochure', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Bao bì thực phẩm', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1200&auto=format&fit=crop' },
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                <span className="text-brand-600 text-sm">Chi tiết →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section id="lien-he" className="py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Liên hệ Minh Quân</h2>
            <p className="mt-3 text-gray-600">Nhận tư vấn giải pháp và báo giá trong 15 phút.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>Hotline: 09xx xxx xxx</li>
              <li>Email: lienhe@minhquan.vn</li>
              <li>Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</li>
            </ul>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Họ tên</label>
                <input className="mt-1 w-full rounded-xl border-gray-300 focus:border-brand-500 focus:ring-brand-500" placeholder="Nguyễn Văn A" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Số điện thoại</label>
                <input className="mt-1 w-full rounded-xl border-gray-300 focus:border-brand-500 focus:ring-brand-500" placeholder="09xx xxx xxx" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-600">Nhu cầu</label>
                <textarea className="mt-1 w-full rounded-xl border-gray-300 focus:border-brand-500 focus:ring-brand-500" rows={4} placeholder="Mô tả sản phẩm cần in..." />
              </div>
            </div>
            <button className="mt-4 w-full px-5 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition">Gửi yêu cầu</button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-100 py-8 text-sm text-gray-600">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Bao Bì Minh Quân. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#ve-chung-toi" className="hover:text-brand-600">Về chúng tôi</a>
            <a href="#san-pham" className="hover:text-brand-600">Sản phẩm</a>
            <a href="#lien-he" className="hover:text-brand-600">Liên hệ</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
