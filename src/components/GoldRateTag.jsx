import React, { useState, useEffect } from 'react';
import './GoldRateTag.css';

const GoldRateTag = () => {
  const [goldRates, setGoldRates] = useState(null);
  const [showRates, setShowRates] = useState(false);

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

  return (
    <div className="gold-rate-container">
      <div className="gold-rate-tag" onClick={() => setShowRates(!showRates)}>
        <span role="img" aria-label="gold">💰</span> Gold Rate
      </div>
      {showRates && (
        <div className="gold-rate-dropdown">
          {goldRates ? (
            <table className="gold-rate-table">
              <thead>
                <tr>
                  <th colSpan="2" style={{ textAlign: "center" }}>Today's Gold Rate</th>
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
                  <th>Gold Type</th>
                  <th>Price (₹)</th>
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
      )}
    </div>
  );
};

export default GoldRateTag;
