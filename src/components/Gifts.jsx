import React from "react";
import "./Gifts.css";

const Gifts = () => {
  return (
    <div className="gifts-container">
          <div className="one">
        <h1 className="main-heading">Gifting & More</h1>
        <p>Cherish Every Moment with Thoughtful Gifts</p>
      </div>
      <div className="gifts-grid">
        {/* Card 1 */}
        <div className="gift-card">
          <img
            src="/assets/gift1.png"
            alt="Gift 1"
            className="gift-image"
          />
         
        </div>

        {/* Card 2 */}
        <div className="gift-card">
          <img
            src="/assets/gift2.png"
            alt="Gift 2"
            className="gift-image"
          />
     
        </div>

        {/* Card 3 (spanning two rows) */}
        <div className="gift-card">
          <img
            src="/assets/gift5.png"
            alt="Gift 3"
            className="gift-image"
          />
         
        </div>

        {/* Card 4 (spanning two rows) */}
        <div className="gift-card">
          <img
            src="/assets/gift6.png"
            alt="Gift 4"
            className="gift-image"
          />
        
        </div>

        {/* Card 5 */}
        <div className="gift-card">
          <img
            src="/assets/gift3.png"
            alt="Gift 5"
            className="gift-image"
          />
   
        </div>

        {/* Card 6 */}
        <div className="gift-card">
          <img
            src="/assets/gift4.png"
            alt="Gift 6"
            className="gift-image"
          />
      
        </div>
      </div>
    </div>
  );
};

export default Gifts;
