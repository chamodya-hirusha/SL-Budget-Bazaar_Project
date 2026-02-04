import type { Metadata } from "next"
import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | SL Budget Bazaar",
  description:
    "Get in touch with SL Budget Bazaar. We are here to help with your orders and inquiries.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "077 284 5882",
    description: "Call us for quick assistance",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: "077 284 5882",
    description: "Chat with us on WhatsApp",
    link: "https://wa.me/94772845882",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@slbudgetbazaar.lk",
    description: "Send us an email anytime",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Maradana Road, Colombo",
    description: "Sri Lanka",
  },
]

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or need help with your order? We are here to assist
            you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We love hearing from our customers. Reach out to us through
                  any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card
                    key={item.title}
                    className="border-border/50 rounded-2xl"
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.details}</p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="border-border/50 rounded-2xl">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-medium text-foreground">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/50 rounded-2xl">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
