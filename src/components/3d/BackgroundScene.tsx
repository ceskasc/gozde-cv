import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

const FloatingShard = ({ position, rotation, scale }: { position: [number, number, number], rotation: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.z += 0.001;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#1a1a1a"
          wireframe
          emissive="#8a0303"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={1}
        />
      </mesh>
    </Float>
  );
};


const BackgroundScene = () => {
  return (
    <>
      <color attach="background" args={['#030303']} />
      <fogExp2 attach="fog" args={['#030303', 0.15]} />

      <ambientLight intensity={0.5} color="#404040" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff0000" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={10} size={2} speed={0.4} opacity={0.5} color="#8a0303" />

      {/* Scattered Shards */}
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingShard
          key={i}
          position={[
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10 - 5
          ]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          scale={Math.random() * 0.5 + 0.2}
        />
      ))}

      <EffectComposer>
        <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} radius={0.4} />
        <Noise opacity={0.1} blendFunction={BlendFunction.OVERLAY} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <ChromaticAberration offset={[0.002, 0.002]} />
      </EffectComposer>
    </>
  );
};

export default BackgroundScene;
