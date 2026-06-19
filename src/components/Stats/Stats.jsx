import { useEffect, useState } from 'react';
import { stats } from '../../utils/data';
import './Stats.css';

function Stats() {
  const [values, setValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const targets = stats.map((item) => item.value);
    const duration = 1200;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const current = targets.map((target) => Math.round(target * progress));
      setValues(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="stats-section" aria-labelledby="stats-heading">
      <div className="container stats-wrap">
        <div className="stats-intro">
          <span className="eyebrow">Trusted by growth teams</span>
          <h2 id="stats-heading">Numbers that reflect user confidence and consistent success.</h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-card">
              <p className="stat-value">{values[index]}{stat.suffix}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
