import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import './GoldRateTag.css';

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

const GoldRateTag = () => {
  const [goldRates, setGoldRates] = useState(null);
  const [showRates, setShowRates] = useState(false);

  useEffect(() => {
    const fetchGoldRates = async () => {
      try {
        const goldRateDocRef = doc(db, "goldRates", "Z9LLCzCMAGDMBSQqzBgH");
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
                  <td>₹{goldRates["Gold-24K"] || "Not available"}</td>
                </tr>
                <tr>
                  <td>22k</td>
                  <td>₹{goldRates["Gold-22K"] || "Not available"}</td>
                </tr>
                <tr>
                  <td>18k</td>
                  <td>₹{goldRates["Gold-18K"] || "Not available"}</td>
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
  );
};

export default GoldRateTag;
