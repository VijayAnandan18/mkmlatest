import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("womens");

  const jewelryImages = {
    womens: [
   
 { id: 1, url: "assets/women.jpg", section: "necklaces" },
 { id: 2, url: "assets/men.png",  section: "rings" },
 { id: 3, url: "assets/kid.png", section: "chains" },
    
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
    <div className="one">
        <h1 className="main-heading" style={{textTransform:"capitalize"}}>Our Collections</h1>
        <p className="sub-heading" style={{fontFamily:"PlayfairDisplay"}}>Find Jewellery for Women, Men, and Kids</p>
      </div>
      <nav className="shop-nav">
        <button>Women's Jewellery</button>
        <button >Men's Jewellery</button>
        <button >Kids' Jewellery</button>
      </nav>
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
