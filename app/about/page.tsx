import type { Metadata } from "next"
import { ShieldCheck, Truck, Users, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us | SL Budget Bazaar",
  description:
    "Learn about SL Budget Bazaar - Sri Lanka's trusted online store for quality imported products at unbeatable prices.",
}

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "We source only genuine, high-quality imported products that meet international standards.",
  },
  {
    icon: Truck,
    title: "Nationwide Reach",
    description:
      "We deliver to every corner of Sri Lanka, ensuring everyone can access quality products.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Our friendly team is always ready to assist you via WhatsApp for a seamless shopping experience.",
  },
  {
    icon: Heart,
    title: "Best Value",
    description:
      "We believe quality shouldn't break the bank. Enjoy premium products at budget-friendly prices.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About SL Budget Bazaar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your trusted Sri Lankan online store for quality imported products at
            unbeatable prices.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SL Budget Bazaar was founded with a simple mission: to bring
                quality imported products to Sri Lankan homes at prices everyone
                can afford. We understand that our customers deserve the best,
                and we work tirelessly to deliver just that.
              </p>
              <p>
                Based in Colombo, we have grown from a small local business to a
                trusted name in online retail. Our team carefully selects each
                product, ensuring that what reaches your doorstep meets the
                highest standards of quality and authenticity.
              </p>
              <p>
                Whether you are looking for the latest cosmetics, health and
                personal care items, household essentials, or electronic gadgets,
                we have got you covered. Our islandwide delivery means no matter
                where you are in Sri Lanka, quality products are just a click
                away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-border/50 rounded-2xl hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Shop?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Browse our collection of quality products and experience the SL
            Budget Bazaar difference.
          </p>
          <a
            href="/shop"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            Browse Products
          </a>
        </div>
      </section>
    </div>
  )
}
