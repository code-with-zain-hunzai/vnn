"use client";
import { useState } from "react";
import GetTouch from "./getTouch";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("Broadcast & Media");

  const tabItems = [
    "Broadcast & Media",
    "Sports & Live Events",
    "Telecom & ISPs",
    "Enterprise & Corporate",
    "Maritime & Aviation",
    "Government & Defence",
  ];

  return (
    <>
      <div className="relative w-full">
        <img src="/abouthero.png" alt="Coverage area" className="w-full" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-7xl font-bold mb-4">Our Solutions</h1>
          <p className="text-lg    max-w-4xl">
            At Video Vision Media, we deliver solutions tailored to the
            industries we serve. From live sports to government communications,
            our expertise ensures content and connectivity are always reliable,
            always secure, and always ready for global audiences.
          </p>
        </div>
      </div>

      <div className=" container mx-auto py-16">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-8">
            {tabItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === item
                    ? "border-red-500 text-red-500"
                    : "border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className=" mx-auto py-12">
          <div className="flex items-start gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-red-500 mb-6">
                Broadcast & Media
              </h1>

              <div className="space-y-4 text-gray-700 mb-8">
                <p>
                  We help TV networks, OTT platforms, and content owners
                  distribute, monetize, and protect content worldwide. Playout,
                  cloud, and compliance services.
                </p>
                <p>
                  OTT-ready workflows with CDN, DRM, and multi-platform
                  delivery.
                </p>
                <p>
                  Trusted reliability for linear, VOD, and digital-first
                  audiences.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Us Across Industries
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • End-to-end services: from creative to playout to delivery.
                </li>
                <li>
                  • Multi-industry expertise proven across broadcast,
                  enterprise, telecom, and government.
                </li>
                <li>
                  • Global infrastructure spanning satellite, cloud, and IP
                  networks.
                </li>
                <li>
                  • 24/7 operations and monitoring for mission-critical
                  reliability
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0 mt-12">
              <img
                src="/services1.png"
                alt="Satellite dish equipment"
                className="w-[400px] h-[400px] object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>

{/* who are we */}
      <div className="relative">
        <img
          src="/services.png"
          alt="Services background"
          className=" w-full h-96 object-cover"
        />
        <div className="absolute inset-0  bg-opacity-50 flex  items-center">
          <div className="flex items-center justify-between container mx-auto ">
            <div className="flex-1 text-white">
              <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
              <p>
                Video Vision Media is a next-generation media technology and
                satellite services company. We empower broadcasters, telecom
                operators, enterprises, and governments to connect, create, and
                deliver content seamlessly anytime, anywhere, on any platform.
                From our hubs in the UK, UAE, India and Singapore, we bring
                together satellite, cloud, and IP networks with creative
                post-production services, studio and playout services, giving
                our clients end-to-end solutions that are reliable, innovative,
                and scalable.
              </p>
            </div>
            <div className="ml-8 -mb-[150px]">
              <img
                src="/services1.png"
                alt="Satellite dish"
                className="w-[400px] h-[400px] object-cover rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>


      <GetTouch />
    </>
  );
}
