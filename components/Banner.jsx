
import React from 'react';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
        <h3 className="text-xl font-semibold mb-2">In-Progress</h3>
        <p className="text-6xl font-bold">{inProgressCount}</p>
      </div>
      <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute top-4 right-4 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <h3 className="text-xl font-semibold mb-2">Resolved</h3>
        <p className="text-6xl font-bold">{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;
