import { useRoute } from 'wouter';
import { useLocation } from 'wouter';
import './ProjectDetail.scss';
import GlitchText from '../components/ui/GlitchText';

const ProjectDetail = () => {
  const [match, params] = useRoute('/project/:id');
  const [, setLocation] = useLocation();

  if (!match) return null;

  return (
    <div className="project-detail-page">
      <div className="navigation-back" onClick={() => setLocation('/work')}>
        &lt; <GlitchText text="RETURN TO VOID" />
      </div>

      <div className="project-content" style={{ pointerEvents: 'auto' }}>
        <h1>
          <GlitchText text={`PROJECT ${params.id}`} />
        </h1>
        <div className="project-info">
          <p>CLIENT: <GlitchText text="[REDACTED]" /></p>
          <p>YEAR: <GlitchText text="2025" /></p>
          <p>ROLE: <GlitchText text="ART DIRECTION" /></p>
        </div>

        <div className="project-placeholder-image">
          {/* We could pass the image via state or look it up, for now static placeholder */}
          <div className="img-box" />
        </div>

        <p className="project-description">
          <GlitchText text="A deep dive into the abyss. This project explores the relationship between" />
          <GlitchText text="organic decay and digital permanence." />
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
