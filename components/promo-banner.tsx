import { Truck, ShieldCheck, CreditCard, MessageCircle } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Islandwide Delivery",
    description: "We deliver to all areas in Sri Lanka",
  },
  {
    icon: CreditCard,
    title: "Cash on Delivery",
    description: "Pay when you receive your order",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    description: "100% authentic imported items",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Quick response via WhatsApp",
  },
]

export function PromoBanner() {
  return (
    <section className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-medium text-foreground text-sm sm:text-base">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
