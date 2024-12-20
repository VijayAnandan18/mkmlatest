import React from "react";
import "./DigiHero.css"; // Import CSS for styling

const  DailyHero= () => {
  return (
    <div className="digihero-container">
      <img
        src="assets/schemes/daily.png"
        alt="Digi Hero"
        className="digihero-image"
      />
    </div>
  );
};

export default DailyHero;