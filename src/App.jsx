import React from 'react';
import './index.css';

// Hooks
import { useMouseEffects } from './hooks/useMouseEffects';

// Common Components
import Cursor from './components/common/Cursor';
import Particles from './components/common/Particles';
import Background from './components/common/Background';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import FounderStory from './components/sections/FounderStory';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import TikTokTeaser from './components/sections/TikTokTeaser';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  // Initialize custom mouse effects and interactions
  useMouseEffects();

  return (
    <>
      <Cursor />
      <Particles />
      
      {/* Background Layers */}
      <Background />
      <div className="vig"></div>
      <div className="amb"></div>

      {/* Main Page Content */}
      <div id="page">
        <Navbar />
        <Hero />
        <FounderStory />
        <Services />
        <Gallery />
        <TikTokTeaser />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
