import './Contact.scss';
import GlitchText from '../components/ui/GlitchText';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container" style={{ pointerEvents: 'auto' }}>
        <h1><GlitchText text="SUMMON ME" /></h1>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label><GlitchText text="IDENTITY" /></label>
            <input type="text" placeholder="WHO ARE YOU?" />
          </div>
          <div className="form-group">
            <label><GlitchText text="SIGNAL" /></label>
            <input type="email" placeholder="WHERE TO REPLY?" />
          </div>
          <div className="form-group">
            <label><GlitchText text="OFFERING" /></label>
            <textarea placeholder="DESCRIBE YOUR VISION..." rows={4} />
          </div>
          <button type="submit"><GlitchText text="INITIATE PACT" /></button>
        </form>

        <div className="socials">
          <a href="#"><GlitchText text="INSTAGRAM" /></a>
          <a href="#"><GlitchText text="BEHANCE" /></a>
          <a href="#"><GlitchText text="LINKEDIN" /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
