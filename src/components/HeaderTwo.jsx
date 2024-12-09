import React, { useState } from 'react';
import './HeaderTwo.css';

const HeaderTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
<div className="header-two" style={{ backgroundColor: "rgb(182, 127, 0)" }}>

      <nav className="nav" >
        <button className="hamburger" onClick={handleToggleMenu}>
          ☰
        </button>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
   
        <li className="nav-item">
  <a href="/gold-jewellery">Gold ▾</a>
  <ul className="dropdown">
    {/* First Row */}
    <li>
      <a href="/gold-jewellery#rings">
        <img
          src="/assets/jewels/gold/rings/rings1.jpg"
          alt="Gold Rings"
        />
        Rings
      </a>
    </li>
    <li>
      <a href="/gold-jewellery#bangles">
        <img
          src="/assets/jewels/gold/bangles/goldbangle1.webp"
          alt="Gold Bangles"
        />
        Bangles
      </a>
    </li>
    <li>
      <a href="/gold-jewellery#earrings">
        <img
          src="/assets/jewels/gold/earrings/earring1.webp"
          alt="Gold Earrings"
        />
        Earrings
      </a>
    </li>
    <li>
      <a href="/gold-jewellery#necklace">
        <img
          src="/assets/jewels/gold/necklace/necklace1.webp"
          alt="Gold Necklace"
        />
        Necklace
      </a>
    </li>
    <li>
      <a href="/gold-jewellery#pendants">
        <img
          src="/assets/jewels/gold/pendants/pendants1.webp"
          alt="Gold Pendants"
        />
        Pendants
      </a>
    </li>
    {/* Second Row */}
    <li>
      <a href="/gold-jewellery#bracelets">
        <img
          src="/assets/jewels/gold/bracelet/bracelet3.webp"
          alt="Gold Bracelets"
        />
        Bracelets
      </a>
    </li>
    <li>
      <a href="/gold-jewellery#chains">
        <img
          src="/assets/jewels/gold/chain/chain1.webp"
          alt="Gold Chains"
        />
        Chains
      </a>
    </li>
    <li>
      <a href="/gold-jewellery#nosepins">
        <img
          src="/assets/jewels/gold/nosepin/nosepin1.webp"
          alt="Gold Anklets"
        />
      NosePins
      </a>
    </li>

    
  </ul>
</li>

          <li className="nav-item">
            <a href="/diamond-jewellery">Diamond ▾</a>
            <ul className="dropdown">
              <li>
                <a href="/diamond-jewellery#rings">
                  <img
                    src="/assets/jewels/diamond/rings/diamondring1.webp"
                    alt="Diamond Rings"
                  />
                  Rings
                </a>
              </li>
              <li>
                <a href="/diamond-jewellery#bangles">
                  <img
                    src="/assets/jewels/diamond/bangles/diamondbangle1.webp"
                    alt="Diamond Bangles"
                  />
                  Bangles
                </a>
              </li>
              <li>
                <a href="/diamond-jewellery#earrings">
                  <img
                    src="/assets/jewels/diamond/earrings/earring1.webp"
                    alt="Diamond Earrings"
                  />
                  Earrings
                </a>
              </li>
              <li>
                <a href="/diamond-jewellery#necklaces">
                  <img
                    src="/assets/jewels/diamond/necklace/necklace3.webp"
                    alt="Diamond Pendants"
                  />
           Necklaces
                </a>
              </li>
              <li>
                <a href="/diamond-jewellery#bracelets">
                  <img
                    src="/assets/jewels/diamond/bangles/bracelet1.webp"
                    alt="Diamond Pendants"
                  />
                  Bracelets
                </a>
              </li>
              <li>
                <a href="/diamond-jewellery#chains">
                  <img
                    src="/assets/jewels/diamond/chain/chain1.webp"
                    alt="Diamond Pendants"
                  />
             Chains
                </a>
              </li>
              <li>
                <a href="/diamond-jewellery#pendants">
                  <img
                    src="/assets/jewels/diamond/pendants/pendant1.webp"
                    alt="Diamond Pendants"
                  />
                  Pendants
                </a>
              </li>
              
            </ul>
          </li>
          <li className="nav-item">
  <a href="silver-collection">Silver ▾</a>
  <ul className="dropdown">
    <li>
      <a href="/silver-collection#idols">
        <img
          src="/assets/jewels/silver/idols/idol2.webp"
          alt="Silver Idols"
          className="dropdown-image"
        />
        Idols
      </a>
    </li>
    <li>
      <a href="/silver-collection#articles">
        <img
          src="/assets/jewels/silver/articles/articles1.webp"
          alt="Silver Articles"
          className="dropdown-image"
        />
        Articles
      </a>
    </li>
    <li>
      <a href="/silver-collection#bangles">
        <img
          src="/assets/jewels/silver/bangles/bangle1.webp"
          alt="Silver Bangles"
          className="dropdown-image"
        />
        Bangles
      </a>
    </li>
    <li>
      <a href="/silver-collection#anklets">
        <img
          src="/assets/jewels/silver/anklets/anklet3.jpg"
          alt="Silver Bracelets"
          className="dropdown-image"
        />
       Anklets
      </a>
    </li>
    <li>
      <a href="/silver-collection#bracelets">
        <img
          src="/assets/jewels/silver/bracelet/bracelet1.webp"
          alt="Silver Bracelets"
          className="dropdown-image"
        />
        Bracelets
      </a>
    </li>
  </ul>
</li>
<li className="nav-item">
  <a href="gold-jewellery#coins">Gold Coins▾</a>
  <ul className="dropdown">
    <li>
      <a href="/gold-jewellery#coins">
        <img
          src="/assets/jewels/gold/goldcoins/coin1.webp"
          alt="Silver Idols"
          className="dropdown-image"
        />
         1g coin
      </a>
    </li>
    <li>
      <a href="/gold-jewellery#coins">
        <img
          src="/assets/jewels/gold/goldcoins/coin2.webp"
          alt="Silver Articles"
          className="dropdown-image"
        />
     2g coin
      </a>
    </li>
    <li>
      <a href="/gold-jewellery#coins">
        <img
          src="/assets/jewels/gold/goldcoins/coin3.webp"
          alt="Silver Bangles"
          className="dropdown-image"
        />
          4g coin
      </a>
    </li>
    <li>
      <a href="/gold-jewellery#coins">
        <img
          src="/assets/jewels/gold/goldcoins/coin4.webp"
          alt="Silver Bracelets"
          className="dropdown-image"
        />
         8g coin
      </a>
    </li>
  </ul>
</li>
<li className="nav-item">
            <a href="/digigold">  MKM DigiGold</a>
         
          </li>
<li className="nav-item">
  <a href="/digigold">Schemes  ▾</a>
  <ul className="dropdown">
   
 
    <li>
      <a href="/pocketgold">
        <img
          src="/assets/schemes/fd.jpeg"
          alt="Digi Gold"
          className="dropdown-image"
        />
     MKM Fixed Deposit
      </a>
    </li>
    <li>
      <a href="/pocketgold">
        <img
          src="/assets/schemes/fs.jpeg"
          alt="Digi Gold"
          className="dropdown-image"
        />
     MKM Future Plus
      </a>
    </li>
    <li>
      <a href="/pocketgold">
        <img
          src="/assets/schemes/fg.jpeg"
          alt="Digi Gold"
          className="dropdown-image"
        />
     MKM Flexi Gold
      </a>
    </li>
    <li>
      <a href="/pocketgold">
        <img
          src="/assets/schemes/dailycollection.jpg"
          alt="Digi Gold"
          className="dropdown-image"
        />
     MKM Daily Collections Schemes
      </a>
    </li>
  </ul>
</li>
<li className="nav-item">
            <a href="/about">About Us</a>
         
          </li>
          <li className="nav-item">
            <a href="/contact">Contact Us</a>
         
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default HeaderTwo;
