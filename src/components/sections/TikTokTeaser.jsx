import React from 'react';

const TikTokTeaser = () => {
  return (
    <section id="tiktok-teaser">
      <span className="sec-label">Watch the Craft</span>
      <h2 className="sec-title" style={{ marginBottom: '10px' }}>Behind Every Clean Cut</h2>
      <p className="gallery-sub" style={{ marginBottom: '40px' }}>New cuts, new styles, new content &mdash; every week.</p>
      
      <div className="tiktok-grid">
        {[1, 2, 3].map((i) => (
          <div key={i} className="tiktok-item">
            <div className="tiktok-placeholder">
              <div className="play-overlay">
                <svg viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="32" width="32">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cta-row" style={{ marginTop: '40px', opacity: 1, animation: 'none' }}>
        <a href="[TIKTOK_URL]" target="_blank" rel="noopener noreferrer" className="btn-p">
          Follow us on TikTok
        </a>
      </div>
    </section>
  );
};

export default TikTokTeaser;
