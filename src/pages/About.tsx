import { motion } from 'framer-motion';
import GlitchText from '../components/ui/GlitchText';
import './About.scss';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <motion.div
          className="headline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ pointerEvents: 'auto' }}
        >
          {/* Using divs specifically to enforce block layout without relying on internal spans */}
          <div className="line"><GlitchText text="FORGING" /></div>
          <div className="line highlight"><GlitchText text="DIGITAL" /></div>
          <div className="line"><GlitchText text="NIGHTMARES" /></div>
        </motion.div>

        <section className="bio">
          <div className="bio-image" style={{ pointerEvents: 'auto' }}>
            <img src="/about_art.png" alt="Gothic Abstract Art" />
          </div>
          <motion.div
            className="bio-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ pointerEvents: 'auto' }}
          >
            <p>
              <GlitchText text="I am Gözde Güngör. An illustrator and graphic designer obsessed with the dark," />
              <GlitchText text="the arcane, and the heavy. My work bridges the gap between traditional gothic aesthetics" />
              <GlitchText text="and modern digital brutality." />
            </p>
            <p>
              <GlitchText text="Specializing in band merchandise, album covers, and occult branding." />
            </p>
          </motion.div>
        </section>

        <section className="skills" style={{ pointerEvents: 'auto' }}>
          <h2><GlitchText text="ARSENAL" /></h2>
          <ul>
            <li><GlitchText text="DIGITAL ILLUSTRATION" /></li>
            <li><GlitchText text="BRAND DARKNESS" /></li>
            <li><GlitchText text="ALBUM ART" /></li>
            <li><GlitchText text="UI / UX NECROMANCY" /></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
