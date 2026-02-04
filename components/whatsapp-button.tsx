"use client"

import { MessageCircle } from "lucide-react"
import { getWhatsAppChatLink } from "@/lib/whatsapp"

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppChatLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
