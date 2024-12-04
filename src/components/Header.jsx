import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5"; // Location icon
import { HiMiniPhone } from "react-icons/hi2"; // Phone icon
import CustomDropdown from "./CustomDropdown"; // Import the CustomDropdown component
import "./Header.css"; // Header styles

const Header = () => {
  const [country, setCountry] = useState("India");
  const [flag, setFlag] = useState("india-flag.png");
  const [goldRates, setGoldRates] = useState(null);

  // Function to fetch and cache gold rates
  useEffect(() => {
    const fetchGoldRates = async () => {
      try {
        const accessKey = "goldapi-1d03vsm471m42s-io"; // Replace with your API key
        const cachedGoldRates = localStorage.getItem("goldRates");
        const cachedTime = localStorage.getItem("goldRatesTime");

        if (cachedGoldRates && cachedTime) {
          const currentTime = new Date().getTime();
          const timeDifference = currentTime - cachedTime;
          if (timeDifference < 24 * 60 * 60 * 1000) {
            setGoldRates(JSON.parse(cachedGoldRates));
            return;
          }
        }

        const response = await fetch("https://www.goldapi.io/api/XAU/INR", {
          headers: {
            "x-access-token": accessKey,
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();

        if (data) {
          setGoldRates(data);
          localStorage.setItem("goldRates", JSON.stringify(data));
          localStorage.setItem("goldRatesTime", new Date().getTime());
        } else {
          console.error("Invalid data received from Gold API.");
        }
      } catch (error) {
        console.error("Error fetching gold rates:", error);
      }
    };

    fetchGoldRates();
  }, []);
  useEffect(() => {
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
  }, []);
  return (
    <header className="header">
      <div className="logo-container">
        <img src="assets/logo1.webp" alt="Logo" className="logo" style={{ height: "55px",width:"50px" }}/>
        <img src="assets/logo2.webp" alt="Logo" className="logo" style={{ width: "140px" }} />
      </div>

      <div className="search-container">
        <CustomDropdown
          options={[
            { label: "Gold Rings", value: "gold-jewellery#rings" },
            { label: "Gold Bangles", value: "gold-jewellery#bangles" },
            { label: "Diamond Rings", value: "diamond-jewellery#rings" },
            { label: "Silver Articles", value: "silver-collection#articles" },
            { label: "Schemes (DigiGold)", value: "digigold" },
          ]}
          placeholder="Search here..."
        />
      </div>

      <div className="location-container">
        <IoLocationOutline className="location-icon" />
        <a
          href="https://maps.app.goo.gl/LMWydXhk1kSWVpVx6"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
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
  <th
    colSpan="2"
    style={{ background: "#700B00", color: "white", textAlign: "center" }}
  >
    Updated on: {`${new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })} 10:05 AM`} {/* Fixed time */}
  </th>
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
        <a href="tel:+919443758266" className="phone-link">
          <span className="phone-number">+91 9443758266</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
