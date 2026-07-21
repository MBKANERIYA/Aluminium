import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import './Header.css';

const Header = ({ onNavigate, currentPage = 'home', onSelectCategory }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    "Aluminium Notch Bars",
    "Aluminium Cubes",
    "Aluminium Shots",
    "Aluminium Ingots",
    "Aluminum Powder"
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div 
          className="nav-logo" 
          onClick={() => onNavigate ? onNavigate('home', '#home') : (window.location.hash = '#home')} 
          style={{ cursor: 'pointer' }}
        >
          Khetrapal Aluminium Manufacturing Pvt Ltd
        </div>
        <div className="nav-links">
          <a 
            href="#home" 
            className="nav-link" 
            style={{ color: currentPage === 'home' ? 'var(--color-orange)' : undefined }}
            onClick={(e) => { 
              e.preventDefault(); 
              onNavigate ? onNavigate('home', '#home') : (window.location.hash = '#home'); 
            }}
          >
            Home
          </a>
          <a 
            href="#about-page" 
            className="nav-link" 
            style={{ color: currentPage === 'about' ? 'var(--color-orange)' : undefined }}
            onClick={(e) => { 
              e.preventDefault(); 
              onNavigate ? onNavigate('about') : (window.location.hash = '#about-page'); 
            }}
          >
            About Us
          </a>
          <div className="nav-item-dropdown">
            <a 
              href="#products-page" 
              className="nav-link" 
              style={{ color: currentPage === 'products' ? 'var(--color-orange)' : undefined }}
              onClick={(e) => { 
                e.preventDefault(); 
                if (currentPage === 'products' && onSelectCategory) {
                  onSelectCategory('All');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (onNavigate) {
                  onNavigate('products', null, 'All');
                } else {
                  window.location.hash = '#products-page';
                }
              }}
            >
              Products <ChevronDown size={14} className="dropdown-chevron" />
            </a>
            <div className="nav-dropdown-menu">
              {categories.map((item, idx) => (
                <div
                  key={idx}
                  className="nav-dropdown-item"
                  onClick={() => {
                    if (currentPage === 'products' && onSelectCategory) {
                      onSelectCategory(item);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    } else if (onNavigate) {
                      onNavigate('products', null, item);
                    } else {
                      window.location.hash = '#products-page';
                    }
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <a 
            href="#gallery" 
            className="nav-link" 
            onClick={(e) => { 
              e.preventDefault(); 
              onNavigate ? onNavigate('home', '#gallery') : (window.location.hash = '#gallery'); 
            }}
          >
            Gallery
          </a>
          <a 
            className="nav-link" 
            style={{ color: currentPage === 'policies' ? 'var(--color-orange)' : undefined }}
            onClick={(e) => { 
              e.preventDefault(); 
              onNavigate ? onNavigate('policies') : (window.location.hash = '#policies-page'); 
            }}
          >
            Policies
          </a>
          <button 
            className="btn-primary ml-4" 
            onClick={() => {
              if (onNavigate) onNavigate('contact');
              else window.location.hash = '#contact-page';
            }}
          >
            Contact Us <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
