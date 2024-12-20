// AboutBack.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBack.css'; // Optional for additional styling

const FuturePlusBack = () => {
  return (
    <header className="aboutback-header-unique">
      <nav className="aboutback-nav-unique">
        <Link to="/schemes" className="nav-link-unique">Schemes</Link>
        <span className="separator-unique"> &lt; </span>
        <span className="about-us-text" >FuturePlus</span>
      </nav>
    </header>
  );
};

export default FuturePlusBack;
