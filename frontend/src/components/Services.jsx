import React from 'react';
import { FaAngular, FaClock, FaSun, FaStar } from 'react-icons/fa';

function Services() {
  const features = [
    {
      icon: <FaAngular className="text-yellow-500" />,
      title: "High Class Security",
      description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
    },
    {
      icon: <FaClock className="text-yellow-500" />,
      title: "24 Hours Room Service",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
    },
    {
      icon: <FaSun className="text-yellow-500" />,
      title: "Restaurant",
      description: "Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis"
    },
    {
      icon: <FaStar className="text-yellow-500" />,
      title: "Tourist Guide Support",
      description: "Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet."
    }
  ];

  return (
    <div className="bg-gray-50 py-2 px-2">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Services</h2>
    <div className="container mx-auto px-4 py-16 flex flex-wrap">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img 
          src="/images/service.jpg" 
          alt="Construction workers" 
          className="rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-8">

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4 mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
    </div>
  );
}

export default Services;
