"use client";
import { useState } from "react";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("Distribution");

  const navigationItems = [
    "Distribution",
    "Payout",
    "Creative",
    "Cloud",
    "Satellite & IoT",
    "Network",
    "Asst Mgmt",
    "Teleport",
  ];

  return (
    <div className=" container mx-auto">
      <div className="flex">
        {/* Left Sidebar Navigation */}
        <div className="w-64 bg-white border-r-4 border-gray-200 min-h-screen p-6">
          <nav className="space-y-2 font-medium">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveService(item)}
                className={`w-full text-left px-4 py-3 rounded-full text-sm font-bold transition-colors ${
                  activeService === item
                    ? "bg-red-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 ml-12">
          {/* Header Section */}
          <div className="relative">
            <img
              src="/services.png"
              alt="Services background"
              className=" w-full h-96 object-cover"
            />

            <div className="absolute inset-0  bg-opacity-50 flex items-center">
              <div className="flex items-center justify-between  w-full px-12">
                <div className="flex-1 text-white">
                  <h1 className="text-4xl font-bold text-red-500 mb-4">
                    Distribution
                  </h1>
                  <h2 className="text-xl font-semibold mb-4">
                    Why Choose Our Distribution Services
                  </h2>
                  <ul className="space-y-2 text-sm">
                    <li>• 99.99% uptime with 24/7 network monitoring</li>
                    <li>
                      • Access to global satellite, fiber, and IP infrastructure
                    </li>
                    <li>
                      • Proven expertise in sports, live events, and broadcast
                      networks
                    </li>
                    <li>
                      • Reliable delivery across broadcast, OTT, and hybrid
                      platforms
                    </li>
                    <li>
                      • End-to-end service — from encoding to last-mile
                      distribution
                    </li>
                  </ul>
                </div>
                <div className="ml-8 -mb-[280px]">
                  <img
                    src="/services1.png"
                    alt="Satellite dish"
                    className="w-[400px] h-[400px] object-cover rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto  pt-8 space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Distribution Services
              </h3>
              <p className="text-gray-700 leading-relaxed w-[600px]">
                Our distribution services are designed with global reliability
                and global reach. Whether through satellite, fiber, IP, or OTT
                platforms, our distribution solutions guarantee that your
                audience receives high-quality content — anywhere in the world,
                on any device.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fiber & IP Distribution Networks
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our managed fiber and IP backbone connects major broadcast hubs,
                ensuring low latency, high-capacity delivery of live and
                on-demand content. From contribution feeds to multi-region
                distribution, we deliver content with speed, security, and
                carrier-grade performance.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Broadcast Contribution Services
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From breaking news to live sporting events, we specialize in
                contribution feeds and remote integration. Our solutions cover
                DSNG uplinks, IP contribution, and global distribution of live
                feeds — delivering your content where it's needed, with
                broadcast-grade quality and ultra-low latency.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Satellite Distribution
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We provide global uplink, downlink, and turnaround services for
                broadcasters, media networks, and live event organizers. With
                access to leading GEO, MEO, and LEO satellites, we deliver
                seamless coverage, resilient redundancy, and 24/7 monitored
                reliability.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                OTT & Streaming Distribution
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We help content owners and platforms reach audiences directly
                via OTT and streaming services. Our workflows include encoding,
                adaptive bitrate (ABR) packaging, CDN integration, and
                multi-device delivery — ensuring your content scales smoothly
                across web, mobile, and smart TVs.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Remote Production
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We enable broadcasters and event organizers to produce live
                content remotely, reducing on-site costs while maintaining
                quality. By combining IP contribution, cloud integration, and
                remote switching, we help you cover events more efficiently,
                flexibly, and securely.
              </p>
            </section>
          </div>
        </div>
      </div>


      
    </div>
  );
}
