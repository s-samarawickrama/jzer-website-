import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="about-g">
        <div className="glass-p">
          <div className="acc-line"></div>
          <span className="sec-label">Our Story</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '16px' }}>
            Art You Wear.<br />Craft You Feel.
          </h2>
          <p style={{ fontSize: '.88rem', lineHeight: 1.78, color: 'rgba(216,216,216,.7)', maxWidth: '420px' }}>
            JZER was born from a single belief: that hair is the most intimate form of self-expression. Every cut, colour and treatment is executed with obsessive precision.
          </p>
          <div className="stats">
            <div className="stat"><div className="stat-n">8+</div><div className="stat-l">Years of Mastery</div></div>
            <div className="stat"><div className="stat-n">2k+</div><div className="stat-l">Happy Clients</div></div>
            <div className="stat"><div className="stat-n">100%</div><div className="stat-l">Premium Products</div></div>
            <div className="stat"><div className="stat-n">12</div><div className="stat-l">Expert Stylists</div></div>
          </div>
        </div>
        <div className="pillars">
          <div className="pill"><div className="pill-orb"></div><span className="pill-lbl">Signature Cut</span></div>
          <div className="pill"><div className="pill-orb" style={{ animationDelay: '-1.5s' }}></div><span className="pill-lbl">Colour Ritual</span></div>
          <div className="pill"><div className="pill-orb" style={{ animationDelay: '-3s' }}></div><span className="pill-lbl">Bridal Suite</span></div>
        </div>
      </div>
    </section>
  );
};

export default About;
