import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import BackgroundScene from './BackgroundScene';
import './GlobalCanvas.scss';
import { CanvasTunnel } from '../layout/TunnelContext';

const GlobalCanvas = () => {
  return (
    <div className="global-canvas">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <BackgroundScene />
        </Suspense>

        <Suspense fallback={null}>
          <CanvasTunnel.Out />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GlobalCanvas;
