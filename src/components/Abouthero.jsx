import React from "react";
import "./Abouthero.css";

const AboutHero = () => {
  return (
    <div className="about-hero-container">
      {/* Image Section */}
      <div className="about-hero-image" >
        <img src="/assets/elevation.png" alt="About Us" className="about-hero-img" />
      </div>

      <div className="about-hero-content">
        {/* About Us Section */}
        <div className="about-section">
          <h2 className="about-hero-heading" style={{ fontFamily: "PlayFairDisplay" }}>
            About Us
          </h2>
          <p>
            MKM Thangamaligai LLP is a renowned jewellery brand offering a wide range of fine jewellery in gold, diamond, platinum, and silver. Our mission is to provide exceptional craftsmanship for every occasion, ensuring our customers' complete satisfaction. The registered office is in Tirunelveli, and our skilled staff is dedicated to making each visit memorable.
          </p>
        </div>

        {/* Our Vision Section */}
        <div className="about-section">
          <h2 className="about-hero-heading" style={{ fontFamily: "PlayFairDisplay" }}>
            Our Vision
          </h2>
          <p>
            To be the most reputable & recognized jewellery brand worldwide. We care about changes and strive for innovation, and thereby surprise our customers with creativity. With our passion for exceptional quality & design, we are excited to serve our clients for generations to come.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="about-section">
          <h2 className="about-hero-heading" style={{ fontFamily: "PlayFairDisplay" }}>
            Our Mission
          </h2>
          <p>
            To create trending & fashionable jewellery which combines elegance with uniqueness. We're continuously crafting and updating our collections to reinforce our reputation for the most admired range of jewellery and accessories.
          </p>
        </div>
        <div><img src="/assets/aboutstretch.png"  alt="Stretch Image" 
    className="about-stretch"  /></div>
      </div>
    </div>
  );
};

export default AboutHero;
