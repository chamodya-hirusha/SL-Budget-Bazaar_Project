"use client"

import React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-secondary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Message Sent!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. We will get back to you soon.
        </p>
        <Button
          variant="outline"
          className="rounded-xl bg-transparent"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="077 XXX XXXX"
            required
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email (Optional)</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          className="rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          rows={5}
          required
          className="rounded-xl resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-xl gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin">
              <Send className="h-4 w-4" />
            </span>
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
