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

  return (
    <div className="marquee-wrapper">
      <div className="marquee-container-custom">
        <div className="marquee-text-custom">
          {goldRates ? (
            <>
              நம் நெல்லையில் MKM தங்க மாளிகை! 
              இன்றைய தங்க விலை கிராம் ஒன்றிற்கு 
              24k - ₹{goldRates.gold24K ? goldRates.gold24K : "Not available"}, 
              22k - ₹{goldRates.gold22K ? goldRates.gold22K : "Not available"}, 
              18k - ₹{goldRates.gold18K ? goldRates.gold18K : "Not available"}, 
              வெள்ளி கிராம் ஒன்றிற்கு ₹{goldRates.silver ? goldRates.silver : "Not available"}    
                 -மட்டுமே!
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
