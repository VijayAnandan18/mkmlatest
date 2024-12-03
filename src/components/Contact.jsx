import React, { useState, useEffect } from 'react';
import './Enquiry.css';

const Enquiry = () => {
  // State for storing the current location
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Simulate fetching current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation(
          `Latitude: ${latitude.toFixed(2)}, Longitude: ${longitude.toFixed(2)}`
        );
      });
    } else {
      setLocation('Location not available');
    }
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-form-wrapper">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">Full Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="category">Jewellery Category</label>
            <select id="category" name="category">
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="diamond">Diamond</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              readWrite
            />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              placeholder="Enter your comments or inquiries here..."
            />
          </div>
          <div className="form-actions">
            <button type="reset" className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
