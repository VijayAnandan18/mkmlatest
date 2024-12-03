import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GridLayout.css"; // External CSS file for the styles

const GridLayout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleImageClick = () => {
    // Scroll to the top of the page before navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about");
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="Gridlayout">
      {/* Heading Section */}
      <div className="one">
        <h1>Our Sparkling Heritage</h1>
      </div>
      <p className="about-description">
        Get in touch with us for a complete jewellery shopping experience!
      </p>

      {/* Full-Width Image Section */}
      <div className={`about-image ${loading ? "loading" : ""}`} onClick={handleImageClick}>
        <img
          src="assets/about.png"
          alt="About Us"
          onLoad={handleImageLoad} // Trigger when image has fully loaded
        />
      </div>
    </div>
  );
};

export default GridLayout;
