import React, { useState, useEffect } from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header";
import HeaderTwo from "../components/HeaderTwo";
import SilverHero from "../components/SilverHero";
import Footer from "../components/Footer";
import SilverCollection from "../components/SilverCollection";
import SilverBack from "../components/SilverBack";
import BottomNavbar from "../components/BottomNavbar"; // Ensure this path is correct

const SilverPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Hook to update state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-container">
      <Marquee />
      <Header />
      <HeaderTwo />
      <SilverBack />
      <SilverHero />
      <SilverCollection />
      <Footer />
      {/* Display the bottom navigation only if it's a mobile screen */}
      {isMobile && <BottomNavbar />}
    </div>
  );
};

export default SilverPage;
