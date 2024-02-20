import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="site-name">AJ<br />SEADLER<br />MUSIC</h1>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/music" className="nav-link">Music</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <div className={`menu-icon__bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon__bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon__bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
