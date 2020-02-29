import React from "react";

import "./homepage.css"

const Homepage = () => {
  return (
    <div className="h-screen" style={{ display: `flex`, flexGrow: 1 }}>
      {/* style={{ backgroundImage: `url(landing.jpg)` }} */}
      <img
        className="object-cover w-full"
        src="landing.jpg"
        alt="headphone"></img>
    </div>
  );
}

export default Homepage;
