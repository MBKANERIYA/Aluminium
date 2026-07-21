import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Factory, Zap, Shield, BarChart,
  MapPin, Phone, Mail, Globe, MessageCircle, Share2, Hash,
  ChevronLeft, ChevronRight, ChevronDown, Target, Compass, Heart, Award, Users, CheckCircle2, Sparkles, ExternalLink
} from 'lucide-react';
import './AboutUs.css';
import './LandingPage.css';
import Header from './Header';
import Footer from './Footer';

const AboutUs = ({ onNavigate }) => {
  const teamRef = React.useRef(null);

  const scrollTeam = (direction) => {
    if (teamRef.current && teamRef.current.children[0]) {
      const cardWidth = teamRef.current.children[0].offsetWidth + 30; // width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      teamRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const teamMembers = [
    {
      name: "Ganesh Sarasvat",
      role: "Partner / Leadership",
      initials: "GS",
      desc: "Driving strategic initiatives and operational excellence across non-ferrous recycling operations."
    },
    {
      name: "Damodar Sarasvat",
      role: "Partner / Leadership",
      initials: "DS",
      desc: "Guiding sustainable processing and building long-term corporate partnerships globally."
    },
    {
      name: "Tolaram Tavaniya",
      role: "Partner / Leadership",
      initials: "TT",
      desc: "Spearheading cutting-edge metallurgical innovation and quality standards."
    },
    {
      name: "Prem Sarasvat",
      role: "Partner / Leadership",
      initials: "PS",
      desc: "Leading commercial growth and customer relationship management across industrial markets."
    },
    {
      name: "Birbalram Jakhad",
      role: "Partner / Leadership",
      initials: "BJ",
      desc: "Overseeing facility expansion, environmental compliance, and plant logistics."
    }
  ];

  return (
    <div className="about-page">
      {/* Navigation */}
      <Header onNavigate={onNavigate} currentPage="about" />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <div className="about-hero-badge">
              <Sparkles size={16} /> Sustainable Metallurgy & Recycling
            </div>
            <h1>
              About <span>Khetrapal Aluminium</span> <br />
              Manufacturing Pvt Ltd
            </h1>
            <p className="about-hero-lead">
              Khetrapal Aluminium Manufacturing Pvt Ltd, is Aluminum recycler for making Al. De-Ox and Al die-casting alloys with a combined annual capacity of over 3000 MT. We commenced its business in 2019.
            </p>

            <div className="about-hero-stats">
              <div className="about-stat-item">
                <span className="about-stat-num">3000+ MT</span>
                <span className="about-stat-label">Combined Annual Capacity</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-num">2019</span>
                <span className="about-stat-label">Year Commenced</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-num">100%</span>
                <span className="about-stat-label">Eco-Friendly Recycling</span>
              </div>
            </div>
          </div>
          <div className="about-hero-visual">
            <img src="https://khetarpalmultitrade.com/wp-content/uploads/elementor/thumbs/DADA3958-scaled-qfrtbrk62nchik0e2u3secgjkm10wtgc1dgr1j8km0.jpg" alt="About Khetrapal Aluminium" className="about-hero-image" />
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values (Core Pillars) */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Our Core Pillars</h2>
          <p className="section-subtitle text-center mx-auto" style={{ maxWidth: '600px' }}>
            Built on a foundation of integrity, technical precision, and environmental stewardship.
          </p>

          <div className="pillars-grid">
            {/* Vision */}
            <div className="pillar-card">
              <div>
                <div className="pillar-icon-wrapper">
                  <Target size={32} />
                </div>
                <h3>Vision</h3>
                <p>
                  To be a Globally Admired Company in Non Ferrous Metal Recycling Business. Achieve an eternal partnership through an unwavering commitment to excellence in product and services.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="pillar-card">
              <div>
                <div className="pillar-icon-wrapper">
                  <Compass size={32} />
                </div>
                <h3>Mission</h3>
                <p>
                  To continuously enhance our products and processes through the utilization of cutting-edge Technology and innovative product techniques. To emphasize on innovation and care for Environment in our corporate culture.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="pillar-card">
              <div>
                <div className="pillar-icon-wrapper">
                  <Heart size={32} />
                </div>
                <h3>Values</h3>
                <p>
                  We envision strong and resilient communities where all persons have adequate housing and health care, and where everyone is supported to live with a sense of self-worth and self-determination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="about-stats-banner">
        <div className="container">
          <div className="stats-banner-grid">
            <div className="stats-banner-item">
              <span className="stats-banner-num">30</span>
              <span className="stats-banner-label">Team Members</span>
            </div>
            <div className="stats-banner-item">
              <span className="stats-banner-num">10</span>
              <span className="stats-banner-label">Products</span>
            </div>
            <div className="stats-banner-item">
              <span className="stats-banner-num">150</span>
              <span className="stats-banner-label">Industries Served</span>
            </div>
            <div className="stats-banner-item">
              <span className="stats-banner-num">50</span>
              <span className="stats-banner-label">Satisfied Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title text-center">Our Leadership Team</h2>
          <p className="section-subtitle text-center mx-auto" style={{ maxWidth: '600px' }}>
            Meet the visionary leadership guiding our commitment to quality, sustainability, and technological advancement.
          </p>

          <div className="team-slider-wrapper">
            <button className="slider-btn left" onClick={() => scrollTeam('left')}>
              <ChevronLeft size={24} />
            </button>
            <div className="team-slider" ref={teamRef}>
              {teamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                  <div className="team-avatar">
                    {member.initials}
                  </div>
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p className="team-desc">{member.desc}</p>
                </div>
              ))}
            </div>
            <button className="slider-btn right" onClick={() => scrollTeam('right')}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2>Need a Quality Contractor for Your Project ?</h2>
              <p>Partner with us for dependable supply of Al. De-Ox and Al die-casting alloys tailored precisely to your manufacturing specifications.</p>
            </div>
            <div>
              <button className="btn-primary" style={{ padding: '18px 40px', fontSize: '1.1rem' }} onClick={() => onNavigate && onNavigate('home', '#contact')}>
                Contact now <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default AboutUs;
