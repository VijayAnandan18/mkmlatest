import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContact.css';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; // Import icons

const MainContact = () => {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate('/enquiry');
  };

  return (
    <div className="main-contact-container">
      <div className="contact-card">
        <p className="contact-info">
          For any assistance or enquiry, please click here.
        </p>
        <button className="enquiry-button" onClick={handleEnquiryClick}>
          Enquiry
        </button>
        <div className="contact-icons">
  <div className="contact-item">
    <FaWhatsapp className="contact-icon" />
    <span>
      WhatsApp: 
      <a href="https://wa.me/9384810725" target="_blank" rel="noopener noreferrer" className="contact-link">
        9384810725
      </a>
    </span>
  </div>
  <div className="contact-item">
    <FaPhoneAlt className="contact-icon" />
    <span>
      Telephone: 
      <a href="tel:04624055001" className="contact-link">
        0462-4055001
      </a>
    </span>
  </div>
</div>
      </div>
      <div className="image-card">
        <img
          src="/assets/sociallinks.webp"
          alt="Social Links"
          className="social-image"
        />
      </div>
    </div>
  );
};

export default MainContact;
