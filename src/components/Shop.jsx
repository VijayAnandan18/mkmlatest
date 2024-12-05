import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("womens");

  const jewelryImages = {
    womens: [
      { id: 2, url: "assets/men1.webp",  section: "necklaces" },
 { id: 1, url: "assets/women1.webp", section: "bracelets" },
 { id: 3, url: "assets/kid1.webp", section: "chains" },
    
    ],
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCardClick = (section) => {
    navigate(`/gold-jewellery#${section}`);
  };

  return (
    <div className="shop-container">
      {/* Heading Section */}
      <div className="shop-heading one">
        <h1>Our Collections</h1>
        <p>Find Jewelry for Women, Men, and Kids</p>
      </div>

      {/* Grid of Images */}
      <div className="shop-grid">
        {jewelryImages[selectedCategory].map((image) => (
          <div
            key={image.id}
            className={`shop-card ${image.id === 3 ? "hide-on-mobile" : ""}`}
            onClick={() => handleCardClick(image.section)}
          >
            <img src={image.url} alt={`Jewelry ${image.id}`} />
            <div className="card-name">{image.name}</div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="shop-explore-more">
        <a href="/gold-jewellery"><button>Explore More...</button></a>
      </div>
    </div>
  );
};

export default Shop;
