import Link from "next/link"
import { Phone, MapPin, Mail, Facebook, MessageCircle } from "lucide-react"

const footerLinks = {
  shop: [
    { href: "/shop?category=cosmetics-beauty", label: "Cosmetics & Beauty" },
    { href: "/shop?category=health-personal-care", label: "Health & Personal Care" },
    { href: "/shop?category=household-items", label: "Household Items" },
    { href: "/shop?category=electronic-items", label: "Electronic Items" },
    { href: "/shop?category=best-deals", label: "Best Deals" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/shop", label: "Shop All" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 font-sans border-t-4 border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                <img
                  src="/600329273_122099787717174597_8386731931325505866_n.jpg"
                  alt="SL Budget Bazaar Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none">
                SL Budget <br />
                <span className="text-[#0066B2]">Bazaar</span>
              </h3>
              <p className="text-sm text-zinc-400 font-medium tracking-wide uppercase">
                Best Value | Imported Cosmetics & More
              </p>
            </div>
            <p className="text-zinc-500 leading-relaxed text-sm max-w-sm">
              Sri Lanka's premier destination for high-end imported products. We bridge the gap between global quality and local affordability.
            </p>
            <div className="flex items-center gap-6">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: MessageCircle, href: "https://wa.me/94772845882", label: "WhatsApp" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer for desktop */}
          <div className="lg:col-span-1 hidden lg:block"></div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Explore</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Connect</h4>
            <div className="space-y-6">
              <div className="group flex items-center gap-4 cursor-pointer">
                <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-primary transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Call Us</p>
                  <p className="text-sm font-bold">077 284 5882</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 cursor-pointer">
                <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-primary transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Email</p>
                  <p className="text-sm font-bold">hello@slbudgetbazaar.lk</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 cursor-pointer">
                <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-primary transition-all shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Location</p>
                  <p className="text-sm font-bold leading-tight">Maradana Road, Colombo,<br />Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
          <p className="text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} SL Budget Bazaar. Visuals by Antigravity.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Cash on Delivery
            </span>
            <span className="flex items-center gap-2 border-l border-zinc-900 pl-8">
              <div className="h-1.5 w-1.5 rounded-full bg-[#00D1B2]" />
              Mintpay BNPL
            </span>
            <span className="flex items-center gap-2 border-l border-zinc-900 pl-8">
              <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Islandwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
