import React, { useState, useEffect } from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header";
import DigiHero from "../components/DigiHero";
import HeaderTwo from "../components/HeaderTwo";
import DigiGoldContent from "../components/DigiGoldContent";
import CustomBottomNavigation from "../components/BottomNavbar";
import Footer from "../components/Footer";
import DigiGoldBack from "../components/DigiGoldBack";
import Sidebar from "../components/Sidebar"; // Ensure Sidebar is imported
import Scheme from "../components/Scheme"
import DigiSecond from "../components/DigiSecond";
import UpArrow from "./UpArrow";
const  DigiGold = () => {
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
  <DigiHero/>
    

   
      <DigiGoldBack/>
      <DigiGoldContent/>
<DigiSecond/>
<UpArrow/>
  
      <Footer />

      {isMobile && <CustomBottomNavigation />}

   
    </div>
  );
};

export default DigiGold;
