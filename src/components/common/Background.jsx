import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import bgB64 from '../../../public/mr0rk52y.png?b64';

const Scene = () => {
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
      <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
    </>
  );
};

const Background = () => {
  return (
    <div id="bg" style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background;
