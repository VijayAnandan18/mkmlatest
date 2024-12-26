import React, { useState, useEffect } from "react";
import "./GoldHero.css";

const GoldHero = () => {
  const [imageSource, setImageSource] = useState("assets/goldhero.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSource("assets/goldmobile.png");
      } else {
        setImageSource("assets/goldhero.png");
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
    <div className="gold-hero-container">
      <img
        className="gold-hero-image"
        src={imageSource}
        alt="Gold Hero"
      />
    </div>
  );
};

export default GoldHero;
