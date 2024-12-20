import React, { useState, useEffect } from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header";

import HeaderTwo from "../components/HeaderTwo";
import FlexiGoldContent from "../components/FlexiGoldContent";

import CustomBottomNavigation from "../components/BottomNavbar";
import Footer from "../components/Footer";
import FlexiGoldBack from "../components/FlexiGoldBack";
import Sidebar from "../components/Sidebar"; // Ensure Sidebar is imported
import FlexiImage from "../components/FlexiImage";
const   FlexiGold = () => {
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

    <FlexiImage/>

   
      <FlexiGoldBack/>
 <FlexiGoldContent/>
      <Footer />

      {isMobile && <CustomBottomNavigation />}

   
    </div>
  );
};

export default FlexiGold;
