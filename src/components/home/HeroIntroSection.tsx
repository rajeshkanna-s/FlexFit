import { Link } from 'react-router-dom';
import { LightningFill, PlayCircleFill } from 'react-bootstrap-icons';

const heroStats = ['500+ Members', '8+ Trainers', '60+ Equipment', '3+ Years'];

const HeroIntroSection = () => (
  <section className="hero-intro-section">
    <div className="container">
      <div className="hero-intro-copy" data-aos="fade-up">
        <h2>ACHIEVE YOUR DREAM PHYSIQUE</h2>
        <p className="lead text-muted-ff">
          Transform your body. Strengthen your mind. FlexFit Club - Chrompet and Anna Nagar, Chitlapakkam. Every rep counts. Every goal is real.
        </p>
        <div className="hero-intro-actions">
          <Link className="btn-ff btn-ff-primary" to="/join">
            <LightningFill /> Start Your Journey
          </Link>
          <Link className="btn-ff btn-ff-outline" to="/programs">
            <PlayCircleFill /> Explore Programs
          </Link>
        </div>
      </div>
      <div className="row g-3 hero-intro-stats" data-aos="fade-up" data-aos-delay="100">
        {heroStats.map((stat) => (
          <div className="col-6 col-md-3" key={stat}>
            <div className="hero-stat fw-bold">{stat}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroIntroSection;
