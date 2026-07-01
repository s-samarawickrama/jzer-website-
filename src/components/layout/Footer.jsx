import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="f-content">
        <img src="/jzer-logo-1.png" alt="JZER" style={{ height: '48px', display: 'block', margin: '0 auto 10px' }} />
        <p>Luxury salon services crafted with obsession for those who refuse ordinary.</p>
        <div className="f-links">
          <a href="#">About</a><a href="#">Services</a><a href="#">Gallery</a>
          <a href="#">IG</a><a href="#">TK</a><a href="#">PT</a>
        </div>
        <div className="f-copy">© 2025 JZER Salon. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
