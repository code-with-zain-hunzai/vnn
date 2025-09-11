"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Support from "./Support"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <div className="relative w-full">
        <img src="/abouthero.png" alt="Coverage area" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-white font-montserrat text-5xl leading-tight tracking-normal text-center font-bold drop-shadow-lg">
          Contact Us
        </h1>
      </div>

      <div className=" container mx-auto pt-24 pb-60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map Section */}
          <div className="space-y-8">
            <div className="w-full h-[540px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.8456!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e8b4c8b7%3A0x8b4c8b7!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Interactive Map - Jakarta, Indonesia"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-normal text-gray-900">Personal Information</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="w-full bg-gray-100 border-0 rounded-md h-14"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="w-full bg-gray-100 border-0 rounded-md h-14"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-gray-100 border-0 rounded-md h-14"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full bg-gray-100 border-0 rounded-md h-14"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Your Message (Optional) <span className="text-red-500">*</span>
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full bg-gray-100 border-0 rounded-md min-h-40 resize-none"
                  placeholder=""
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-4 rounded-md text-base"
              >
                Submit Now
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Support />
    </>
  )
}
