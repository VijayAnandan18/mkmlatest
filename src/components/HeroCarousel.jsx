import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const desktopMedia = [
    { type: 'video', src: "assets/hero4.mp4" },
    { type: 'image', src: "assets/hero1.webp" },
    { type: 'video', src: "assets/hero3.mp4" },
    { type: 'video', src: "assets/hero2.mp4" },
    { type: 'video', src: "assets/hero1.webm" },
  ];

  const mobileMedia = [
    { type: 'image', src: "assets/one.jpeg" },
    { type: 'image', src: "assets/two.jpeg" },
    { type: 'image', src: "assets/offer.jpeg" },
  
 
    { type: 'image', src: "assets/mobilehero2.webp" },
    { type: 'image', src: "assets/mobilehero3.webp" },
    { type: 'image', src: "assets/mobilehero4.webp" },
    { type: 'image', src: "assets/mobilehero5.webp" },
    { type: 'image', src: "assets/mobilehero6.webp" },
    
  ];

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update `isMobile` state based on window width
    const updateView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateView();
    window.addEventListener('resize', updateView);

    return () => window.removeEventListener('resize', updateView);
  }, []);

  useEffect(() => {
    // Calculate delay based on media index
    const calculateDelay = () => {
      if (currentMediaIndex === 0 || currentMediaIndex === 4) {
        return 10000; // Slow down for hero1 and hero4
      }
      return 8000; // Default speed for other media
    };

    const intervalId = setTimeout(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % desktopMedia.length);
    }, calculateDelay());

    return () => clearTimeout(intervalId);
  }, [currentMediaIndex, desktopMedia.length]);

  const media = isMobile ? mobileMedia : desktopMedia;

  return (
    <div className="hero-carousel">
      {media.map((item, index) => (
        item.type === 'image' ? (
          <img
            key={index}
            className={`hero-image ${index === currentMediaIndex ? 'active' : ''}`}
            src={item.src}
            alt={`Slide ${index + 1}`}
          />
        ) : (
          <video
            key={index}
            className={`hero-image ${index === currentMediaIndex ? 'active' : ''}`}
            src={item.src}
            autoPlay
            muted
            loop
          />
        )
      ))}
    </div>
  );
};

export default HeroCarousel;
