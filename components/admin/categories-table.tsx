"use client"

import React from "react"

import { useState } from "react"
import { Plus, Pencil, Trash2, MoreHorizontal, Sparkles, HeartPulse, Home, Zap, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import { categories, products } from "@/store/product-store"

const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  "heart-pulse": HeartPulse,
  home: Home,
  zap: Zap,
  flame: Flame,
}

export function CategoriesTable() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const getProductCount = (categorySlug: string) => {
    if (categorySlug === "best-deals") {
      return products.filter((p) => p.bestDeal).length
    }
    return products.filter((p) => p.category === categorySlug).length
  }

  const handleDelete = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    // In a real app, this would call an API to delete the category
    console.log("Deleting category:", selectedCategory)
    setDeleteDialogOpen(false)
    setSelectedCategory(null)
  }

  return (
    <>
      <Card className="border-border/50 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {categories.length} categories
          </p>
          <Button className="rounded-xl gap-2">
            <Plus className="h-4 w-4" />
            Add Category
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Icon</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden sm:table-cell">Slug</TableHead>
                <TableHead>Products</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => {
                const Icon = iconMap[category.icon] || Sparkles
                return (
                  <TableRow key={category.id}>
                    <TableCell>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-foreground">
                          {category.name}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {category.description}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        {category.slug}
                      </code>
                    </TableCell>
                    <TableCell>
                      <span className="text-foreground font-medium">
                        {getProductCount(category.slug)}
                      </span>
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
                            onClick={() => handleDelete(category.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Category</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this category? Products in this
              category will need to be reassigned.
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
