import React from 'react';
import { Shield, CheckCircle2, Leaf, HeartPulse, Activity } from 'lucide-react';
import './Policies.css';
import Header from './Header';
import Footer from './Footer';

const Policies = ({ onNavigate }) => {
  return (
    <div className="policies-page">
      <Header onNavigate={onNavigate} currentPage="policies" />
      
      {/* Hero Banner */}
      <section className="policies-hero">
        <div className="container">
          <div className="policies-hero-badge">
            <Shield size={16} /> Corporate Governance
          </div>
          <h1>
            Our <span>Policies</span>
          </h1>
          <p className="policies-hero-lead">
            Committed to the highest standards of Quality, Health, Safety, and Environmental protection across all our recycling and manufacturing operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section policies-content">
        <div className="container">
          
          {/* Quality Policy */}
          <div className="policy-block">
            <div className="policy-header">
              <div className="policy-icon">
                <CheckCircle2 size={32} />
              </div>
              <h2>Quality Policy</h2>
            </div>
            <div className="policy-body">
              <p>
                <strong>Khetrapal Aluminium Manufacturing Pvt Ltd</strong> is committed to strive for customer satisfaction through its quality products and services. We shall continually improve in all facets of our operations through teamwork and commitment.
              </p>
            </div>
          </div>

          {/* HSE Policy */}
          <div className="policy-block">
            <div className="policy-header">
              <div className="policy-icon">
                <Leaf size={32} />
              </div>
              <h2>Health, Safety & Environment (HSE) Policy</h2>
            </div>
            <div className="policy-body">
              <p className="policy-intro">
                As a corporate citizen, we are committed to demonstrating a high standard of environmental protection, sharing of best practices and provision of a safe and healthy workplace.
              </p>
              
              <div className="policy-grid">
                <div className="policy-card">
                  <div className="policy-card-icon">
                    <Activity size={24} />
                  </div>
                  <h3>Risk Management & Environment</h3>
                  <ul className="policy-list">
                    <li>Identification of HSE risks and opportunities in our operations.</li>
                    <li>We shall work towards meeting our entire electricity demands from renewable energy through onsite or offsite sources.</li>
                    <li>We shall implement newer and efficient technologies for waste recycling and reuse and pollution prevention.</li>
                    <li>We shall explore and implement measures to mitigate the impact of our operations on climate change.</li>
                  </ul>
                </div>

                <div className="policy-card">
                  <div className="policy-card-icon">
                    <HeartPulse size={24} />
                  </div>
                  <h3>Workplace Safety & Health</h3>
                  <ul className="policy-list">
                    <li>Eliminating unsafe incidents, prevention of occupational illness and injuries at the workplace.</li>
                    <li>We shall identify hazards and assess risks pertaining to our operations on a periodic basis.</li>
                    <li>We shall establish a safety committee to monitor and control employee health and safety matters.</li>
                    <li>We shall implement robust governance to review incidents, investigate, and strengthen proactive deployment of actions to avoid occurrence or recurrence.</li>
                    <li>We shall work on continually improving the maturity of our Emergency response practices for mitigating operational threats and vulnerabilities.</li>
                    <li>We shall facilitate necessary Medical assistance to all personnel working in our campuses as deemed appropriate and in line with policy guidelines.</li>
                  </ul>
                </div>
              </div>

              <div className="policy-footer-note">
                <p>
                  <strong>Compliance & Culture:</strong> Determination of compliance obligations, adherence in all operations, monitoring to ensure fulfilment and correction of non-conformities. Embedding HSE culture in the organization. We will work with all interested parties to continually improve our Health, Safety and Environmental Management System.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Policies;
