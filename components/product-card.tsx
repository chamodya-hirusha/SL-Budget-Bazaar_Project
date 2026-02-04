"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"
import {
  ShoppingCart,
  MessageCircle,
  Verified,
  Heart,
  Star,
  StarHalf,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/store/cart-store"
import { useWishlistStore } from "@/store/wishlist-store"
import { toast } from "sonner"
import type { Product } from "@/store/product-store"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const { toggleWishlist, isInWishlist } = useWishlistStore()
  const isWishlisted = isInWishlist(product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product)
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
      action: {
        label: "View Cart",
        onClick: () => (window.location.href = "/cart"),
      },
    })
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleWishlist(product)
  }

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault()
    const message = `Hi SL Budget Bazaar, I'm interested in: ${product.name} (LKR ${product.price}). Is it available?`
    window.open(`https://wa.me/94772845882?text=${encodeURIComponent(message)}`, "_blank")
  }

  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0

  return (
    <div className="group relative flex flex-col font-sans transition-all duration-300">
      <Link href={`/product/${product.slug}`} className="block">
        {/* Photo Container */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted/50 mb-3 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Wishlist Toggle Overlay */}
          <button
            onClick={handleWishlist}
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md border border-white/20 transition-all hover:scale-110 active:scale-90 z-10"
          >
            <Heart className={`h-4 w-4 transition-colors ${isWishlisted ? "fill-red-500 text-red-500" : "text-zinc-400"}`} />
          </button>

          {/* WhatsApp Quick Link */}
          <button
            onClick={handleWhatsAppOrder}
            className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-[#25D366]/90 backdrop-blur-sm flex items-center justify-center shadow-md text-white transition-all hover:scale-110 active:scale-90 opacity-0 group-hover:opacity-100 z-10"
          >
            <MessageCircle className="h-4 w-4" />
          </button>
        </div>

        {/* Info Styling based on upload photo */}
        <div className="space-y-1 px-1">
          <h3 className="text-[13px] md:text-sm font-medium text-foreground line-clamp-2 leading-tight min-h-[2.5rem]">
            {product.name}
          </h3>

          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap items-baseline gap-1.5 min-w-0">
              <span className="text-[11px] font-bold text-foreground">LKR</span>
              <span className="text-base md:text-lg font-bold text-foreground">
                {product.price.toLocaleString()}
              </span>
              {hasDiscount && (
                <span className="text-[11px] text-muted-foreground line-through opacity-60">
                  {product.originalPrice?.toLocaleString()}
                </span>
              )}
              {product.soldCount && (
                <span className="text-[10px] text-muted-foreground ml-0.5">
                  {product.soldCount} sold
                </span>
              )}
            </div>

            <Button
              onClick={handleAddToCart}
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-zinc-200 shrink-0 hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-0.5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => {
                const rating = product.rating || 5
                const isFull = i < Math.floor(rating)
                const isHalf = i === Math.floor(rating) && rating % 1 !== 0
                return (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${isFull || isHalf ? "fill-foreground text-foreground" : "text-zinc-200"}`}
                  />
                )
              })}
            </div>
            {product.reviews && (
              <span className="text-[10px] text-muted-foreground font-medium">
                {product.reviews.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
