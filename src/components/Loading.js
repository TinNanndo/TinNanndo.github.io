import React from 'react';

const Loading = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div className="border-4 border-t-4 border-red-400 border-t-black rounded-full w-10 h-10 animate-spin"></div>
    <p className="mt-2 text-lg text-gray-700">Loading...</p>
  </div>
);

export default Loading;