import type { Metadata } from "next"
import { ShopContent } from "@/components/shop-content"

export const metadata: Metadata = {
  title: "Shop | SL Budget Bazaar",
  description:
    "Browse our collection of quality imported cosmetics, health products, household items, and electronics at unbeatable prices.",
}

export default function ShopPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            All Products
          </h1>
          <p className="text-muted-foreground">
            Discover quality imported products at the best prices
          </p>
        </div>
        <ShopContent />
      </div>
    </div>
  )
}
