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
    { label: 'Bao bì bảo vệ trái cây', value: 'Chống côn trùng sâm hại' },
    { label: 'Chất liệu', value: 'Giấy phủ silicone 2 mặt' },
    { label: 'Hệ thống đại lý', value: 'Tuyển đại lý cấp 1' },
  ]

  const materialSolution = {
    title: 'Túi bao giấy phủ silicone 2 mặt chuyên dụng',
    desc: 'Chất liệu giấy cao cấp được phủ silicone 2 mặt tạo lớp bảo vệ chống thấm nước hoàn toàn, bảo vệ trái cây khỏi côn trùng sâm hại hiệu quả.',
    specs: ['Giấy phủ silicone 2 mặt chống thấm 100%', 'Bảo vệ khỏi côn trùng, sâu bọ, ruồi trái cây', 'Kích thước đa dạng cho nhiều loại trái cây', 'Chất liệu an toàn, không độc hại'],
    image: '/images/baobi/1.png',
  }

  const processSteps = [
    { title: 'Khảo sát sản phẩm', desc: 'Đo kích thước, tải trọng, điều kiện bảo quản để chọn cấu trúc bao bì phù hợp.' },
    { title: 'Thiết kế - phê duyệt mẫu', desc: 'Gửi mẫu in 2D/3D, tinh chỉnh nhận diện cho tới khi bạn hài lòng.' },
    { title: 'Sản xuất & kiểm tra', desc: 'Gia công, QC từng lô hàng, đóng kiện sẵn sàng vận chuyển.' },
    { title: 'Giao hàng & hỗ trợ', desc: 'Điều phối giao trong 3-5 ngày, đồng hành mùa vụ để điều chỉnh linh hoạt.' },
  ]

  const productCollections = [
    {
      name: 'Túi bao bảo vệ trái cây',
      tag: 'Giấy phủ silicone 2 mặt',
      desc: 'Túi bao chuyên dụng làm từ giấy phủ silicone 2 mặt, chống thấm nước ngoài trời và bảo vệ hiệu quả trái cây khỏi côn trùng sâm hại.',
      bullets: ['Chất liệu giấy phủ silicone 2 mặt chống thấm', 'Bảo vệ khỏi côn trùng, sâu bọ, ruồi trái cây', 'Kích thước đa dạng phù hợp nhiều loại trái cây'],
    },
    {
      name: 'Bán sỉ và lẻ',
      tag: 'Giá cạnh tranh',
      desc: 'Cung cấp sản phẩm với số lượng linh hoạt từ bán lẻ đến bán sỉ với giá cả cạnh tranh, chất lượng đảm bảo.',
      bullets: ['Bán lẻ số lượng nhỏ cho nông dân', 'Bán sỉ số lượng lớn cho hợp tác xã', 'Giá ưu đãi theo số lượng đặt hàng'],
    },
    {
      name: 'Chương trình đại lý cấp 1',
      tag: 'Cơ hội kinh doanh',
      desc: 'Tuyển đại lý cấp 1 toàn quốc với chính sách hỗ trợ hấp dẫn, đào tạo và phát triển thị trường cùng nhau.',
      bullets: ['Chính sách giá đại lý ưu đãi', 'Hỗ trợ marketing và quảng bá', 'Đào tạo kỹ thuật và kinh doanh'],
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
              Bao bì bảo vệ trái cây Minh Quân
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#2a1a0c]"
            >
              Bao bì bảo vệ trái cây chống côn trùng sâm hại
            </motion.h1>

            <p className="text-lg text-[#6c5942] max-w-xl">
              Chuyên sản xuất túi bao bằng chất liệu giấy phủ silicone 2 mặt chống thấm nước ngoài trời. Bảo vệ hiệu quả trái cây khỏi côn trùng sâm hại. Bán sỉ, lẻ và tuyển đại lý cấp 1 toàn quốc.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#san-pham"
                className="px-6 py-3 rounded-2xl bg-[#c07b2c] text-white shadow-[0_12px_30px_-12px_rgba(192,123,44,0.7)] hover:bg-[#a7661f] transition"
              >
                Xem sản phẩm bảo vệ trái cây
              </a>
              <a
                href="#dai-ly"
                className="px-6 py-3 rounded-2xl border border-[#d9c19d] text-[#8c6123] hover:bg-white transition"
              >
                Đăng ký đại lý cấp 1
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
              <div className="inline-flex items-center gap-2"><FiShield className="text-[#c07b2c]" /> Chống côn trùng sâm hại hiệu quả</div>
              <div className="inline-flex items-center gap-2"><FiStar className="text-[#c07b2c]" /> Chống thấm nước ngoài trời</div>
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
          eyebrow="Bao bì bảo vệ trái cây"
          title="Giải pháp chống côn trùng sâm hại hiệu quả"
          desc="Bốn ưu điểm vượt trội của túi bao giấy phủ silicone 2 mặt chống thấm nước, bảo vệ trái cây an toàn."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Feature icon={FiBox} title="Chống côn trùng sâm hại" desc="Túi bao bảo vệ hiệu quả trái cây khỏi côn trùng, sâu bọ và các loại sâm hại trong quá trình phát triển." />
          <Feature icon={FiShield} title="Chống thấm nước" desc="Chất liệu giấy phủ silicone 2 mặt chống thấm nước ngoài trời, bảo vệ trái cây trong mọi điều kiện thời tiết." />
          <Feature icon={FiStar} title="Chất lượng cao" desc="Sản phẩm được kiểm tra chất lượng nghiêm ngặt, đảm bảo độ bền và hiệu quả bảo vệ tối ưu." />
          <Feature icon={FiPhoneCall} title="Hỗ trợ đại lý" desc="Chương trình đại lý cấp 1 hấp dẫn, hỗ trợ kinh doanh và phát triển thị trường toàn quốc." />
        </div>
      </Section>

      <Section id="san-pham" className="bg-white">
        <SectionHeader
          eyebrow="Sản phẩm chính"
          title="Túi bao bảo vệ trái cây chuyên dụng"
          desc="Sản phẩm túi bao giấy phủ silicone 2 mặt chống thấm nước, bảo vệ hiệu quả trái cây khỏi côn trùng sâm hại. Bán sỉ, lẻ và tuyển đại lý."
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
            title="Giấy phủ silicone 2 mặt - Công nghệ bảo vệ tiên tiến"
            desc="Túi bao bảo vệ trái cây của Minh Quân sử dụng công nghệ phủ silicone 2 mặt tiên tiến, tạo ra lớp bảo vệ hoàn hảo chống thấm nước và côn trùng sâm hại. Chất liệu an toàn, thân thiện môi trường và hiệu quả bảo vệ cao."
          />

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div className="space-y-6">
              <div className="text-sm text-[#6c5942] leading-relaxed bg-white/80 border border-[#ead5b3] rounded-3xl p-6 shadow-[0_18px_36px_-28px_rgba(85,63,29,0.45)]">
                Chúng tôi kiểm soát toàn bộ quy trình sản xuất túi bao bảo vệ trái cây: từ lựa chọn giấy chất lượng cao, công đoạn phủ silicone 2 mặt, đến khâu cắt may và đóng gói thành phẩm. Mỗi sản phẩm đều được kiểm tra chất lượng nghiêm ngặt về độ chống thấm, độ bền và hiệu quả bảo vệ trước khi đến tay khách hàng.
              </div>
              <div className="rounded-3xl bg-white/85 border border-[#ead5b3] p-6 shadow-[0_14px_34px_-26px_rgba(85,63,29,0.4)] space-y-3 text-sm text-[#6c5942]">
                <div className="font-semibold text-[#3b2a17]">Bốn ưu điểm vượt trội của túi bao bảo vệ trái cây</div>
                <ul className="space-y-3">
                  <li>• Lớp phủ silicone 2 mặt tạo khả năng chống thấm nước hoàn toàn, bảo vệ trái cây trong mọi điều kiện thời tiết ngoài trời.</li>
                  <li>• Ngăn chặn hiệu quả côn trùng, sâu bọ, ruồi trái cây và các loại sâm hại khác tiếp cận và gây hại cho trái cây.</li>
                  <li>• Chất liệu giấy an toàn, không độc hại, thân thiện với môi trường và không ảnh hưởng đến chất lượng trái cây.</li>
                  <li>• Kích thước đa dạng phù hợp với nhiều loại trái cây khác nhau như xoài, mít, bưởi, cam, chanh và các loại trái cây khác.</li>
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

      <Section id="dai-ly" className="bg-[#fdf3df] rounded-[48px]">
        <SectionHeader
          eyebrow="Cơ hội kinh doanh"
          title="Chương trình đại lý cấp 1 - Cơ hội vàng cho doanh nghiệp"
          desc="Tham gia mạng lưới đại lý cấp 1 của Minh Quân để phát triển kinh doanh bao bì bảo vệ trái cây. Chính sách hỗ trợ toàn diện, lợi nhuận hấp dẫn."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-[#ead5b3] bg-white/90 p-6 lg:p-8 shadow-[0_22px_40px_-30px_rgba(85,63,29,0.4)]"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f7e6c5] text-[#8c6123] text-xs font-semibold">
                Quyền lợi đại lý
              </div>
              <h3 className="text-xl font-semibold text-[#3b2a17]">Chính sách hỗ trợ toàn diện</h3>
              <ul className="space-y-3 text-sm text-[#6c5942]">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c07b2c]" />
                  <span>Giá đại lý ưu đãi lên đến 30% so với giá bán lẻ</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c07b2c]" />
                  <span>Hỗ trợ marketing: banner, brochure, mẫu sản phẩm miễn phí</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c07b2c]" />
                  <span>Đào tạo kỹ thuật và kinh doanh từ đội ngũ chuyên gia</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c07b2c]" />
                  <span>Bảo vệ vùng độc quyền, không cạnh tranh giá</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-3xl border border-[#ead5b3] bg-white/90 p-6 lg:p-8 shadow-[0_22px_40px_-30px_rgba(85,63,29,0.4)]"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f7e6c5] text-[#8c6123] text-xs font-semibold">
                Điều kiện tham gia
              </div>
              <h3 className="text-xl font-semibold text-[#3b2a17]">Yêu cầu đại lý cấp 1</h3>
              <ul className="space-y-3 text-sm text-[#6c5942]">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c07b2c]" />
                  <span>Có kinh nghiệm kinh doanh trong lĩnh vực nông nghiệp</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c07b2c]" />
                  <span>Cam kết đặt hàng tối thiểu 50 - 100 thùng</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c07b2c]" />
                  <span>Có mạng lưới khách hàng nông dân, hợp tác xã</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c07b2c]" />
                  <span>Có kho bãi và phương tiện vận chuyển</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#lien-he"
              className="px-8 py-3 rounded-2xl bg-[#c07b2c] text-white shadow-[0_12px_30px_-12px_rgba(192,123,44,0.7)] hover:bg-[#a7661f] transition font-semibold"
            >
              Đăng ký đại lý ngay
            </a>
            <a
              href="tel:0913937841"
              className="px-8 py-3 rounded-2xl border border-[#d9c19d] text-[#8c6123] hover:bg-white transition font-semibold"
            >
              Gọi tư vấn: 0913 937 841
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Đối tác tin dùng"
          title="Được lựa chọn bởi các hệ thống bán lẻ và vùng nguyên liệu lớn"
          desc="Giải pháp của Minh Quân sẽ sớm có mặt tại các tỉnh Đồng Tháp, Tiền Giang, Bình Thuận, Tây Ninh và xuất khẩu sang Hàn Quốc, Nhật Bản, EU."
        />

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 text-amber-800 font-semibold text-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            Coming Soon - Sắp ra mắt
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 opacity-60">
          {partners.map((partner) => (
            <div
              key={partner}
              className="rounded-2xl border border-[#ead5b3] bg-white px-4 py-6 text-center text-sm font-semibold text-[#3b2a17] shadow-sm relative"
            >
              {partner}
              <div className="absolute inset-0 bg-white/50 rounded-2xl flex items-center justify-center">
                <span className="text-xs text-gray-500 font-medium">Sắp có</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="lien-he" className="py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Kết nối với Minh Quân"
              title="Đặt hàng túi bao bảo vệ trái cây hoặc đăng ký đại lý"
              desc="Liên hệ ngay để được tư vấn sản phẩm túi bao bảo vệ trái cây và thông tin chi tiết về chương trình đại lý cấp 1."
            />
            <ul className="space-y-3 text-[#6c5942] text-sm">
              <li>• Zalo: 0913 937 841</li>
              <li>• Email: lienhe@baobiminhquan.vn</li>
              <li>• Văn phòng & nhà xưởng: Ấp Bình An, xã Bình Thành, huyện Lấp Vò, tỉnh Đồng Tháp</li>
            </ul>
            <div className="text-sm text-[#8c6123] bg-[#f7e6c5] border border-[#ead5b3] rounded-2xl px-4 py-3 inline-flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#c07b2c]" />
              Tặng mẫu sản phẩm miễn phí cho đơn hàng đầu tiên và đại lý mới.
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
