import { useEffect, useState } from 'react';
import { navLinks } from '../../utils/data';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <header className={`site-header ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar container">
        <a href="#home" className="brand-logo" aria-label="Responsive Frontend Interface Home">
          <span className="brand-mark">RF</span>
          <span className="brand-title">Responso</span>
        </a>

        <button
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isOpen ? 'active' : ''}`} id="primary-navigation" aria-label="Primary navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
