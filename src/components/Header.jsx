import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5"; // Location icon
import { HiMiniPhone } from "react-icons/hi2"; // Phone icon
import "./Header.css"; // Header styles

const Header = () => {
  const [country, setCountry] = useState("India");
  const [flag, setFlag] = useState("india-flag.png");
  const [goldRates, setGoldRates] = useState(null);

  // Function to fetch and cache gold rates
  const fetchGoldRates = async () => {
    try {
      const accessKey = "goldapi-1d03vsm471m42s-io"; // Replace with your API key

      // Check if data is in localStorage and valid (less than 24 hours old)
      const cachedGoldRates = localStorage.getItem("goldRates");
      const cachedTime = localStorage.getItem("goldRatesTime");

      if (cachedGoldRates && cachedTime) {
        const currentTime = new Date().getTime();
        const timeDifference = currentTime - cachedTime;
        if (timeDifference < 24 * 60 * 60 * 1000) { // 24 hours in milliseconds
          setGoldRates(JSON.parse(cachedGoldRates));
          console.log("Loaded gold rates from cache");
          return;
        }
      }

      // Fetch new data if cache is not valid or does not exist
      const response = await fetch("https://www.goldapi.io/api/XAU/INR", {
        headers: {
          "x-access-token": accessKey,
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();

      if (data) {
        setGoldRates(data);
        console.log("Gold rates:", data);

        // Store new data in localStorage with the current time
        localStorage.setItem("goldRates", JSON.stringify(data));
        localStorage.setItem("goldRatesTime", new Date().getTime());
      } else {
        console.error("Invalid data received from Gold API.");
      }
    } catch (error) {
      console.error("Error fetching gold rates:", error);
    }
  };

  useEffect(() => {
    // Fetch location information
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setCountry(data.country_name);
        setFlag(`https://flagcdn.com/w40/${data.country_code.toLowerCase()}.png`);
      } catch (error) {
        console.error("Error fetching location:", error);
        setCountry("India");
        setFlag("india-flag.png");
      }
    };

    fetchLocation();
    fetchGoldRates();
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        <img src="assets/logo1.png" alt="Logo" className="logo" />
        <img src="assets/logo2.png" alt="Logo" className="logo" style={{ width: "140px" }} />
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search" className="search-box" />
      </div>

      <div className="location-container">
        <IoLocationOutline className="location-icon" />
        <a 
          href="https://maps.app.goo.gl/fDHQGWRaN74YVShb7" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'none' }}
        >
          <span className="store" style={{ color: "#700B00" }}>Store</span>
        </a>
      </div>

      <div className="country-container">
        <img src={flag} alt={`${country} Flag`} className="country-flag" />
        <span className="country-name" style={{ color: "#700B00" }}>{country}</span>
      </div>

      <div className="goldtext-rate">
 
        <p className="shiny-text2" data-text="Gold Rate">Gold Rate</p>
        <div className="dropdown">
          <div className="dropdown-content">
            {goldRates ? (
              <table className="gold-rate-table">
                <thead>
                  <tr>
                    <th colSpan="2" style={{ background: "#700B00", color: "white", textAlign: "center" }}>Today's Gold Rate</th>
                  </tr>
                  <tr>
                    <th style={{ background: "#700B00", color: "white" }}>Gold Type</th>
                    <th style={{ background: "#700B00", color: "white" }}>Price (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>24k</td>
                    <td>₹{goldRates.price_gram_24k.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>22k</td>
                    <td>₹{goldRates.price_gram_22k.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>21k</td>
                    <td>₹{goldRates.price_gram_21k.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>20k</td>
                    <td>₹{goldRates.price_gram_20k.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>18k</td>
                    <td>₹{goldRates.price_gram_18k.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      <div className="phone-container">
        <HiMiniPhone className="phone-icon" />
        <a href="tel:+919778907890" className="phone-link">
          <span className="phone-number">+91 9443758266</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
