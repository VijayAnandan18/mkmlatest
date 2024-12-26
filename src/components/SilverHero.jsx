import React, { useState, useEffect } from "react";
import "./SilverHero.css";

const SilverHero = () => {
  const [imageSource, setImageSource] = useState("assets/silverhero.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSource("assets/silvermobile.png");
      } else {
        setImageSource("assets/silverhero.png");
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
    <div className="silver-hero-container">
      <img
        className="silver-hero-image"
        src={imageSource}
        alt="Silver Hero"
      />
    </div>
  );
};

export default SilverHero;
