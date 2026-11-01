import React from 'react';

const videos = [
  {
    title: 'Precision Mid-Fade Transformation',
    views: '142K',
    tag: '#BarberCraft',
    bg: '/Gemini_Generated_Image_rurdhcrurdhcrurd 2.png'
  },
  {
    title: 'Textured Crop & Beard Sculpt',
    views: '289K',
    tag: '#MensGrooming',
    bg: '/hero-banner.jpg'
  },
  {
    title: 'The JZER VIP Experience & Scalp Care',
    views: '98K',
    tag: '#LuxurySalon',
    bg: '/JEWEL_OF_YOUR_BEAUTY_(4)_(1) (3).png'
  }
];

const TikTokTeaser = () => {
  return (
    <section id="tiktok-teaser">
      <span className="sec-label">Watch the Craft</span>
      <h2 className="sec-title" style={{ marginBottom: '8px' }}>Behind Every Clean Cut</h2>
      <p className="gallery-sub" style={{ marginBottom: '24px' }}>
        New cuts, new styles, new content &mdash; every week.
      </p>
      
      <div className="tiktok-grid">
        {videos.map((vid, i) => (
          <div key={i} className="tiktok-item">
            <img src={vid.bg} alt={vid.title} className="tiktok-thumb-img" />
            <div className="tiktok-overlay-content">
              <div className="tiktok-views-pill">
                <span className="tiktok-dot"></span>
                <span>{vid.views} views</span>
              </div>
              <div className="play-overlay">
                <svg viewBox="0 0 24 24" fill="white" stroke="none" height="24" width="24">
                  <polygon points="6 4 20 12 6 20"></polygon>
                </svg>
              </div>
              <div className="tiktok-info-bottom">
                <span className="tiktok-tag">{vid.tag}</span>
                <p className="tiktok-card-title">{vid.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cta-row" style={{ marginTop: '24px', opacity: 1, animation: 'none' }}>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="btn-p">
          Follow us on TikTok
        </a>
      </div>
    </section>
  );
};

export default TikTokTeaser;
