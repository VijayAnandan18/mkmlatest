import React from "react";
import "./Scheme.css";

const Scheme = () => {
  return (
    <div className="scheme-container">
      <div className="one">
        <h1 style={{textTransform:"capitalize"}}>MKM THANGAMALIGAI Schemes</h1>
        <div className="shop-explore-more">
        <a href="/schemes"><button>Explore More...</button></a>
      </div>
      </div>
     

      <div className="video-container">
        <video
          className="responsive-video"
          src="assets/scheme.mp4" // Replace with the correct video file path
          controls
          autoPlay
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Scheme;
