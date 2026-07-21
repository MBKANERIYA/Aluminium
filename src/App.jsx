import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import Policies from './components/Policies';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about-page') {
        setCurrentPage('about');
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#products-page')) {
        setCurrentPage('products');
        window.scrollTo(0, 0);
      } else if (hash === '#contact-page') {
        setCurrentPage('contact');
        window.scrollTo(0, 0);
      } else if (hash === '#policies-page') {
        setCurrentPage('policies');
        window.scrollTo(0, 0);
      } else if (hash === '#home' || hash === '' || hash.startsWith('#')) {
        if (hash === '#about-page' || hash.startsWith('#products-page') || hash === '#contact-page' || hash === '#policies-page') return;
        if (currentPage !== 'home') {
          setCurrentPage('home');
          setTimeout(() => {
            if (hash && hash !== '#home') {
              const el = document.querySelector(hash);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash === '#about-page') {
      setCurrentPage('about');
    } else if (window.location.hash.startsWith('#products-page')) {
      setCurrentPage('products');
    } else if (window.location.hash === '#contact-page') {
      setCurrentPage('contact');
    } else if (window.location.hash === '#policies-page') {
      setCurrentPage('policies');
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  const navigateTo = (page, sectionHash, category = 'All') => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = '#about-page';
      window.scrollTo(0, 0);
    } else if (page === 'products') {
      if (category) setSelectedCategory(category);
      window.location.hash = '#products-page';
      window.scrollTo(0, 0);
    } else if (page === 'contact') {
      window.location.hash = '#contact-page';
      window.scrollTo(0, 0);
    } else if (page === 'policies') {
      window.location.hash = '#policies-page';
      window.scrollTo(0, 0);
    } else {
      if (sectionHash) {
        window.location.hash = sectionHash;
        setTimeout(() => {
          const el = document.querySelector(sectionHash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        window.location.hash = '#home';
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <div className="App">
      {currentPage === 'home' && <LandingPage onNavigate={navigateTo} />}
      {currentPage === 'about' && <AboutUs onNavigate={navigateTo} />}
      {currentPage === 'products' && <Products onNavigate={navigateTo} initialCategory={selectedCategory} />}
      {currentPage === 'contact' && <ContactUs onNavigate={navigateTo} />}
      {currentPage === 'policies' && <Policies onNavigate={navigateTo} />}
    </div>
  );
}

export default App;
