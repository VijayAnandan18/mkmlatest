import React from "react";
import "./Abouthero.css";

const AboutHero = () => {
  return (
    <div className="about-hero-container">
      <div className="about-hero-grid">
        {/* About Us Section */}
        <div className="about-hero-content">
          <h2 className="about-hero-heading" style={{fontFamily:"Mier demi",display:"inline-block"}}>About Us</h2>
          <p style={{textAlign: "justify"}}>
            MKM Thangamaligai LLP is a renowned jewellery brand offering a wide
            range of fine jewellery in gold, diamond, platinum, and silver. Our
            mission is to provide exceptional craftsmanship for every occasion,
            ensuring our customers' complete satisfaction. The registered office
            is in Tirunelveli, and our skilled staff is dedicated to making each
            visit memorable.
          </p>
        </div>

        {/* Hero Image 1 */}
        <div className="about-hero-image">
        <video
  src="/assets/about3.mp4"
  alt="Hero 1"
  autoPlay
  muted
  loop
  className="about-hero-video" // Class to apply additional styling
/>



        </div>

        {/* History Section */}
        <div className="about-hero-content history">
          <h2 className="about-hero-heading" style={{fontFamily:"Mier demi",display:"inline-block"}}>Our Vision</h2>
          <p style={{textAlign: "justify"}}>
            To be the most reputable & recognized jewellery brand worldwide. We care about changes and strive for innovation, and thereby surprise our customers with creativity. With our passion for exceptional quality & design, we are excited to serve our clients for generations to come.
          </p>
          <h2 className="about-hero-heading"  style={{fontFamily:"Mier demi",display:"inline-block"}}>Our Mission</h2>
          <p style={{textAlign: "justify"}}>
            To create trending & fashionable jewellery which combines elegance with uniqueness. We're continuously crafting and updating our collections to reinforce our reputation for the most admired range of jewellery and accessories.
          </p>
        </div>

        {/* Hero Image 2 */}
        <div className="about-hero-image">
        <img
  src="/assets/collage.png"

  className="about-hero-video" // Class to apply additional styling
/>
        </div>

      </div>
    </div>
  );
};

export default AboutHero;
