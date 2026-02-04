"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "./product-store"

interface WishlistStore {
    items: Product[]
    toggleItem: (product: Product) => void
    removeItem: (id: string) => void
    isInWishlist: (id: string) => boolean
    clearWishlist: () => void
}

export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            items: [],
            toggleItem: (product) =>
                set((state) => {
                    const exists = state.items.some((i) => i.id === product.id)
                    if (exists) {
                        return { items: state.items.filter((i) => i.id !== product.id) }
                    }
                    return { items: [...state.items, product] }
                }),
            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                })),
            isInWishlist: (id) => get().items.some((i) => i.id === id),
            clearWishlist: () => set({ items: [] }),
        }),
        {
            name: "sl-budget-bazaar-wishlist",
        }
    )
)
