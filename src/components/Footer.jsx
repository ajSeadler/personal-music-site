import React from "react";
import { FaApple, FaSpotify, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {

  return (
    <>
    <footer className="footer-container">
        <div className="footer-icons">
          <FaApple className="icon apple-icon" />
          <FaSpotify className="icon spotify-icon" />
          <FaInstagram className="icon instagram-icon" />
          <FaFacebook className="icon facebook-icon" />
          <FaYoutube className="icon youtube-icon" />
         
        </div>
      </footer>
    </>

  );

}

export default Footer;