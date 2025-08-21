import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Logo() {
  const [src, setSrc] = useState<string>('/images/logo.png')
  const [hideImg, setHideImg] = useState(false)

  const onError = () => {
    if (src === '/images/logo.png') {
      setSrc('/images/logo.svg')
    } else {
      setHideImg(true)
    }
  }

  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Trang chủ Bao Bì Minh Quân">
      {!hideImg && (
        <img
          src={src}
          onError={onError}
          alt="Bao Bì Minh Quân"
          className="h-9 w-auto object-contain select-none"
          draggable={false}
        />
      )}
      <span className="font-extrabold text-xl tracking-tight group-hover:opacity-90">
        <span className="gradient-text">Bao Bì Minh Quân</span>
      </span>
    </Link>
  )
}
