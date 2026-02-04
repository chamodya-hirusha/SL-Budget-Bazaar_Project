import type { Metadata } from "next"
import { CategoriesTable } from "@/components/admin/categories-table"

export const metadata: Metadata = {
  title: "Manage Categories | SL Budget Bazaar Admin",
  description: "Add, edit, and manage your product categories",
}

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Categories</h1>
        <p className="text-muted-foreground">
          Manage your product categories and organization
        </p>
      </div>
      <CategoriesTable />
    </div>
  )
}
