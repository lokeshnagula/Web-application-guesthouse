import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="relative h-64 bg-gray-900 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Contact</h1>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Address Card */}
        <div className="bg-white p-6 shadow-lg rounded-xl text-center">
          <div className="text-yellow-500 text-4xl">📍</div>
          <h3 className="text-lg font-semibold mt-3">Address</h3>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>

        {/* Call Us Card */}
        <div className="bg-white p-6 shadow-lg rounded-xl text-center">
          <div className="text-yellow-500 text-4xl">📞</div>
          <h3 className="text-lg font-semibold mt-3">Call Us</h3>
          <p>+1 5589 55488 55</p>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 shadow-lg rounded-xl text-center">
          <div className="text-yellow-500 text-4xl">✉️</div>
          <h3 className="text-lg font-semibold mt-3">Email Us</h3>
          <p>info@example.com</p>
        </div>
      </div>

      {/* Map & Form Section */}
      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-64 md:h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.923856992406!2d-74.00601508459405!3d40.70714797933264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19a1c6d1b5%3A0xf3f0e07b889b3f77!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <form className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-3 rounded-lg w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border p-3 rounded-lg w-full"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="border p-3 rounded-lg w-full"
            ></textarea>
            <button className="bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Contact;
