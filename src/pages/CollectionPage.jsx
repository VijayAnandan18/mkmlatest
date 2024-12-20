import React, { useEffect, useState } from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header";
import HeaderTwo from "../components/HeaderTwo";
import GoldHero from "../components/GoldHero";
import Gold from "../components/Gold";
import Footer from "../components/Footer";
import CustomBottomNavigation from "../components/BottomNavbar"; // Make sure this path is correct
import GoldRateTag from "../components/GoldRateTag";
import GoldBack from "../components/GoldBack";
import Sidebar from "../components/Sidebar"; // Ensure Sidebar is imported
const CollectionPage = () => {
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
      {isMobile ? <Sidebar /> : <HeaderTwo />}

      
      {isMobile ? (
        <>
  <GoldRateTag />
        </>
      ) : null}
      <GoldHero />
      <GoldBack/>
      <Gold />
      <Footer />
      {/* Display the bottom navigation only if it's a mobile screen */}
      {isMobile && <CustomBottomNavigation />}
    </div>
  );
};

export default CollectionPage;
