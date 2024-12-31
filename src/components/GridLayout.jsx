import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GridLayout.css";

const GridLayout = () => {
  const navigate = useNavigate();
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state of the image

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

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false once the image has loaded
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Gridlayout">
      <div className="one">
        <h1 className="main-heading" style={{ textTransform: "capitalize" }}>
          Our Sparkling Heritage
        </h1>
        <p className="sub-heading" style={{ fontFamily: "PlayfairDisplay" }}>
          Get in touch with us for a complete jewellery shopping experience!
        </p>
      </div>

      {/* Full-Width Image Section */}
      <div
        className={`about-image ${isImageVisible ? "visible" : ""} ${isLoading ? "loading" : ""}`}
        onClick={handleImageClick}
      >
        <img
          src="assets/elevation.png"
          alt="About Us"
          onLoad={handleImageLoad} // Call handleImageLoad when the image is loaded
        />
      </div>
    </div>
  );
};

export default GridLayout;

