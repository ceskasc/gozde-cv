import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useCursor, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useLocation } from 'wouter';

const projects = [
  { id: 1, title: 'NECROMANCY UI', color: '#4a0000', url: '/project/1', img: '/gothic_album_art_1_1764968817845.png' },
  { id: 2, title: 'VOID BRANDING', color: '#1a1a1a', url: '/project/2', img: '/gothic_branding_2_1764968849315.png' },
  { id: 3, title: 'BLOOD LUST', color: '#2b0000', url: '/project/3', img: '/gothic_illustration_3_1764968877205.png' },
  { id: 4, title: 'METAL COVER', color: '#0f0f0f', url: '/project/4', img: '/gothic_merch_4_1764968899521.png' },
];

const WorkItem = ({ index, project, setLocation }: { index: number, project: any, setLocation: any }) => {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  // Load texture specifically (suspense will handle waiting)
  const texture = useTexture(project.img) as THREE.Texture;

  useCursor(hovered);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(state.clock.elapsedTime + index) * 0.1;

    // Scale effect
    const scaleTarget = hovered ? 1.15 : 1;
    ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, scaleTarget, 0.1);
    ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, scaleTarget, 0.1);

    // Hover brightening
    (ref.current.material as THREE.MeshBasicMaterial).color.lerp(new THREE.Color(hovered ? '#ffffff' : '#aaaaaa'), 0.1);
  });

  // Tighter scale
  return (
    <group position={[index * 2.2 - 3.3, 0, 0]}> {/* Reduced spacing multiplier (2.5 -> 2.2) and offset */}
      <mesh
        ref={ref}
        scale={[1.8, 2.7, 1]} // Slightly smaller scale (2 -> 1.8)
        onClick={() => setLocation(project.url)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <planeGeometry />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          fog={false}
          color="#aaaaaa"
        />
      </mesh>

      <Text
        position={[0, -1.8, 0.1]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {project.title}
      </Text>
    </group>
  );
};

const WorkGallery3D = () => {
  const [, setLocation] = useLocation();

  return (
    <group position={[0, 0, 0]}>
      {projects.map((project, index) => (
        <WorkItem key={project.id} index={index} project={project} setLocation={setLocation} />
      ))}
    </group>
  );
};

export default WorkGallery3D;
