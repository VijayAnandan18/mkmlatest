import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContact.css';

const MainContact = () => {
  const navigate = useNavigate();
  

  const handleEnquiryClick = () => {
    navigate('/enquiry');
  };

  return (
    <div className="main-contact-container">
      <div className="contact-card">
        <p className="contact-info">
          For any assistance or inquiry, please click here.
        </p>
        <button className="enquiry-button" onClick={handleEnquiryClick}>
          Enquiry
        </button>
      </div>
      <div className="image-card">
        <img
          src="/assets/sociallinks.jpeg"
          alt="Social Links"
          className="social-image"
        />
      </div>
    </div>
  );
};

export default MainContact;
