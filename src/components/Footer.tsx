import { Facebook, Phone, MapPin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#191825] text-white">
      {/* Main footer content */}
      <div className="px-6 py-12 lg:px-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img src="/logo.svg" alt="logo" className="w-20 h-20 pb-5" />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <div className="w-4 h-4 bg-current rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Solution
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Link */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">Quick link</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-gray-300 text-sm">123 456 789</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-gray-300 text-sm">abc123@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#2A2F3C] px-6 py-4 lg:px-20">
        <p className="text-center text-gray-400 text-sm">
          Copyright © 2025 <span className="text-white">video vision media</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
