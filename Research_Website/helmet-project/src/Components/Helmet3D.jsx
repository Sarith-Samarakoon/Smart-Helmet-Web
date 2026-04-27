import { useRef, useEffect, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, ContactShadows, Float, PresentationControls, Html, useProgress, Center } from '@react-three/drei';
import { Loader2, AlertCircle, Move } from 'lucide-react';
import * as THREE from 'three';

// Preload the model
useGLTF.preload('/motor_helmet.glb');

function Model() {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  const { scene } = useGLTF('/motor_helmet.glb');
  
  // Clone the scene to avoid modifying the cached original
  const clonedScene = useMemo(() => {
    if (!scene) return null;
    return scene.clone();
  }, [scene]);
  
  // Use a ref for time to avoid THREE.Clock deprecation
  const timeRef = useRef(0);
  
  useFrame((state, delta) => {
    // Update time manually to avoid THREE.Clock deprecation
    timeRef.current += delta;
    
    if (group.current && !hovered) {
      // Gentle idle rotation when not being interacted with
      group.current.rotation.y = Math.sin(timeRef.current * 0.3) * 0.15;
    }
  });

  useEffect(() => {
    if (!clonedScene) return;
    
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          // Clone material to avoid shared state issues
          child.material = child.material.clone();
          child.material.envMapIntensity = 1;
          child.material.roughness = 0.3;
          child.material.metalness = 0.7;
        }
      }
    });
  }, [clonedScene]);

  if (!clonedScene) return null;

  return (
    <group 
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Center>
        <primitive 
          object={clonedScene} 
          scale={2.5} 
          position={[0, -0.2, 0]} 
          rotation={[0, Math.PI / 6, 0]} 
        />
      </Center>
    </group>
  );
}

function LoadingSpinner() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        <span className="text-sm text-slate-500 font-medium">Loading 3D Model... {Math.round(progress)}%</span>
      </div>
    </Html>
  );
}

function ErrorFallback({ error }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-900/50 rounded-2xl">
      <div className="text-center p-6">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <p className="text-slate-400 text-sm">Failed to load 3D model</p>
        <p className="text-slate-500 text-xs mt-2">{error?.message || 'Please refresh the page'}</p>
      </div>
    </div>
  );
}

export default function Helmet3D() {
  const [error, setError] = useState(null);

  if (error) {
    return <ErrorFallback error={error} />;
  }

  return (
    <div className="w-full h-[400px] md:h-[500px]" style={{ touchAction: 'none' }}>
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: true,
        }}
        shadows={{ type: THREE.PCFShadowMap }}
        dpr={[1, 2]}
        onError={(e) => {
          console.error('Canvas error:', e);
          setError(e);
        }}
      >
        {/* Simplified lighting - no Environment for compatibility */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 7]} intensity={1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#3b82f6" />
        <pointLight position={[5, -5, 5]} intensity={0.2} color="#06b6d4" />
        
        <Suspense fallback={<LoadingSpinner />}>
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-0.5, 0.3]}
            azimuth={[-0.6, 0.6]}
            config={{ mass: 1.5, tension: 400 }}
            snap={{ mass: 3, tension: 400 }}
          >
            <Float
              speed={1.5}
              rotationIntensity={0.3}
              floatIntensity={0.4}
            >
              <Model />
            </Float>
          </PresentationControls>
          
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.3} 
            scale={8} 
            blur={2} 
            far={3} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
