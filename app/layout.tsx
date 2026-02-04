import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SL Budget Bazaar | Best Value Imported Cosmetics & More',
  description: 'Sri Lanka\'s trusted online store for imported cosmetics, health & personal care, household items, and electronics. Islandwide delivery with cash on delivery available.',
  keywords: ['Sri Lanka', 'online shopping', 'cosmetics', 'imported products', 'budget', 'islandwide delivery'],
  openGraph: {
    title: 'SL Budget Bazaar | Best Value Imported Cosmetics & More',
    description: 'Sri Lanka\'s trusted online store for imported cosmetics, health & personal care, household items, and electronics.',
    type: 'website',
    locale: 'en_LK',
  },
  icons: {
    icon: '/600329273_122099787717174597_8386731931325505866_n.jpg',
    apple: '/600329273_122099787717174597_8386731931325505866_n.jpg',
  },
}

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/sonner"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-center" />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
