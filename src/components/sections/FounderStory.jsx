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
            "Every great cut starts with obsession over detail &mdash; and that's exactly where JZER 
            was born. Between long nights debugging code as a Software Engineering undergraduate 
            and long days behind the chair, I found the two crafts aren't so different. Both 
            demand precision, patience, and an eye for what 'clean' really means.
          </p>
          <p className="founder-p">
            JZER isn't just a barbershop &mdash; it's where that discipline meets style. Every fade, 
            every trim, every shave is treated like a build that has to ship perfect. No 
            shortcuts, no guesswork &mdash; just sharp work, done right."
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
