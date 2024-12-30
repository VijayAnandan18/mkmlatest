import React, { useEffect, useRef } from "react";
import { getFirestore, collection, addDoc, getDocs, query, updateDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useNavigate } from "react-router-dom";
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
  const lastUpdatedRef = useRef(null);
  const gold24KRef = useRef(null);
  const gold22KRef = useRef(null);
  const gold18KRef = useRef(null);
  const silverRef = useRef(null);
  const navigate = useNavigate();

  // Check if goldRates document exists
  useEffect(() => {
    const fetchRates = async () => {
      const q = query(collection(db, "goldRates"));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          gold24KRef.current.value = data["Gold-24K"];
          gold22KRef.current.value = data["Gold-22K"];
          gold18KRef.current.value = data["Gold-18K"];
          silverRef.current.value = data.silver;
          lastUpdatedRef.current.textContent = new Date(data.lastUpdated).toLocaleString();
        });
      }
    };
    fetchRates();
  }, []);

  const handleSubmit = async () => {
    try {
      const timestamp = new Date().toISOString();

      // Gather data from input fields
      const updatedRates = {
        "Gold-24K": gold24KRef.current.value,
        "Gold-22K": gold22KRef.current.value,
        "Gold-18K": gold18KRef.current.value,
        silver: silverRef.current.value,
      };

      // Check if a document already exists
      const q = query(collection(db, "goldRates"));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // If a document exists, update it
        querySnapshot.forEach((docSnapshot) => {
          const docRef = doc(db, "goldRates", docSnapshot.id);
          updateDoc(docRef, { ...updatedRates, lastUpdated: timestamp });
        });
      } else {
        // If no document exists, create a new one
        await addDoc(collection(db, "goldRates"), { ...updatedRates, lastUpdated: timestamp });
      }

      lastUpdatedRef.current.textContent = new Date(timestamp).toLocaleString();
      alert("Rates updated successfully!");
    } catch (error) {
      console.error("Error updating rates: ", error);
    }
  };

  const handleLogout = () => {
    navigate("/mkmadminlogin");
  };

  return (
    <div className="admin-gold-rate-container" style={{ fontFamily: "PlayfairDisplay" }}>
      <img src="assets/spinnerbg.png" style={{ width: "300px", height: "60px" }} alt="Header Image" />
      <p>
        <b>Note:</b> Please ensure the rates are updated daily, as these updates will be visible to users.
      </p>
      <h1 className="admin-gold-rate-title">Today's Rates</h1>
      <p className="admin-gold-rate-updated">
        Updated on: <span ref={lastUpdatedRef}>Not updated yet</span>
      </p>
      <table className="admin-gold-rate-table">
        <thead>
          <tr>
            <th className="admin-gold-rate-header">Type</th>
            <th className="admin-gold-rate-header">Price in ₹</th>
          </tr>
        </thead>
        <tbody>
          <tr className="admin-gold-rate-row">
            <td className="admin-gold-rate-cell">
              <input
                type="text"
                className="admin-gold-rate-input"
                value="Gold-24K" // Display the rate type
                readOnly
                style={{ backgroundColor: "#f0f0f0", cursor: "not-allowed" }} // Indicate it's not changeable
              />
            </td>
            <td className="admin-gold-rate-cell">
              <input
                type="number"
                className="admin-gold-rate-input"
                ref={gold24KRef}
                placeholder="Enter Price"
                min="0"  // Prevent negative values
              />
            </td>
          </tr>
          <tr className="admin-gold-rate-row">
            <td className="admin-gold-rate-cell">
              <input
                type="text"
                className="admin-gold-rate-input"
                value="Gold-22K" // Display the rate type
                readOnly
                style={{ backgroundColor: "#f0f0f0", cursor: "not-allowed" }}
              />
            </td>
            <td className="admin-gold-rate-cell">
              <input
                type="number"
                className="admin-gold-rate-input"
                ref={gold22KRef}
                placeholder="Enter Price"
                min="0"  // Prevent negative values
              />
            </td>
          </tr>
          <tr className="admin-gold-rate-row">
            <td className="admin-gold-rate-cell">
              <input
                type="text"
                className="admin-gold-rate-input"
                value="Gold-18K" // Display the rate type
                readOnly
                style={{ backgroundColor: "#f0f0f0", cursor: "not-allowed" }}
              />
            </td>
            <td className="admin-gold-rate-cell">
              <input
                type="number"
                className="admin-gold-rate-input"
                ref={gold18KRef}
                placeholder="Enter Price"
                min="0"  // Prevent negative values
              />
            </td>
          </tr>
          <tr className="admin-gold-rate-row">
            <td className="admin-gold-rate-cell">
              <input
                type="text"
                className="admin-gold-rate-input"
                value="Silver" // Display the rate type
                readOnly
                style={{ backgroundColor: "#f0f0f0", cursor: "not-allowed" }}
              />
            </td>
            <td className="admin-gold-rate-cell">
              <input
                type="number"
                className="admin-gold-rate-input"
                ref={silverRef}
                placeholder="Enter Price"
                min="0"  // Prevent negative values
              />
            </td>
          </tr>
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
      <div className="admin-gold-rate-button-container">
        <button
          className="admin-gold-rate-submit-button"
          onClick={handleLogout}
          style={{ background: "linear-gradient(90deg, #614100cc, #d89700, #6b4700c4)" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminGoldRate;
