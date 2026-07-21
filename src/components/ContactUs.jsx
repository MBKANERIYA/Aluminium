import React, { useState } from 'react';
import { Mail, PhoneCall, MapPin, ArrowRight, CheckCircle, Send, Building2, ShieldCheck, Award, Clock, Globe, MessageCircle, Share2, Hash } from 'lucide-react';
import Header from './Header';
import './ContactUs.css';
import Footer from './Footer';

const ContactUs = ({ onNavigate }) => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormState({
      name: '',
      company: '',
      email: '',
      phone: '',
      inquiryType: 'General Inquiry',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <Header onNavigate={onNavigate} currentPage="contact" />

      {/* Hero Banner Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-badge">
            <Building2 size={16} /> Connect With Our Team
          </div>
          <h1>Contact <span>Us</span></h1>
          <p>
            Get in touch with Khetrapal Aluminium Manufacturing Pvt Ltd for bulk orders, custom Al % alloy formulation, or general trade inquiries across India and international markets.
          </p>
        </div>
      </section>

      {/* Contact Info Cards Section */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            <div className="glass-card info-card">
              <div className="info-icon-box">
                <Mail size={28} />
              </div>
              <h3>Email Addresses</h3>
              <p className="info-subtitle">For official correspondence & quotations</p>
              <div className="info-details">
                <a href="mailto:info@khetarpalmultitrade.com" className="contact-link">
                  info@khetarpalmultitrade.com
                </a>
                <a href="mailto:purchase@khetarpalmultitrade.com" className="contact-link">
                  purchase@khetarpalmultitrade.com
                </a>
              </div>
            </div>

            <div className="glass-card info-card">
              <div className="info-icon-box">
                <PhoneCall size={28} />
              </div>
              <h3>Phone Numbers</h3>
              <p className="info-subtitle">Direct support & procurement desk</p>
              <div className="info-details">
                <a href="tel:+918200647583" className="contact-link">
                  +91 8200 6475 83
                </a>
                <a href="tel:+919327786904" className="contact-link">
                  +91 93277 86904
                </a>
              </div>
            </div>

            <div className="glass-card info-card">
              <div className="info-icon-box">
                <MapPin size={28} />
              </div>
              <h3>Visit Our Facility</h3>
              <p className="info-subtitle">Recycling & Die-Casting Alloy Plant</p>
              <div className="info-details address-text">
                Surat (Gujarat) India
                <span className="address-sub">Combined annual recycling capacity exceeding 3,000 MT since 2019.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form & Partnership Grid */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Side Form */}
            <div className="glass-card contact-form-card">
              <h2>Send Us an Inquiry</h2>
              <p className="form-desc">
                Fill out the form below with your custom specification or bulk order requirements. Our technical sales team will respond within 24 hours.
              </p>

              {submitted ? (
                <div className="contact-success-alert">
                  <CheckCircle size={36} className="text-orange" />
                  <h4>Inquiry Sent Successfully!</h4>
                  <p>Thank you for reaching out to Khetrapal Aluminium. Our engineering and sales team has received your message and will contact you promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                        value={formState.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="yourname@company.com"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formState.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Product & Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formState.inquiryType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Aluminium Notch Bars">Aluminium Notch Bars (De-Oxidizer)</option>
                      <option value="Aluminium Cubes">Aluminium Cubes</option>
                      <option value="Aluminium Shots">Aluminium Shots</option>
                      <option value="Aluminium Ingots">Aluminium Ingots (Custom Al %)</option>
                      <option value="Aluminum Powder">Aluminum Powder</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Message / Custom Requirements *</label>
                    <textarea
                      name="message"
                      required
                      placeholder="Specify your target Al % purity, approximate quantity (e.g. 50 MT), delivery location, or application..."
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary submit-btn">
                    Send Inquiry <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Right Side Highlights */}
            <div className="contact-highlights">
              <div className="highlights-header">
                <h2>Why Partner With Khetrapal Aluminium?</h2>
                <p>
                  As an established aluminum recycler and manufacturer since 2019, we engineer top-tier De-Ox and Die-Casting alloys built for consistency.
                </p>
              </div>

              <div className="highlights-cards">
                <div className="highlight-item glass-card">
                  <div className="highlight-icon">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4>3,000+ MT Annual Capacity</h4>
                    <p>Large-scale processing facility ensuring uninterrupted supply for steel plants, foundries, and industrial casting operations.</p>
                  </div>
                </div>

                <div className="highlight-item glass-card">
                  <div className="highlight-icon">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4>Custom Al % Formulation</h4>
                    <p>We tailor aluminum percentages (97–98% or precise customer demand) and deliver exact shapes, weights, and specifications.</p>
                  </div>
                </div>

                <div className="highlight-item glass-card">
                  <div className="highlight-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4>Prompt & Reliable Dispatch</h4>
                    <p>Rigorous quality testing on every batch combined with streamlined logistics across Surat, Gujarat, and nationwide destinations.</p>
                  </div>
                </div>
              </div>

              <div className="contact-help-banner">
                <div className="help-info">
                  <span className="help-title">Need immediate assistance?</span>
                  <span className="help-phone">+91 8200 6475 83</span>
                </div>
                <a href="tel:+918200647583" className="btn-secondary help-btn">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ContactUs;
