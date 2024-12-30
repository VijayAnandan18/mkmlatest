import React, { useState, useEffect } from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header";
import FutureHero from "../components/FutureHero";
import HeaderTwo from "../components/HeaderTwo";
import FutureGoldContent from "../components/FutureGoldContent";
import CustomBottomNavigation from "../components/BottomNavbar";
import Footer from "../components/Footer";
import FutureGoldBack from "../components/FutureGoldBack";
import Sidebar from "../components/Sidebar"; // Ensure Sidebar is imported
import UpArrow from "./UpArrow";
const  FutureGold = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-container">
      <Marquee />
      <Header />
      {isMobile ? <Sidebar /> : <HeaderTwo />}
  <FutureHero/>
    

   
      <FutureGoldBack/>
   <FutureGoldContent/>
   <UpArrow/>
      <Footer />

      {isMobile && <CustomBottomNavigation />}

   
    </div>
  );
};

export default FutureGold;
