import React, { useEffect, useState } from 'react';
import './Contacthero.css';

const Contacthero = () => {
  const [videoSource, setVideoSource] = useState('assets/contact.webm');

  useEffect(() => {
    const updateVideoSource = () => {
      if (window.innerWidth <= 768) {
        setVideoSource('assets/contactmobile.mp4'); // Mobile video
      } else {
        setVideoSource('assets/contact.mp4'); // Desktop video
      }
    };

    // Initial check
    updateVideoSource();

    // Add event listener to handle window resizing
    window.addEventListener('resize', updateVideoSource);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateVideoSource);
    };
  }, []);

  return (
    <div className="contact-hero-video-container">
      <video
        className="contact-hero-video"
        src={videoSource}
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default Contacthero;
