// components/TabSection.js
import React, { useState } from 'react';

function TabSection() {
  const [activeTab, setActiveTab] = useState('Modisit');
  const tabs = ['Modisit', 'Praesenti', 'Explica', 'Nostrum'];

  // Define the content for each tab
  const tabContent = {
    Modisit: (
      <>
        <h2 className="text-3xl font-bold mb-4">Modisit Tab Content</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✓</span>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✓</span>
            Duis aute irure dolor in reprehenderit in voluptate velit.
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✓</span>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </li>
        </ul>
      </>
    ),
    Praesenti: (
      <>
        <h2 className="text-3xl font-bold mb-4">Praesenti Tab Content</h2>
        <p className="text-gray-600 mb-6">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✓</span>
            Praesentium facere, rerum saepe exercitationem voluptatibus.
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✓</span>
            Repellat deleniti iure possimus odio, quas quibusdam velit.
          </li>
        </ul>
      </>
    ),
    Explica: (
      <>
        <h2 className="text-3xl font-bold mb-4">Explica Tab Content</h2>
        <p className="text-gray-600 mb-6">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✓</span>
            Labore et dolore magna aliqua, sed do eiusmod tempor.
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✓</span>
            Exercitationem voluptatibus perspiciatis sint exercitationem.
          </li>
        </ul>
      </>
    ),
    Nostrum: (
      <>
        <h2 className="text-3xl font-bold mb-4">Nostrum Tab Content</h2>
        <p className="text-gray-600 mb-6">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✓</span>
            Excepteur sint occaecat cupidatat non proident.
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-2">✓</span>
            Duis aute irure dolor in reprehenderit in voluptate velit.
          </li>
        </ul>
      </>
    ),
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 ${
              activeTab === tab
                ? 'border-b-2 border-yellow-500 text-yellow-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Display the content based on activeTab */}
      <div className="mt-8 flex flex-wrap">
        <div className="w-full md:w-1/2 pr-8">
          {tabContent[activeTab]}
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="/images/baranti.png"
            alt="Construction work"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default TabSection;
