const WHATSAPP_NUMBER = "94772845882"

export function generateWhatsAppMessage(
  productName: string,
  price: number,
  quantity: number = 1
): string {
  return encodeURIComponent(
    `Hello SL Budget Bazaar 👋
I would like to order:

Product: ${productName}
Price: LKR ${price.toLocaleString()}
Quantity: ${quantity}

Please confirm availability.`
  )
}

export function generateWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

export function generateOrderLink(
  productName: string,
  price: number,
  quantity: number = 1
): string {
  const message = generateWhatsAppMessage(productName, price, quantity)
  return generateWhatsAppLink(message)
}

export function getWhatsAppChatLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}`
}
