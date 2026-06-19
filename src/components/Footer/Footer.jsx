import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand-logo">
            <span className="brand-mark">RF</span>
            <span className="brand-title">Responso</span>
          </a>
          <p>Delivering responsive interfaces with clarity, polish, and modern design.</p>
        </div>

        <div className="footer-links">
          <h3>Quick links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Social</h3>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Dribbble</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Responso. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
