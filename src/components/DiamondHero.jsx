import React, { useState, useEffect } from "react";
import "./DiamondHero.css";

const DiamondHero = () => {
  const [imageSource, setImageSource] = useState("assets/diamondhero.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSource("assets/diamondmobile.png");
      } else {
        setImageSource("assets/diamondhero.png");
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="diamond-hero-container">
      <img
        className="diamond-hero-image"
        src={imageSource}
        alt="Diamond Hero"
      />
    </div>
  );
};

export default DiamondHero;
