import React from "react";

export default function ContactPage() {
  return (
    <div className=" container mx-auto flex items-center justify-center py-16">
      <div className="grid md:grid-cols-2 bg-white rounded-tl-[200px] rounded-md   overflow-hidden shadow-lg  w-full">
        {/* Left Side - Image */}
        <div className="h-full w-full">
          <img
            src="/contactImg.png" // replace with your image path
            alt="Satellite dishes"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#3c3c3c] text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            We’re here to help broadcasters, telecom operators, enterprises, and
            governments connect, create, and deliver seamlessly — anytime,
            anywhere, on any platform.
          </p>
          <p className="text-gray-300 mb-6">
            Reach out to our team to explore how we can design reliable,
            innovative, and scalable solutions tailored to your needs.
          </p>

          <form className="space-y-4">
  {/* Name & Email */}
  <div className="grid grid-cols-2 gap-4">
    <div className="flex flex-col">
      <label className="text-white mb-1 font-medium">Name*</label>
      <input
        type="text"
        placeholder="Enter"
        className="p-2 rounded-md w-full text-black"
      />
    </div>

    <div className="flex flex-col">
      <label className="text-white mb-1 font-medium">Email*</label>
      <input
        type="email"
        placeholder="Enter"
        className="p-2 rounded-md w-full text-black"
      />
    </div>
  </div>

  {/* How Can We Help */}
  <div className="flex flex-col">
    <label className="text-white mb-1 font-medium">How Can We Help</label>
    <input
      type="text"
      placeholder="Enter"
      className="p-2 rounded-md w-full text-black"
    />
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="bg-red-600 hover:bg-red-700 max-w-[200px] text-white font-semibold px-6 py-3 rounded-md w-full"
  >
    Submit
  </button>
</form>

        </div>
      </div>
    </div>
  );
}
