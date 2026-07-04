import React from 'react';

const ScissorsIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" height={size} width={size}>
    <circle cx="6" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
    <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
    <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
  </svg>
);

const Services = () => {
  return (
    <section id="services">
      <span className="sec-label">What We Offer</span>
      <h2 className="sec-title">Crafted Services</h2>
      <div className="menu-panel">
        <div className="menu-row">
          <span className="menu-icon"><ScissorsIcon size={24} /></span>
          <div className="menu-content">
            <div className="menu-title-row">
              <span className="menu-name">Hair Cut</span>
              <div className="menu-dots"></div>
              <span className="menu-price">500 LKR</span>
            </div>
            <div className="menu-desc">any style, incl. full head shave</div>
          </div>
        </div>
        
        <div className="menu-row">
          <span className="menu-icon"><ScissorsIcon size={24} /></span>
          <div className="menu-content">
            <div className="menu-title-row">
              <span className="menu-name">Beard Trim</span>
              <div className="menu-dots"></div>
              <span className="menu-price">300 LKR</span>
            </div>
          </div>
        </div>

        <div className="menu-row">
          <span className="menu-icon"><ScissorsIcon size={24} /></span>
          <div className="menu-content">
            <div className="menu-title-row">
              <span className="menu-name">Hair & Beard</span>
              <div className="menu-dots"></div>
              <span className="menu-price">700 LKR</span>
            </div>
            <div className="menu-desc">Includes a complimentary 5-min massage</div>
          </div>
        </div>

        <div className="menu-row">
          <span className="menu-icon"><ScissorsIcon size={24} /></span>
          <div className="menu-content">
            <div className="menu-title-row">
              <span className="menu-name">Head Massage (20 Mins)</span>
              <div className="menu-dots"></div>
              <span className="menu-price">800 LKR</span>
            </div>
            <div className="menu-desc">A full, dedicated relaxation treatment</div>
          </div>
        </div>

        <div className="menu-row">
          <span className="menu-icon"><ScissorsIcon size={24} /></span>
          <div className="menu-content">
            <div className="menu-title-row">
              <span className="menu-name">Hair Dyeing (Grey Coverage) with Hair Cut</span>
              <div className="menu-dots"></div>
              <span className="menu-price">900 LKR</span>
            </div>
          </div>
        </div>
        
        <div className="menu-row premium-row">
          <span className="menu-icon"><ScissorsIcon size={24} /></span>
          <div className="menu-content">
            <div className="menu-title-row">
              <span className="menu-name">Premium Package <span className="popular-badge">Most Popular</span></span>
              <div className="menu-dots"></div>
              <span className="menu-price">1500 LKR</span>
            </div>
            <div className="menu-desc">Hair Cut + Beard Trim + Head & Shoulder Massage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
