import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <span className="sec-label">Contact Us</span>
      <h2 className="sec-title" style={{ marginBottom: '10px' }}>Get In Touch</h2>
      <p className="gallery-sub" style={{ marginBottom: '50px' }}>Questions, bookings, or feedback &mdash; we're one message away.</p>
      
      <div className="contact-g">
        <div className="contact-info">
          <div className="c-row">
            <div className="c-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="c-text">[YOUR_ADDRESS]</div>
          </div>
          <div className="c-row">
            <div className="c-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="c-text">[YOUR_PHONE]</div>
          </div>
          <div className="c-row">
            <div className="c-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="c-text">[YOUR_EMAIL]</div>
          </div>
          
          <div className="c-socials">
            <span className="c-socials-label">Follow us:</span>
            <a href="[INSTAGRAM_URL]" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="[FACEBOOK_URL]" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="[TIKTOK_URL]" target="_blank" rel="noopener noreferrer" className="tiktok-icon-svg">
              <svg viewBox="0 0 24 24" fill="currentColor" height="20" width="20">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Full Name" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Email or Phone Number" className="form-input" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell us what you need &mdash; a booking, a question, anything." className="form-input form-textarea" required></textarea>
            </div>
            <button type="submit" className="btn-p form-submit">Send Inquiry</button>
            <p className="form-note">We usually reply within a few hours.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
