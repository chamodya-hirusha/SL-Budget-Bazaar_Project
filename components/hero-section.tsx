import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppChatLink } from "@/lib/whatsapp"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block">
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
                Islandwide Delivery Available
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Best Value on{" "}
              <span className="text-primary">Imported Products</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
              Discover quality cosmetics, health products, household items, and electronics at unbeatable prices. Your trusted Sri Lankan online store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/shop">
                <Button size="lg" className="rounded-xl gap-2 w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href={getWhatsAppChatLink()} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl gap-2 w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Order
                </Button>
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/622386180_122111547567174597_6137289065850922957_n.jpg"
                    alt="Featured Product 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-52 rounded-2xl bg-secondary/10 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/624501553_122112338127174597_6962996933283341695_n.jpg"
                    alt="Featured Product 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-52 rounded-2xl bg-accent/10 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/624537658_122112338535174597_1847709266028249727_n.jpg"
                    alt="Featured Product 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/624539343_122112337995174597_3744102031025408787_n.jpg"
                    alt="Featured Product 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
