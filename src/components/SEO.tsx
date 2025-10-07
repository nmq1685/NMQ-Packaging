import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
}

/**
 * SEO Component - Quản lý metadata cho từng trang
 * Giúp tối ưu SEO với đa dạng từ khóa
 */
export const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage,
  canonical 
}: SEOProps) => {
  const location = useLocation()
  const siteUrl = 'https://baobiminhnquan.com'
  const defaultTitle = 'Bao Bì Minh Quân - Bao Bì Trái Cây Xuất Khẩu'
  const defaultDescription = 'Chuyên cung cấp bao bì xoài, mít xuất khẩu: thùng carton thoáng khí, khay xốp, túi lưới PE/OPP, tem QR truy xuất'
  const defaultKeywords = 'bao bì trái cây, bao bì xoài, bao bì mít, thùng carton xuất khẩu, khay xốp, túi OPP, tem QR'

  useEffect(() => {
    // Update title
    document.title = title || defaultTitle

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`)
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    }

    const updateProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`)
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    }

    // Update basic meta tags
    updateMeta('description', description || defaultDescription)
    updateMeta('keywords', keywords || defaultKeywords)

    // Update Open Graph tags
    updateProperty('og:title', title || defaultTitle)
    updateProperty('og:description', description || defaultDescription)
    updateProperty('og:url', `${siteUrl}${location.pathname}`)
    if (ogImage) {
      updateProperty('og:image', ogImage)
    }

    // Update Twitter tags
    updateProperty('twitter:title', title || defaultTitle)
    updateProperty('twitter:description', description || defaultDescription)
    if (ogImage) {
      updateProperty('twitter:image', ogImage)
    }

    // Update canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]')
    const canonicalUrl = canonical || `${siteUrl}${location.pathname}`
    
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl)
    } else {
      linkCanonical = document.createElement('link')
      linkCanonical.setAttribute('rel', 'canonical')
      linkCanonical.setAttribute('href', canonicalUrl)
      document.head.appendChild(linkCanonical)
    }
  }, [title, description, keywords, ogImage, canonical, location.pathname])

  return null
}

export default SEO
