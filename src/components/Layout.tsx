import { FiPhoneCall, FiMessageSquare } from 'react-icons/fi'
import { Link, NavLink, Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Logo from './Logo'

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="container flex items-center justify-between py-4">
  <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-brand-600" href="/#san-pham">Sản phẩm</a>
          <a className="hover:text-brand-600" href="/#ve-chung-toi">Về chúng tôi</a>
          <Link className="hover:text-brand-600" to="/chinh-sach-mua-hang">CS mua hàng</Link>
          <Link className="hover:text-brand-600" to="/chinh-sach-bao-mat">CS bảo mật</Link>
        </nav>
        <a href="https://zalo.me/0913937841" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">
          <FiMessageSquare /> Chat Zalo
        </a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 py-8 text-sm text-gray-600">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-2">
        <div>© {new Date().getFullYear()} Bao Bì Minh Quân. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="/#ve-chung-toi" className="hover:text-brand-600">Về chúng tôi</a>
          <a href="/#san-pham" className="hover:text-brand-600">Sản phẩm</a>
          <a href="/#lien-he" className="hover:text-brand-600">Liên hệ</a>
          <NavLink to="/chinh-sach-mua-hang" className="hover:text-brand-600">Chính sách mua hàng</NavLink>
          <NavLink to="/chinh-sach-bao-mat" className="hover:text-brand-600">Chính sách bảo mật</NavLink>
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
