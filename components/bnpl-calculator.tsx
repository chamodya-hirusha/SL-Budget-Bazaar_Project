"use client"

import { useState } from "react"
import { CreditCard, Calculator } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface BNPLCalculatorProps {
  price: number
}

export function BNPLCalculator({ price }: BNPLCalculatorProps) {
  // Mintpay: 3 equal monthly installments, 0% interest
  const mintpayInstallment = Math.ceil(price / 3)

  return (
    <Card className="border-border rounded-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4 bg-gradient-to-br from-[#00D4AA]/5 to-[#00D4AA]/10">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 rounded-xl bg-[#00D4AA]/10">
              <Calculator className="h-5 w-5 text-[#00D4AA]" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Pay with Mintpay</h4>
              <p className="text-sm text-muted-foreground">
                Split into 3 easy payments
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-[#00D4AA]/20">
              <span className="text-sm text-muted-foreground">Total Price</span>
              <span className="font-medium text-foreground">
                LKR {price.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[#00D4AA]/20">
              <span className="text-sm text-muted-foreground">Number of Installments</span>
              <span className="font-medium text-foreground">3 months</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[#00D4AA]/20">
              <span className="text-sm text-muted-foreground">Interest</span>
              <span className="font-medium text-secondary">0%</span>
            </div>
            <div className="flex justify-between items-center py-3 bg-[#00D4AA]/10 rounded-xl px-3 -mx-1">
              <span className="font-semibold text-foreground">Monthly Payment</span>
              <span className="text-xl font-bold text-[#00D4AA]">
                LKR {mintpayInstallment.toLocaleString()}/mo
              </span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white rounded-xl border border-[#00D4AA]/20">
            <div className="flex items-center gap-2 text-sm">
              <CreditCard className="h-4 w-4 text-[#00D4AA]" />
              <span className="text-muted-foreground">
                Available on any Visa/Mastercard
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
