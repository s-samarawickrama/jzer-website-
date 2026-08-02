import React from 'react';

const images = [
  '/images/image.png',
  '/images/image copy.png',
  '/images/image copy 2.png',
  '/images/image copy 3.png',
  '/images/image copy 4.png',
  '/images/image copy 5.png',
  '/images/image copy 6.png',
  '/images/image copy 7.png',
];

const Gallery = () => {
  return (
    <section id="gallery">
      <span className="sec-label">Inside JZER</span>
      <h2 className="sec-title" style={{ marginBottom: '10px' }}>A Closer Look</h2>
      <p className="gallery-sub">A closer look at the space, the craft, and the cuts</p>
      
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div key={i} className="gallery-item">
            <img 
              src={src} 
              alt={`Gallery image ${i + 1}`} 
              className="gallery-placeholder" 
              style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
