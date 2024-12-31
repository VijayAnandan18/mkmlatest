import React, { useEffect, useRef, useState } from "react";
import "./MobileFeatures.css";

const MobileFeatures = () => {
  const scrollContainerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for reverse

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollStep = () => {
      if (scrollContainer) {
        // Move in the current direction
        scrollContainer.scrollLeft += scrollDirection;

        // Check if we've reached the end of the scroll
        if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
          setScrollDirection(-1); // Switch to reverse
        }

        // Check if we've reached the start of the scroll
        if (scrollContainer.scrollLeft <= 0) {
          setScrollDirection(1); // Switch to forward
        }
      }
    };

    // Set an interval for continuous scrolling
    const interval = setInterval(scrollStep, 10); // Adjust speed as needed (lower value = faster scrolling)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [scrollDirection]);

  return (
    <div className="mobile-features-section">
      {/* Heading Section */}
      <div className="one">
        <h1 className="main-heading" style={{ textTransform: "capitalize" }}>
          Pure Elegance
        </h1>
        <p className="sub-heading" style={{ fontFamily: "PlayfairDisplay" }}>
          We assure you that you will get what you can trust. Always!
        </p>
      </div>

      {/* Features Cards */}
      <div className="mobile-features-container" ref={scrollContainerRef}>
        <div className="mobile-features-card">
          <img
            src="assets/bis.png"
            alt="HUID"
            className="mobile-features-card-image"
          />
          <h4 className="mobile-features-card-title">Guaranteed Purity</h4>
          <p className="mobile-features-card-description">
            HUID CERTIFIED GOLD JEWELLERY
          </p>
        </div>
        <div className="mobile-features-card">
          <img
            src="assets/auth.png"
            alt="Diamonds"
            className="mobile-features-card-image"
          />
          <h4 className="mobile-features-card-title">Authenticity Assured</h4>
          <p className="mobile-features-card-description">
            CERTIFIED DIAMOND JEWELLERY
          </p>
        </div>
        <div className="mobile-features-card">
          <img
            src="assets/mobile.png"
            alt="Exchange"
            className="mobile-features-card-image"
          />
          <h4 className="mobile-features-card-title">Smart Savings Made Easy</h4>
          <p className="mobile-features-card-description">
            DIGITAL GOLD APP FOR SAVINGS SCHEME
          </p>
        </div>
        <div className="mobile-features-card">
          <img
            src="assets/Exq.png"
            alt="Price Promise"
            className="mobile-features-card-image"
          />
          <h4 className="mobile-features-card-title">Exquisite Experience</h4>
          <p className="mobile-features-card-description">
            SOPHISTICATED SHOWROOM FOR CUSTOMER SERVICE
          </p>
        </div>
        <div className="mobile-features-card">
          <img
            src="assets/conven.png"
            alt="Labour Practices"
            className="mobile-features-card-image"
          />
          <h4 className="mobile-features-card-title">Convenient Exchanges</h4>
          <p className="mobile-features-card-description">
            New for Old Easy Exchange Policy
          </p>
        </div>
        <div className="mobile-features-card">
          <img
            src="assets/excep.jpg"
            alt="Labour Practices"
            className="mobile-features-card-image"
          />
          <h4 className="mobile-features-card-title">Exceptional Service</h4>
          <p className="mobile-features-card-description">
            Well-Trained Staffs for Best Customer Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileFeatures;
