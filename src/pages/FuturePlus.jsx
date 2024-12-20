import React, { useState, useEffect } from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header";
import Plus from "../components/Plus";
import HeaderTwo from "../components/HeaderTwo";
import FuturePlusContent from "../components/FuturePlusContent";
import CustomBottomNavigation from "../components/BottomNavbar";
import Footer from "../components/Footer";
import FuturePlusBack from "../components/FuturePlusback";
import Sidebar from "../components/Sidebar"; // Ensure Sidebar is imported

const  FuturePlus = () => {
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
  <Plus/>
    

   
      <FuturePlusBack/>
   <FuturePlusContent/>
      <Footer />

      {isMobile && <CustomBottomNavigation />}

   
    </div>
  );
};

export default FuturePlus;
