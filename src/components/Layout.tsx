import { FiPhoneCall, FiMessageSquare, FiMenu, FiX } from 'react-icons/fi'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import ScrollToTop from './ScrollToTop'
import Logo from './Logo'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <div className="flex items-center gap-6">
          <button
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 active:scale-95 transition"
            onClick={() => setOpen(o => !o)}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
          <Logo />
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a className="hover:text-amber-700 transition" href="/#san-pham">Sản phẩm</a>
          <a className="hover:text-amber-700 transition" href="/#ve-chung-toi">Về chúng tôi</a>
          <Link className="hover:text-amber-700 transition" to="/chinh-sach-mua-hang">CS mua hàng</Link>
          <Link className="hover:text-amber-700 transition" to="/chinh-sach-bao-mat">CS bảo mật</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://zalo.me/0913937841" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition text-sm font-semibold shadow-sm">
            <FiMessageSquare /> Chat Zalo
          </a>
        </div>
      </div>
      {/* Mobile nav panel */}
      <div
        className={`md:hidden fixed inset-x-0 top-[56px] origin-top overflow-hidden transition-[max-height,opacity] duration-400 ease-out bg-white/95 backdrop-blur border-b border-amber-100 shadow-lg ${open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 py-5 flex flex-col gap-4 text-sm font-medium">
          <a onClick={() => setOpen(false)} className="hover:text-amber-700" href="/#san-pham">Sản phẩm</a>
          <a onClick={() => setOpen(false)} className="hover:text-amber-700" href="/#ve-chung-toi">Về chúng tôi</a>
          <Link onClick={() => setOpen(false)} className="hover:text-amber-700" to="/chinh-sach-mua-hang">Chính sách mua hàng</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-amber-700" to="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
          <a
            href="https://zalo.me/0913937841"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition font-semibold shadow"
          >
            <FiMessageSquare /> Chat Zalo
          </a>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-amber-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/55">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 max-w-sm">
          <div className="flex items-center gap-2"><Logo /></div>
          <p className="text-[13px] text-[#6c5942] leading-relaxed">
            Giải pháp túi bao bảo vệ trái cây chống côn trùng & thấm nước.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium text-[#6c5942]">
          <a href="/#san-pham" className="hover:text-[#a06418]">Sản phẩm</a>
          <a href="/#ve-chung-toi" className="hover:text-[#a06418]">Về chúng tôi</a>
          <a href="/#dai-ly" className="hover:text-[#a06418]">Đại lý</a>
          <a href="/#lien-he" className="hover:text-[#a06418]">Liên hệ</a>
          <NavLink to="/chinh-sach-mua-hang" className="hover:text-[#a06418]">CS mua hàng</NavLink>
          <NavLink to="/chinh-sach-bao-mat" className="hover:text-[#a06418]">CS bảo mật</NavLink>
        </nav>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-[13px] text-[#6c5942]">
          <a href="tel:0913937841" className="inline-flex items-center gap-1.5 font-medium text-[#8c6123] hover:text-[#a06418]">0913 937 841</a>
          <span className="hidden sm:inline-block h-3 w-px bg-amber-300" />
          <a href="mailto:lienhe@baobiminhquan.vn" className="hover:text-[#a06418]">lienhe@baobiminhquan.vn</a>
        </div>
      </div>
      <div className="border-t border-amber-100/70 py-4">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-[11px] tracking-wide text-[#7a6650]">
          <div>© {new Date().getFullYear()} Bao Bì Minh Quân</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Túi bao silicone 2 mặt</span>
            <span>Chống côn trùng</span>
            <span>Hỗ trợ đại lý</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white">
  <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
