import type { Metadata } from 'next'
import { FiPhoneCall, FiMessageSquare, FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { ScrollToTop } from '@/components/ScrollToTop'
import { ZaloBadge } from '@/components/ZaloBadge'
import './globals.css'

export const metadata: Metadata = {
    metadataBase: new URL('https://baobiminhnquan.com'),
    title: 'Túi Bao Xoài Minh Quân - Giấy Phủ Silicone Chống Thấm, Chống Côn Trùng',
    description: 'Chuyên sản xuất túi bao xoài chất liệu giấy phủ silicone 2 mặt chống thấm nước, chống côn trùng xâm hại. Bán sỉ, lẻ & tuyển đại lý cấp 1 toàn quốc.',
    keywords: 'túi bao xoài, giấy phủ silicone, túi bao xoài chống côn trùng, bán sỉ túi bao xoài, đại lý túi bao xoài',
    openGraph: {
        type: 'website',
        locale: 'vi_VN',
        url: 'https://baobiminhnquan.com',
        title: 'Túi Bao Xoài Minh Quân - Giấy Phủ Silicone Chống Thấm, Chống Côn Trùng',
        description: 'Chuyên sản xuất túi bao xoài chất liệu giấy phủ silicone 2 mặt chống thấm nước, chống côn trùng xâm hại.',
        siteName: 'Bao Bì Minh Quân',
    },
    robots: {
        index: true,
        follow: true,
    },
}

function Header() {
    return (
        <header className="sticky top-0 z-40 backdrop-blur kraft-paper supports-[backdrop-filter]:bg-countryside-straw-50/90 border-b-2 border-countryside-wood-200">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 flex items-center justify-between py-3">
                <div className="flex items-center gap-6">
                    <Logo />
                </div>
                <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
                    <a className="hover:text-countryside-leaf-600 transition text-countryside-wood-800" href="/#san-pham">Sản phẩm</a>
                    <a className="hover:text-countryside-leaf-600 transition text-countryside-wood-800" href="/#ve-chung-toi">Về chúng tôi</a>
                    <Link className="hover:text-countryside-leaf-600 transition text-countryside-wood-800" href="/chinh-sach-mua-hang">CS mua hàng</Link>
                    <Link className="hover:text-countryside-leaf-600 transition text-countryside-wood-800" href="/chinh-sach-bao-mat">CS bảo mật</Link>
                </nav>
            </div>
        </header>
    )
}

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="mt-16 border-t-4 border-countryside-wood-300 kraft-paper backdrop-blur supports-[backdrop-filter]:bg-countryside-straw-50/90">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-3 max-w-sm">
                    <div className="flex items-center gap-2"><Logo /></div>
                    <p className="text-[13px] text-countryside-earth-700 leading-relaxed font-medium">
                        🌿 Giải pháp túi bao bảo vệ trái cây chống côn trùng & thấm nước.
                    </p>
                </div>
                <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-countryside-earth-700">
                    <a href="/#san-pham" className="hover:text-countryside-leaf-600">Sản phẩm</a>
                    <a href="/#ve-chung-toi" className="hover:text-countryside-leaf-600">Về chúng tôi</a>
                    <a href="/#dai-ly" className="hover:text-countryside-leaf-600">Đại lý</a>
                    <a href="/#lien-he" className="hover:text-countryside-leaf-600">Liên hệ</a>
                    <Link href="/chinh-sach-mua-hang" className="hover:text-countryside-leaf-600">CS mua hàng</Link>
                    <Link href="/chinh-sach-bao-mat" className="hover:text-countryside-leaf-600">CS bảo mật</Link>
                </nav>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-[13px] text-countryside-earth-700">
                    <a href="tel:0913937841" className="inline-flex items-center gap-1.5 font-bold text-countryside-wood-800 hover:text-countryside-leaf-600">📞 0913 937 841</a>
                    <span className="hidden sm:inline-block h-3 w-px bg-countryside-wood-300" />
                    <a href="mailto:lienhe@baobiminhquan.vn" className="hover:text-countryside-leaf-600 font-medium">✉️ lienhe@baobiminhquan.vn</a>
                </div>
            </div>
            <div className="border-t-2 border-countryside-wood-200 py-4">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-[11px] tracking-wide text-countryside-earth-600 font-medium">
                    <div className="handwriting text-base">© {year} Bao Bì Minh Quân</div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <span>🌾 Túi bao silicone 2 mặt</span>
                        <span>🐛 Chống côn trùng</span>
                        <span>🤝 Hỗ trợ đại lý</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="vi">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#2563eb" />
                <meta name="language" content="Vietnamese" />
                <meta name="revisit-after" content="7 days" />
                <link rel="icon" type="image/svg+xml" href="/images/logo.png" />
            </head>
            <body className="bg-countryside-straw-50 text-countryside-earth-900 antialiased">
                <Header />
                {children}
                <ZaloBadge />
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    )
}
