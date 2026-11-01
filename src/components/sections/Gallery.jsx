import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/JEWEL OF YOUR BEAUTY (1).png',
    title: 'The Signature Cut',
    category: 'Master Styling',
    desc: 'Tailored specifically to your face structure and personal aesthetic.'
  },
  {
    image: '/JEWEL_OF_YOUR_BEAUTY_(4)_(1) (3).png',
    title: 'The Luxury Studio',
    category: 'Atmosphere',
    desc: 'An opulent, focused environment designed for pure relaxation.'
  },
  {
    image: '/Gemini_Generated_Image_rurdhcrurdhcrurd 2.png',
    title: 'Beard Sculpting & Contour',
    category: 'Sharp Details',
    desc: 'Crisp fades, straight-razor lines, and hot towel treatments.'
  },
  {
    image: '/Gemini_Generated_Image_rurdhcrurdhcrurd 3.png',
    title: 'Texture & Finishing',
    category: 'Craftsmanship',
    desc: 'Modern volume, directional texture, and enduring hold.'
  },
  {
    image: '/hero-banner.jpg',
    title: 'The JZER Standard',
    category: 'Editorial',
    desc: 'Sharp, deliberate, and executed with obsessive precision.'
  }
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, clientWidth } = trackRef.current;
    if (clientWidth === 0) return;
    const card = trackRef.current.children[0];
    const cardWidth = card ? card.offsetWidth : clientWidth;
    const style = card ? window.getComputedStyle(trackRef.current) : null;
    const gap = style ? (parseFloat(style.columnGap || style.gap) || 0) : 0;
    const step = cardWidth + gap;
    const index = step > 0 ? Math.round(scrollLeft / step) : 0;
    setCurrent(Math.min(Math.max(index, 0), slides.length - 1));
  };

  const scrollToSlide = (idx) => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[idx];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setCurrent(idx);
    }
  };

  const prevSlide = () => {
    const nextIdx = current === 0 ? slides.length - 1 : current - 1;
    scrollToSlide(nextIdx);
  };

  const nextSlide = () => {
    const nextIdx = current === slides.length - 1 ? 0 : current + 1;
    scrollToSlide(nextIdx);
  };

  return (
    <section id="gallery">
      <span className="sec-label">Inside JZER</span>
      <h2 className="sec-title" style={{ marginBottom: '8px' }}>A Closer Look</h2>
      <p className="gallery-sub" style={{ marginBottom: '24px' }}>
        A closer look at the space, the craft, and the cuts
      </p>

      <div className="gallery-slider-wrap">
        <button 
          className="gallery-nav-btn prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        <div 
          className="gallery-track" 
          ref={trackRef} 
          onScroll={handleScroll}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="gallery-slide-card">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="gallery-slide-img" 
              />
              <div className="gallery-slide-overlay">
                <span className="gallery-badge">{slide.category}</span>
                <h3 className="gallery-slide-title">{slide.title}</h3>
                <p className="gallery-slide-desc">{slide.desc}</p>
              </div>
              <div className="gallery-counter">
                0{idx + 1} / 0{slides.length}
              </div>
            </div>
          ))}
        </div>

        <button 
          className="gallery-nav-btn next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="gallery-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`gallery-dot ${idx === current ? 'active' : ''}`}
            onClick={() => scrollToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
