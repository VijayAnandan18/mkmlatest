import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Gold.css";

const Gold = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Delay to ensure smooth scroll
      }
    }
  }, [location]);
  
  const products = [
    { name: 'Wedding Ring', image: '/assets/jewels/gold/rings/rings1.jpg' },
    { name: 'Designer Ring', image: '/assets/jewels/gold/rings/rings2.webp' },
    { name: 'Trendy Glow Ring', image: '/assets/jewels/gold/rings/rings3.png' },
    { name: ' Twist Gold Ring', image: '/assets/jewels/gold/rings/rings4.webp' },
    { name: 'Gleam Stone Gold Bangle', image: '/assets/jewels/gold/bangles/goldbangle1.webp' },
    { name: ' Crafted Gleam Gold Bangle', image: '/assets/jewels/gold/bangles/goldbangle2.webp' },
    { name: 'Stylish Gold Bangle', image: '/assets/jewels/gold/bangles/goldbangle3.webp' },
    { name: ' Vintage Gold Bangle', image: '/assets/jewels/gold/bangles/goldbangle4.webp' },
    { name: 'Vintage  Gold Necklace', image: '/assets/jewels/gold/necklace/necklace1.webp' },
    { name: 'Artistry  Gold Necklace', image: '/assets/jewels/gold/necklace/necklace2.webp' },
    { name: 'Enamel Fusion Gold Necklace', image: '/assets/jewels/gold/necklace/necklace3.webp' },
    { name: 'Glam  Glow Gold Necklace', image: '/assets/jewels/gold/necklace/necklace4.webp' },
    { name: 'Artistry Flower Pendant', image: '/assets/jewels/gold/pendants/pendants1.webp' },
    { name: 'Stone Fusion Pendant', image: '/assets/jewels/gold/pendants/pendants2.webp' },
    { name: 'Mens Gold Pendant', image: '/assets/jewels/gold/pendants/pendants3.webp' },
    { name: 'Kids Gold Pendant', image: '/assets/jewels/gold/pendants/pendants4.webp' },
    { name: 'Gold Dew Stone Earring', image: '/assets/jewels/gold/earrings/earring1.webp' },
    { name: 'Sparkle  Kids Earring', image: '/assets/jewels/gold/earrings/earring2.webp' },
    { name: 'Glam Gold Earring', image: '/assets/jewels/gold/earrings/earring3.webp' },
    { name: 'Classic Dew Earring', image: '/assets/jewels/gold/earrings/earring4.webp' },
    { name: 'Traditional Kids Gold Bracelet', image: '/assets/jewels/gold/bracelet/bracelet1.jpg' },
    { name: 'Stylish Kids Gold Bracelet', image: '/assets/jewels/gold/bracelet/bracelet2.jpg' },
    { name: ' Charm Kids Gold Bracelet', image: '/assets/jewels/gold/bracelet/bracelet3.webp' },
    { name: 'Dazzle Band Gold Bracelet', image: '/assets/jewels/gold/bracelet/bracelet4.webp' },
    { name: 'Chic Charm Gold Bracelet', image: '/assets/jewels/gold/bracelet/bracelet5.png' },
    { name: 'Stylish Pendant Gold Bracelet', image: '/assets/jewels/gold/bracelet/bracelet6.png' },
    { name: 'Luxe motif Gold Bracelet', image: '/assets/jewels/gold/bracelet/bracelet7.png' },
    { name: ' Band Gold Bracelet', image: '/assets/jewels/gold/bracelet/bracelet8.png' },
    { name: 'Gold Chain', image: '/assets/jewels/gold/chain/chain1.webp' },
    { name: 'Celestial Gold Chain', image: '/assets/jewels/gold/chain/chain2.webp' },
    { name: 'Luminous Luxe  Gold Chain', image: '/assets/jewels/gold/chain/chain3.webp' },
    { name: 'Classic pattern Gold Chain', image: '/assets/jewels/gold/chain/chain4.webp' },
    { name: ' Floral Gold Chain', image: '/assets/jewels/gold/chain/chain5.png' },
    { name: '  Floral Gold Chain', image: '/assets/jewels/gold/chain/chain6.png' },
    { name: ' Petal  Gold Chain', image: '/assets/jewels/gold/chain/chain7.png' },
    { name: 'Classic Kids Gold Chain', image: '/assets/jewels/gold/chain/chain8.png' },
    { name: 'Artistry Twist Nose pin', image: '/assets/jewels/gold/nosepin/nosepin1.webp' },
    { name: 'Enamel Fusion Nose pin', image: '/assets/jewels/gold/nosepin/nosepin2.jpg' },
    { name: 'Petal Pattern Nose pin', image: '/assets/jewels/gold/nosepin/nosepin3.jpg' },
    { name: 'Floral Gold Nose pin', image: '/assets/jewels/gold/nosepin/nosepin4.jpg' },
    { name: ' 1g Gold coin', image: '/assets/jewels/gold/goldcoins/coin1.webp' },
    { name: '2g Gold coin', image: '/assets/jewels/gold/goldcoins/coin2.webp' },
    { name: '4g Gold coin', image: '/assets/jewels/gold/goldcoins/coin3.webp' },
    { name: '8g Gold coin', image: '/assets/jewels/gold/goldcoins/coin4.webp' },
  ];
  

  const productGroups = [
    { heading: "Rings", items: products.slice(0, 4), id: "rings" },
    { heading: "Bangles", items: products.slice(4, 8), id: "bangles" },
    { heading: "Necklaces", items: products.slice(8, 12), id: "necklaces" },
    { heading: "Pendants", items: products.slice(12, 16), id: "pendants" },
    { heading: "Earrings", items: products.slice(16, 20), id: "earrings" },
    { heading: "Bracelets", items: products.slice(20, 28), id: "bracelets" },
    { heading: "Chains", items: products.slice(28, 36), id: "chains" },
    { heading: "Nosepins", items: products.slice(36, 40), id: "nosepins" },
    { heading: "Gold Coins", items: products.slice(40, 44), id: "coins" },
  ];

  return (
    <div className="goldcontent"> 
 <div className="one">
        <h1 className="main-heading" style={{textTransform:"capitalize"}}>Gold Jewellery</h1>
        <p className="sub-heading" style={{fontFamily:"PlayfairDisplay"}}>Embrace the golden glow this festive season</p>
      </div>

      {productGroups.map((group) => (
        <div id={group.id} key={group.id}>
          <div className="sub-heading-container">
            <h2 className="sub-heading shiny-text" data-text={group.heading}>
              {group.heading}
            </h2>
          </div>
          <div className="collection-container">
            {group.items.map((product, idx) => (
              <div className="collection-card" key={idx}>
                <div className="collection-imgBox">
                  <img src={product.image} alt={`${product.name}`} />
                </div>
                <div className="collection-content">
                  <div className="collection-productName">{product.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gold;