import React from 'react';
import '../css/Loading.css'; // Import the CSS file for custom animations

const Loading = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-customYellow">
    <div className="container">
      <div className="cube"><div className="cube__inner"></div></div>
      <div className="cube"><div className="cube__inner"></div></div>
      <div className="cube"><div className="cube__inner"></div></div>
    </div>
  </div>
);

export default Loading;