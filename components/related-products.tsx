"use client"

import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/store/product-store"
import { products } from "@/store/product-store"

interface RelatedProductsProps {
  currentProduct: Product
  maxProducts?: number
}

export function RelatedProducts({
  currentProduct,
  maxProducts = 4,
}: RelatedProductsProps) {
  // Get products from the same category, excluding the current product
  const relatedProducts = products
    .filter(
      (p) =>
        p.category === currentProduct.category && p.id !== currentProduct.id
    )
    .slice(0, maxProducts)

  // If not enough products in same category, fill with featured products
  if (relatedProducts.length < maxProducts) {
    const featuredProducts = products
      .filter(
        (p) =>
          p.featured &&
          p.id !== currentProduct.id &&
          !relatedProducts.some((rp) => rp.id === p.id)
      )
      .slice(0, maxProducts - relatedProducts.length)

    relatedProducts.push(...featuredProducts)
  }

  // If still not enough, add random products
  if (relatedProducts.length < maxProducts) {
    const otherProducts = products
      .filter(
        (p) =>
          p.id !== currentProduct.id &&
          !relatedProducts.some((rp) => rp.id === p.id)
      )
      .slice(0, maxProducts - relatedProducts.length)

    relatedProducts.push(...otherProducts)
  }

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section className="py-20 md:py-24 border-t border-border/40 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16 gap-6 text-center md:text-left">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter">
              You May <span className="text-[#0066B2]">Also Like</span>
            </h2>
            <p className="text-muted-foreground font-black uppercase tracking-[0.4em] text-[10px] opacity-60">
              Selected specifically for you
            </p>
          </div>
          <Link href="/shop" className="hidden sm:block">
            <Button variant="outline" className="rounded-full px-8 font-black uppercase tracking-widest text-xs border-2 hover:bg-primary hover:text-white transition-all">
              Explore All
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link href="/shop">
            <Button className="w-full rounded-2xl h-14 font-black uppercase tracking-widest text-xs">
              Explore All Items
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
