import React, { useState, useEffect } from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header";
import SchemeHero from "../components/SchemeHero";
import HeaderTwo from "../components/HeaderTwo";
import Schemes from "./Schemes";
import CustomBottomNavigation from "../components/BottomNavbar";
import Footer from "../components/Footer";
import SchemesBack from "../components/SchemesBack";
import Sidebar from "../components/Sidebar"; // Ensure Sidebar is imported
import UpArrow from "./UpArrow";
const  SchemesPage = () => {
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
  <SchemeHero/>
    

   
      <SchemesBack/>
   <Schemes/>
   <UpArrow/>
      <Footer />

      {isMobile && <CustomBottomNavigation />}

   
    </div>
  );
};

export default SchemesPage;
