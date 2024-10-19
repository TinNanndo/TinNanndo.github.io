import React from 'react';

const Loading = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-customYellow">
    <div className="border-4 border-t-4 border-customOrange border-customBlack rounded-full w-10 h-10 animate-spin"></div>
    <p className="mt-2 text-lg text-customWhite">Loading...</p>
  </div>
);

export default Loading;