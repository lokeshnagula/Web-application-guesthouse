// components/Footer.js
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: ["Browse Destinations", "Special Offers & Packages", "Room Types & Amenities", "Customer Reviews & Ratings", "Travel Tips & Guides"]
    },
    {
      title: "Our Services",
      links: ["Concierge Assistance", "Flexible Booking Options", "Airport Transfers", "Wellness & Recreation"]
    },
    {
      title: "Contact Us",
      links: ["Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156", "Laudantium dolorum", "kkghosh0099@gmail.com", "+91 9007062180"]
    }
  ];

  const socialLinks = [
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h2 className="text-white text-xl font-bold mb-4">Kingsukh Guest House</h2>
            <address className="not-italic mb-4">
              <p>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
            </address>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300"
                  aria-label={`Social link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white text-lg font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="hover:text-yellow-500 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
          Copyright © 2024 Kingsukh Guest House. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed by{' '}
            <a 
              href="https://www.youtube.com/@btechcareerguide" 
              target='blank'
              className="text-yellow-500 hover:text-yellow-400"
            >
              BTechCareerGuide
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
