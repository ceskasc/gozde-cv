import { CanvasTunnel } from '../components/layout/TunnelContext';
import WorkGallery3D from '../components/work/WorkGallery3D';
import './Work.scss';

const Work = () => {
  return (
    <div className="work-page">
      <CanvasTunnel.In>
        <WorkGallery3D />
      </CanvasTunnel.In>
      <div className="work-ui">
        {/* Text removed as requested */}
      </div>
    </div>
  );
};

export default Work;
