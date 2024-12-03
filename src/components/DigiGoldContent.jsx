import React from 'react';
import './DigiGoldContent.css'; // Import the CSS file

const DigiGoldContent = () => {
  return (
    <div className="digi-gold-container">
      <div className="content-section one">
        <h1>MKM Schemes</h1>
        <p>Explore our exclusive gold schemes designed to help you grow your wealth securely.</p>
      </div>
      <div className="image-section scheme-image">
        <img src="/assets/scheme.jpg" alt="Gold Scheme" className="scheme-img" />
      </div>
      
      <div className="content-section one">
        <h1>Process to Login</h1>
        <p>
          Unlock the power of gold savings with the MKM Thangamaligai Digigold! Simply download the app, register with your KYC details, choose your preferred gold scheme, and start building your wealth today! It's that easy.
        </p>
      </div>
      <a
              href="https://play.google.com/store/apps/details?id=com.ri.zinger.mkmthangamaligai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="app-store-buttons">
                <img src="assets/googleplay.webp" alt="Google Play" className="store-icon" />
              </div>
            </a>
      <div className="image-section schemes2-image">
        <img src="/assets/schemes2.png" alt="Gold Schemes 2" className="schemes2-img" />
      </div>
    </div>
  );
};

export default DigiGoldContent;
