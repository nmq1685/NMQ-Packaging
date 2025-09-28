import { FiBox, FiPhoneCall, FiShield, FiStar } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Section = ({ id, className = '', children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`py-20 md:py-24 ${className}`}>
    <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">{children}</div>
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
  // Unified lightbox state for hero (bao bì) & product images
  const [lightbox, setLightbox] = useState<{ type: 'hero' | 'product' | 'video'; index: number } | null>(null)

  const closeLightbox = () => setLightbox(null)
  const showPrev = () =>
    setLightbox((prev) => {
      if (!prev) return prev
      const collection = prev.type === 'hero' ? baobiImages : prev.type === 'product' ? productImages : videos.map(v => v.src)
      return { ...prev, index: (prev.index - 1 + collection.length) % collection.length }
    })
  const showNext = () =>
    setLightbox((prev) => {
      if (!prev) return prev
      const collection = prev.type === 'hero' ? baobiImages : prev.type === 'product' ? productImages : videos.map(v => v.src)
      return { ...prev, index: (prev.index + 1) % collection.length }
    })

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowLeft') showPrev()
      else if (e.key === 'ArrowRight') showNext()
    }
    document.addEventListener('keydown', onKey)
    // Lock scroll
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = originalOverflow
    }
  }, [lightbox, baobiImages.length])

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
      image: '/images/baobi/1.png',
    },
    {
      name: 'Bán sỉ và lẻ',
      tag: 'Giá cạnh tranh',
      desc: 'Cung cấp sản phẩm với số lượng linh hoạt từ bán lẻ đến bán sỉ với giá cả cạnh tranh, chất lượng đảm bảo.',
      bullets: ['Bán lẻ số lượng nhỏ cho nông dân', 'Bán sỉ số lượng lớn cho hợp tác xã', 'Giá ưu đãi theo số lượng đặt hàng'],
      image: '/images/baobi/2.png',
    },
      {
      name: 'Chương trình đại lý cấp 1',
      tag: 'Cơ hội kinh doanh',
      desc: 'Tuyển đại lý cấp 1 toàn quốc với chính sách hỗ trợ hấp dẫn, đào tạo và phát triển thị trường cùng nhau.',
      bullets: ['Chính sách giá đại lý ưu đãi', 'Hỗ trợ marketing và quảng bá', 'Đào tạo kỹ thuật và kinh doanh'],
      image: '/images/baobi/3.png',
    },
  ] as const

  // Derive product images for lightbox usage
  const productImages = productCollections.map((p) => p.image || '/images/logo.png')

  // Video sources (placed in public/videos/baobi/)
  const videos = [1,2,3,4].map(n => ({
    src: `/videos/baobi/${n}.mp4`,
    title: `Video sản xuất ${n}`,
    desc: 'Quy trình sản xuất túi bao bảo vệ trái cây chuyên dụng'
  }))

  // Tạm thời chưa có đối tác chính thức - chỉ hiện diện tại Đồng Tháp
  const partners: string[] = []

  return (
    <>
      <Section id="home" className="pt-16 md:pt-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
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
              className="text-[2.1rem] leading-[1.15] sm:text-5xl lg:text-6xl font-extrabold text-[#2a1a0c] tracking-tight"
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
                  <motion.button
                    key={i}
                    type="button"
                    whileHover={{ y: -6 }}
                    onClick={() => setLightbox({ type: 'hero', index: i })}
                    className="group rounded-2xl bg-white border border-[#ead5b3] overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c07b2c] focus:ring-offset-2 focus:ring-offset-[#fdf3df]"
                    aria-label={`Xem lớn hình mẫu bao bì ${i + 1}`}
                  >
                    <img
                      src={imageSrc}
                      alt={`Mẫu bao bì ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      onError={(e) => {
                        e.currentTarget.src = '/images/logo.png'
                      }}
                    />
                  </motion.button>
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
          {/* Mobile info badges */}
          <div className="mt-6 w-full flex md:hidden flex-col gap-4">
            <div className="rounded-2xl bg-white/90 shadow border border-[#f0debf] px-5 py-3 text-sm text-[#6c5942]">
              <div className="font-semibold text-[#3b2a17]">Tem QR truy xuất</div>
              <div>Tích hợp sẵn mã QR, in chống nhòe.</div>
            </div>
            <div className="rounded-3xl bg-[#2f2a24] text-white px-6 py-4 shadow flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#f7e6c5]">Lead time</div>
                <div className="text-xl font-semibold leading-tight">72 giờ</div>
                <div className="text-xs text-[#f7e6c5]/80 mt-0.5">Từ phê duyệt mẫu tới sản xuất</div>
              </div>
              <div className="text-[11px] font-medium text-[#f7e6c5]/90">Nhanh chóng<br/>ổn định</div>
            </div>
          </div>
        </div>
      </Section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Xem hình phóng to"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox()
          }}
        >
          <div className="relative max-w-5xl w-full">
            <div className="aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-[#ead5b3] bg-white shadow-2xl flex items-center justify-center">
              {lightbox.type === 'video' ? (
                <video
                  key={`video-${lightbox.index}`}
                  src={videos[lightbox.index].src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain md:object-cover bg-black"
                  preload="metadata"
                >
                  Trình duyệt của bạn không hỗ trợ video.
                </video>
              ) : (
                (() => {
                  const activeImages = lightbox.type === 'hero' ? baobiImages : productImages
                  const currentSrc = activeImages[lightbox.index]
                  return (
                    <img
                      src={currentSrc}
                      alt={`Hình phóng to ${lightbox.index + 1}`}
                      className="w-full h-full object-contain md:object-cover bg-white"
                      draggable={false}
                      onError={(e) => {
                        e.currentTarget.src = '/images/logo.png'
                      }}
                    />
                  )
                })()
              )}
            </div>
            {/* Controls */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 md:top-4 md:right-4 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/90 text-[#2a1a0c] shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c07b2c]"
              aria-label="Đóng"
              autoFocus
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showPrev() }}
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 xl:-left-12 h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#2a1a0c] shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c07b2c]"
              aria-label="Ảnh trước"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showNext() }}
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 xl:-right-12 h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#2a1a0c] shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#c07b2c]"
              aria-label="Ảnh tiếp theo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <div className="mt-4 text-center text-xs text-[#f7e6c5]/90 select-none">
              {lightbox.index + 1} / {(lightbox.type === 'hero' ? baobiImages : lightbox.type === 'product' ? productImages : videos).length}
            </div>
          </div>
        </div>
      )}

  <Section id="ve-chung-toi" className="pt-16 md:pt-20">
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

  {/* Videos Section */}
      <Section id="videos" className="bg-white pt-16 md:pt-20">
        <SectionHeader
          eyebrow="Video thực tế"
          title="Quy trình sản xuất"
          desc="Video giới thiệu quy trình sản xuất túi bao bảo vệ trái cây chuyên dụng."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v, i) => (
            <motion.div
              key={v.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-3xl overflow-hidden border border-[#ead5b3] bg-gradient-to-br from-white to-amber-50/40 shadow-[0_14px_38px_-22px_rgba(85,63,29,0.35)] hover:shadow-[0_22px_46px_-18px_rgba(85,63,29,0.45)]"
            >
              <button
                type="button"
                onClick={() => setLightbox({ type: 'video', index: i })}
                className="w-full h-full text-left focus:outline-none focus:ring-2 focus:ring-[#c07b2c] focus:ring-offset-2 focus:ring-offset-white block"
                aria-label={`Mở video ${v.title}`}
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-[#2a1a0c]">
                  <video
                    src={v.src}
                    preload="none"
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="h-14 w-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[#c07b2c] shadow-lg group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[11px] font-semibold text-[#8c6123] border border-amber-200 shadow-sm">Video {i + 1}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#3b2a17] leading-snug line-clamp-2">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#6c5942] line-clamp-2">{v.desc}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

  <Section id="san-pham" className="bg-white pt-16 md:pt-20">
        <SectionHeader
          eyebrow="Sản phẩm chính"
          title="Túi bao bảo vệ trái cây chuyên dụng"
          desc="Sản phẩm túi bao giấy phủ silicone 2 mặt chống thấm nước, bảo vệ hiệu quả trái cây khỏi côn trùng sâm hại. Bán sỉ, lẻ và tuyển đại lý."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {productCollections.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
              className="group relative flex flex-col rounded-3xl border border-[#ead5b3] bg-gradient-to-br from-white/95 via-white to-amber-50/40 shadow-[0_14px_38px_-22px_rgba(85,63,29,0.35)] overflow-hidden hover:shadow-[0_22px_46px_-18px_rgba(85,63,29,0.45)] transition-all duration-500"
            >
              {product.image && (
                <div className="relative">
                  <motion.button
                    type="button"
                    whileHover={{ y: -4 }}
                    onClick={() => setLightbox({ type: 'product', index: i })}
                    className="group/image block w-full text-left focus:outline-none focus:ring-2 focus:ring-[#c07b2c] focus:ring-offset-2 focus:ring-offset-white rounded-none"
                    aria-label={`Xem lớn hình sản phẩm ${product.name}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        sizes="(min-width: 1280px) 380px, (min-width: 640px) 50vw, 100vw"
                        className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-110 group-hover/image:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = '/images/logo.png'
                        }}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(42,26,12,0.55)] via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold text-[#8c6123] border border-amber-200 shadow-sm">
                      {product.tag}
                    </span>
                  </motion.button>
                </div>
              )}
              <div className="flex flex-col flex-1 p-6 lg:p-7 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#3b2a17] tracking-tight group-hover:text-[#a06418] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6c5942]">
                    {product.desc}
                  </p>
                </div>
                <ul className="space-y-2.5 text-sm text-[#6c5942]">
                  {product.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#c07b2c] group-hover:scale-110 transition-transform" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#8c6123] hover:text-[#a06418] transition group/btn"
                  >
                    Tìm hiểu thêm
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 -mr-0.5 transition-transform group-hover/btn:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_70%)]" />
            </motion.div>
          ))}
        </div>
      </Section>

  <Section className="bg-[#fdf3df] rounded-[36px] md:rounded-[48px] pt-16 md:pt-20">
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
                <img
                  src={materialSolution.image}
                  alt={materialSolution.title}
                  loading="lazy"
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="w-full h-full object-cover"
                />
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

  <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
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

  <Section id="dai-ly" className="bg-[#fdf3df] rounded-[36px] md:rounded-[48px] pt-16 md:pt-20">
        <SectionHeader
          eyebrow="Cơ hội kinh doanh"
          title="Chương trình đại lý cấp 1 - Cơ hội vàng cho doanh nghiệp"
          desc="Tham gia mạng lưới đại lý cấp 1 của Minh Quân để phát triển kinh doanh bao bì bảo vệ trái cây. Chính sách hỗ trợ toàn diện, lợi nhuận hấp dẫn."
        />

  <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
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

  <Section className="pt-16 md:pt-20">
        <SectionHeader
          eyebrow="Đối tác (đang tìm kiếm)"
          title="Hiện diện tại Đồng Tháp – Đang mở rộng hợp tác"
          desc="Sản phẩm hiện mới cung cấp tại Đồng Tháp. Chúng tôi đang tìm kiếm đối tác phân phối và đại lý tại các tỉnh khác. Liên hệ để trở thành một trong những đối tác đầu tiên."
        />

        <div className="mt-8 text-center">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 text-amber-800 font-semibold text-sm">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              Đang tìm kiếm đối tác
            </div>
            <p className="text-sm text-[#6c5942] max-w-xl">
              Chưa có đối tác chính thức. Đây là cơ hội để bạn trở thành đơn vị đồng hành đầu tiên cùng Minh Quân mở rộng thị trường.
            </p>
          </div>
        </div>

        {partners.length === 0 && (
          <div className="mt-12 p-10 border-2 border-dashed border-amber-200 rounded-3xl text-center bg-amber-50/40">
            <p className="font-semibold text-[#8c6123]">Chưa có logo đối tác</p>
            <p className="text-sm text-[#6c5942] mt-2">Liên hệ ngay để xuất hiện tại khu vực này sớm nhất.</p>
          </div>
        )}
      </Section>

      <Section id="lien-he" className="py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
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
