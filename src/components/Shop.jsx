import React, { useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("womens");

  const jewelryImages = {
    womens: [
      { id: 1, url: "assets/women1.png" },
      { id: 2, url: "assets/women2.png" },
      { id: 3, url: "assets/women3.png" },
    ],
    mens: [
      { id: 1, url: "assets/men1.png" },
      { id: 2, url: "assets/men2.png" },
      { id: 3, url: "assets/men3.png" },
    ],
    kids: [
      { id: 1, url: "assets/kid1.png" },
      { id: 2, url: "assets/kid2.png" },
      { id: 3, url: "assets/kid3.png" },
    ],
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="shop-container">
      {/* Heading Section */}
      <div className="shop-heading one">
        <h1>Our Collections</h1>
        <p>Find Jewelry for Women, Men, and Kids</p>
      </div>

      {/* Navigation */}
      <nav className="shop-nav">
        <button onClick={() => handleCategorySelect("womens")}>Women's Jewellery</button>
        <button onClick={() => handleCategorySelect("mens")}>Men's Jewellery</button>
        <button onClick={() => handleCategorySelect("kids")}>Kids' Jewellery</button>
      </nav>

      {/* Grid of Images */}
      <div className="shop-grid">
  {jewelryImages[selectedCategory].map((image) => (
    <div
      key={image.id}
      className={`shop-card ${image.id === 3 ? "hide-on-mobile" : ""}`}
    >
      <img src={image.url} alt={`Jewelry ${image.id}`} />
    </div>
  ))}
</div>


      {/* Explore More Button */}
      <div className="shop-explore-more">
        <a  href="/gold-jewellery"><button>Explore More...</button></a>
      </div>
    </div>
  );
};

export default Shop;
