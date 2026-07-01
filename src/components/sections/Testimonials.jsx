import React from 'react';

const Testimonials = () => {
  return (
    <section id="testi">
      <span className="sec-label">Client Stories</span>
      <h2 className="sec-title">What They Say</h2>
      <div className="t-cards">
        <div className="t-card">
          <div className="stars">★★★★★</div>
          <p className="quote">"JZER changed the way I think about my hair. The attention to detail is unmatched anywhere I've been."</p>
          <div className="auth"><div className="ava"></div><div><div className="auth-name">Amara L.</div><div className="auth-role">Fashion Editor</div></div></div>
        </div>
        <div className="t-card">
          <div className="stars">★★★★★</div>
          <p className="quote">"The most precise balayage I've ever had. It looked exactly as we discussed — every single time."</p>
          <div className="auth"><div className="ava"></div><div><div className="auth-name">Sophie R.</div><div className="auth-role">Creative Director</div></div></div>
        </div>
        <div className="t-card">
          <div className="stars">★★★★★</div>
          <p className="quote">"Walking out of JZER feels like leaving a completely different person. The experience is electric."</p>
          <div className="auth"><div className="ava"></div><div><div className="auth-name">Priya N.</div><div className="auth-role">Model</div></div></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
