import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Factory, Zap, Shield, BarChart,
  MapPin, Phone, Mail, Globe, MessageCircle, Share2, Hash,
  ChevronLeft, ChevronRight, ChevronDown, CheckCircle2, Sparkles, ExternalLink, X, Send, Award, Layers
} from 'lucide-react';
import './Products.css';
import './LandingPage.css';
import Header from './Header';
import Footer from './Footer';

const Products = ({ onNavigate, initialCategory = 'All' }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'All');
  const [quoteItem, setQuoteItem] = useState(null);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [detailSlide, setDetailSlide] = useState(0);

  const productsRef = React.useRef(null);

  const scrollProducts = (direction) => {
    if (productsRef.current) {
      const cardWidth = productsRef.current.children[0].offsetWidth + 40; // width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      productsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Reset slide index when category changes
  useEffect(() => {
    setDetailSlide(0);
  }, [activeCategory]);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const productData = [
    {
      id: 'notch-bars',
      name: 'Aluminium Notch Bars',
      category: 'Aluminium Notch Bars',
      badge: 'High Purity Alloy',
      image: 'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3967-scaled.jpg',
      images: [
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3973-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3974-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3967-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3968-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3969-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3972-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3974-scaled.jpg',
      ],
      description: 'The Aluminium Notch Bars that we offer are used in many Industries for a variety of applications. These bars are of superior quality and so are preferred by many clients. The Aluminium Notch Bars are available in many specifications to suit the work requirements. We ensure that the Aluminium Notch Bars are tested for quality. These Aluminium Notch Bars confirm to the necessary Industry norms and standards.',
      specs: [
        { label: 'Specification :', value: 'Al % content 97 – 98 % ( or as per customer demand )', highlight: true },
        { label: 'Size/weight :', value: '1 to 2 kg.' },
        { label: 'Used as De-Oxidizer in :', value: 'Foundry industry, Steel industry' },
        { label: 'Used In :', value: 'Casting process' }
      ],
      applications: ['Foundry industry', 'Steel industry', 'Casting process']
    },
    {
      id: 'cubes',
      name: 'Aluminium Cubes',
      category: 'Aluminium Cubes',
      badge: 'Abrasive Resistant',
      image: 'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3981-scaled.jpg',
      images: [
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3984-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4031-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3975-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3977-1-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3981-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3983-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3984-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3981-scaled.jpg',
      ],
      description: 'The Aluminium Cubes we manufacture are made of superior grade Aluminium. They are made using advanced tools and machinery. These cubes are resistant to corrosive and abrasive agents. Our Aluminium Cubes are designed to suit the work requirements of our clients. Clients can avail these Aluminium Cubes from us at market leading prices. The Aluminium Cubes are subjected to strict quality checks to ensure that they confirm to the Industry standards.',
      specs: [
        { label: 'Specification :', value: 'Al % content 97 – 98 % ( or as per customer demand )', highlight: true },
        { label: 'Size/weight :', value: '100 to 200 gm.' },
        { label: 'Application :', value: 'Engineering industry' },
        { label: 'Used as De-Oxidizer in :', value: 'Steel industry, Foundry industry' }
      ],
      applications: ['Engineering industry', 'Steel industry', 'Foundry industry']
    },
    {
      id: 'shots',
      name: 'Aluminium Shots',
      category: 'Aluminium Shots',
      badge: 'Precision Grain',
      image: 'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4013-scaled.jpg',
      images: [
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4015-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4018-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4013-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4015-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4013-scaled.jpg',
      ],
      description: 'The Aluminium Shots we offer are made of high quality Aluminium. We make use of the latest technology to manufacture our Aluminium Shots. These shots are tested on several quality parameters by our team of experts. The Aluminium Shots are widely used in many Industries. These Aluminium Shots that we offer have several superior properties. These shots are resistant to corrosive and abrasive factors. The shots are extremely strong.',
      specs: [
        { label: 'Specification :', value: 'Al % content 97 – 98 % ( or as per customer demand )', highlight: true },
        { label: 'Size :', value: '5 to 15 mm diameter.' },
        { label: 'Application :', value: 'Shot blasting, Cleaning the casts' },
        { label: 'Used as De-Oxidizer in :', value: 'Steel industry, Foundry industry' }
      ],
      applications: ['Shot blasting', 'Cleaning the casts', 'Steel industry', 'Foundry industry']
    },
    {
      id: 'ingots',
      name: 'Aluminium Ingots',
      category: 'Aluminium Ingots',
      badge: 'Extrusion & Auto Grade',
      image: 'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4040-scaled.jpg',
      images: [
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4040-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4041-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA3963-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4040-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4041-scaled.jpg',
        'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/DADA4040-scaled.jpg',
      ],
      description: 'We bring forth a wide range of Aluminium Ingots that is preferred by clients. These Aluminium Ingots are available in many specifications. We even offer our customers Aluminium Ingots with Aluminium content as per their specification. These ingots are of very high quality. The Aluminium Ingots are pure and free from any foreign impurities. They are widely used in many Industries for a variety of processes.',
      specs: [
        { label: 'Specification :', value: 'Al % content 97 – 98 % ( or as per customer demand )', highlight: true },
        { label: 'Size/weight :', value: '12 to 17 kg.' },
        { label: 'Used as De-Oxidizer in :', value: 'Steel industry, Foundry industry, Raw material for Automobile Industry, Extrusion.' }
      ],
      applications: ['Steel industry', 'Foundry industry', 'Automobile Industry', 'Extrusion']
    },
    {
      id: 'powder',
      name: 'Aluminum Powder',
      category: 'Aluminum Powder',
      badge: 'Fine Mesh Distribution',
      image: 'https://khetarpalmultitrade.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-27-at-18.13.26_4b35649c.jpg',
      description: 'Aluminum Powder that we offer are used in many Industries for a variety of applications. These bars are of superior quality and so are preferred by many clients. The Aluminum Powder are available in many specifications to suit the work requirements. We ensure that the Aluminum Powder are tested for quality. These Aluminum Powder confirm to the necessary Industry norms and standards.',
      specs: [
        { label: 'Specification :', value: 'Al % content 96 % ( or as per customer demand )', highlight: true },
        { label: 'Size/weight :', value: 'as per customer demand' },
        { label: 'Used as De-Oxidizer in :', value: 'Ferro industry, Steel industry' },
        { label: 'Used In :', value: 'Casting process' }
      ],
      applications: ['Ferro industry', 'Steel industry', 'Casting process']
    }
  ];

  // Auto-slide detail images
  useEffect(() => {
    const selectedProduct = productData.find(p => p.category === activeCategory);
    const imageCount = selectedProduct?.images?.length || 0;
    if (imageCount <= 1) return;
    const interval = setInterval(() => {
      setDetailSlide((prev) => (prev + 1) % imageCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeCategory]);

  const categories = [
    'All',
    'Aluminium Notch Bars',
    'Aluminium Cubes',
    'Aluminium Shots',
    'Aluminium Ingots',
    'Aluminum Powder'
  ];

  const filteredProducts = activeCategory === 'All'
    ? productData
    : productData.filter(item => item.category === activeCategory);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setQuoteItem(null);
    }, 2000);
  };

  return (
    <div className="products-page">
      {/* Navigation */}
      <Header onNavigate={onNavigate} currentPage="products" onSelectCategory={(cat) => setActiveCategory(cat)} />

      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-badge">
            <Layers size={16} /> Complete Product Portfolio
          </div>
          <h1>
            Engineered Aluminium <span>Alloys & Products</span>
          </h1>
          <p>
            Explore our industrial range of high-purity aluminium de-oxidizers, casting alloys, ingots, cubes, shots, and powders engineered for consistency across over 3,000 MT annual production capacity.
          </p>

          {/* Filter Tabs Bar */}
          <div className="products-filter-wrapper">
            {categories.map((cat, idx) => {
              const count = cat === 'All' ? productData.length : productData.filter(p => p.category === cat).length;
              return (
                <button
                  key={idx}
                  className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collection / Detail Section */}
      <section className="products-collection-section">
        <div className="container">
          {activeCategory === 'All' ? (
            <div className="products-slider-wrapper">
              <button className="slider-btn left" onClick={() => scrollProducts('left')}>
                <ChevronLeft size={24} />
              </button>
              <div className="products-grid" ref={productsRef}>
                {productData.map((product) => (
                  <div className="glass-card product-card" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: 'var(--radius-card) var(--radius-card) 0 0', display: 'block', borderBottom: '1px solid var(--color-border)' }}
                    />
                    <div className="product-content">
                      <div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                      </div>
                      <button
                        className="btn-secondary w-full mt-4"
                        onClick={() => {
                          setActiveCategory(product.category);
                          window.scrollTo({ top: 400, behavior: 'smooth' });
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
          ) : (
            (() => {
              const selectedProduct = productData.find(p => p.category === activeCategory) || productData[0];
              return (
                <div className="product-detail-view glass-card">
                  <div className="product-detail-left">
                    <div className="product-detail-image-box">
                      <span className="product-card-badge">{selectedProduct.badge}</span>
                      {(selectedProduct.images || [selectedProduct.image]).map((img, imgIdx) => (
                        <img
                          key={imgIdx}
                          src={img}
                          alt={`${selectedProduct.name} ${imgIdx + 1}`}
                          className={`product-detail-image detail-slide ${imgIdx === detailSlide ? 'active' : ''}`}
                        />
                      ))}
                      {(selectedProduct.images || []).length > 1 && (
                        <div className="detail-slide-dots">
                          {selectedProduct.images.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              className={`detail-dot ${dotIdx === detailSlide ? 'active' : ''}`}
                              onClick={() => setDetailSlide(dotIdx)}
                              aria-label={`Image ${dotIdx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="product-detail-right">
                    <div className="product-detail-header">
                      <h2 className="product-detail-title">{selectedProduct.name}</h2>
                      <button className="btn-back-all" onClick={() => setActiveCategory('All')}>
                        ← View All Products
                      </button>
                    </div>
                    <p className="product-detail-description">{selectedProduct.description}</p>

                    <div className="product-specs-box">
                      {selectedProduct.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="product-spec-row">
                          <span className="spec-label">{spec.label}</span>
                          <span className={`spec-value ${spec.highlight ? 'highlight' : ''}`}>{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="product-apps-section">
                      <div className="product-apps-title">Target Applications & Industries</div>
                      <div className="product-apps-tags">
                        {selectedProduct.applications.map((app, aIdx) => (
                          <span key={aIdx} className="app-tag">{app}</span>
                        ))}
                      </div>
                    </div>

                    <div className="product-detail-actions">
                      <button className="btn-request-quote" onClick={() => setQuoteItem(selectedProduct)}>
                        Request Specifications & Quote <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()
          )}
        </div>
      </section>

      {/* Custom Alloy Callout Banner */}
      <section className="container">
        <div className="custom-alloy-section">
          <div className="custom-alloy-box">
            <div className="custom-alloy-info">
              <h2>Need Customized Chemical Purity or Weights?</h2>
              <p>
                Whether you require exact Al % ratios (96% – 99%+), custom weight tolerances, or dedicated packaging formats for automated steel melting furnaces, our technical engineering team produces to exact client standards.
              </p>
            </div>
            <div>
              <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.05rem', whiteSpace: 'nowrap' }} onClick={() => onNavigate && onNavigate('home', '#contact')}>
                Consult Our Engineers <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Modal */}
      {quoteItem && (
        <div className="quote-modal-overlay" onClick={() => setQuoteItem(null)}>
          <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
            <button className="quote-modal-close" onClick={() => setQuoteItem(null)}>
              <X size={20} />
            </button>

            {quoteSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={56} style={{ color: 'var(--color-orange)', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>Inquiry Received!</h3>
                <p style={{ color: 'var(--color-silver)' }}>
                  Thank you for requesting specifications for <strong style={{ color: 'var(--color-white)' }}>{quoteItem.name}</strong>. Our metallurgical team will connect with you via email and phone shortly.
                </p>
              </div>
            ) : (
              <>
                <h3>Request Specifications</h3>
                <p>Inquire for current pricing and customized specs on <strong>{quoteItem.name}</strong>.</p>

                <form className="quote-modal-form" onSubmit={handleQuoteSubmit}>
                  <div className="form-group">
                    <label>Product Category</label>
                    <input type="text" value={quoteItem.name} readOnly style={{ opacity: 0.8, cursor: 'not-allowed' }} />
                  </div>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" placeholder="e.g. Rajesh Kumar" required />
                  </div>
                  <div className="form-group">
                    <label>Company / Foundry Name *</label>
                    <input type="text" placeholder="e.g. Apex Steel Mills Ltd" required />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp Number *</label>
                    <input type="tel" placeholder="+91 98765 43210" required />
                  </div>
                  <div className="form-group">
                    <label>Required Quantity & Purity Specifications</label>
                    <textarea placeholder={`Please mention any specific Al % purity needed (e.g. 98%), quantity estimate in MT, or custom delivery preferences for ${quoteItem.name}...`} />
                  </div>
                  <button type="submit" className="quote-modal-submit">
                    Send Inquiry & Request Quote <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Products;
