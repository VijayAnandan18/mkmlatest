import React, { useState } from 'react';
import './HeaderTwo.css'; // External CSS for additional styles

const HeaderTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerStyle = {
    width: '100%',
    backgroundColor: '#fff', // Set white background
    padding: '20px 0',
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-two" style={headerStyle}>
      <nav className="nav">
        <button className="hamburger" onClick={handleToggleMenu} style={{color:"#700B00"}}>
          ☰
        </button>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item">
           <a href="gold-jewellery">Gold ▾</a>
            <ul className="dropdown">
              <li>
                <a href="/gold-jewellery#rings">
                  <img
                    src="/assets/jewels/gold/rings/rings1.jpg"
                    alt="Gold Rings"
                    className="dropdown-image"
                  />
                  Rings 
                </a>
              </li>
              <li>
                <a href="/gold-jewellery#bangles">
                  <img
                    src="/assets/jewels/gold/bangles/goldbangle1.webp"
                    alt="Gold Bangles"
                    className="dropdown-image"
                  />
                  Bangles        
                </a>
              </li>
              <li>
                <a href="/gold-jewellery#earrings">
                  <img
                    src="/assets/jewels/gold/earrings/earring1.webp"
                    alt="Gold Earrings"
                    className="dropdown-image"
                  />
                  Earrings 
                </a>
              </li>
              <li>
                <a href="/gold-jewellery#pendants">
                  <img
                    src="/assets/jewels/gold/pendants/pendants1.webp"
                    alt="Gold Pendants"
                    className="dropdown-image"
                  />
                  Pendants
                </a>
              </li>
              <li>
                <a href="/gold-jewellery">
                 
                 Explore Gold More....
                </a>
              </li>
      
            </ul>
          </li>
          <li className="nav-item">
            <a href="diamond-jewellery">Diamond  ▾</a>
            <ul className="dropdown">
              <li>
                <a href="/diamond-jewellery#rings">
                  <img
                    src="/assets/jewels/diamond/rings/diamondring1.webp"
                    alt="Diamond Rings"
                    className="dropdown-image"
                  />
                  Rings
                </a>
              </li>
              <li>
                <a href="/diamond-jewellery#bangles">
                  <img
                    src="/assets/jewels/diamond/bangles/diamondbangle1.webp"
                    alt="Diamond Bangles"
                    className="dropdown-image"
                  />
                  Bangles 
                </a>
              </li>
              <li>
                <a href="/diamond-jewellery#earrings">
                  <img
                    src="/assets/jewels/diamond/earrings/earring1.webp"
                    alt="Diamond Earrings"
                    className="dropdown-image"
                  />
                  Earrings
                </a>
              </li>
              <li>
                <a href="/diamond-jewellery#pendants">
                  <img
                    src="/assets/jewels/diamond/pendants/pendant1.webp"
                    alt="Diamond Pendants"
                    className="dropdown-image"
                  />
                  Pendants
                </a>
              </li>
              <li>
                <a href="/diamond-jewellery">
                
               Explore  diamond more....
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
  <a href="#">Schemes  ▾</a>
  <ul className="dropdown">
    <li>
      <a href="/digigold">
        <img
          src="/assets/digiicon.webp"
          alt="Digi Gold"
          className="dropdown-image"
        />
     MKM Pocket Gold
      </a>
    </li>

  </ul>
</li>

             
             
  
        </ul>
      </nav>
    </div>
  );
};

export default HeaderTwo;
