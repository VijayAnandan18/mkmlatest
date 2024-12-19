import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import { FaFacebook, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa'; // Correctly import FaEnvelope
// Importing icons for social media

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Get to know us</h3>
          <ul className="footer-links">
            <li><a href="/about">About us</a></li>
            <li><a href="/about">Our Policies</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Let us help you</h3>
          <ul className="footer-links">
            <li><a href="/enquiry">Contact us</a></li>
            <li><a href="/enquiry">Enquiry Form</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Schemes</h3>
          <ul className="footer-links">
            <li><a href="/digigold">Digi Gold</a></li>
            <li><a href="/dailycollection"> MKM Daily collections</a></li>
            <li><a href="/futuregold">Future Gold</a></li>
            <li><a href="/flexigold">Flexi Gold</a></li>
            <li><a href="/futureplus">Future Plus</a></li>

          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Collections</h3>
          <ul className="footer-links">
            <li><a href="/gold-jewellery">Gold Jewellery</a></li>
            <li><a href="/diamond-jewellery">Diamond Jewellery</a></li>
            <li><a href="/silver-collection">Silver Collection</a></li>
            <li><a href="/gold-jewellery#coins">Gold Coins</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-about-row">
        <div className="footer-about" >
          <div className="footer-logo">
            <img src="assets/tamillogo.webp" alt="Tamil Logo" className="logo-image" />
          </div>
          <h3>Explore MKM Thangamaligai's Collection Online. Anytime. Anywhere.</h3>
          <p style={{ textAlign: "justify" }}>
            Explore our exclusive collection of Gold, Diamond Jewellery from the comfort of your home. From timeless classics to modern designs, find the perfect piece that reflects your style with ease and security. Download our app for a seamless shopping experience and access to the finest collection of jewellery anytime, anywhere.
          </p>
          <div className="footer-qr">
            <a
              href="https://play.google.com/store/apps/details?id=com.ri.zinger.mkmthangamaligai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="app-store-buttons">
                <img src="assets/googleplay.webp" alt="Google Play" className="store-icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <ul className="social-links">
          <li><a href="https://www.facebook.com/people/MKM-Thangamaligai/61555917721795/?mibextid=ZbWKwL" aria-label="Facebook"><FaFacebook size={30} /></a></li>
          <li><a href="https://www.instagram.com/mkmthangamaligai/profilecard/?igsh=MnE0MzcxeHRzYWl0" aria-label="Instagram"><FaInstagram size={30} /></a></li>
          <li><a href="https://www.youtube.com/@MKMThangamaligai" aria-label="YouTube"><FaYoutube size={30} /></a></li>
          <li>
  <a href="mailto:mkmthangamaligai@gmail.com" aria-label="Gmail">
    <FaEnvelope size={30} />
  </a>
</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          © {currentYear} MKM Thangamaligai. All rights reserved. The product/service names listed in this document are marks and/or registered marks of their respective owners and used under license. Unauthorized use strictly prohibited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;