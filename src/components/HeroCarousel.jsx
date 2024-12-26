import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const desktopMedia = [
    { type: 'image', src: "assets/hero1.webp" },
    { type: 'image', src: "assets/hero2.webp" },
    { type: 'image', src: "assets/hero3.webp" },
    { type: 'image', src: "assets/hero4.webp" },
    { type: 'image', src: "assets/hero5.webp" },
    { type: 'image', src: "assets/hero6.webp" },
    { type: 'image', src: "assets/hero7.webp" },
    { type: 'image', src: "assets/hero8.webp" },
  
    { type: 'image', src: "assets/hero10.webp" },
    { type: 'image', src: "assets/hero11.webp" },
    { type: 'image', src: "assets/hero12.webp" },
    { type: 'image', src: "assets/hero13.png" },
  ];

  const mobileMedia = [
    { type: 'image', src: "assets/mobilehero1.png" },

    { type: 'image', src: "assets/mobilehero2.png" },
    { type: 'image', src: "assets/mobilehero3.png" },
    { type: 'image', src: "assets/mobilehero4.png" },
    { type: 'image', src: "assets/mobilehero5.png" },
    { type: 'image', src: "assets/mobilehero6.png" },
    { type: 'image', src: "assets/mobilehero7.png" },
    { type: 'image', src: "assets/mobilehero8.png" },
    { type: 'image', src: "assets/mobilehero9.png" },
    { type: 'image', src: "assets/mobilehero10.png" },
    { type: 'image', src: "assets/mobilehero11.png" },
    { type: 'image', src: "assets/mobilehero12.png" },
  ];

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateView();
    window.addEventListener('resize', updateView);

    return () => window.removeEventListener('resize', updateView);
  }, []);

  useEffect(() => {
    const calculateDelay = () => {
      if (currentMediaIndex === 0 || currentMediaIndex === 4) {
        return 3000; // Slow down for hero1 and hero4
      }
      return 3000; // Default speed for other media
    };

    const intervalId = setTimeout(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % desktopMedia.length);
    }, calculateDelay());

    return () => clearTimeout(intervalId);
  }, [currentMediaIndex, desktopMedia.length]);

  const media = isMobile ? mobileMedia : desktopMedia;

  const goToSlide = (index) => {
    setCurrentMediaIndex(index);
  };

  const prevSlide = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  const nextSlide = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-inner">
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
      <button className="carousel-control-prev" onClick={prevSlide} aria-label="Previous">
        <span className="carousel-control-prev-icon">&lt;</span>
      </button>
      <button className="carousel-control-next" onClick={nextSlide} aria-label="Next">
        <span className="carousel-control-next-icon">&gt;</span>
      </button>
      <div className="carousel-indicators">
  {media.map((_, index) => (
    <button
      key={index}
      className={`indicator ${index === currentMediaIndex ? 'active' : ''}`}
      onClick={() => goToSlide(index)}
      aria-label={`Slide ${index + 1}`}
    />
  ))}
</div>

    </div>
  );
};

export default HeroCarousel;
