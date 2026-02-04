import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProductBySlug, products } from "@/store/product-store"
import { ProductDetail } from "@/components/product-detail"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found | SL Budget Bazaar",
    }
  }

  return {
    title: `${product.name} | SL Budget Bazaar`,
    description: product.description,
    openGraph: {
      title: `${product.name} | SL Budget Bazaar`,
      description: product.description,
      images: [product.image],
    },
  }
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
