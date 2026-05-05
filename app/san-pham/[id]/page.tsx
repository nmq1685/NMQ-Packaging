import type { Metadata } from 'next'
import { ProductDetail } from '@/components/ProductDetail'
import { getProductById, products } from '@/lib/products'
import { notFound } from 'next/navigation'

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params
    const product = getProductById(id)

    if (!product) {
        return {
            title: 'Sản phẩm không tìm thấy',
        }
    }

    return {
        title: `${product.name} | Túi Bao Xoài Minh Quân`,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 800,
                    alt: product.name,
                },
            ],
        },
    }
}

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }))
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params
    const product = getProductById(id)

    if (!product) {
        notFound()
    }

    return <ProductDetail product={product} />
}
