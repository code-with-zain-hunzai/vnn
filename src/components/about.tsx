import React from "react";
import GetTouch from "./getTouch";
import Stats from "./Stats";
export default function AboutPage() {
  return (
    <div className="relative">

    {/*Abouut us banner */}
      <div className="relative w-full">
        <img
          src="/abouthero.png"
          alt="Coverage area"
          className="w-full h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-montserrat font-bold text-5xl leading-tight tracking-normal text-center text-white">
            About Us
          </h1>
        </div>

        <p className="absolute inset-0  -mb-20">
          <Stats />
        </p>
      </div>

{/* video version media */}
      <div className="container mx-auto py-36 ">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div>
            <img
              src="/aboutImg.png" 
              alt="Control room"
              className="rounded-2xl shadow-lg w-[580px]  object-cover"
            />
          </div>

          <div>
            <span
              className="inline-block bg-red-600 text-white px-4 py-1 
          rounded-full text-sm font-medium mb-4"
            >
              About us
            </span>
            <h2 className="text-3xl font-bold mb-4">Video Vision Media</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Video Vision Media is a next-generation media technology and
              satellite services company. We empower broadcasters, telecom
              operators, enterprises, and governments to{" "}
              <strong>
                connect, create, and deliver content seamlessly anytime,
                anywhere, on any platform.
              </strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              From our hubs in the UK, UAE, India and Singapore, we bring
              together satellite, cloud, and IP networks with creative
              post-production services, studio and playout services, giving our
              clients end-to-end solutions that are reliable, innovative, and
              scalable.
            </p>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide seamless, secure, and innovative media
              and connectivity solutions that empower clients to communicate,
              engage, and operate with confidence — anywhere in the world.
            </p>
          </div>
        </div>

       
      </div>

      {/* Who We Are */}
      
     
      <section className="pt-12 px-6 relative ">
      <div
        className="absolute top-0 left-0 w-full h-[400px] z-0"
        style={{
          backgroundImage: "url('/abouthero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 "></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header and Coverage Points */}
        <div className="text-white mb-8">
          <h2 className="text-3xl font-bold mb-8 text-balance">Our Coverage Area</h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="white">•</span>
              <div>
                <span className="font-semibold">UAE</span>
                <span className="text-gray-300">
                  {" "}
                  - Media distribution, satellite teleport, creative & playout hub.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-white ">•</span>
              <div>
                <span className="font-semibold">UK</span>
                <span className="text-gray-300">
                  {" "}
                  - Broadcast operations, media telecom integrations, and pan European support.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-white ">•</span>
              <div>
                <span className="font-semibold">Worldwide</span>
                <span className="text-gray-300">
                  {" "}
                  - Remote networks, fiber-IP, hotels, and cloud integrations across major regions.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="relative mt-16">
          <div className="relative z-20">
          <img src="/aboutmap.png" alt="Coverage area map showing network connections across Europe, Middle East, and Asia" />
          </div>
        </div>
      </div>
    </section>

{/* get in touch section  */}
<div className="pt-96"></div>
<div className="pt-80"></div>
       <div className="absolute left-0 right-0 -bottom-40 z-50">
        <GetTouch />
      </div>
    </div>
  );
}
