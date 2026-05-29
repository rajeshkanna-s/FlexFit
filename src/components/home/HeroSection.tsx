import { Link } from 'react-router-dom';
import { LightningFill, PlayCircleFill } from 'react-bootstrap-icons';
import SectionLabel from '../common/SectionLabel';

const HeroSection = () => (
  <section className="hero-section d-flex align-items-center" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-8" data-aos="fade-up">
          <img className="hero-logo-mark mb-4" src="/assets/images/logo.png" alt="FlexFit Club" />
          <SectionLabel text="Chennai's Premier Fitness Destination" />
          <h1>
            GET INTO
            <br />
            <span className="text-yellow">GOOD ADDICTION</span>
            <br />
            ACHIEVE YOUR DREAM PHYSIQUE
          </h1>
          <p className="lead text-muted-ff mt-4 mb-4">
            Transform your body. Strengthen your mind. FlexFit Club - Chrompet, Chennai. Every rep counts. Every goal is real.
          </p>
          <div className="d-flex flex-wrap gap-3 mb-5">
            <Link className="btn-ff btn-ff-primary" to="/join">
              <LightningFill /> Start Your Journey
            </Link>
            <Link className="btn-ff btn-ff-outline" to="/programs">
              <PlayCircleFill /> Explore Programs
            </Link>
          </div>
          <div className="row g-3">
            {['500+ Members', '8+ Trainers', '60+ Equipment', '3+ Years'].map((stat) => (
              <div className="col-6 col-md-3" key={stat}>
                <div className="hero-stat fw-bold">{stat}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-left">
          <aside className="hero-offer-card">
            <span className="mini-label text-yellow">Limited seats</span>
            <h2>90-Day Challenge</h2>
            <p>Personal training, diet chart, workout plan, and full guidance.</p>
            <div className="hero-offer-price">Rs. 5000/-</div>
            <Link className="btn-ff btn-ff-primary w-100" to="/join?plan=challenge">
              Reserve Seat
            </Link>
          </aside>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
