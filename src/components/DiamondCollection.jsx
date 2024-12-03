import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './DiamondCollection.css';

const DiamondCollection = () => {
  const location = useLocation();
  const sectionRefs = useRef({}); // Object to hold references to sections

  useEffect(() => {
    if (location.state?.section) {
      // Delay scrolling to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const section = sectionRefs.current[location.state.section];
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [location]);

  
  const products = [
    { name: 'Pure Sparkle Diamond Ring', image: '/assets/jewels/diamond/rings/diamondring1.webp' },
    { name: 'Layered Luxe Diamond Ring', image: '/assets/jewels/diamond/rings/diamondring2.webp' },
    { name: 'Triad  Diamond Ring', image: '/assets/jewels/diamond/rings/diamondring3.webp' },
    { name: 'Glitz Band  Diamond Ring', image: '/assets/jewels/diamond/rings/diamondring4.webp' },
    { name: 'Classical  Diamond Bangle', image: '/assets/jewels/diamond/bangles/diamondbangle1.webp' },
    { name: ' Glorious Diamond Bangle', image: '/assets/jewels/diamond/bangles/diamondbangle2.webp' },
    { name: 'Sparkling Floral  Bangle', image: '/assets/jewels/diamond/bangles/diamondbangle3.webp' },
    { name: ' Diamond Bangle Bracelet', image: '/assets/jewels/diamond/bangles/diamondbangle4.webp' },
    { name: 'Graceful Diamond Necklace', image: '/assets/jewels/diamond/necklace/necklace1.webp' },
    { name: 'Royal Diamond Necklace', image: '/assets/jewels/diamond/necklace/necklace2.webp' },
    { name: 'Chic  Diamond Necklace', image:'/assets/jewels/diamond/necklace/necklace3.webp' },
    { name: 'Sparkling Diamond Necklace', image: '/assets/jewels/diamond/necklace/necklace4.webp' },
    { name: 'Style Shine Diamond Pendant', image: '/assets/jewels/diamond/pendants/pendant1.webp' },
    { name: 'Dazzle Bloom Diamond Pendant', image: '/assets/jewels/diamond/pendants/pendant2.webp' },
    { name: 'Modish Spark Diamond Pendant', image: '/assets/jewels/diamond/pendants/pendant3.webp' },
    { name: 'Graceful Glimmer Diamond Pendant', image: '/assets/jewels/diamond/pendants/pendant4.webp' },
    { name: 'Heart Gleam Diamond Earrings', image: '/assets/jewels/diamond/earrings/earring1.webp' },
    { name: 'Stellar Design Diamond Earrings', image: '/assets/jewels/diamond/earrings/earring2.webp' },
    { name: 'Leaf Glisten Diamond Earrings', image: '/assets/jewels/diamond/earrings/earring3.webp' },
    { name: 'Stunning Navaratna Diamond Earrings', image: '/assets/jewels/diamond/earrings/earring4.webp' },
    { name: 'classic  Diamond Bracelet', image: '/assets/jewels/diamond/bangles/bracelet1.webp' },
    { name: 'glorious Diamond  Bracelet', image: '/assets/jewels/diamond/bangles/bracelet2.webp' },
    { name: 'Sparkling Waves Bracelet', image: '/assets/jewels/diamond/bangles/bracelet3.webp' },
    { name: ' Glorious  Band  Bracelet', image: '/assets/jewels/diamond/bangles/bracelet4.webp' },
    { name: ' Stylish Floral Diamond Chain', image: '/assets/jewels/diamond/chain/chain1.webp' },
    { name: 'Celestial Diamond Chain', image: '/assets/jewels/diamond/chain/chain2.webp' },
    { name: 'Luminous Luxe Chain', image: '/assets/jewels/diamond/chain/chain3.webp' },
    { name: 'Classic Diamond Chain', image: '/assets/jewels/diamond/chain/chain4.webp' },
   
  ];
  

  const productGroups = [
    { heading: 'Rings', id: 'rings', items: products.slice(0, 4)},
    { heading: 'Bangles', id: 'bangles', items: products.slice(4, 8) },
    { heading: 'Necklaces',id: 'necklaces', items: products.slice(8, 12) },
    { heading: 'Pendants', id: 'pendants', items: products.slice(12, 16) },
    { heading: 'Earrings', id: 'earrings', items: products.slice(16, 20) },
    { heading: 'Bracelets', id: 'bracelets', items: products.slice(20, 24) },
    { heading: 'Chains', id: 'chains', items: products.slice(24, 28)},
  ];

  return (
    <div>
      <div className="one">
        <h1 className="main-heading">Diamond Jewellery</h1>
        <p>Sparkle through the festive nights with timeless diamonds</p>
      </div>
      {productGroups.map((group, index) => (
        <div
          id={group.id} // Add an ID for accessibility
          key={index}
          ref={(el) => (sectionRefs.current[group.key] = el)}
        >
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

export default DiamondCollection;