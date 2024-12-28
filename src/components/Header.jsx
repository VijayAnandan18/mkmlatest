import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5"; // Location icon
import { GiRotaryPhone } from "react-icons/gi";
import CustomDropdown from "./CustomDropdown"; // Import the CustomDropdown component
import "./Header.css"; // Header styles
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const Header = () => {
  const [country, setCountry] = useState("India");
  const [flag, setFlag] = useState("india-flag.png");

  const firebaseConfig = {
    apiKey: "AIzaSyDuI4z1Eq1Na-a7pRapholyTmRfC9D-pkY",
    authDomain: "mkmthangamaligai-a4e5c.firebaseapp.com",
    projectId: "mkmthangamaligai-a4e5c",
    storageBucket: "mkmthangamaligai-a4e5c.appspot.com",
    messagingSenderId: "999444851582",
    appId: "1:999444851582:web:177cf17fb7103257c9212f",
    measurementId: "G-R7ZSYLF51Y",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); // Initialize Firestore

  const [goldRates, setGoldRates] = useState(null);
  const [showRates, setShowRates] = useState(false);

  useEffect(() => {
    const fetchGoldRates = async () => {
      try {
        const goldRateDocRef = doc(db, "goldRates", "vz4Dq1HGcagWIleTFqs5");
        const docSnap = await getDoc(goldRateDocRef);

        if (docSnap.exists()) {
          setGoldRates(docSnap.data());
        } else {
          console.error("No gold rates found in Firestore.");
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
        const response = await fetch(
          "http://api.ipapi.com/api/161.185.160.93?access_key=c65dfc1530826f5c021b280840dbb4ff"
        );
        const data = await response.json();

        if (data.country_name && data.country_code) {
          setCountry(data.country_name);
          setFlag(`https://flagcdn.com/w40/${data.country_code.toLowerCase()}.png`);
          localStorage.setItem("lastFetchDate", new Date().toISOString());
        } else {
          throw new Error("Invalid API response");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setCountry("India");
        setFlag("https://flagcdn.com/w40/in.png");
      }
    };

    const lastFetchDate = localStorage.getItem("lastFetchDate");
    const today = new Date().toISOString().split("T")[0];
    const lastFetchDay = lastFetchDate ? lastFetchDate.split("T")[0] : null;

    if (lastFetchDay !== today) {
      fetchLocation();
    } else {
      setCountry("India");
      setFlag("https://flagcdn.com/w40/in.png");
    }
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        <img src="assets/spinner.png" alt="Logo" className="logo" style={{ width: "250px", height: "50px" }} />
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
        <div className="dropdown-header">
          <div className="dropdown-content-header">
            {showRates && (
              <div className="gold-rate-dropdown">
                {goldRates ? (
                  <table className="gold-rate-table">
                    <thead>
                      <tr>
                        <th colSpan="2" style={{ background: "#700B00", color: "white", textAlign: "center" }}>
                          Today's Gold Rate
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="2" style={{ background: "#700B00", color: "white", textAlign: "center" }}>
                          Updated on: {`${new Date(goldRates.lastUpdated).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })} 10:05 AM`}
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
                        <td>₹{goldRates.gold24K || "Not available"}</td>
                      </tr>
                      <tr>
                        <td>22k</td>
                        <td>₹{goldRates.gold22K || "Not available"}</td>
                      </tr>
                      <tr>
                        <td>18k</td>
                        <td>₹{goldRates.gold18K || "Not available"}</td>
                      </tr>
                      <tr>
                        <td>Silver</td>
                        <td>₹{goldRates.silver || "Not available"}</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            )}
          </div>
        </div>
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
    </header>
  );
};

export default Header;
