import React from 'react';

const Details = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white 900 p-4">
      <main className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-4">My Details</h1>
        <ul className="space-y-3 text-lg text-gray-300">
          <li className="flex items-center">
            <span className="font-semibold text-white">Phone no:</span>
            <span className="ml-2">9474734</span>
          </li>
          <li className="flex items-center">
            <span className="font-semibold text-white">Address:</span>
            <span className="ml-2">fdfsd</span>
          </li>
          <li className="flex items-center">
            <span className="font-semibold text-white">Email:</span>
            <span className="ml-2">your-email@example.com</span> {}
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Details;
