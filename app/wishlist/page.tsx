"use client"

import { useState, useEffect } from "react"
import { useWishlistStore } from "@/store/wishlist-store"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag, ChevronLeft, Trash2 } from "lucide-react"
import Link from "next/link"

export default function WishlistPage() {
    const { items, clearWishlist } = useWishlistStore()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className="bg-muted/30 min-h-screen pb-20 font-sans">
            <div className="container mx-auto px-4 py-8">
                <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group"
                >
                    <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Shopping
                </Link>

                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl md:text-4xl font-black text-foreground flex items-center gap-3 uppercase tracking-tight">
                        <Heart className="h-8 w-8 text-red-500 fill-red-500" />
                        My Wishlist
                        <span className="text-lg font-bold text-muted-foreground ml-2">({items.length} items)</span>
                    </h1>
                    {items.length > 0 && (
                        <Button
                            variant="ghost"
                            onClick={clearWishlist}
                            className="text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-xl gap-2 font-bold uppercase tracking-widest text-[10px]"
                        >
                            <Trash2 className="h-4 w-4" />
                            Clear All
                        </Button>
                    )}
                </div>

                {items.length === 0 ? (
                    <div className="bg-background rounded-[2.5rem] p-12 md:p-20 text-center border border-border/40 shadow-sm overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500/20 via-red-500 to-red-500/20" />
                        <div className="bg-red-50 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart className="h-10 w-10 text-red-300" />
                        </div>
                        <h2 className="text-2xl font-black text-foreground mb-4 uppercase">Your wishlist is empty</h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            Save your favorite items here to keep track of what you love.
                            Start exploring our collection!
                        </p>
                        <Link href="/shop">
                            <Button size="lg" className="rounded-2xl px-10 font-black gap-2 h-14 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1">
                                <ShoppingBag className="h-5 w-5" />
                                GO SHOPPING
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
                        {items.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
