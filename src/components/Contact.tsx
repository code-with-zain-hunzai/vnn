"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, ChevronRight } from "lucide-react"

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(3) // Fourth item expanded by default
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const faqs = [
    { question: "where can i view my sales receipt?" },
    { question: "how can i return an item?" },
    { question: "will you restock items indicated?" },
    {
      question: "where can i ship my order?",
      answer:
        "Consectetur Cras Scelerisque Dis Nec Mi Vestibulum Ullamcorper Turpis Enim Natoque Tempus A Malesuada Suspendisse Iaculis Adipiscing Himenaeos Tincidunt.Tellus Pharetra Dis Nostra Urna A Scelerisque Id Parturient Ullamcorper Ullamcorper Class Ad Consectetur Tristique Et. Hendrerit Mollis Facilisi Odio A Montes Scelerisque A Scelerisque Justo A Praesent Conubia Aenean Mi Tempor.",
    },
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className=" container mx-auto py-16 ">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ Section */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">INFORMATION QUESTIONS</p>
              <h1 className="text-3xl font-normal text-gray-900">Frequently asked questions</h1>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full text-left py-2 group"
                  >
                    <span className="text-lg text-gray-900 font-normal">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    )}
                  </button>

                  {expandedFaq === index && faq.answer && (
                    <div className="mt-4 text-sm text-gray-700 leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              ))}
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
                    className="w-full bg-gray-100 border-0 rounded-md h-12"
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
                    className="w-full bg-gray-100 border-0 rounded-md h-12"
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
                    className="w-full bg-gray-100 border-0 rounded-md h-12"
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
                    className="w-full bg-gray-100 border-0 rounded-md h-12"
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
                  className="w-full bg-gray-100 border-0 rounded-md min-h-32 resize-none"
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
    </div>
  )
}
