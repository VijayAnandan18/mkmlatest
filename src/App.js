import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Enquiry from "./pages/Enquiry";
import CollectionPage from "./pages/CollectionPage";
import DiamondPage from "./pages/DiamondPage";
import SilverPage from "./pages/SilverPage";
import DigiGold from "./pages/DigiGold";
import Spinner from "./pages/Spinner"; // Import the Spinner component
import AOS from "aos";
import "aos/dist/aos.css";
import FuturePlus from "./pages/FuturePlus";
import FutureGold from "./pages/FutureGold";
import FlexiGold from "./pages/FlexiGold";
import DailyCollection from "./pages/DailyCollection";
function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading time, adjust as needed
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time as needed (e.g., 3 seconds for demo)
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <Router>
      {loading ? (
        <Spinner /> // Show spinner while loading
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/gold-jewellery" element={<CollectionPage />} />
          <Route path="/diamond-jewellery" element={<DiamondPage />} />
          <Route path="/silver-collection" element={<SilverPage />} />
          <Route path="/digigold" element={<DigiGold />} />
          <Route path="/futureplus" element={<FuturePlus/>} />
          <Route path="/futuregold" element={<FutureGold/>} />
          <Route path="/flexigold" element={<FlexiGold/>} />
          <Route path="/dailycollection" element={<DailyCollection/>} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
