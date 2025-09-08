import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16 container mx-auto space-y-40">
      {/* About Us Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div>
          <img
            src="/aboutImg.png" // replace with your image path
            alt="Control room"
            className="rounded-2xl shadow-lg w-[580px]  object-cover"
          />
        </div>

        {/* Right - Content */}
        <div>
          <span className="inline-block bg-red-600 text-white px-4 py-1 
          rounded-full text-sm font-medium mb-4">
            About us
          </span>
          <h2 className="text-3xl font-bold mb-4">Video Vision Media</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Video Vision Media is a next-generation media technology and
            satellite services company. We empower broadcasters, telecom
            operators, enterprises, and governments to{" "}
            <strong>
              connect, create, and deliver content seamlessly anytime, anywhere,
              on any platform.
            </strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            From our hubs in the UK, UAE, India and Singapore, we bring together
            satellite, cloud, and IP networks with creative post-production
            services, studio and playout services, giving our clients end-to-end
            solutions that are reliable, innovative, and scalable.
          </p>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide seamless, secure, and innovative media and
            connectivity solutions that empower clients to communicate, engage,
            and operate with confidence — anywhere in the world.
          </p>
        </div>
      </div>

      {/* Coverage Area Section */} 
      <div className="grid md:grid-cols-2 gap-10 items-center  ">
        {/* Left - Content */}
        <div>
          <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full 
          text-sm font-medium mb-4">
            Coverage Area
          </span>
          <h2 className="text-3xl font-bold mb-4">Video Vision Media</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Video Vision Media, we deliver solutions tailored to the
            industries we serve. From live sports to government communications,
            our expertise ensures content and connectivity are always reliable,
            always secure, and always ready for global audiences.
          </p>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide seamless, secure, and innovative media and
            connectivity solutions that empower clients to communicate, engage,
            and operate with confidence — anywhere in the world.
          </p>
        </div>

        {/* Right - Image */}
        <div>
          <img
            src="/aboutImg.png" // replace with your image path
            alt="Coverage area"
            className="rounded-2xl shadow-lg w-[580px] object-cover "
          />
        </div>
      </div>

      
    </div>
  );
}
