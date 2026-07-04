import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="f-content">
        <img src="/jzer-logo-1.png" alt="JZER" style={{ height: '48px', display: 'block', margin: '0 auto 10px' }} />
        <p style={{ letterSpacing: '0.05em' }}>Jewel of Your Beauty</p>
        <div className="f-links">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#testi">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="f-links" style={{ gap: '16px', marginBottom: '32px' }}>
          <a href="[INSTAGRAM_URL]" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="[FACEBOOK_URL]" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="[TIKTOK_URL]" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
        <div className="f-copy">© 2026 JZER. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
