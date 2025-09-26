import { FiBox, FiPhoneCall, FiShield, FiStar } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Section = ({ id, className = '', children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`container py-20 ${className}`}>
    {children}
  </section>
)

const SectionHeader = ({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) => (
  <div className="text-center max-w-3xl mx-auto">
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs uppercase tracking-[0.2em]">
      {eyebrow}
    </span>
    <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#3b2a17]">{title}</h2>
    <p className="mt-3 text-base text-[#6c5942]">{desc}</p>
  </div>
)

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    viewport={{ once: true }}
    className="rounded-2xl border border-[#ead5b3] bg-white/80 p-5 shadow-[0_18px_32px_-28px_rgba(85,63,29,0.4)] flex gap-4"
  >
    <div className="h-12 w-12 rounded-xl bg-[#f7e6c5] text-[#8c6123] flex items-center justify-center">
      <Icon size={22} />
    </div>
    <div>
      <h3 className="font-semibold text-base text-[#3b2a17]">{title}</h3>
      <p className="text-[#6c5942] text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
)

export default function App() {
  const [baobiImages, setBaobiImages] = useState<string[]>([])

  useEffect(() => {
    const availableImages = Array.from({ length: 8 }, (_, i) => `/images/baobi/${i + 1}.png`)

    const generateImages = (images: string[]) => {
      if (images.length === 0) return Array(9).fill('/images/logo.png')
      if (images.length >= 9) {
        return images.slice(0, 9)
      }

      const result = []
      for (let i = 0; i < 9; i++) {
        result.push(images[i % images.length])
      }
      return result
    }

    setBaobiImages(generateImages(availableImages))
  }, [])

  const heroHighlights = [
    { label: 'Bao bì nông sản', value: '150+ mẫu khuôn carton' },
    { label: 'Tiêu chuẩn', value: 'FSC, ISO 9001:2015' },
    { label: 'Thời gian giao', value: '3 - 5 ngày mùa vụ' },
  ]

  const materialSolution = {
    title: 'Hệ carton kraft 5 lớp chuẩn xuất khẩu',
    desc: 'Kết cấu 5 lớp (kraft trắng + kraft vàng + lõi sóng chịu lực) cùng phủ chống ẩm giúp kiện hàng bền chắc, giữ dáng đẹp từ kho đến container lạnh.',
    specs: ['Tải trọng nén dọc tới 22kg', 'Chống ẩm kép: tráng PE + phủ nano', 'In offset 7 màu, tem QR chống nhòe', 'Lỗ thoáng tùy chỉnh theo từng giống trái'],
  }

  const processSteps = [
    { title: 'Khảo sát sản phẩm', desc: 'Đo kích thước, tải trọng, điều kiện bảo quản để chọn cấu trúc bao bì phù hợp.' },
    { title: 'Thiết kế - phê duyệt mẫu', desc: 'Gửi mẫu in 2D/3D, tinh chỉnh nhận diện cho tới khi bạn hài lòng.' },
    { title: 'Sản xuất & kiểm tra', desc: 'Gia công, QC từng lô hàng, đóng kiện sẵn sàng vận chuyển.' },
    { title: 'Giao hàng & hỗ trợ', desc: 'Điều phối giao trong 3-5 ngày, đồng hành mùa vụ để điều chỉnh linh hoạt.' },
  ]

  const productCollections = [
    {
      name: 'Thùng carton xuất khẩu',
      tag: 'Carton 5 lớp',
      desc: 'Thùng lỗ thoáng chuẩn pallet, chịu tải cao và chống ẩm, giữ trái cây ổn định trong vận chuyển xa.',
      bullets: ['Kích thước theo pallet chuẩn 40ft', 'Tùy biến vị trí lỗ thoáng khí', 'Phủ chống ẩm kép, chịu tải tới 22kg'],
    },
    {
      name: 'Khay xốp & túi lưới',
      tag: 'Bao bì mềm',
      desc: 'Bộ khay EPS, túi lưới hoặc OPP đục lỗ giữ trái cây cố định, đồng bộ nhận diện màu sắc.',
      bullets: ['Khay chống dập nhiều kích cỡ', 'Túi lưới chịu lực, thông thoáng', 'In logo, mã QR trực tiếp trên túi'],
    },
    {
      name: 'Tem nhãn & phụ kiện',
      tag: 'Hoàn thiện thương hiệu',
      desc: 'Tem truy xuất, màng co, dây đai đồng bộ giúp kiện hàng gọn đẹp và dễ kiểm soát chất lượng.',
      bullets: ['Tem QR in chống nhòe', 'Màng co in logo, mã vạch', 'Dây đai, kẹp chì niêm phong'],
    },
  ]

  const partners = ['Co.opmart', 'Bách Hóa Xanh', 'Vissan', 'Vinapharm', 'GreenFarm', 'Nông trại Đồng Tháp']

  return (
    <>
      <Section id="home" className="pt-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#f7e6c5] text-[#8c6123] text-sm font-medium"
            >
              <span className="h-2 w-2 rounded-full bg-[#c07b2c]" />
              Bao bì nông sản Minh Quân
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#2a1a0c]"
            >
              Hệ sinh thái bao bì chuẩn xuất khẩu cho nông sản Việt
            </motion.h1>

            <p className="text-lg text-[#6c5942] max-w-xl">
              Chúng tôi thiết kế và sản xuất trọn bộ giải pháp đóng gói: thùng carton thoáng khí, khay chống dập, tem truy xuất, túi lưới và phụ kiện đồng bộ. Giữ trái cây luôn tươi đẹp trong suốt hành trình.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#san-pham"
                className="px-6 py-3 rounded-2xl bg-[#c07b2c] text-white shadow-[0_12px_30px_-12px_rgba(192,123,44,0.7)] hover:bg-[#a7661f] transition"
              >
                Khám phá bộ sưu tập
              </a>
              <a
                href="#lien-he"
                className="px-6 py-3 rounded-2xl border border-[#d9c19d] text-[#8c6123] hover:bg-white transition"
              >
                Nhận tư vấn 1-1
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {heroHighlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-[#ecd7b3] bg-white/80 p-4 shadow-sm"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-[#b28957]">{item.label}</div>
                  <div className="mt-2 text-base font-semibold text-[#3b2a17]">{item.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-[#6c5942]">
              <div className="inline-flex items-center gap-2"><FiShield className="text-[#c07b2c]" /> Seal xuất khẩu, chống ẩm kép</div>
              <div className="inline-flex items-center gap-2"><FiStar className="text-[#c07b2c]" /> Hình ảnh thương hiệu đồng bộ</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-6 hidden md:block z-20">
              <div className="rounded-2xl bg-white/90 shadow-lg border border-[#f0debf] px-5 py-3 text-sm text-[#6c5942]">
                <div className="font-semibold text-[#3b2a17]">Tem QR truy xuất</div>
                <div>Tích hợp sẵn mã QR, in chống nhòe.</div>
              </div>
            </div>

            <div className="relative z-0 rounded-[36px] bg-gradient-to-br from-[#fdf3df] via-white to-[#f3e1c3] p-6 shadow-[0_40px_80px_-40px_rgba(114,81,39,0.45)] border border-[#f3ddba]">
              <div className="absolute inset-6 rounded-[28px] border border-dashed border-[#ddc9a4]/70" />
              <div className="relative grid grid-cols-3 gap-4">
                {baobiImages.map((imageSrc, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl bg-white border border-[#ead5b3] overflow-hidden shadow-sm"
                  >
                    <img
                      src={imageSrc}
                      alt={`Mẫu bao bì ${i + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/logo.png'
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-12 right-0 hidden md:block z-30">
              <div className="rounded-3xl bg-[#2f2a24] text-white px-6 py-4 shadow-xl">
                <div className="text-xs uppercase tracking-[0.3em] text-[#f7e6c5]">Lead time</div>
                <div className="text-2xl font-semibold">72 giờ</div>
                <div className="text-sm text-[#f7e6c5]/80">Từ phê duyệt mẫu tới sản xuất hàng loạt</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="ve-chung-toi">
        <SectionHeader
          eyebrow="Bao bì chuyên biệt"
          title="Giải pháp đóng gói đồng bộ cho chuỗi nông sản"
          desc="Bốn năng lực cốt lõi giúp chúng tôi đồng hành cùng nông trại và hệ thống phân phối trong suốt mùa vụ."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Feature icon={FiBox} title="Thiết kế tối ưu trái cây" desc="Thùng lỗ thoáng gọn nhẹ, khoét tay cầm chắc chắn, tối ưu xếp pallet và hạ nhiệt nhanh." />
          <Feature icon={FiShield} title="Chuẩn xuất khẩu" desc="Giấy đạt chuẩn FSC, keo chịu lực, chống ẩm kép phù hợp container lạnh và vận chuyển xa." />
          <Feature icon={FiStar} title="Đồng bộ thương hiệu" desc="In offset, flexo 7 màu, phủ UV định vị. Tem, mã QR đồng bộ trên mọi cấu phần bao bì." />
          <Feature icon={FiPhoneCall} title="Tư vấn mùa vụ" desc="Đội ngũ trực 24/7, báo giá trong 15 phút, điều phối giao linh hoạt theo sản lượng thực tế." />
        </div>
      </Section>

      <Section id="san-pham" className="bg-white">
        <SectionHeader
          eyebrow="Danh mục sản phẩm"
          title="3 nhóm giải pháp bao bì chủ lực"
          desc="Chọn tổ hợp phù hợp nhu cầu của bạn: thùng carton xuất khẩu, bao bì mềm chống dập và phụ kiện hoàn thiện nhận diện."
        />

        <div className="mt-12 grid gap-8">
          {productCollections.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-3xl border border-[#ead5b3] bg-white/90 p-6 lg:p-8 shadow-[0_22px_40px_-30px_rgba(85,63,29,0.4)]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-10">
                <div className="flex-1 space-y-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f7e6c5] text-[#8c6123] text-xs font-semibold">
                    {product.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-[#3b2a17]">{product.name}</h3>
                  <p className="text-sm text-[#6c5942] leading-relaxed">{product.desc}</p>
                </div>
                <ul className="mt-5 md:mt-0 md:w-72 space-y-2.5 text-sm text-[#6c5942]">
                  {product.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c07b2c]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#fdf3df] rounded-[48px]">
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Chất liệu & công nghệ"
            title="Tập trung vào độ bền, thẩm mỹ và trải nghiệm mở hộp"
            desc="Bao bì cho nông sản không chỉ phải chịu tải tốt mà còn cần truyền tải câu chuyện thương hiệu và tạo cảm giác tin cậy ngay từ lần đầu chạm vào. Minh Quân chọn lọc từng lớp giấy, màng phủ và phụ kiện để mỗi thùng carton vừa chắc chắn vừa sang trọng."
          />

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div className="space-y-6">
              <div className="text-sm text-[#6c5942] leading-relaxed bg-white/80 border border-[#ead5b3] rounded-3xl p-6 shadow-[0_18px_36px_-28px_rgba(85,63,29,0.45)]">
                Chúng tôi kiểm soát toàn bộ chuỗi sản xuất: từ sợi giấy đầu vào, công đoạn xử lý chống ẩm, in ấn, đến khâu bắt khuy – gấp – đóng kiện. Mỗi cấu trúc thùng đều được mô phỏng tải trọng, thử nghiệm container lạnh và kiểm tra sau khi va đập để đảm bảo độ bền thực tế trước khi giao cho vùng nguyên liệu.
              </div>
              <div className="rounded-3xl bg-white/85 border border-[#ead5b3] p-6 shadow-[0_14px_34px_-26px_rgba(85,63,29,0.4)] space-y-3 text-sm text-[#6c5942]">
                <div className="font-semibold text-[#3b2a17]">Bốn trụ cột trong thiết kế bao bì</div>
                <ul className="space-y-3">
                  <li>• Lớp ngoài kraft trắng hoặc duplex phủ UV giữ màu in sắc sảo; lớp trong kraft vàng tăng ma sát, hạn chế móp méo khi xếp chồng.</li>
                  <li>• Hệ chống ẩm đa tầng: tráng PE, phủ nano và túi hút ẩm tích hợp giúp thùng ổn định khi nhiệt độ biến động.</li>
                  <li>• Tem QR truy xuất in chống nhòe, kết nối dữ liệu sản lượng để đối tác kiểm tra chất lượng từng lô hàng trong vài giây.</li>
                  <li>• Cụm lỗ thoáng khí tùy chỉnh theo giống xoài, mít, tối ưu dòng lưu chuyển không khí giữ trái luôn tươi giòn tới điểm bán.</li>
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white overflow-hidden shadow-[0_28px_60px_-36px_rgba(66,48,21,0.45)] border border-[#ead5b3] flex flex-col h-full"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img src={materialSolution.image} alt={materialSolution.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#3b2a17]">{materialSolution.title}</h3>
                  <p className="mt-2 text-sm text-[#6c5942] leading-relaxed">{materialSolution.desc}</p>
                </div>
                <ul className="space-y-2 text-sm text-[#6c5942]">
                  {materialSolution.specs.map((spec) => (
                    <li key={spec}>• {spec}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="quy-trinh">
        <SectionHeader
          eyebrow="Quy trình chuẩn hóa"
          title="Đồng hành cùng bạn từ bản vẽ đến từng kiện hàng"
          desc="Chỉ 4 bước ngắn gọn để biến ý tưởng bao bì thành kiện hàng sẵn sàng xuất khẩu."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-[#ead5b3] bg-white/90 p-6 shadow-[0_18px_36px_-26px_rgba(85,63,29,0.35)]"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-[#c07b2c] text-white font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3b2a17]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#6c5942] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Đối tác tin dùng"
          title="Được lựa chọn bởi các hệ thống bán lẻ và vùng nguyên liệu lớn"
          desc="Giải pháp của Minh Quân đã có mặt tại các tỉnh Đồng Tháp, Tiền Giang, Bình Thuận, Tây Ninh và xuất khẩu sang Hàn Quốc, Nhật Bản, EU."
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="rounded-2xl border border-[#ead5b3] bg-white px-4 py-6 text-center text-sm font-semibold text-[#3b2a17] shadow-sm"
            >
              {partner}
            </div>
          ))}
        </div>
      </Section>

      <Section id="lien-he" className="py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Kết nối với Minh Quân"
              title="Nhận tư vấn đóng gói riêng cho mùa vụ của bạn"
              desc="Đội ngũ kỹ thuật luôn sẵn sàng khảo sát thực tế, lên cấu trúc thùng và mẫu in ngay trong ngày."
            />
            <ul className="space-y-3 text-[#6c5942] text-sm">
              <li>• Zalo: 0913 937 841</li>
              <li>• Email: lienhe@baobiminhquan.vn</li>
              <li>• Văn phòng & nhà xưởng: Ấp Bình An, xã Bình Thành, huyện Lấp Vò, tỉnh Đồng Tháp</li>
            </ul>
            <div className="text-sm text-[#8c6123] bg-[#f7e6c5] border border-[#ead5b3] rounded-2xl px-4 py-3 inline-flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#c07b2c]" />
              Hỗ trợ thiết kế file in miễn phí khi đặt đơn hàng đầu tiên.
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-[0_24px_50px_-24px_rgba(66,48,21,0.4)] border border-[#ead5b3] flex flex-col items-center gap-5">
            <a
              href="https://zalo.me/0913937841"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3 rounded-2xl bg-[#2f2a24] text-white font-semibold hover:bg-black transition"
            >
              Chat Zalo ngay
            </a>
            <div className="text-sm text-[#6c5942]">Hoặc quét QR để kết nối tức thì</div>
            <img
              src="/images/zalo-qr.png"
              alt="QR Zalo Bao Bì Minh Quân"
              className="w-48 h-48 rounded-2xl border border-[#ead5b3] object-contain bg-white"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
