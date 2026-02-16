import { Link } from 'wouter';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <Link href="/">GÖZDE GÜNGÖR</Link>
      </div>
      <div className="links">
        <Link href="/work" className="nav-link" data-text="WORK">WORK</Link>
        <Link href="/about" className="nav-link" data-text="ABOUT">ABOUT</Link>
        <Link href="/contact" className="nav-link" data-text="CONTACT">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navigation;
