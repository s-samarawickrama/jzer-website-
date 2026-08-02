import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-banner-wrap">
        <picture>
          <source media="(max-width: 768px)" srcSet="/Gemini_Generated_Image_rurdhcrurdhcrurd%203.png" />
          <img src="/Gemini_Generated_Image_rurdhcrurdhcrurd (1).png" alt="Background" className="hero-banner-img" />
        </picture>
      </div>
      
      <img src="/jzer-logo-1.png" alt="JZER Salon Logo" className="hero-center-logo" />

      <div className="hero-content-bottom">
        <div className="hero-slogan">JEWEL OF YOUR BEAUTY</div>
        <div className="cta-row">
          <button className="btn-p" onClick={() => window.open('https://wa.me/94781468851', '_blank')}>Book Your Experience</button>
          <button className="btn-g">Explore Services</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
