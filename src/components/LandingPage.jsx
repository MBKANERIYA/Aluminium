import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Factory, Zap, Shield, BarChart,
  MapPin, Phone, Mail,
  ChevronLeft, ChevronRight, ChevronDown, X
} from 'lucide-react';
import './LandingPage.css';
import Header from './Header';
import Footer from './Footer';

const LandingPage = ({ onNavigate }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const productsRef = React.useRef(null);

  const heroProducts = [
    { name: 'Aluminium Notch Bars', image: 'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3967-scaled.jpg' },
    { name: 'Aluminium Cubes', image: 'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3981-scaled.jpg' },
    { name: 'Aluminium Shots', image: 'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4013-scaled.jpg' },
    { name: 'Aluminium Ingots', image: 'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4040-scaled.jpg' },
    { name: 'Aluminum Powder', image: 'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-27-at-18.13.26_4b35649c.jpg' },
  ];

  // Auto-slide hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroProducts.length]);

  const scrollProducts = (direction) => {
    if (productsRef.current) {
      const cardWidth = productsRef.current.children[0].offsetWidth + 40; // width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      productsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const allGalleryImages = [
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4024-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3958-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3963-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4040-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4018-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4031-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3984-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3968-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3969-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3972-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3973-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3974-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3975-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3976-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3981-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3967-scaled.jpg",
    "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3966-scaled.jpg"
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') {
        const currentIndex = allGalleryImages.indexOf(selectedImage);
        if (currentIndex !== -1) {
          const prevIndex = (currentIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
          setSelectedImage(allGalleryImages[prevIndex]);
        }
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = allGalleryImages.indexOf(selectedImage);
        if (currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % allGalleryImages.length;
          setSelectedImage(allGalleryImages[nextIndex]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, allGalleryImages]);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <Header onNavigate={onNavigate} currentPage="home" />




      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>
              Aluminium Recycling for <br />
              <span>Sustainable Society</span>
            </h1>
            <p>Khetrapal Aluminium Manufacturing Pvt Ltd, is Aluminum recycler for making Al. De-Ox and Al die-casting alloys with a combined annual capacity of over 3000 MT. We commenced our business in 2019.</p>
            <div className="hero-buttons">
              <button className="btn-primary">
                Get Started
              </button>
              <button className="btn-secondary">
                Discover more
              </button>
            </div>
          </div>
          <div className="hero-visual">
            {heroProducts.map((product, index) => (
              <div
                className={`hero-slide ${index === heroSlide ? 'active' : ''}`}
                key={product.name}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="hero-image"
                />
                <div className="hero-slide-label">
                  <span>{product.name}</span>
                </div>
              </div>
            ))}
            <div className="hero-slide-dots">
              {heroProducts.map((_, index) => (
                <button
                  key={index}
                  className={`hero-dot ${index === heroSlide ? 'active' : ''}`}
                  onClick={() => setHeroSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section (Since none provided on site, leaving basic counters) */}
      <section className="stats section">
        <div className="container stats-grid">
          <div className="stat-card">
            <BarChart size={32} className="stat-icon mx-auto" />
            <div className="stat-number">3000+</div>
            <div className="stat-label">MT Annual Capacity</div>
          </div>
          <div className="stat-card">
            <BarChart size={32} className="stat-icon mx-auto" />
            <div className="stat-number">2019</div>
            <div className="stat-label">Established</div>
          </div>
          <div className="stat-card">
            <BarChart size={32} className="stat-icon mx-auto" />
            <div className="stat-number">100%</div>
            <div className="stat-label">Sustainable Recycling</div>
          </div>
          <div className="stat-card">
            <BarChart size={32} className="stat-icon mx-auto" />
            <div className="stat-number">5+</div>
            <div className="stat-label">Premium Products</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="image-placeholder about-image">
              Image URL Here
            </div>
          </div>
          <div className="about-content">
            <h2 className="section-title">Contribution to Environment</h2>
            <p className="section-subtitle">
              Aluminum Recycling is an environment-friendly business as Aluminum is endlessly recyclable and helps in conserving the resources available on earth.
            </p>

            <div className="about-cards">
              <div className="glass-card about-card">
                <div className="about-card-icon"><Shield size={24} /></div>
                <div className="about-card-content">
                  <h3>Saving Resources</h3>
                  <p>As per industry estimates every 1 tone of aluminum manufactured through primary route consumes 4-6 tones of bauxite, 1-1.5 tone of limestone, 20-22 cubic meter of water, and ~14,000 Kwh of power.</p>
                </div>
              </div>
              <div className="glass-card about-card">
                <div className="about-card-icon"><Zap size={24} /></div>
                <div className="about-card-content">
                  <h3>Energy Efficient</h3>
                  <p>Manufacturing of 1 tonne aluminum from the recycled route consumes aluminum scrap as a key raw material and consumes only 5-7% of the total power required for primary aluminum.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '30px' }}>
              <button className="btn-primary" onClick={() => { if (onNavigate) onNavigate('about'); else window.location.hash = '#about-page'; }}>
                Explore Full About Us Page <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-charcoal">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="features-grid">
            {[
              "Best quality services",
              "Best Products",
              "We guarantee success",
              "Set a Deadline Project",
              "Secure Payments",
              "Sustainable Processing"
            ].map((feature, i) => (
              <div className="glass-card feature-card" key={i}>
                <Factory size={32} className="feature-icon" />
                <h3>{feature}</h3>
                <p>We take pride in providing top-tier {feature.toLowerCase()} to all our corporate partners globally.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <div className="container">
          <h2 className="section-title text-center">Our Products</h2>
          <div className="products-slider-wrapper">
            <button className="slider-btn left" onClick={() => scrollProducts('left')}>
              <ChevronLeft size={24} />
            </button>
            <div className="products-grid" ref={productsRef}>
              {[
                {
                  name: "Aluminium Notch Bars",
                  image: "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3967-scaled.jpg",
                  desc: "The Aluminium Notch Bars that we offer are used in many Industries for a variety of applications. These bars are of superior quality and so are preferred by many clients."
                },
                {
                  name: "Aluminium Cubes",
                  image: "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3981-scaled.jpg",
                  desc: "The Aluminium Cubes we manufacture are made of superior grade Aluminium. They are made using advanced tools and machinery. Resistant to corrosive and abrasive agents."
                },
                {
                  name: "Aluminium Shots",
                  image: "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4013-scaled.jpg",
                  desc: "The Aluminium Shots we offer are made of high quality Aluminium using the latest technology. These shots are tested on several quality parameters by our experts."
                },
                {
                  name: "Aluminium Ingots",
                  image: "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4040-scaled.jpg",
                  desc: "We bring forth a wide range of Aluminium Ingots preferred by clients across industries. Available in many specifications and customized Al content."
                },
                {
                  name: "Aluminum Powder",
                  image: "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-27-at-18.13.26_4b35649c.jpg",
                  desc: "Aluminum Powder that we offer are used in many Industries for a variety of applications. Available in many specifications to suit all exact work requirements."
                }
              ].map((product, i) => (
                <div className="glass-card product-card" key={i}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: 'var(--radius-card) var(--radius-card) 0 0', display: 'block', borderBottom: '1px solid var(--color-border)' }}
                  />
                  <div className="product-content">
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.desc}</p>
                    </div>
                    <button
                      className="btn-secondary w-full mt-4"
                      onClick={() => {
                        if (onNavigate) onNavigate('products', null, product.name);
                        else window.location.hash = '#products-page';
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-btn right" onClick={() => scrollProducts('right')}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section bg-charcoal">
        <div className="container">
          <h2 className="section-title text-center">Our Gallery</h2>
          <div className="gallery-grid">
            {[
              "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4024-scaled.jpg",
              "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3958-scaled.jpg",
              "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3963-scaled.jpg",
              "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4040-scaled.jpg",
              "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4018-scaled.jpg",
              "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4031-scaled.jpg",
              "https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3984-scaled.jpg"
            ].map((img, i) => (
              <div className="gallery-item" key={i} onClick={() => setSelectedImage(img)}>
                <img src={img} alt={`Gallery ${i + 1}`} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button className="btn-primary" onClick={() => setShowGallery(true)}>
              View All Gallery <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '60px', textAlign: 'center' }}>
            <h2>Together We can Bring More Creativity into the World</h2>
            <p style={{ color: 'var(--color-silver)', margin: '20px 0 30px' }}>Join us in our mission towards building a sustainable and eco-friendly future.</p>
            <button className="btn-primary">
              Create a project to experience our benefits
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-charcoal">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">Get in touch with Khetrapal Aluminium Manufacturing Pvt Ltd today.</p>

            <div className="contact-cards">
              <div className="glass-card contact-card">
                <MapPin className="contact-icon" size={24} />
                <div>
                  <h4>Address</h4>
                  <p className="text-silver">Surat (Gujarat) India</p>
                </div>
              </div>
              <div className="glass-card contact-card">
                <Phone className="contact-icon" size={24} />
                <div>
                  <h4>Phone</h4>
                  <p className="text-silver">8200 6475 83</p>
                </div>
              </div>
              <div className="glass-card contact-card">
                <Mail className="contact-icon" size={24} />
                <div>
                  <h4>Email</h4>
                  <p className="text-silver">info@khetarpalmultitrade.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="glass-card">
              <form>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full mt-4">Get a Free Quote</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Full Gallery Page Overlay */}
      {showGallery && (
        <div className="gallery-page-overlay">
          <div className="container">
            <div className="gallery-page-header">
              <div>
                <h2 className="section-title" style={{ marginBottom: '8px' }}>Complete Gallery</h2>
                <p style={{ color: 'var(--color-silver)', margin: 0 }}>Explore our state-of-the-art manufacturing facility and products.</p>
              </div>
              <button className="btn-secondary" onClick={() => setShowGallery(false)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ChevronLeft size={18} /> Back to Home
              </button>
            </div>
            <div className="gallery-grid">
              {allGalleryImages.map((img, i) => (
                <div className="gallery-item" key={i} onClick={() => setSelectedImage(img)}>
                  <img src={img} alt={`Complete Gallery ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal with Slider */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={24} />
          </button>

          <button 
            className="slider-btn left" 
            style={{ position: 'fixed', left: '30px', zIndex: 3010 }}
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = allGalleryImages.indexOf(selectedImage);
              if (currentIndex !== -1) {
                const prevIndex = (currentIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
                setSelectedImage(allGalleryImages[prevIndex]);
              }
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged view" />
            {allGalleryImages.indexOf(selectedImage) !== -1 && (
              <div style={{
                position: 'absolute',
                bottom: '-40px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'var(--color-white)',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                border: '1px solid var(--color-border)'
              }}>
                {allGalleryImages.indexOf(selectedImage) + 1} / {allGalleryImages.length}
              </div>
            )}
          </div>

          <button 
            className="slider-btn right" 
            style={{ position: 'fixed', right: '30px', zIndex: 3010 }}
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = allGalleryImages.indexOf(selectedImage);
              if (currentIndex !== -1) {
                const nextIndex = (currentIndex + 1) % allGalleryImages.length;
                setSelectedImage(allGalleryImages[nextIndex]);
              }
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
