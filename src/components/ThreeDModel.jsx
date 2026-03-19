import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Environment, ContactShadows } from '@react-three/drei';

const AnimatedShape = () => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  // Rotate mesh every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <TorusKnot 
      ref={meshRef} 
      args={[10, 3, 100, 16]}
      scale={hovered ? 1.2 : 1}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <meshStandardMaterial 
        color={hovered ? '#00f0ff' : '#9d00ff'} 
        wireframe={true} 
        emissive={hovered ? '#00f0ff' : '#000000'}
        emissiveIntensity={0.5}
      />
    </TorusKnot>
  );
};

const ThreeDModel = () => {
  return (
    <div className="glass-card" style={{ height: '300px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>
        <h3 style={{ fontSize: '1.2rem', margin: 0 }}>System Core Visualization</h3>
        <p className="metric-label">Interactive 3D Rendering Engine</p>
      </div>

      <div style={{ width: '100%', height: '100%', cursor: 'grab' }}>
        <Canvas camera={{ position: [0, 0, 40], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <AnimatedShape />
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={2.0} />
            <Environment preset="city" />
            <ContactShadows position={[0, -20, 0]} opacity={0.4} scale={40} blur={2.5} far={40} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeDModel;
