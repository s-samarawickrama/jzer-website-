import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import bgB64 from '../../../public/mr0rk52y.png?b64';

const Scene = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const texture = useTexture(bgB64); 
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;

  return (
    <>
      <Environment map={texture} background />
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={0.5} 
        enableZoom={false} 
        enablePan={!isMobile} 
        enableRotate={!isMobile} 
      />
    </>
  );
};

const Background = () => {
  return (
    <div id="bg" style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background;
