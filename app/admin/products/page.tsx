import type { Metadata } from "next"
import { ProductsTable } from "@/components/admin/products-table"

export const metadata: Metadata = {
  title: "Manage Products | SL Budget Bazaar Admin",
  description: "Add, edit, and manage your store products",
}

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Products</h1>
        <p className="text-muted-foreground">
          Manage your store inventory and product details
        </p>
      </div>
      <ProductsTable />
    </div>
  )
}
