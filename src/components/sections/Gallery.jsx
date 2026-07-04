import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery">
      <span className="sec-label">Inside JZER</span>
      <h2 className="sec-title" style={{ marginBottom: '10px' }}>A Closer Look</h2>
      <p className="gallery-sub">A closer look at the space, the craft, and the cuts</p>
      
      <div className="gallery-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="gallery-item">
            <div className="gallery-placeholder">
              {/* Image Placeholder */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
