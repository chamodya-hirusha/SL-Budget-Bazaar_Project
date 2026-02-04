import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedProducts } from "@/components/featured-products"
import { PromoBanner } from "@/components/promo-banner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PromoBanner />
      <CategoriesSection />
      <FeaturedProducts />
    </>
  )
}
