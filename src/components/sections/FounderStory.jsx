import React from 'react';

const FounderStory = () => {
  return (
    <section id="founder">
      <div className="founder-g">
        <div className="founder-img-wrapper">
          <div className="founder-placeholder">
            {/* Image Placeholder */}
          </div>
        </div>
        <div className="founder-content">
          <span className="sec-label">The Vision</span>
          <h2 className="sec-title-left">The Story Behind JZER</h2>
          <p className="founder-p">
            "JZER was built on a simple principle: do it properly, or don't do it at all. With a background in Computer Science from UCSC, I had other paths open to me. I chose this one.
          </p>
          <p className="founder-p">
            That mindset shows in the work. Every fade, every line, every detail is handled with the same precision that shaped my education. No shortcuts, no guesswork.
          </p>
          <p className="founder-p">
            This is the standard JZER runs on: sharp, deliberate, and done right, every time."
          </p>
          <div className="signature">
            <div className="sig-line"></div>
            <span>&mdash; Founder, JZER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
