import React from 'react';

const ScissorsIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" height={size} width={size}>
    <circle cx="6" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
    <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
    <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
  </svg>
);

const servicesList = [
  {
    name: 'Hair Cut',
    price: '500 LKR',
    desc: 'any style, incl. full head shave'
  },
  {
    name: 'Beard Trim',
    price: '300 LKR',
    desc: 'sharp line up, shaping & conditioning'
  },
  {
    name: 'Hair & Beard',
    price: '700 LKR',
    desc: 'Includes a complimentary 5-min massage'
  },
  {
    name: 'Head Massage (20 Mins)',
    price: '800 LKR',
    desc: 'A full, dedicated relaxation treatment'
  },
  {
    name: 'Hair Dyeing + Hair Cut',
    price: '900 LKR',
    desc: 'Hair Dyeing (Grey Coverage) with Hair Cut'
  },
  {
    name: 'Premium Package',
    price: '1500 LKR',
    desc: 'Hair Cut + Beard Trim + Head & Shoulder Massage',
    popular: true
  }
];

const Services = () => {
  return (
    <section id="services">
      <span className="sec-label">What We Offer</span>
      <h2 className="sec-title">Crafted Services</h2>
      <div className="menu-grid">
        {servicesList.map((svc, idx) => (
          <div key={idx} className={`menu-card menu-row ${svc.popular ? 'premium-card premium-row' : ''}`}>
            <span className="menu-icon"><ScissorsIcon size={22} /></span>
            <div className="menu-content">
              <div className="menu-title-row">
                <span className="menu-name">
                  {svc.name}
                  {svc.popular && <span className="popular-badge">Most Popular</span>}
                </span>
                <div className="menu-dots"></div>
                <span className="menu-price">{svc.price}</span>
              </div>
              <div className="menu-desc">{svc.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
