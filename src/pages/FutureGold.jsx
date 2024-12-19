import React, { useState, useEffect } from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header";
import DigiHero from "../components/DigiHero";
import HeaderTwo from "../components/HeaderTwo";
import FutureGoldContent from "../components/FutureGoldContent";
import CustomBottomNavigation from "../components/BottomNavbar";
import Footer from "../components/Footer";
import DigiGoldBack from "../components/DigiGoldBack";
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
      <HeaderTwo />
  <DigiHero/>
    

   
      <DigiGoldBack/>
   <FutureGoldContent/>
      <Footer />

      {isMobile && <CustomBottomNavigation />}

   
    </div>
  );
};

export default FutureGold;
