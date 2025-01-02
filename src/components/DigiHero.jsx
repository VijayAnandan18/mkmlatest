import React from "react";
import "./DigiHero.css"; // Import CSS for styling

const DigiHero = () => {
  return (
    <div className="digihero-container">
      <video
        className="digihero-video"
        src="assets/digihero.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default DigiHero;
