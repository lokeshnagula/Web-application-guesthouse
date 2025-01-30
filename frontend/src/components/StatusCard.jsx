import React from "react";

const StatsCard = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="flex justify-around p-6">
        <div className="text-center">
          <p className="text-3xl font-semibold text-blue-500">100+</p>
          <p className="text-lg text-gray-600">Bookings Completed</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold text-green-500">150+</p>
          <p className="text-lg text-gray-600">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
