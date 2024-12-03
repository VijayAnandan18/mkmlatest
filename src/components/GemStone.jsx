import React from "react";
import "./GemStone.css";

const Gemstone = () => {
  const cards = [
    { id: 1, img: "/assets/gold1.png" },
    { id: 2, img: "/assets/gold2.png" },
  ];

  return (
    <div className="gemstone-container">
      <div className="gemstones">
        {cards.map((card) => (
          <div className="gemstone-card" key={card.id}>
            <img
              className="gemstone-card__image"
              src={card.img}
              alt={`Gemstone ${card.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gemstone;
