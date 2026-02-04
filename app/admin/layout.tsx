import React from "react"
import Link from "next/link"
import { LayoutDashboard, Package, FolderOpen, ArrowLeft } from "lucide-react"

const adminNavLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/categories", label: "Categories", icon: FolderOpen },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 border-r border-border bg-background">
          <div className="p-6 border-b border-border">
            <h2 className="font-bold text-lg text-foreground">Admin Panel</h2>
            <p className="text-xs text-muted-foreground">SL Budget Bazaar</p>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            {adminNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-border">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Store
            </Link>
          </div>
        </aside>

        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-foreground">Admin Panel</h2>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Back to Store
            </Link>
          </div>
          <nav className="flex gap-2 mt-3 overflow-x-auto pb-1">
            {adminNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted text-sm whitespace-nowrap"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-6 pt-32 md:pt-6">{children}</main>
      </div>
    </div>
  )
}
