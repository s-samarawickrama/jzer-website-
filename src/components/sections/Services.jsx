import React from 'react';
import { Scissors } from 'lucide-react';

const Services = () => {
  return (
    <section id="services">
      <span className="sec-label">What We Offer</span>
      <h2 className="sec-title">Crafted Services</h2>
      <div className="menu-panel">
        <div className="menu-row">
          <span className="menu-icon"><Scissors strokeWidth={1.5} size={24} /></span>
          <div className="menu-content">
            <div className="menu-title-row">
              <span className="menu-name">Hair Cut</span>
              <div className="menu-dots"></div>
              <span className="menu-price">500 LKR</span>
            </div>
          </div>
        </div>
        
        <div className="menu-row">
          <span className="menu-icon"><Scissors strokeWidth={1.5} size={24} /></span>
          <div className="menu-content">
            <div className="menu-title-row">
              <span className="menu-name">Beard Trim</span>
              <div className="menu-dots"></div>
              <span className="menu-price">300 LKR</span>
            </div>
          </div>
        </div>

        <div className="menu-row">
          <span className="menu-icon"><Scissors strokeWidth={1.5} size={24} /></span>
          <div className="menu-content">
            <div className="menu-title-row">
              <span className="menu-name">Hair & Beard with Massage</span>
              <div className="menu-dots"></div>
              <span className="menu-price">700 LKR</span>
            </div>
          </div>
        </div>

        <div className="menu-row">
          <span className="menu-icon"><Scissors strokeWidth={1.5} size={24} /></span>
          <div className="menu-content">
            <div className="menu-title-row">
              <span className="menu-name">Head Massage (20 Mins)</span>
              <div className="menu-dots"></div>
              <span className="menu-price">800 LKR</span>
            </div>
          </div>
        </div>

        <div className="menu-row">
          <span className="menu-icon"><Scissors strokeWidth={1.5} size={24} /></span>
          <div className="menu-content">
            <div className="menu-title-row">
              <span className="menu-name">Hair Dyeing (Grey Coverage)</span>
              <div className="menu-dots"></div>
              <span className="menu-price">Consult</span>
            </div>
            <div className="menu-desc">Restore your natural shade with seamless grey blending for a younger, sharper look</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
