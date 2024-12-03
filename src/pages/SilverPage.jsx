import React from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header"


import HeaderTwo from "../components/HeaderTwo";

import SilverHero from "../components/SilverHero";
import Footer from "../components/Footer";
import SilverCollection from "../components/SilverCollection";
import SilverBack from "../components/SilverBack";
const SilverPage = () => {
  return (
    <div className="home-container">
      <Marquee />
      <Header/>
      <HeaderTwo/>
      <SilverBack/>
      <SilverHero/>
<SilverCollection/>

       <Footer/>
    </div>
  );
};

export default SilverPage;
