import React from 'react';

const FounderStory = () => {
  return (
    <section id="founder">
      <div className="founder-g">
        <div className="founder-img-wrapper">
          <img src="/images/owner/image.png" alt="Founders" className="founder-placeholder" style={{ objectFit: 'cover', width: '100%', height: '100%', objectPosition: 'center 20%' }} />
        </div>
        <div className="founder-content">
          <span className="sec-label">The Vision</span>
          <h2 className="sec-title-left">The Story Behind JZER</h2>
          <p className="founder-p">
            "JZER was built on a foundation of true friendship and a shared belief in our dreams. With backgrounds in Computer Science from UCSC, we had other paths open to us. But we chose this one together.
          </p>
          <p className="founder-p">
            That mindset shows in our work. Every fade, every line, every detail is handled with the same precision that shaped our education. No shortcuts, no guesswork.
          </p>
          <p className="founder-p">
            This is the standard JZER runs on: sharp, deliberate, and done right, every time."
          </p>
          <div className="signature">
            <div className="sig-line"></div>
            <span> Founders, JZER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
