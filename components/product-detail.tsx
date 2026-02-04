"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ShoppingCart,
  MessageCircle,
  Minus,
  Plus,
  ChevronLeft,
  Truck,
  ShieldCheck,
  Package,
  Heart,
  Share2,
  CheckCircle2,
  Clock,
  Verified,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCartStore } from "@/store/cart-store"
import { useWishlistStore } from "@/store/wishlist-store"
import type { Product } from "@/store/product-store"
import { generateOrderLink } from "@/lib/whatsapp"
import { BNPLCalculator } from "@/components/bnpl-calculator"
import { RelatedProducts } from "@/components/related-products"
import { toast } from "sonner"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const addItem = useCartStore((state) => state.addItem)
  const { toggleItem, isInWishlist } = useWishlistStore()
  const isWishlisted = isInWishlist(product.id)

  useEffect(() => {
    setIsActive(true)
  }, [])

  const images = product.images?.length ? product.images : [product.image]

  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }
    toast.success(`Added ${quantity} ${product.name} to cart`, {
      description: "Quickly checkout or continue shopping!",
      icon: <ShoppingCart className="h-4 w-4 text-primary" />,
      className: "rounded-2xl font-sans",
    })
  }

  const handleWhatsAppOrder = () => {
    window.open(generateOrderLink(product.name, product.price, quantity), "_blank")
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.info("Link copied to clipboard!")
    }
  }

  const handleToggleWishlist = () => {
    toggleItem(product)
    if (!isWishlisted) {
      toast.success(`Added to wishlist!`, {
        icon: <Heart className="h-4 w-4 fill-red-500 text-red-500" />,
        className: "rounded-2xl font-sans",
      })
    }
  }

  if (!isActive) return null

  return (
    <div className="bg-background min-h-screen font-sans">
      {/* Top Banner / Breadcrumb area */}
      <div className="bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/shop"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Shop
            <span className="mx-2 text-border">/</span>
            <span className="text-foreground truncate max-w-[150px] sm:max-w-none">{product.name}</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-background transition-colors text-muted-foreground"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              onClick={handleToggleWishlist}
              className={`p-2 rounded-full hover:bg-background transition-colors ${isWishlisted ? "text-red-500 fill-red-500" : "text-muted-foreground"
                }`}
            >
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT COLUMN: Image Gallery */}
          <div className="space-y-6 lg:sticky lg:top-32">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-muted shadow-2xl shadow-primary/5 group">
              <Image
                src={images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Overlay Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                {hasDiscount && (
                  <div className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-black shadow-lg shadow-black/10 animate-in fade-in slide-in-from-left-4 duration-500">
                    -{discountPercent}% OFF
                  </div>
                )}
                {product.bestDeal && (
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-black shadow-lg shadow-black/10 flex items-center gap-1.5 animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
                    <Verified className="h-4 w-4" />
                    HOT DEAL
                  </div>
                )}
              </div>

              {!product.inStock && (
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="bg-background/90 text-foreground px-8 py-3 rounded-2xl font-black shadow-xl border border-border">
                    OUT OF STOCK
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex flex-wrap gap-4 px-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === index
                      ? "border-primary scale-105 shadow-lg shadow-primary/10"
                      : "border-transparent hover:border-primary/40 opacity-70 hover:opacity-100"
                      }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Product Details */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-md border-primary/20 bg-primary/5 text-primary">
                  {product.category.replace(/-/g, ' ')}
                </Badge>
                {product.inStock ? (
                  <div className="flex items-center gap-1.5 ml-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">In Stock</span>
                  </div>
                ) : (
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-2">Unavailable</span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-foreground leading-[1.1] tracking-tight text-balance uppercase">
                {product.name}
              </h1>

              <div className="flex flex-col gap-4">
                <div className="flex items-center flex-wrap gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-primary">
                      LKR {product.price.toLocaleString()}
                    </span>
                    {hasDiscount && (
                      <span className="text-xl text-muted-foreground line-through decoration-primary/30">
                        LKR {product.originalPrice!.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {hasDiscount && (
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-bold px-3 py-1">
                      Save LKR {(product.originalPrice! - product.price).toLocaleString()}
                    </Badge>
                  )}
                </div>

                {/* Mintpay BNPL Callout */}
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#00D1B2]/5 border border-[#00D1B2]/20 w-fit animate-in fade-in slide-in-from-bottom-2 duration-700">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">
                      Split into 3 interest-free payments of
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-[#00D1B2]">
                        LKR {Math.ceil(product.price / 3).toLocaleString()}
                      </span>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        per month
                      </span>
                    </div>
                  </div>
                  <div className="h-8 w-[1px] bg-[#00D1B2]/20 mx-1" />
                  <div className="flex flex-col items-center gap-0">
                    <span className="text-xs font-black text-[#00D1B2] italic tracking-tighter leading-none">mintpay</span>
                    <div className="flex gap-0.5 mt-0.5">
                      <div className="h-1 w-1 rounded-full bg-[#00D1B2]" />
                      <div className="h-1 w-1 rounded-full bg-[#00D1B2]/60" />
                      <div className="h-1 w-1 rounded-full bg-[#00D1B2]/30" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {product.description}
              </p>
            </div>

            <Separator className="bg-border/50" />

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1 bg-muted/50 rounded-[1.25rem] p-1.5 border border-border shadow-inner max-w-fit">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-xl hover:bg-background hover:text-primary transition-all shadow-sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={!product.inStock || quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center font-black text-lg">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-xl hover:bg-background hover:text-primary transition-all shadow-sm"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!product.inStock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-bold text-foreground">Total Price</p>
                  <p className="text-lg font-black text-primary">LKR {(product.price * quantity).toLocaleString()}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="flex-1 h-16 rounded-[1.25rem] gap-3 text-lg font-black shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1 active:translate-y-0"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-6 w-6" />
                  ADD TO CART
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 h-16 rounded-[1.25rem] gap-3 text-lg font-black border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent transition-all shadow-lg hover:shadow-secondary/20 shadow-none"
                  onClick={handleWhatsAppOrder}
                  disabled={!product.inStock}
                >
                  <MessageCircle className="h-6 w-6" />
                  WHATSAPP ORDER
                </Button>
              </div>
            </div>

            {/* Payment & Trust */}
            <div className="space-y-6 pt-6">
              <BNPLCalculator price={product.price * quantity} />

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-10 border-t border-border/50">
                <div className="flex items-start gap-3 group">
                  <div className="h-10 w-10 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-black uppercase tracking-tight">Islandwide</p>
                    <p className="text-[10px] text-muted-foreground font-medium">Safe delivery to your doorstep</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="h-10 w-10 rounded-2xl bg-secondary/5 flex items-center justify-center shrink-0 border border-secondary/10 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-black uppercase tracking-tight">Quality</p>
                    <p className="text-[10px] text-muted-foreground font-medium">100% Genuine imported products</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group md:col-span-1 col-span-2">
                  <div className="h-10 w-10 rounded-2xl bg-accent/5 flex items-center justify-center shrink-0 border border-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-sm">
                    <Package className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-black uppercase tracking-tight">COD Available</p>
                    <p className="text-[10px] text-muted-foreground font-medium">Pay only when you receive items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS TABS */}
        <div className="mt-24 max-w-4xl mx-auto">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full h-auto flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 bg-transparent p-0 mb-8 border-b border-border/50">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-2 py-4 text-sm font-black uppercase tracking-widest text-muted-foreground data-[state=active]:text-primary transition-all pb-4"
              >
                Full Details
              </TabsTrigger>
              <TabsTrigger
                value="delivery"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-2 py-4 text-sm font-black uppercase tracking-widest text-muted-foreground data-[state=active]:text-primary transition-all pb-4"
              >
                Shipping Policy
              </TabsTrigger>
              <TabsTrigger
                value="refund"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-2 py-4 text-sm font-black uppercase tracking-widest text-muted-foreground data-[state=active]:text-primary transition-all pb-4"
              >
                Return & Refund
              </TabsTrigger>
            </TabsList>

            <div className="bg-muted/10 rounded-[2.5rem] p-8 sm:p-12 border border-border/30">
              <TabsContent value="description" className="mt-0 outline-none">
                <article className="prose prose-primary max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-primary mb-2">
                      <Clock className="h-5 w-5" />
                      <h3 className="text-lg m-0 p-0">Detailed Overview</h3>
                    </div>
                    <p className="text-lg">{product.longDescription || product.description}</p>

                    {/* Feature list example */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-8">
                      {[
                        "Premium Imported Quality",
                        "Clinically/Laboratory Tested",
                        "Easy to Use & Long Lasting",
                        "Eco-friendly Packaging"
                      ].map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-background border border-border/50 shadow-sm">
                          <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                          <span className="text-sm font-bold text-foreground">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </TabsContent>

              <TabsContent value="delivery" className="mt-0 outline-none">
                <div className="space-y-8">
                  <div className="flex items-center gap-3 text-primary">
                    <Truck className="h-6 w-6" />
                    <h3 className="text-xl font-black uppercase tracking-tight m-0">Islandwide Shipping</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-black text-foreground uppercase tracking-widest text-xs">Colombo & Suburbs</h4>
                      <p className="text-muted-foreground leading-relaxed">Deliveries within Colombo and Greater Colombo area are usually completed within 24-48 hours. LKR 350 flat rate.</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-black text-foreground uppercase tracking-widest text-xs">Outstation Delivery</h4>
                      <p className="text-muted-foreground leading-relaxed">All other areas in Sri Lanka are delivered via trusted courier services within 3-5 business days. LKR 350-500 rate apply.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-bold text-secondary-foreground">Orders placed after 2PM will be processed the next business day.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="refund" className="mt-0 outline-none">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-primary">
                    <Package className="h-6 w-6" />
                    <h3 className="text-xl font-black uppercase tracking-tight m-0">Return Process</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    At SL Budget Bazaar, we prioritize your satisfaction. If you receive a damaged or incorrect item, please notify us via WhatsApp within 24 hours of delivery.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Items must be in original, unopened packaging.",
                      "Exchanges are processed for verified manufacturing defects.",
                      "Refunds are issued to the original payment method or via bank transfer.",
                      "Sale/Discounted items are non-returnable unless damaged."
                    ].map((step, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <RelatedProducts currentProduct={product} />
        </div>
      </div>
    </div>
  )
}

function Separator({ className }: { className?: string }) {
  return <div className={`h-px w-full ${className}`} />
}
