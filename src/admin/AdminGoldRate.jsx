import React, { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, getDocs, query, updateDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./AdminGoldRate.css";

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
const analytics = getAnalytics(app);

const AdminGoldRate = () => {
  const [rates, setRates] = useState({
    gold24K: "",
    gold22K: "",
    gold18K: "",
    silver: "", // New silver rate field
  });
  const [lastUpdated, setLastUpdated] = useState(null);

  // Check if goldRates document exists
  useEffect(() => {
    const fetchRates = async () => {
      const q = query(collection(db, "goldRates"));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setRates(doc.data()); // Set the rates directly from the document data
          setLastUpdated(doc.data().lastUpdated);
        });
      }
    };
    fetchRates();
  }, []);

  const handleInputChange = (field, value) => {
    setRates((prevRates) => ({
      ...prevRates,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const timestamp = new Date().toISOString();

      // Check if a document already exists
      const q = query(collection(db, "goldRates"));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // If a document exists, update it
        querySnapshot.forEach((docSnapshot) => {
          const docRef = doc(db, "goldRates", docSnapshot.id);
          updateDoc(docRef, { ...rates, lastUpdated: timestamp });
        });
      } else {
        // If no document exists, create a new one
        await addDoc(collection(db, "goldRates"), { ...rates, lastUpdated: timestamp });
      }

      setLastUpdated(timestamp);
      alert("Rates updated successfully!");
    } catch (error) {
      console.error("Error updating rates: ", error);
    }
  };

  return (
    <div className="admin-gold-rate-container" style={{ fontFamily: "PlayfairDisplay" }}>
      <img src="assets/spinnerbg.png" style={{ width: "300px", height: "60px" }} alt="Header Image" />
      <p>
        <b>Note:</b> Please ensure the rates are updated daily, as these updates will be visible to users.
      </p>
      <h1 className="admin-gold-rate-title">Today's Rates</h1>
      <p className="admin-gold-rate-updated">
        Updated on: {lastUpdated ? new Date(lastUpdated).toLocaleString() : "Not updated yet"}
      </p>
      <table className="admin-gold-rate-table">
        <thead>
          <tr>
            <th className="admin-gold-rate-header">Type</th>
            <th className="admin-gold-rate-header">Price in ₹</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(rates).map((rateKey) => (
            <tr key={rateKey} className="admin-gold-rate-row">
              <td className="admin-gold-rate-cell">
                <input
                  type="text"
                  className="admin-gold-rate-input"
                  value={rateKey} // Display the rate type
                  readOnly // Make the type field read-only
                />
              </td>
              <td className="admin-gold-rate-cell">
                <input
                  type="number"
                  className="admin-gold-rate-input"
                  placeholder="Enter Price"
                  value={rates[rateKey]} // Bind value to the respective rate
                  onChange={(e) => handleInputChange(rateKey, e.target.value)} // Update the corresponding rate
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="admin-gold-rate-button-container">
        <button
          className="admin-gold-rate-submit-button"
          onClick={handleSubmit}
          style={{ background: "linear-gradient(90deg, #614100cc, #d89700, #6b4700c4)" }}
        >
          Update Rates
        </button>
      </div>
    </div>
  );
};

export default AdminGoldRate;
