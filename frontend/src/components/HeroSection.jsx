// components/HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/baranti.png)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Kingsukh Guest House</h1>
        <p className="text-lg mb-8">
        Simple - Unique - Friendly
        </p>
        <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg">Book Slot</button>
      </div>
    </div>
  );
}

export default HeroSection;
