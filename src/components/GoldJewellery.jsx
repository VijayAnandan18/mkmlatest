import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoldJewellery.css";

const GoldJewellery = () => {
  const navigate = useNavigate();

  const handleCardClick = (section) => {
    navigate(`/gold-jewellery#${section}`);
  };

  const cards = [
    { id: 1, img: "/assets/gold1.webp", section: "earrings" },
    { id: 2, img: "/assets/gold2.webp", section: "bangles" },
    { id: 3, img: "/assets/gold3.webp", section: "chains" },
    { id: 4, img: "/assets/gold4.webp", section: "necklaces" },
  ];

  return (
    <div className="goldjewellery-container">
  <div className="one">
        <h1 className="main-heading" style={{textTransform:"capitalize"}}>Gold Jewellery</h1>
        <p className="sub-heading"style={{fontFamily:"PlayfairDisplay"}}>Embrace the golden glow this festive season</p>
      </div>

      {/* Cards Section */}
      <div className="goldcards">
        {cards.map((card) => (
          <div
            className="goldcard"
            key={card.id}
            onClick={() => handleCardClick(card.section)}
          >
            <img
              className="goldcard__image"
              src={card.img}
              alt={`Gold Jewellery ${card.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoldJewellery;
