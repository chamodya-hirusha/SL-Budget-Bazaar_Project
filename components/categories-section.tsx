import React from "react"
import Link from "next/link"
import { Sparkles, HeartPulse, Home, Zap, Flame } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/store/product-store"

const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  "heart-pulse": HeartPulse,
  home: Home,
  zap: Zap,
  flame: Flame,
}

export function CategoriesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our wide selection of quality imported products across various categories
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Sparkles
            return (
              <Link
                key={category.id}
                href={`/shop?category=${category.slug}`}
              >
                <Card className="group hover:shadow-md transition-all duration-300 border-border/50 rounded-2xl h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
