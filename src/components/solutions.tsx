"use client";
import { useState } from "react";
import GetTouch from "./getTouch";

interface TabContent {
  title: string;
  description: string[];
  bulletPoints: string[];
  image: string;
}

const tabContents: Record<string, TabContent> = {
  "Broadcast & Media": {
    title: "Broadcast & Media",
    description: [
      "We help TV networks, OTT platforms, and content owners distribute, monetize,",
      "and protect content worldwide. Playout, cloud, and compliance services.",
      "OTT-ready workflows with CDN, DRM, and multi-platform delivery.",
      "Trusted reliability for linear, VOD, and digital-first audiences."
    ],
    bulletPoints: [
      "End-to-end services: from creative to playout to delivery.",
      "Multi-industry expertise proven across broadcast, enterprise, telecom, and government.",
      "Global infrastructure spanning satellite, cloud, and IP networks.",
      "24/7 operations and monitoring for mission-critical reliability"
    ],
    image: "/services1.png"
  },
  "Sports & Live Events": {
    title: "Sports & Live Events",
    description: [
      "We help TV networks, OTT platforms, and content owners distribute, monetize,",
      "and protect content worldwide. Playout, cloud, and compliance services.",
      "OTT-ready workflows with CDN, DRM, and multi-platform delivery.",
      "Trusted reliability for linear, VOD, and digital-first audiences."
    ],
    bulletPoints: [
      "End-to-end services: from creative to playout to delivery.",
      "Multi-industry expertise proven across broadcast, enterprise, telecom, and government.",
      "Global infrastructure spanning satellite, cloud, and IP networks.",
      "24/7 operations and monitoring for mission-critical reliability"
    ],
    image: "/stadium.png"
  },
  "Telecom & ISPs": {
    title: "Telecom & ISPs",
    description: [
      "We partner with carriers, mobile operators, and ISPs to extend their reach and resilience.Fiber/IP backbone and Tier-1 IP transit",
      "Wholesale backhaul and network redundancy.",
      "Satellite VSAT, LEO, and MEO services for remote regions."
    ],
    bulletPoints: [
      "End-to-end services: from creative to playout to delivery.",
      "Multi-industry expertise proven across broadcast, enterprise, telecom, and government.",
      "Global infrastructure spanning satellite, cloud, and IP networks.",
      "24/7 operations and monitoring for mission-critical reliability"
    ],
    image: "/telecom.png"
  },
  "Enterprise & Corporate": {
    title: "Enterprise & Corporate",
    description: [
      "We connect enterprises in banking, retail, energy, mining, and remote industries with secure, scalable solutions.",
      "IoT connectivity, asset tracking, and data analytics.",
      "Secure WAN, SD-WAN, and hybrid networks.",
      "Cloud archiving, disaster recovery, and compliance services."
    ],
    bulletPoints: [
      "End-to-end services: from creative to playout to delivery.",
      "Multi-industry expertise proven across broadcast, enterprise, telecom, and government.",
      "Global infrastructure spanning satellite, cloud, and IP networks.",
      "24/7 operations and monitoring for mission-critical reliability"
    ],
    image: "/creative.png"
  },
  "Maritime & Aviation": {
    title: "Maritime & Aviation",
    description: [
      "We enable fleets, vessels, and aircraft to stay connected anywhere in the world.",
      "Broadband-over-satellite for crew, passengers, and operations.",
      "VSAT hub platforms for maritime and aero.",
      "IoT-enabled tracking and monitoring of critical assets."
    ],
    bulletPoints: [
      "End-to-end services: from creative to playout to delivery.",
      "Multi-industry expertise proven across broadcast, enterprise, telecom, and government.",
      "Global infrastructure spanning satellite, cloud, and IP networks.",
      "24/7 operations and monitoring for mission-critical reliability"
    ],
    image: "/maritime.png"
  },
  "Government & Defence": {
    title: "Government & Defence",
    description: [
      "We provide secure, mission-critical communications and broadcast services for public and defense organizations.",
      "Encrypted satellite & IP distribution.",
      "Disaster recovery and emergency broadcasting.",
      "Secure media management with DRM and conditional access."
    ],
    bulletPoints: [
      "End-to-end services: from creative to playout to delivery.",
      "Multi-industry expertise proven across broadcast, enterprise, telecom, and government.",
      "Global infrastructure spanning satellite, cloud, and IP networks.",
      "24/7 operations and monitoring for mission-critical reliability"
    ],
    image: "/defence.png"
  }
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("Broadcast & Media");

  const tabItems = Object.keys(tabContents);

  return (
    <>
      <div className="relative w-full">
        <img src="/abouthero.png" alt="Coverage area" className="w-full h-[500px]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-montserrat font-bold text-5xl leading-tight tracking-normal text-center mb-4 ">Our Solutions</h1>
          <p className="font-montserrat font-normal text-base leading-6 tracking-normal text-center max-w-3xl">
            At Video Vision Media, we deliver solutions tailored to the
            industries we serve. From live sports to government communications,
            our expertise ensures content and connectivity are always reliable,
            always secure, and always ready for global audiences.
          </p>
        </div>
      </div>

      <div className=" container mx-auto py-16">
        <div className="border-b border-custom-red">
          <nav className="flex justify-center px-8">
            {tabItems.map((item, index) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`py-4 px-6 text-sm font-normal transition-colors text-center ${
                  index < tabItems.length - 1 ? "border-r border-gray-300" : ""
                } ${activeTab === item
                  ? "border-b-2 border-b-custom-red font-railway font-extrabold"
                  : "text-gray-700 hover:text-gray-900"
                  }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="mx-auto py-12">
          <div className="flex items-start gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-4xl font-railway font-bold text-black mb-6">
                {tabContents[activeTab].title}
              </h1>

              <div className="space-y-1 text-gray-700 mb-5 font-railway">
                {tabContents[activeTab].description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-railway">
                Why Choose Us Across Industries
              </h2>
              <ul className="space-y-1 text-gray-700 font-railway">
                {tabContents[activeTab].bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0 mt-12">
              <img
                src={tabContents[activeTab].image}
                alt={`${tabContents[activeTab].title} illustration`}
                className="w-[400px] h-[400px] object-cover rounded-lg"
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
