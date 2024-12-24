import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GridLayout.css";

const GridLayout = () => {
  const navigate = useNavigate();
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleImageClick = () => {
    // Scroll to the top of the page before navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about");
  };

  // Function to check if the image is in the viewport
  const handleScroll = () => {
    const imageElement = document.querySelector(".about-image img");
    if (imageElement) {
      const rect = imageElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsImageVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Gridlayout">
      {/* Heading Section */}
      <div className="one">
        <h1>Our Sparkling Heritage</h1>
      </div>
      <p className="about-description" style={{fontFamily:"PlayfairDisplay"}}>
        Get in touch with us for a complete jewellery shopping experience!
      </p>

      {/* Full-Width Image Section */}
      <div className={`about-image ${isImageVisible ? "visible" : ""}`} onClick={handleImageClick}>
        <img
          src="assets/about.png"
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default GridLayout;
