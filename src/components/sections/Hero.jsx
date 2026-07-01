import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-banner-wrap">
        <img src="/JEWEL_OF_YOUR_BEAUTY_(4)_(1) (3).png" alt="JZER Salon" className="hero-banner-img" />
      </div>

      <div className="hero-content-bottom">
        <div className="hero-slogan">JEWEL OF YOUR BEAUTY</div>
        <div className="cta-row">
          <button className="btn-p">Book Your Experience</button>
          <button className="btn-g">Explore Services</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
