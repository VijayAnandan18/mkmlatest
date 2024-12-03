import React from "react";
import { useNavigate } from "react-router-dom";
import "./GridLayout.css"; // External CSS file for the styles

const GridLayout = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/about");
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
      <div className="about-image" onClick={handleImageClick}>
        <img src="assets/about.png" alt="About Us" />
      </div>
    </div>
  );
};

export default GridLayout;
