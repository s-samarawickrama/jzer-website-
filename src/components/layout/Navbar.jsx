import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <img src="/jzer-logo.svg" alt="JZER" style={{ height: '32px' }} />
      
      <div className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
        <a href="#founder" onClick={() => setIsOpen(false)}>Story</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
        <a href="#testi" onClick={() => setIsOpen(false)}>Reviews</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>

      <div className="nav-actions">
        <button className="btn-book">Book Now</button>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
