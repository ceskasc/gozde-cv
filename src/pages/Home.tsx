import GlitchText from '../components/ui/GlitchText';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="hero-title">
          <GlitchText text="DIGITAL" /> <br />
          <GlitchText text="GOTHIC" /> <br />
          <GlitchText text="ARTISTRY" />
        </h1>
        <div className="hero-subtitle">
          <p>GÖZDE GÜNGÖR — VISUAL ARTIST</p>
        </div>
      </section>
      <section className="manifesto">
        <div className="manifesto-content">
          <h2 style={{ pointerEvents: 'auto' }}>
            <GlitchText text="THE PHILOSOPHY" />
          </h2>
          <p style={{ pointerEvents: 'auto' }}>
            <GlitchText text="BEAUTY IN DECAY." /> <br />
            <GlitchText text="STRENGTH IN DARKNESS." /> <br />
            <GlitchText text="ART IN THE VOID." />
          </p>
          <p className="description">
            We do not fear the shadows; we forge them into weapons of mass visual destruction.
            Every pixel is a ritual, every design a pact.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
