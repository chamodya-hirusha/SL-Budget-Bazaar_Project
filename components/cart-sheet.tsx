"use client"

import { useCartStore } from "@/store/cart-store"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useState, useEffect } from "react"

export function CartSheet() {
    const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCartStore()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    const itemCount = getTotalItems()
    const totalPrice = getTotalPrice()

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {itemCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground border-2 border-background">
                            {itemCount}
                        </Badge>
                    )}
                    <span className="sr-only">Shopping cart</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col sm:max-w-md p-0 overflow-hidden">
                <SheetHeader className="p-6 pb-4">
                    <SheetTitle className="flex items-center gap-2">
                        <ShoppingBag className="h-5 w-5 text-primary" />
                        Your Cart ({itemCount})
                    </SheetTitle>
                </SheetHeader>
                <Separator />

                {items.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center bg-muted/10">
                        <div className="h-24 w-24 rounded-full bg-muted/20 flex items-center justify-center">
                            <ShoppingCart className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-xl font-medium">Your cart is empty</p>
                            <p className="text-muted-foreground text-sm">
                                Looks like you haven't added anything to your cart yet.
                            </p>
                        </div>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="mt-4 rounded-xl px-8">
                                Start Shopping
                            </Button>
                        </SheetTrigger>
                    </div>
                ) : (
                    <>
                        <ScrollArea className="flex-1 px-6">
                            <div className="space-y-6 py-6 font-sans">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4 group">
                                        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-muted border border-border/50">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between py-0.5">
                                            <div className="space-y-1">
                                                <div className="flex justify-between items-start gap-2">
                                                    <h3 className="text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                                                        {item.name}
                                                    </h3>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-muted-foreground hover:text-destructive transition-colors"
                                                        aria-label="Remove item"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <p className="text-primary font-bold">LKR {item.price.toLocaleString()}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1 border border-border/30 shadow-inner">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-7 w-7 rounded-md hover:bg-background hover:text-primary transition-all shadow-sm"
                                                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-7 w-7 rounded-md hover:bg-background hover:text-primary transition-all shadow-sm"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <p className="text-sm font-medium text-muted-foreground">
                                                    Subtotal: <span className="text-foreground">LKR {(item.price * item.quantity).toLocaleString()}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        <div className="space-y-4 p-6 bg-muted/20 border-t font-sans">
                            <div className="space-y-2.5">
                                <div className="flex items-center justify-between text-muted-foreground text-sm">
                                    <span>Subtotal</span>
                                    <span>LKR {totalPrice.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center justify-between text-muted-foreground text-sm">
                                    <span>Delivery</span>
                                    <span className="text-accent font-medium italic">Calculated at checkout</span>
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between text-lg font-bold pt-1">
                                    <span>Total</span>
                                    <span className="text-primary">LKR {totalPrice.toLocaleString()}</span>
                                </div>
                            </div>
                            <SheetTrigger asChild>
                                <Link href="/checkout" className="block w-full">
                                    <Button className="w-full h-12 rounded-xl text-md font-bold gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                                        Proceed to Checkout
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </SheetTrigger>
                            <SheetTrigger asChild>
                                <Button variant="ghost" className="w-full rounded-xl hover:bg-muted/50 transition-colors">
                                    Continue Shopping
                                </Button>
                            </SheetTrigger>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    )
}
