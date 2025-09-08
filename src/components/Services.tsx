"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import GetTouch from "./getTouch";
const Services = () => {
  const services = [
    {
      title: "Distribution",
      image: "/dish.png",
      features: [
        "Satellite Distribution",
        "Fiber & IP Distribution Networks",
        "DTT & Streaming Distribution",
        "Broadcast Contribution Services",
        "Remote Production",
      ],
    },
    {
      title: "Playout",
      image: "/playout.png",
      features: [
        "Channel Playout (SD/HD/UHD/4K)",
        "Cloud & Virtualized Playout",
        "Multi-Platform Delivery",
        "Content Compliance & Monitoring",
        "End-to-End Managed Services",
      ],
    },
    {
      title: "Creative",
      image: "/creative.png",
      features: [
        "Digital and Live Highlights Creation",
        "Graphics & Motion Design",
        "Content Localization & Versioning",
        "Promos & Creative Packaging",
        "Studio Support",
      ],
    },
    {
      title: "Cloud",
      image: "/cloud.png",
      features: [
        "Cloud Connect Services",
        "Hybrid & Multi-Cloud Integration",
        "Cloud-Based Media Processing",
        "Cloud Storage & Archiving",
      ],
    },
    {
      title: "Satellite & IoT",
      image: "/satellite.png",
      features: [
        "VSAT/LEO/MEO/GEO Connectivity",
        "Broadband-Over-Satellite",
        "IoT Device and Connectivity Management",
        "IoT Data Integration & Analytics",
        "IoT Asset Tracking & Remote Monitoring",
      ],
    },
    {
      title: "Network",
      image: "/dish.png",
      features: [
        "Managed L1/L2 Services",
        "Managed WAN/Hybrid Services",
        "Private Network or Internet Services",
        "IP Transit & Peering Services",
      ],
    },
    {
      title: "Asset Mgmt",
      image: "/drive.png",
      features: [
        "Media Storage Services",
        "Content CDN and Security Services",
        "Signal Encryption & Conditional Access",
        "Media Ingest & Transcoding",
        "Digital Right Management (DRM)",
      ],
    },
    {
      title: "Teleport",
      image: "/teleport.png",
      features: [
        "Uplink & Downlink Services",
        "Turn Around Services",
        "Earth Station Services",
        "VSAT Hub Platforms",
        "Disaster Recovery",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background relative z-0">
      <div
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: `url('/bgDot.svg')`,
          backgroundRepeat: "repeat",
          backgroundSize: "600px 433px",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative pt-20">
        <div
          className="absolute inset-0 left-0 bottom-10 z-0"
          style={{
            backgroundImage: `url('/cable.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "983px 438px",
            backgroundPosition: "center",
            right: "1000px",
            bottom: "1000px",
          }}
        >
          <div className="relative z-10 container pt-32 space-y-2">
            <h2 className="text-5xl max-w-3xl mx-auto font-bold leading-20 text-white">
              Our Services
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-white">
              Our services span the full media and connectivity ecosystem — from
              global content distribution to cloud, satellite, IoT, and network
              solutions. We deliver secure, scalable, and future-ready
              infrastructure tailored to your needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container pt-60 relative z-50 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-lg rounded-tl flex flex-col h-full"
            >
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-6 py-4 flex-1 flex flex-col">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="text-custom-red border-custom-red border-none underline gap-2"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section />

      <div className="container pt-32">
        <h2 className="text-5xl font-bold text-white">Get in Touch</h2>
        <p className="text-lg text-white">
          Ready to take your media and connectivity solutions to the next level?
          Contact us today to learn more about our services and how we can help
          you achieve your goals.
        </p>
      </div>

      <GetTouch />
    </section>
  );
};

export default Services;
