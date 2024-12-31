import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close sidebar after navigation
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button className="custom-sidebar-toggle" onClick={toggleSidebar}>
        <RiMenu2Line />
      </button>

      {/* Sidebar */}
      <div className={`custom-sidebar ${isOpen ? "open" : ""}`}>
        <div className="custom-sidebar-header">
      
          <button className="custom-sidebar-close" onClick={toggleSidebar}>
            ✖
          </button>
        </div>
        <nav className="custom-sidebar-nav">
          <ul>
          <li  style={{fontWeight:"bold"}}onClick={() => handleNavigation("/about")}>ABOUT US</li>
            <li>
              
              <div
                className="custom-sidebar-dropdown-title"
                onClick={() => toggleMenu("gold")}
              >
                GOLD ▾
              </div>
              {activeMenu === "gold" && (
                <ul className="custom-sidebar-dropdown">
                  <li onClick={() => handleNavigation("/gold-jewellery#rings")}>
                    Rings
                  </li>
                  <li onClick={() => handleNavigation("/gold-jewellery#bracelets")}>
                    Bracelets
                  </li>
                  <li onClick={() => handleNavigation("/gold-jewellery#necklaces")}>
                    Necklaces
                  </li>
                  <li onClick={() => handleNavigation("/gold-jewellery#chains")}>
                    Chains
                  </li>
                  <li onClick={() => handleNavigation("/gold-jewellery#earrings")}>
                    Earrings
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div
                className="custom-sidebar-dropdown-title"
                onClick={() => toggleMenu("diamond")}
              >
         DIAMOND ▾
              </div>
              {activeMenu === "diamond" && (
                <ul className="custom-sidebar-dropdown">
                  <li onClick={() => handleNavigation("/diamond-jewellery#rings")}>
                    Rings
                  </li>
                  <li onClick={() => handleNavigation("/diamond-jewellery#bracelets")}>
                    Bracelets
                  </li>
                  <li onClick={() => handleNavigation("/diamond-jewellery#necklaces")}>
                    Necklaces
                  </li>
                  <li onClick={() => handleNavigation("/diamond-jewellery#chains")}>
                    Chains
                  </li>
                  <li onClick={() => handleNavigation("/diamond-jewellery#earrings")}>
                    Earrings
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div
                className="custom-sidebar-dropdown-title"
                onClick={() => toggleMenu("silver")}
              >
                SILVER ▾
              </div>
              {activeMenu === "silver" && (
                <ul className="custom-sidebar-dropdown">
                  <li onClick={() => handleNavigation("/silver-collection#idols")}>
                    Idols
                  </li>
                  <li onClick={() => handleNavigation("/silver-collection#articles")}>
                    Articles
                  </li>
                  <li onClick={() => handleNavigation("/silver-collection#bangles")}>
                    Bangles
                  </li>
                  <li onClick={() => handleNavigation("/silver-collection#anklets")}>
                    Anklets
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div
                className="custom-sidebar-dropdown-title"
                onClick={() => toggleMenu("gold-coins")}
              >
                GOLD COINS ▾
              </div>
              {activeMenu === "gold-coins" && (
                <ul className="custom-sidebar-dropdown">
                  <li onClick={() => handleNavigation("/gold-coins#1g")}>1g</li>
                  <li onClick={() => handleNavigation("/gold-coins#2g")}>2g</li>
                  <li onClick={() => handleNavigation("/gold-coins#3g")}>3g</li>
                </ul>
              )}
            </li>
            
            <li>
              <div
                className="custom-sidebar-dropdown-title"
                onClick={() => toggleMenu("schemes")}
              >
                SCHEMES ▾
              </div>
              {activeMenu === "schemes" && (
                <ul className="custom-sidebar-dropdown">
                  <li onClick={() => handleNavigation("/schemes#daily-collections")}>
                    Daily Collections
                  </li>
                  <li onClick={() => handleNavigation("/schemes#future-gold")}>
                    Future Gold
                  </li>
                  <li onClick={() => handleNavigation("/schemes#future-plus")}>
                    Future Plus
                  </li>
                  <li onClick={() => handleNavigation("/schemes#flexi-gold")}>
                    Flexi Gold
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => handleNavigation("/digigold")} style={{fontWeight:"bold"}}>MKM DIGIGOLD</li>
        
            <li onClick={() => handleNavigation("/enquiry")}>Contact Us</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
