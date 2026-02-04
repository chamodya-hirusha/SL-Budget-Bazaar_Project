"use client"

import { useState, useEffect } from "react"
import { useCartStore } from "@/store/cart-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Package, Truck, CreditCard, ChevronLeft, CheckCircle2, MessageSquare, Landmark, Wallet } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
    const { items, getTotalPrice, clearCart } = useCartStore()
    const [isMounted, setIsMounted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState<"cod" | "online" | "mint">("cod")
    const [orderNumber, setOrderNumber] = useState("")
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
    const router = useRouter()

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        notes: "",
    })

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    const totalPrice = getTotalPrice()
    const shipping = totalPrice > 5000 ? 0 : 350
    const finalTotal = totalPrice + shipping

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const onCompleteOrderClick = (e: React.FormEvent) => {
        e.preventDefault()
        // Validate form before opening modal (basic HTML5 validation is handled by form)
        const form = document.getElementById('checkout-form') as HTMLFormElement
        if (form.checkValidity()) {
            setIsPaymentModalOpen(true)
        } else {
            form.reportValidity()
        }
    }

    const handleFinalSubmit = (selectedMethod: "cod" | "online" | "mint") => {
        setPaymentMethod(selectedMethod)
        setIsPaymentModalOpen(false)
        setIsSubmitting(true)

        // Generate a random order number
        const randomOrder = `SBB-${Math.floor(100000 + Math.random() * 900000)}`
        setOrderNumber(randomOrder)

        // Simulate order processing
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSuccess(true)
            clearCart()
        }, 2000)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // This is now handled via handleFinalSubmit through the modal
    }

    if (isSuccess) {
        return (
            <div className="bg-[#FAFAFA] min-h-screen py-20 font-sans">
                <div className="container mx-auto px-4 max-w-2xl">
                    <Card className="rounded-[2.5rem] border-none shadow-2xl shadow-primary/5 overflow-hidden bg-white text-center">
                        <div className="bg-primary/5 py-12 flex flex-col items-center">
                            <div className="bg-green-100 h-20 w-20 rounded-full flex items-center justify-center mb-6 shadow-inner">
                                <CheckCircle2 className="h-10 w-10 text-green-600" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">Order Completed!</h1>
                            <p className="text-muted-foreground font-black uppercase tracking-widest text-[10px] mt-2 opacity-60">Reference: {orderNumber}</p>
                        </div>

                        <CardContent className="p-8 md:p-12 space-y-8">
                            <div className="space-y-4">
                                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                                    Thank you for shopping with <span className="text-primary font-bold">SL Budget Bazaar</span>.
                                    Your order has been logged into our system.
                                </p>

                                {paymentMethod === "online" && (
                                    <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20 text-left space-y-4">
                                        <div className="flex items-center gap-3 text-primary">
                                            <CreditCard className="h-5 w-5" />
                                            <p className="font-black uppercase tracking-wider text-sm">Transfer Details</p>
                                        </div>
                                        <div className="space-y-2 font-medium">
                                            <p className="text-sm flex justify-between border-b border-primary/10 pb-2">
                                                <span className="text-muted-foreground">Bank:</span>
                                                <span className="text-foreground font-bold">Commercial Bank of Ceylon</span>
                                            </p>
                                            <p className="text-sm flex justify-between border-b border-primary/10 pb-2">
                                                <span className="text-muted-foreground">Account Name:</span>
                                                <span className="text-foreground font-bold text-right">SL BUDGET BAZAAR PTY</span>
                                            </p>
                                            <p className="text-sm flex justify-between">
                                                <span className="text-muted-foreground">Account Number:</span>
                                                <span className="text-primary font-black text-lg">1000 4567 8901</span>
                                            </p>
                                        </div>
                                        <p className="text-[10px] text-muted-foreground italic text-center font-bold uppercase">
                                            Please share a screenshot of the receipt via WhatsApp to start delivery.
                                        </p>
                                    </div>
                                )}

                                {paymentMethod === "mint" && (
                                    <div className="bg-[#00D1B2]/5 rounded-3xl p-8 border border-[#00D1B2]/20 text-left space-y-4">
                                        <div className="flex items-center gap-3 text-[#00D1B2]">
                                            <div className="h-5 w-5 rounded-full bg-[#00D1B2] flex items-center justify-center text-white text-[10px] font-black">M</div>
                                            <p className="font-black uppercase tracking-wider text-sm">Mintpay BNPL</p>
                                        </div>
                                        <p className="text-sm text-foreground font-medium leading-relaxed">
                                            Our team will contact you shortly with the <span className="text-[#00D1B2] font-bold">Mintpay payment link</span> to complete your 3 interest-free installments.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <Button
                                    onClick={() => window.open(`https://wa.me/94772845882?text=Order%20Confirmation:%20${orderNumber}`, "_blank")}
                                    className="rounded-2xl h-14 font-black uppercase tracking-widest text-[11px] gap-3 bg-[#25D366] hover:bg-[#128C7E] shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-1"
                                >
                                    <MessageSquare className="h-4 w-4" />
                                    Contact Seller
                                </Button>
                                <Link href="/shop" className="block w-full">
                                    <Button variant="outline" className="w-full rounded-2xl h-14 font-black uppercase tracking-widest text-[11px] border-2 hover:bg-zinc-50 transition-all">
                                        Back to Shop
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center font-sans">
                <div className="max-w-md mx-auto space-y-6">
                    <div className="bg-muted h-24 w-24 rounded-full flex items-center justify-center mx-auto">
                        <ShoppingCart className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h1 className="text-3xl font-black uppercase">Your cart is empty</h1>
                    <p className="text-muted-foreground font-medium">Add some items to your cart before checking out.</p>
                    <div className="pt-6">
                        <Link href="/shop">
                            <Button size="lg" className="rounded-2xl px-10 font-bold uppercase tracking-widest text-xs h-14">
                                Go to Shop
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[#FAFAFA] min-h-screen pb-20 font-sans">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group font-bold uppercase tracking-widest text-[10px]"
                >
                    <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Shopping
                </Link>

                <h1 className="text-3xl md:text-4xl font-black text-foreground mb-10 flex items-center gap-4 uppercase tracking-tight">
                    <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                        <CreditCard className="h-6 w-6 text-white" />
                    </div>
                    Secure Checkout
                </h1>

                <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Form Section */}
                    <div className="lg:col-span-2 space-y-8">
                        <form onSubmit={handleSubmit} id="checkout-form" className="space-y-8">
                            <Card className="rounded-[2rem] border-none shadow-sm overflow-hidden bg-white">
                                <CardHeader className="border-b border-border/40 px-6 md:px-10 py-8">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black">
                                            01
                                        </div>
                                        <CardTitle className="text-xl font-black uppercase tracking-tight">
                                            Contact Info
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 md:p-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2.5">
                                            <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Full Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Your full name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full rounded-2xl h-14 border-zinc-200 bg-white px-6 text-base font-medium shadow-none focus-visible:ring-primary/20 transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2.5">
                                            <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="077 123 4567"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full rounded-2xl h-14 border-zinc-200 bg-white px-6 text-base font-medium shadow-none focus-visible:ring-primary/20 transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2.5 md:col-span-2">
                                            <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Email (Optional)</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full rounded-2xl h-14 border-zinc-200 bg-white px-6 text-base font-medium shadow-none focus-visible:ring-primary/20 transition-all"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="rounded-[2rem] border-none shadow-sm overflow-hidden bg-white">
                                <CardHeader className="border-b border-border/40 px-6 md:px-10 py-8">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black">
                                            02
                                        </div>
                                        <CardTitle className="text-xl font-black uppercase tracking-tight">
                                            Shipping Details
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="px-6 md:px-10 py-8 md:py-10 space-y-6">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="address" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Delivery Address</Label>
                                        <Textarea
                                            id="address"
                                            name="address"
                                            placeholder="House No, Street Name, Area"
                                            required
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full rounded-2xl min-h-[120px] resize-none border-zinc-200 focus-visible:ring-primary/20 p-6 text-base font-medium leading-normal bg-white"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="city" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">City / Town</Label>
                                        <Input
                                            id="city"
                                            name="city"
                                            placeholder="Colombo, Kandy, etc."
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full rounded-2xl h-14 border-zinc-200 focus-visible:ring-primary/20 px-6 text-base font-medium leading-normal bg-white"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="notes" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Order Notes (Optional)</Label>
                                        <Textarea
                                            id="notes"
                                            name="notes"
                                            placeholder="Any special instructions for delivery?"
                                            value={formData.notes}
                                            onChange={handleChange}
                                            className="w-full rounded-2xl min-h-[100px] resize-none border-zinc-200 focus-visible:ring-primary/20 p-6 text-base font-medium leading-normal bg-white"
                                        />
                                    </div>
                                </CardContent>
                            </Card>


                        </form>
                    </div>

                    {/* Summary Section */}
                    <div className="space-y-6">
                        <Card className="rounded-2xl border-none shadow-sm sticky top-28 overflow-hidden">
                            <CardHeader className="bg-background border-b border-border/50 px-6 py-5">
                                <CardTitle className="text-lg font-bold flex items-center gap-2">
                                    <Package className="h-5 w-5 text-primary" />
                                    Order Summary
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="space-y-4 max-h-[300px] overflow-auto pr-2 custom-scrollbar">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-3">
                                            <div className="h-16 w-16 shrink-0 rounded-lg overflow-hidden bg-muted">
                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex-1 space-y-0.5">
                                                <p className="text-sm font-bold line-clamp-1">{item.name}</p>
                                                <p className="text-xs text-muted-foreground">{item.quantity} x LKR {item.price.toLocaleString()}</p>
                                                <p className="text-sm font-bold text-primary">LKR {(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 space-y-4 px-1 font-sans">
                                    <div className="flex items-center justify-between text-muted-foreground text-sm tracking-tight">
                                        <span className="font-medium uppercase tracking-wider text-[10px]">Subtotal</span>
                                        <span className="font-bold text-foreground tabular-nums">LKR {totalPrice.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-muted-foreground text-sm tracking-tight">
                                        <span className="font-medium uppercase tracking-wider text-[10px]">Shipping Estimate</span>
                                        {shipping === 0 ? (
                                            <span className="text-[#008C44] font-black tracking-widest text-[10px] bg-[#008C44]/10 px-2 py-0.5 rounded">FREE</span>
                                        ) : (
                                            <span className="font-bold text-foreground tabular-nums">LKR {shipping.toLocaleString()}</span>
                                        )}
                                    </div>
                                    <Separator className="my-2 opacity-60" />
                                    <div className="flex items-center justify-between pt-2">
                                        <span className="text-sm font-black uppercase tracking-[0.15em] text-foreground">Total</span>
                                        <span className="text-2xl font-black text-primary tabular-nums tracking-tighter">LKR {finalTotal.toLocaleString()}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button
                                    type="button"
                                    onClick={onCompleteOrderClick}
                                    className="w-full h-14 rounded-xl text-lg font-bold gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1 active:translate-y-0"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        "Processing Order..."
                                    ) : (
                                        <>
                                            Complete Order
                                            <Package className="h-5 w-5" />
                                        </>
                                    )}
                                </Button>
                            </CardFooter>
                            <div className="p-4 bg-primary/5 text-center">
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                    Safe & Secure Checkout
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Payment Method Modal */}
                <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
                    <DialogContent className="max-w-md rounded-[2.5rem] p-0 overflow-hidden border-none bg-white shadow-2xl">
                        <DialogHeader className="bg-primary/5 p-8 text-left">
                            <DialogTitle className="text-2xl font-black uppercase tracking-tight">Select Payment Method</DialogTitle>
                            <DialogDescription className="font-bold text-muted-foreground uppercase tracking-widest text-[10px]">How would you like to pay today?</DialogDescription>
                        </DialogHeader>

                        <div className="p-6 space-y-4 bg-white">
                            <div
                                onClick={() => handleFinalSubmit("cod")}
                                className="group flex items-center gap-4 p-5 rounded-3xl border-2 border-zinc-100 hover:border-primary hover:bg-primary/5 cursor-pointer transition-all duration-300"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Truck className="h-7 w-7" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-black text-foreground uppercase tracking-tight text-sm">Cash on Delivery</h3>
                                    <p className="text-[11px] text-muted-foreground font-medium">Pay securely when you receive your order.</p>
                                </div>
                            </div>

                            <div
                                onClick={() => handleFinalSubmit("online")}
                                className="group flex items-center gap-4 p-5 rounded-3xl border-2 border-zinc-100 hover:border-primary hover:bg-primary/5 cursor-pointer transition-all duration-300"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <CreditCard className="h-7 w-7" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-black text-foreground uppercase tracking-tight text-sm">Online Payment</h3>
                                    <p className="text-[11px] text-muted-foreground font-medium">Bank Transfer, Cards or QR payments.</p>
                                </div>
                            </div>

                            <div
                                onClick={() => handleFinalSubmit("mint")}
                                className="group flex items-center gap-4 p-5 rounded-3xl border-2 border-zinc-100 hover:border-[#00D1B2] hover:bg-[#00D1B2]/5 cursor-pointer transition-all duration-300"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-[#00D1B2] group-hover:text-white transition-colors">
                                    <Wallet className="h-7 w-7" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-black text-foreground uppercase tracking-tight text-sm">Mintpay (Installments)</h3>
                                    <p className="text-[11px] text-muted-foreground font-medium text-[#00D1B2] font-black italic">3 Interest-free installments.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-50 p-4 text-center">
                            <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-2">
                                <Package className="h-3 w-3" /> Secure Order Confirmation
                            </p>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
