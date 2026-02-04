"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/store/product-store"

const priceRanges = [
  { id: "under-1000", label: "Under LKR 1,000", min: 0, max: 1000 },
  { id: "1000-2500", label: "LKR 1,000 - 2,500", min: 1000, max: 2500 },
  { id: "2500-5000", label: "LKR 2,500 - 5,000", min: 2500, max: 5000 },
  { id: "over-5000", label: "Over LKR 5,000", min: 5000, max: Infinity },
]

export function ShopContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || ""

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [showInStockOnly, setShowInStockOnly] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        if (!matchesSearch) return false
      }

      // Category filter
      if (selectedCategories.length > 0) {
        const matchesCategory =
          selectedCategories.includes(product.category) ||
          (selectedCategories.includes("best-deals") && product.bestDeal)
        if (!matchesCategory) return false
      }

      // Price filter
      if (selectedPriceRanges.length > 0) {
        const matchesPrice = selectedPriceRanges.some((rangeId) => {
          const range = priceRanges.find((r) => r.id === rangeId)
          if (!range) return false
          return product.price >= range.min && product.price < range.max
        })
        if (!matchesPrice) return false
      }

      // Stock filter
      if (showInStockOnly && !product.inStock) {
        return false
      }

      return true
    })
  }, [searchQuery, selectedCategories, selectedPriceRanges, showInStockOnly])

  const toggleCategory = (categorySlug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categorySlug)
        ? prev.filter((c) => c !== categorySlug)
        : [...prev, categorySlug]
    )
  }

  const togglePriceRange = (rangeId: string) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(rangeId)
        ? prev.filter((r) => r !== rangeId)
        : [...prev, rangeId]
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedPriceRanges([])
    setShowInStockOnly(false)
  }

  const hasActiveFilters =
    searchQuery ||
    selectedCategories.length > 0 ||
    selectedPriceRanges.length > 0 ||
    showInStockOnly

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${category.slug}`}
                checked={selectedCategories.includes(category.slug)}
                onCheckedChange={() => toggleCategory(category.slug)}
              />
              <Label
                htmlFor={`cat-${category.slug}`}
                className="text-sm cursor-pointer"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center gap-2">
              <Checkbox
                id={`price-${range.id}`}
                checked={selectedPriceRanges.includes(range.id)}
                onCheckedChange={() => togglePriceRange(range.id)}
              />
              <Label
                htmlFor={`price-${range.id}`}
                className="text-sm cursor-pointer"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Availability</h3>
        <div className="flex items-center gap-2">
          <Checkbox
            id="in-stock"
            checked={showInStockOnly}
            onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
          />
          <Label htmlFor="in-stock" className="text-sm cursor-pointer">
            In Stock Only
          </Label>
        </div>
      </div>

      {hasActiveFilters && (
        <Button
          variant="outline"
          className="w-full rounded-xl bg-transparent"
          onClick={clearFilters}
        >
          Clear All Filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-32 bg-card border border-border rounded-2xl p-6">
          <h2 className="font-semibold text-lg text-foreground mb-4">Filters</h2>
          <FilterContent />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Search and Mobile Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-xl"
            />
          </div>
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden rounded-xl gap-2 bg-transparent">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {hasActiveFilters && (
                  <Badge className="ml-1 bg-primary text-primary-foreground">
                    {selectedCategories.length +
                      selectedPriceRanges.length +
                      (showInStockOnly ? 1 : 0)}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {selectedCategories.map((catSlug) => {
              const category = categories.find((c) => c.slug === catSlug)
              return (
                <Badge
                  key={catSlug}
                  variant="secondary"
                  className="gap-1 cursor-pointer hover:bg-secondary/80"
                  onClick={() => toggleCategory(catSlug)}
                >
                  {category?.name || catSlug}
                  <X className="h-3 w-3" />
                </Badge>
              )
            })}
            {selectedPriceRanges.map((rangeId) => {
              const range = priceRanges.find((r) => r.id === rangeId)
              return (
                <Badge
                  key={rangeId}
                  variant="secondary"
                  className="gap-1 cursor-pointer hover:bg-secondary/80"
                  onClick={() => togglePriceRange(rangeId)}
                >
                  {range?.label || rangeId}
                  <X className="h-3 w-3" />
                </Badge>
              )
            })}
            {showInStockOnly && (
              <Badge
                variant="secondary"
                className="gap-1 cursor-pointer hover:bg-secondary/80"
                onClick={() => setShowInStockOnly(false)}
              >
                In Stock Only
                <X className="h-3 w-3" />
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={clearFilters}
            >
              Clear all
            </Button>
          </div>
        )}

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredProducts.length} of {products.length} products
        </p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">
              No products found matching your criteria.
            </p>
            <Button onClick={clearFilters} className="rounded-xl">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
