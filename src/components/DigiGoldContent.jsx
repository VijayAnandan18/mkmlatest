import React from 'react';
import './DigiGoldContent.css'; // Import the CSS file

const DigiGoldContent = () => {
  return (
    <div className="digi-gold-container" style={{ backgroundColor: "#daa5208f" }}>
      <div className="content-section one">
        <h1 className="main-heading" style={{textTransform:"capitalize"}}>Download Our MKM  Thangamaligai Application</h1>
        <p className="sub-heading" style={{fontFamily:"PlayfairDisplay"}}>
          Unlock the power of gold savings with the MKM Thangamaligai Digigold! Simply download the app, register with your KYC details,below we have also provided a video tutorial on downloading the Digi Gold app and applying for schemes.
        </p>
      </div>

      {/* App Store Button */}
      <a
        href="https://play.google.com/store/apps/details?id=com.ri.zinger.mkmthangamaligai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="app-store-buttons">
          <img src="assets/googleplay.webp" alt="Google Play" className="store-icon" />
        </div>
      </a>

      {/* Image Section */}
      <div className="image-section schemes2-image">
        <img src="/assets/playy.png" alt="Gold Schemes 2" className="schemes2-img" />
      </div>

      {/* Video Section */}
      <div className="video-section">
        <video className="scheme-video"  controls autoPlay muted loop>
          <source src="/assets/scheme.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default DigiGoldContent;
