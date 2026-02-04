import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/store/product-store"

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tighter leading-none">
              Featured <span className="text-[#0066B2]">Selection</span>
            </h2>
            <p className="text-muted-foreground font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Handpicked imports for the culture
            </p>
          </div>
          <Link href="/shop" className="w-full md:w-auto hidden sm:block">
            <Button size="lg" variant="outline" className="w-full md:w-auto rounded-[1.25rem] border-2 border-primary text-primary hover:bg-primary hover:text-white font-black uppercase tracking-widest text-xs px-8 h-14 transition-all">
              View All
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
          {featuredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 sm:hidden">
          <Link href="/shop">
            <Button size="lg" className="w-full rounded-2xl h-14 font-black uppercase tracking-widest text-xs">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
