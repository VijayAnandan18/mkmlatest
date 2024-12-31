import React from "react";
import "./DigiSecond.css";

const DigiSecond = () => {
  return (
    <div className="goldcontent-section"> 
      {/* Card for Why Image */}
      <div className="why-image-card">
        <img src="/assets/why.png" alt="Festive Gifting" className="why-image-card-img" />
      </div>

      <div className="one">
        <h1  className="main-heading" style={{textTransform:"capitalize"}}> Giftings</h1>
        <p className="sub-heading" style={{fontFamily:"PlayfairDisplay"}}>Celebrate the completion of your gold schemes with exclusive gifts!</p>
      </div>

      {/* Image Section */}
      <div className="festive-gifting-image-section">
        <img src="/assets/gift.png" alt="Festive Gifting" className="festive-gifting-image" />
      </div>
    {/* Contact Section */}
    <div className="flexi-gold-section flexi-gold-contact" style={{textalign:"center"}}>
          <h2 className="flexi-gold-heading" >For Any Scheme Related Query</h2>
          <p className="flexi-gold-text">
            <strong>Contact Us :</strong> <br />
            <strong style={{marginLeft:"10px"}}>Mail-Id:</strong> <a href="mailto:mkmthangamaligai@gmail.com">mkmthangamaligai@gmail.com</a> <br />
            <strong style={{marginLeft:"10px"}}>Landline No:</strong> +0462 4055001<br />
            
            <strong style={{marginLeft:"10px"}}>Phone No:</strong> +91 9384810725
          </p>
        </div>
        <div className="shop-explore-more">
        <a href="/schemes"><button>Explore our schemes...</button></a>
      </div>
    </div>
  );
};

export default DigiSecond;
