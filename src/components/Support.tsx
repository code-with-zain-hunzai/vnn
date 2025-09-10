"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Support() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // Handle subscription logic here
  }

  return (
    <section className="absolute w-full py-16 px-6 md:py-20 lg:py-24 z-40 -translate-y-1/2">
      <div className="absolute inset-0 bg-custom-dark-gray container mx-auto rounded-xl">
        {/* Gradient overlay */}
        <div className="absolute inset-0" />
        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15v-30l-15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 w-full">
          {/* Left side - Text content */}
          <div className="flex-1 lg:max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Reach out to our team for inquiries or support.
            </h2>
          </div>

          {/* Right side - Email form */}
          <div className="flex-shrink-0 lg:w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-80 h-12 px-4 bg-white border-0 rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white/20 focus:outline-none"
                required
              />
              <Button
                type="submit"
                className="h-12 px-8 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg border-0 transition-colors duration-200 whitespace-nowrap"
              >
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
