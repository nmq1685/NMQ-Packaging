'use client'

import { FiArrowLeft, FiPhone, FiMessageSquare, FiCheck, FiZoomIn } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, Fragment } from 'react'
import type { Product } from '@/lib/products'

interface ProductDetailProps {
    product: Product
}

// Parse markdown bold (**text**) và newlines
const parseMarkdown = (text: string) => {
    const parts: Array<string | React.ReactNode> = []
    let lastIndex = 0

    // Regex để tìm **text**
    const regex = /\*\*([^*]+)\*\*/g
    let match

    while ((match = regex.exec(text)) !== null) {
        // Thêm text trước **
        if (match.index > lastIndex) {
            const before = text.slice(lastIndex, match.index)
            parts.push(
                ...before.split('\n').map((line, i, arr) => (
                    <Fragment key={`text-${lastIndex}-${i}`}>
                        {line}
                        {i < arr.length - 1 && <br />}
                    </Fragment>
                ))
            )
        }

        // Thêm bold text
        parts.push(
            <strong key={`bold-${match.index}`} className="text-countryside-wood-800 font-semibold">
                {match[1]}
            </strong>
        )
        lastIndex = match.index + match[0].length
    }

    // Thêm text sau **
    if (lastIndex < text.length) {
        const after = text.slice(lastIndex)
        parts.push(
            ...after.split('\n').map((line, i, arr) => (
                <Fragment key={`text-end-${i}`}>
                    {line}
                    {i < arr.length - 1 && <br />}
                </Fragment>
            ))
        )
    }

    return parts
}

const ImageGallery = ({ images, productName }: { images: string[]; productName: string }) => {
    const [selectedImage, setSelectedImage] = useState(images[0])
    const [lightbox, setLightbox] = useState<number | null>(null)

    return (
        <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl border-2 border-countryside-wood-200 kraft-paper overflow-hidden bg-countryside-straw-50 group cursor-zoom-in">
                <div className="relative w-full h-full" onClick={() => setLightbox(images.indexOf(selectedImage))}>
                    <Image
                        src={selectedImage}
                        alt={productName}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
                        <FiZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
                {images.map((image, i) => (
                    <motion.button
                        key={i}
                        onClick={() => setSelectedImage(image)}
                        className={`relative aspect-square rounded-lg border-2 overflow-hidden transition-all ${selectedImage === image ? 'border-countryside-leaf-500 ring-2 ring-countryside-leaf-300' : 'border-countryside-wood-200 hover:border-countryside-wood-300'
                            }`}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image src={image} alt={`${productName} ${i + 1}`} fill className="object-cover" />
                    </motion.button>
                ))}
            </div>

            {lightbox !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur p-4"
                    onClick={() => setLightbox(null)}
                >
                    <div className="relative w-full max-w-2xl aspect-square" onClick={(e) => e.stopPropagation()}>
                        <Image src={images[lightbox]} alt={productName} fill className="object-contain" />
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-countryside-wood-100 transition"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
    return (
        <main className="min-h-screen py-12 md:py-20">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Link
                        href="/#san-pham"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-countryside-wood-700 hover:bg-countryside-wood-100 transition-colors font-medium"
                    >
                        <FiArrowLeft size={18} />
                        Quay lại sản phẩm
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Images */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <ImageGallery images={product.images} productName={product.name} />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        {/* Tag and Title */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full kraft-paper border-2 border-countryside-leaf-300 text-countryside-leaf-600 text-xs font-semibold uppercase">
                                {product.tag}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-countryside-wood-900 font-display">{product.name}</h1>
                            <p className="text-lg text-countryside-earth-700 leading-relaxed">{product.description}</p>
                        </div>

                        {/* Price and Stock */}
                        <div className="rounded-2xl border-2 border-countryside-wood-200 kraft-paper p-6 space-y-4">
                            <div>
                                <div className="text-xs uppercase text-countryside-wood-600 font-semibold tracking-[0.1em] mb-2">Giá bán</div>
                                <div className="text-2xl font-bold text-countryside-leaf-600 font-display">{product.price}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className={`h-3 w-3 rounded-full ${product.inStock ? 'bg-countryside-leaf-500' : 'bg-red-500'}`} />
                                <span className="font-semibold text-countryside-wood-700">
                                    {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                                </span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-3 pt-4">
                            <a
                                href="tel:+84961234567"
                                className="flex items-center justify-center gap-3 w-full px-6 py-3.5 rounded-xl bg-countryside-leaf-600 text-white font-semibold shadow-handdrawn hover:bg-countryside-leaf-700 transition-all duration-300 border-2 border-countryside-leaf-700"
                            >
                                <FiPhone size={20} />
                                Liên hệ để đặt hàng
                            </a>
                            <a
                                href="https://zalo.me/0961234567"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full px-6 py-3 rounded-xl kraft-paper border-2 border-countryside-wood-300 text-countryside-wood-800 font-semibold hover:bg-countryside-wood-50 transition-all duration-300"
                            >
                                <FiMessageSquare size={20} />
                                Nhắn tin qua Zalo
                            </a>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 pt-4">
                            <div className="text-sm font-semibold text-countryside-wood-700 uppercase tracking-[0.1em]">Đặc điểm nổi bật</div>
                            <div className="space-y-2">
                                {product.features.slice(0, 4).map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-countryside-leaf-100 border border-countryside-leaf-300">
                                                <FiCheck size={16} className="text-countryside-leaf-600" />
                                            </div>
                                        </div>
                                        <span className="text-countryside-earth-700">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Full Description */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="rounded-2xl border-2 border-countryside-wood-200 kraft-paper p-8 md:p-10 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-countryside-wood-900 font-display">Chi tiết sản phẩm</h2>
                        <div className="prose prose-sm md:prose-base max-w-none text-countryside-earth-700 leading-relaxed space-y-4">
                            {parseMarkdown(product.fullDescription)}
                        </div>
                    </div>
                </motion.section>

                {/* Specifications */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8 mb-16"
                >
                    <div className="rounded-2xl border-2 border-countryside-wood-200 kraft-paper p-8 space-y-4">
                        <h3 className="text-xl font-bold text-countryside-wood-900 font-display">Thông số kỹ thuật</h3>
                        <div className="space-y-3">
                            {product.specs.map((spec, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3 pb-3 border-b border-countryside-wood-100 last:border-0"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <FiCheck size={18} className="text-countryside-leaf-600" />
                                    </div>
                                    <span className="text-countryside-earth-700">{spec}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border-2 border-countryside-wood-200 kraft-paper p-8 space-y-4">
                        <h3 className="text-xl font-bold text-countryside-wood-900 font-display">Tất cả đặc điểm</h3>
                        <div className="space-y-3">
                            {product.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <FiCheck size={18} className="text-countryside-leaf-600" />
                                    </div>
                                    <span className="text-countryside-earth-700">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border-2 border-countryside-leaf-300 kraft-paper p-8 md:p-12 space-y-6 text-center bg-countryside-leaf-50"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-countryside-wood-900 font-display">Quan tâm đến sản phẩm này?</h2>
                    <p className="text-lg text-countryside-earth-700 max-w-2xl mx-auto">
                        Hãy liên hệ với chúng tôi ngay để được tư vấn chi tiết, báo giá cạnh tranh và hỗ trợ đặt hàng nhanh chóng.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a
                            href="tel:+84961234567"
                            className="px-8 py-3.5 rounded-xl bg-countryside-leaf-600 text-white font-semibold hover:bg-countryside-leaf-700 transition-all duration-300 border-2 border-countryside-leaf-700 shadow-handdrawn inline-flex items-center justify-center gap-2"
                        >
                            <FiPhone size={20} />
                            Gọi ngay
                        </a>
                        <a
                            href="https://zalo.me/0961234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 rounded-xl kraft-paper border-2 border-countryside-wood-300 text-countryside-wood-800 font-semibold hover:bg-countryside-wood-50 transition-all duration-300 inline-flex items-center justify-center gap-2"
                        >
                            <FiMessageSquare size={20} />
                            Zalo chat
                        </a>
                    </div>
                </motion.section>
            </div>
        </main>
    )
}
