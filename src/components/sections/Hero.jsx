import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-banner-wrap">
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-banner.jpg" />
          <img src="/hero-banner.jpg" alt="JZER Salon Hero" className="hero-banner-img" />
        </picture>
        <div className="hero-vignette-overlay"></div>
      </div>
      
      <div className="hero-header-brand">
        <img src="/jzer-logo-1.png" alt="JZER Salon Logo" className="hero-center-logo" />
      </div>

      <div className="hero-content-bottom">
        <div className="hero-slogan">JEWEL OF YOUR BEAUTY</div>
        <div className="cta-row">
          <a href="#services" className="btn-p">Explore Services</a>
          <a href="#contact" className="btn-g">Book Your Experience</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
