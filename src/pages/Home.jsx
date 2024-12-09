import React, { useState, useEffect } from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header";
import HeroCarousel from "../components/HeroCarousel";
import HeaderTwo from "../components/HeaderTwo";
import GridLayout from "../components/GridLayout";
import Features from "../components/Features";
import FeaturesCircular from "../components/FeaturesCircular";
import NewArrivals from "../components/NewArrivals";
import GoldJewellery from "../components/GoldJewellery";
import Reels from "../components/Reels";
import Diamond from "../components/Diamond";
import Shop from "../components/Shop";
import Footer from "../components/Footer";
import SilverCards from "../components/SilverCards";
import Gifts from "../components/Gifts";
import Testimonials from "../components/Testimonials";
import CustomBottomNavigation from "../components/BottomNavbar";
import GoldRateTag from "../components/GoldRateTag";
import ContactIcons from "../components/ContactIcons";



const Home = () => {
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
      
      {isMobile ? (
        <>
          <FeaturesCircular />
          <GoldRateTag />
        </>
      ) : null}

      <HeroCarousel />
      <Features />

      <GridLayout />

      {/* Display FeaturesCircular only on desktop */}
      {!isMobile && <FeaturesCircular />}

      <Shop />
      <NewArrivals />
      <GoldJewellery />
      <Reels />
      <Diamond />
      <SilverCards />
      <Gifts/>
      <Testimonials/>
      <ContactIcons/>
      <Footer />

      {isMobile && <CustomBottomNavigation />}
    </div>
  );
};

export default Home;
