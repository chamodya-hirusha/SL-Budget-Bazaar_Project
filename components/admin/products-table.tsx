"use client"

import { useState } from "react"
import { Search, Plus, Pencil, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { products, categories } from "@/store/product-store"

export function ProductsTable() {
  const [searchQuery, setSearchQuery] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getCategoryName = (categorySlug: string) => {
    const category = categories.find((c) => c.slug === categorySlug)
    return category?.name || categorySlug
  }

  const handleDelete = (productId: string) => {
    setSelectedProduct(productId)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    // In a real app, this would call an API to delete the product
    console.log("Deleting product:", selectedProduct)
    setDeleteDialogOpen(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <Card className="border-border/50 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-xl"
            />
          </div>
          <Button className="rounded-xl gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-foreground line-clamp-1">
                        {product.name}
                      </p>
                      <p className="text-xs text-muted-foreground md:hidden">
                        {getCategoryName(product.category)}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <span className="text-sm text-muted-foreground">
                      {getCategoryName(product.category)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div>
                      <span className="font-medium">
                        LKR {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through ml-2">
                          {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge
                      variant={product.inStock ? "default" : "secondary"}
                      className={
                        product.inStock
                          ? "bg-secondary/10 text-secondary hover:bg-secondary/10"
                          : ""
                      }
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2">
                          <Pencil className="h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="gap-2 text-destructive"
                          onClick={() => handleDelete(product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">
            No products found matching your search.
          </div>
        )}
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this product? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              className="rounded-xl"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
              className="rounded-xl"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
