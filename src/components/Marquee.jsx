import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "./Marquee.css"; // Ensure this file is in the same directory or adjust the path

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

const Marquee = () => {
  const [goldRates, setGoldRates] = useState(null);

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
    <div className="marquee-wrapper">
      <div className="marquee-container-custom">
      <div
  className="marquee-text-custom"
  style={{ fontFamily: "Cursive", wordSpacing: "5px" }}
>
  {goldRates ? (
    <>
      Welcome to MKM Thangamaligai! 
      Today's gold price per gram: 
      24k - ₹{goldRates["Gold-24K"] ? goldRates["Gold-24K"] : "Not available"}, 
      22k - ₹{goldRates["Gold-22K"] ? goldRates["Gold-22K"] : "Not available"}, 
      18k - ₹{goldRates["Gold-18K"] ? goldRates["Gold-18K"] : "Not available"}, 
      and silver per gram - ₹{goldRates.silver ? goldRates.silver : "Not available"} {"only!"}
    </>
  ) : (
    "Loading gold rates..."
  )}
</div>
      </div>
    </div>
  );
};

export default Marquee;
