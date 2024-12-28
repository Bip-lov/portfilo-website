import React from 'react';

const Details = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
    <main className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-3xl font-bold text-center text-white mb-6">My Details</h1>
      <ul className="space-y-4 text-lg text-gray-300">
        <li className="flex items-center">
          <span className="font-semibold text-white w-1/3">Phone no:</span>
          <span className="ml-2">9847642456</span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold text-white w-1/3">Address:</span>
          <span className="ml-2">Beni ko bazara jata maya utai xa najara</span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold text-white w-1/3">Email:</span>
          <span className="ml-2">poudelbiplove04@gmail.com</span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold text-white w-1/3">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-400 hover:text-blue-300"
          >
            Your LinkedIn Profile
          </a>
        </li>
        <li className="flex items-center">
          <span className="font-semibold text-white w-1/3">GitHub:</span>
          <a
            href="https://github.com/your-Bip-Lov"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-gray-400 hover:text-gray-300"
          >
            Your GitHub Profile
          </a>
        </li>
        <li className="flex items-center">
          <span className="font-semibold text-white w-1/3">Twitter:</span>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-400 hover:text-blue-300"
          >
            @YourTwitterHandle
          </a>
        </li>
      </ul>
    
    </main>
  </div>
  
  );
};

export default Details;
