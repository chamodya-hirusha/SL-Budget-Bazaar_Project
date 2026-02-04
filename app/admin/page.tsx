import type { Metadata } from "next"
import Link from "next/link"
import {
  Package,
  FolderOpen,
  TrendingUp,
  AlertCircle,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { products, categories } from "@/store/product-store"

export const metadata: Metadata = {
  title: "Admin Dashboard | SL Budget Bazaar",
  description: "Manage your SL Budget Bazaar store",
}

export default function AdminDashboardPage() {
  const totalProducts = products.length
  const inStockProducts = products.filter((p) => p.inStock).length
  const outOfStockProducts = totalProducts - inStockProducts
  const featuredProducts = products.filter((p) => p.featured).length
  const totalCategories = categories.length

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: Package,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "In Stock",
      value: inStockProducts,
      icon: TrendingUp,
      color: "bg-secondary/10 text-secondary",
    },
    {
      title: "Out of Stock",
      value: outOfStockProducts,
      icon: AlertCircle,
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Categories",
      value: totalCategories,
      icon: FolderOpen,
      color: "bg-muted text-foreground",
    },
  ]

  const recentProducts = products.slice(0, 5)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your SL Budget Bazaar admin panel
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border/50 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-border/50 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/admin/products">
              <Button variant="outline" className="w-full justify-between rounded-xl bg-transparent">
                Manage Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/admin/categories">
              <Button variant="outline" className="w-full justify-between rounded-xl bg-transparent">
                Manage Categories
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-border/50 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg">Recent Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-foreground text-sm line-clamp-1">
                        {product.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        LKR {product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      product.inStock
                        ? "bg-secondary/10 text-secondary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out"}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
