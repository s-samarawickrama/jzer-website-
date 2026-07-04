import React from 'react';

const Testimonials = () => {
  return (
    <section id="testi">
      <span className="sec-label">What Our Clients Say</span>
      <h2 className="sec-title" style={{ marginBottom: '10px' }}>Real reviews from real clients</h2>
      <p className="gallery-sub" style={{ marginBottom: '50px' }}>Don't just take our word for it.</p>
      
      <div className="t-cards">
        <div className="t-card">
          <div className="stars">★★★★★</div>
          <p className="quote">"Best fade I've gotten in Sri Lanka, hands down. Clean lines, no rush, and the head massage after is unreal."</p>
          <div className="auth">
            <div className="ava"></div>
            <div>
              <div className="auth-name">Ravindu P.</div>
              <div className="auth-role">via Google</div>
            </div>
          </div>
        </div>
        <div className="t-card">
          <div className="stars">★★★★★</div>
          <p className="quote">"The premium package is worth every rupee. Cut, beard, massage &mdash; walked out feeling like a completely different person."</p>
          <div className="auth">
            <div className="ava"></div>
            <div>
              <div className="auth-name">Ashan D.</div>
              <div className="auth-role">via Google</div>
            </div>
          </div>
        </div>
        <div className="t-card">
          <div className="stars">★★★★☆</div>
          <p className="quote">"Really professional setup for the price. Beard trim was sharp and precise. Will be coming back regularly."</p>
          <div className="auth">
            <div className="ava"></div>
            <div>
              <div className="auth-name">Nimal S.</div>
              <div className="auth-role">via Google</div>
            </div>
          </div>
        </div>
        <div className="t-card">
          <div className="stars">★★★★★</div>
          <p className="quote">"Attention to detail is on another level. You can tell the person cutting your hair actually cares about the outcome."</p>
          <div className="auth">
            <div className="ava"></div>
            <div>
              <div className="auth-name">Kasun W.</div>
              <div className="auth-role">via Google</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cta-row" style={{ marginTop: '50px', opacity: 1, animation: 'none' }}>
        <a href="[GOOGLE_REVIEW_URL]" target="_blank" rel="noopener noreferrer" className="btn-p">
          ★ Leave Us a Review on Google
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
