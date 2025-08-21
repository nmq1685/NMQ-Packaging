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
    <>
      {/* Hero */}
      <Section id="home" className="pt-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Bao bì chuyên dụng cho xoài & mít – bền, thoáng, chuẩn xuất khẩu
            </motion.h1>
            <p className="mt-5 text-gray-600">
              Tập trung vào bao bì trái cây: xoài và mít. Cung cấp thùng carton lỗ thoáng, khay/xốp chống dập, túi lưới/OPP đục lỗ, màng co, tem QR truy xuất – tối ưu bảo quản và vận chuyển.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#san-pham" className="px-5 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition">Khám phá sản phẩm</a>
              <a href="#lien-he" className="px-5 py-3 rounded-xl bg-white border border-gray-200 hover:border-brand-300 shadow-sm">Nhận tư vấn miễn phí</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><FiShield className="text-green-600" /> Chuẩn xuất khẩu, chống dập nát</div>
              <div className="flex items-center gap-2"><FiStar className="text-yellow-500" /> Tối ưu chi phí mùa vụ</div>
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
          <h2 className="text-3xl md:text-4xl font-bold">Tại sao chọn Minh Quân cho bao bì xoài & mít?</h2>
          <p className="mt-3 text-gray-600">Vật liệu đạt chuẩn, thiết kế tối ưu thông gió và chịu tải, phù hợp đóng gói – vận chuyển xa và xuất khẩu.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature icon={FiBox} title="Thiết kế tối ưu trái cây" desc="Thùng lỗ thoáng, khay/đệm xốp chống dập cho xoài & mít." />
          <Feature icon={FiShield} title="Chuẩn xuất khẩu" desc="Chịu tải tốt, chống ẩm, phù hợp tiêu chuẩn vận chuyển." />
          <Feature icon={FiStar} title="Truy xuất nguồn gốc" desc="Tem nhãn/tem QR in sắc nét, bám dính tốt." />
          <Feature icon={FiPhoneCall} title="Giao nhanh mùa vụ" desc="Tư vấn – báo giá trong 15 phút, giao đúng hẹn." />
        </div>
      </Section>

  {/* Products */}
      <Section id="san-pham" className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Danh mục bao bì xoài & mít</h2>
          <p className="mt-3 text-gray-600">Tập trung vào giải pháp đóng gói chuyên dụng cho trái cây tươi.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Thùng carton xoài xuất khẩu', img: 'https://images.unsplash.com/photo-1626497764746-54450aa5532b?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Thùng carton mít xuất khẩu', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Khay/xốp chống dập trái cây', img: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Túi lưới, túi OPP đục lỗ', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Tem nhãn, tem QR truy xuất', img: 'https://images.unsplash.com/photo-1594125674946-6c1f8894fb00?q=80&w=1200&auto=format&fit=crop' },
            { name: 'Màng co, dây đai đóng gói', img: 'https://images.unsplash.com/photo-1627384113602-90d9b1ca5ce4?q=80&w=1200&auto=format&fit=crop' },
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
            <h2 className="text-3xl md:text-4xl font-bold">Liên hệ qua Zalo</h2>
            <p className="mt-3 text-gray-600">Nhấn nút bên cạnh để chat Zalo trực tiếp, hoặc quét QR để kết nối nhanh.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>Zalo: 0913 937 841</li>
              <li>Email: lienhe@baobiminhquan.vn</li>
              <li>Địa chỉ: Bao Bì Minh Quân, ấp Bình An, xã Bình Thành, huyện Lấp Vò, tỉnh Đồng Tháp</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-4">
            <a href="https://zalo.me/0913937841" target="_blank" rel="noopener noreferrer" className="w-full text-center px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">Chat Zalo ngay</a>
            <div className="text-sm text-gray-600">Hoặc quét QR</div>
            <img src="/images/zalo-qr.png" alt="QR Zalo Bao Bì Minh Quân" className="w-40 h-40 rounded-xl border border-gray-200 object-contain bg-white" />
          </div>
        </div>
      </Section>
  </>
  )
}
