import './Hero.css';
import heroImage from '../../assets/images/hero-illustration.svg';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner container">
        <div className="hero-copy">
          <span className="eyebrow">Modern launch experience</span>
          <h1>Build a responsive interface that feels premium and effortless.</h1>
          <p>Launch with a polished landing page, clear messaging, and a design system built for modern teams.</p>
          <div className="hero-actions">
            <a href="#features" className="btn btn-primary">Explore features</a>
            <a href="#contact" className="btn btn-secondary">Get in touch</a>
          </div>
        </div>

        <div className="hero-media" aria-hidden="true">
          <img src={heroImage} alt="Illustration of a modern responsive interface" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
