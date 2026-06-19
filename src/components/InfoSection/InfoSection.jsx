import './InfoSection.css';
import infoImage from '../../assets/images/info-illustration.svg';
import { infoPoints } from '../../utils/data';

function InfoSection() {
  return (
    <section className="info-section" id="about">
      <div className="container info-grid">
        <div className="info-copy">
          <span className="eyebrow">Design-first process</span>
          <h2>Information architecture crafted for clarity and conversion.</h2>
          <p>Present product value clearly with supporting visuals and easy reading patterns for every screen size.</p>
          <ul className="info-list">
            {infoPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="info-media" aria-hidden="true">
          <img src={infoImage} alt="Illustration of an information dashboard" />
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
