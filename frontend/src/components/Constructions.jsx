// components/LivingRoom.js
import React from 'react';
import { FaHeart, FaStar, FaHistory } from 'react-icons/fa';

const LivingRoom = () => {
  const rooms = [
    {
      id: 1,
      name: "Cozy Haven Room",
      image: "images/room1.jpg",
      description: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: "Rs. 1000/night"
    },
    {
      id: 2,
      name: "Spacious Serenity Suite",
      image: "images/small.jpg",
      description: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      price: "Rs. 1500/night"
    }
  ];

  const ActionButton = ({ icon, color }) => (
    <button 
      className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 ${color}`}
    >
      {icon}
    </button>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
       
        <h1 className="text-1xl md:text-5xl font-bold mb-4">
          Our Living Room
        </h1>
        <h2 className="text-sm uppercase tracking-wider text-gray-600 mb-2">
        The Most Memorable Rest<br />Time Starts Here.
        </h2>
      </div>

      {/* Room Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {rooms.map((room) => (
          <div 
            key={room.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative">
              <img 
                src={room.image} 
                alt={room.name}
                className="w-full h-64 object-cover"
              />
              {/* Action Buttons */}
              <div className="absolute bottom-4 right-4 flex space-x-3">
                <ActionButton 
                  icon={<FaHeart className="text-pink-500" />} 
                  color="hover:text-pink-500"
                />
                <ActionButton 
                  icon={<FaStar className="text-purple-500" />} 
                  color="hover:text-purple-500"
                />
                <ActionButton 
                  icon={<FaHistory className="text-blue-500" />} 
                  color="hover:text-blue-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                {room.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {room.description}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="font-semibold">{room.price}</p>
                </div>
                <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors duration-300">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LivingRoom;
