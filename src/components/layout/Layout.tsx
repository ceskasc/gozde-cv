import type { ReactNode } from 'react';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navigation from './Navigation';
import CustomCursor from './CustomCursor';
import GlobalCanvas from '../3d/GlobalCanvas';
import AudioPlayer from '../ui/AudioPlayer';
import './Layout.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="layout">
      <CustomCursor />
      <GlobalCanvas />
      <div className="grain-overlay" />
      <Navigation />
      <main className="content">{children}</main>
      <AudioPlayer />
    </div>
  );
};

export default Layout;
