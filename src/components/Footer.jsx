import React from 'react';
import { Globe, MessageCircle, Share2, Hash } from 'lucide-react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  const handleNav = (e, page, hash) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, hash);
    } else {
      window.location.hash = hash || '#home';
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Khetrapal Aluminium Manufacturing Pvt Ltd</h3>
            <p>Aluminum recycler for making Al. De-Ox and Al die-casting alloys with a combined annual capacity of over 3000 MT.</p>
            <div className="social-links">
              <a href="#" className="social-icon"><Globe size={18} /></a>
              <a href="#" className="social-icon"><MessageCircle size={18} /></a>
              <a href="#" className="social-icon"><Share2 size={18} /></a>
              <a href="#" className="social-icon"><Hash size={18} /></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleNav(e, 'home', '#home')}>Home</a></li>
              <li><a href="#about-page" onClick={(e) => handleNav(e, 'about')}>About us</a></li>
              <li><a href="#policies-page" onClick={(e) => handleNav(e, 'policies')}>How It Works</a></li>
              <li><a href="#contact-page" onClick={(e) => handleNav(e, 'contact')}>Contact us</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Products</h4>
            <ul>
              <li><a href="#" onClick={(e) => handleNav(e, 'products')}>Aluminium Notch Bars</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'products')}>Aluminium Cubes</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'products')}>Aluminium Shots</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'products')}>Aluminium Ingots</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#policies-page" onClick={(e) => handleNav(e, 'policies')}>Policies</a></li>
              <li><a href="#policies-page" onClick={(e) => handleNav(e, 'policies')}>Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 By Khetrapal Aluminium Manufacturing Pvt Ltd. Developed By Harikrishna Technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
