import React, { useState, useEffect } from "react"; // Make sure useState and useEffect are imported
import Marquee from "../components/Marquee";
import Header from "../components/Header";
import HeaderTwo from "../components/HeaderTwo";
import CustomBottomNavigation from "../components/BottomNavbar";
import Footer from "../components/Footer";
import MainContact from "../components/MainContact";
import Contacthero from "../components/Contacthero";
import Reels from "../components/Reels";
import ContactBack from "../components/ContactBack";
const ContactUs = () => {
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
      <ContactBack/>
      <Contacthero/>
      <MainContact />
      <Reels/>
      <Footer />
      {/* Display the bottom navigation only if it's a mobile screen */}
      {isMobile && <CustomBottomNavigation />}
    </div>
  );
};

export default ContactUs;
