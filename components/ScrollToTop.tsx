'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export function ScrollToTop() {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [pathname])

    return null
}
