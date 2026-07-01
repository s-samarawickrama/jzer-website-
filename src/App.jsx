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
import Services from './components/sections/Services';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';

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
        <Services />
        <About />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
