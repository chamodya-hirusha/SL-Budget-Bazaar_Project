"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import {
  ShoppingCart,
  Menu,
  X,
  Phone,
  Search,
  Facebook,
  ChevronLeft,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/store/cart-store"
import { useWishlistStore } from "@/store/wishlist-store"
import { CartSheet } from "@/components/cart-sheet"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const getTotalItems = useCartStore((state) => state.getTotalItems)
  const wishlistItems = useWishlistStore((state) => state.items)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-border/40"
        : "bg-background"
        }`}
    >
      {/* Top bar - Ultra thin & high end */}
      <div className="bg-[#0a0a0a] text-[10px] font-black uppercase tracking-[0.2em] text-white/60 py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              <Phone className="h-3 w-3" />
              <span>077 284 5882</span>
            </div>
          </div>
          <span className="hidden sm:block">Sri Lanka • Islandwide Shipping • Best Value</span>
          <span className="sm:hidden">Islandwide Delivery</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div className="relative h-9 w-9 md:h-12 md:w-12 rounded-xl overflow-hidden shadow-sm group-hover:scale-110 transition-transform duration-300 shrink-0">
              <img
                src="/600329273_122099787717174597_8386731931325505866_n.jpg"
                alt="SL Budget Bazaar Icon"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-lg md:text-2xl font-black italic tracking-tighter uppercase leading-none text-[#0066B2] group-hover:translate-x-1 transition-transform duration-300 whitespace-nowrap">
                SL Budget <span className="text-foreground">Bazaar</span>
              </span>
              <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground mt-1 whitespace-nowrap">
                Imported Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/60 hover:text-[#0066B2] transition-all relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0066B2] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <Link href="/shop" className="hidden sm:flex">
              <Button variant="ghost" size="icon" className="hover:bg-primary/5 rounded-full">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </Link>

            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative hover:bg-red-50 rounded-full group">
                <Heart className={`h-5 w-5 transition-colors ${wishlistItems.length > 0 ? "text-red-500 fill-red-500" : "text-foreground group-hover:text-red-500"}`} />
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 hover:bg-red-600 text-[10px] border-2 border-background">
                    {wishlistItems.length}
                  </Badge>
                )}
                <span className="sr-only">Wishlist</span>
              </Button>
            </Link>

            <CartSheet />

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden hover:bg-primary/5 rounded-full">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md p-0 bg-background border-none overflow-hidden flex flex-col">
                <SheetTitle className="sr-only">Menu</SheetTitle>

                {/* Mobile Menu Header */}
                <div className="p-8 border-b border-border/40 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black italic tracking-tighter uppercase leading-none text-[#0066B2]">
                      SL Budget <span className="text-foreground">Bazaar</span>
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 overflow-y-auto px-8 py-12">
                  <nav className="flex flex-col gap-10">
                    {navLinks.map((link, i) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between"
                      >
                        <span className="text-3xl font-black uppercase tracking-tight text-foreground group-hover:text-[#0066B2] transition-all">
                          {link.label}
                        </span>
                        <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-[#0066B2] group-hover:text-white group-hover:border-[#0066B2] transition-all">
                          <ChevronLeft className="h-5 w-5 rotate-180" />
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-8 bg-muted/30 space-y-8 mt-auto">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Quick Contact</p>
                    <div className="flex flex-col gap-3">
                      <a href="tel:0772845882" className="text-lg font-bold flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center border border-border shadow-sm">
                          <Phone className="h-4 w-4 text-[#0066B2]" />
                        </div>
                        077 284 5882
                      </a>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border flex items-center gap-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-auto">Follow Us</p>
                    <div className="flex gap-4">
                      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-[#0066B2] hover:text-white transition-all cursor-pointer">
                        <Facebook className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
