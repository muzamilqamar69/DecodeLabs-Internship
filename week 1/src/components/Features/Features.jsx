import { features } from '../../utils/data';
import speedIcon from '../../assets/icons/feature-speed.svg';
import designIcon from '../../assets/icons/feature-design.svg';
import responsiveIcon from '../../assets/icons/feature-responsive.svg';
import securityIcon from '../../assets/icons/feature-security.svg';
import automationIcon from '../../assets/icons/feature-automation.svg';
import supportIcon from '../../assets/icons/feature-support.svg';
import './Features.css';

const iconMap = {
  'feature-speed': speedIcon,
  'feature-design': designIcon,
  'feature-responsive': responsiveIcon,
  'feature-security': securityIcon,
  'feature-automation': automationIcon,
  'feature-support': supportIcon
};

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container section-heading-wrap">
        <span className="eyebrow">Core capabilities</span>
        <h2>Everything you need for a standout product experience.</h2>
        <p>From intuitive content structure to responsive behavior and elegant micro-animations, the interface adapts with confidence.</p>
      </div>

      <div className="container features-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <div className="feature-icon">
              <img src={iconMap[feature.icon]} alt="" aria-hidden="true" />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;
