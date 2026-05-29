import { Link } from 'react-router-dom';
import { ArrowRight, ClockFill, GeoAltFill, LightningChargeFill } from 'react-bootstrap-icons';
import SectionLabel from '../components/common/SectionLabel';

interface PageHeroProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

const defaultSubtitles: Record<string, string> = {
  'About Us': 'A community-first gym in Chrompet built for beginners, athletes, and every goal in between.',
  Programs: 'Pick the training path that matches your body, schedule, and transformation goal.',
  Membership: 'Simple regular memberships plus a focused 90-day transformation plan for faster results.',
  Gallery: 'Explore the training floor, cardio zone, free weights, and daily FlexFit energy.',
  Contact: 'Message, call, or visit us in Chrompet. We will help you choose the right next step.',
  'Join Now': 'Select your plan, share your goal, and start with a free trial or challenge enquiry.'
};

const PageHero = ({ label, title, highlight, subtitle }: PageHeroProps) => (
  <section className="page-hero" style={{ backgroundImage: "url('/assets/Gallery/FlexFit_Logo_Black_Background.png')" }}>
    <div className="container">
      <div className="row g-4 align-items-end">
        <div className="col-lg-8">
          <SectionLabel text={label} />
          <h1>
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-yellow">{highlight}</span>
              </>
            )}
          </h1>
          <p className="page-hero-copy">{subtitle || defaultSubtitles[label]}</p>
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <ArrowRight />
            <span>{label}</span>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="hero-info-card">
            <div>
              <ClockFill />
              <span>Open from 5 AM</span>
            </div>
            <div>
              <LightningChargeFill />
              <span>90-day challenge live</span>
            </div>
            <div>
              <GeoAltFill />
              <span>Chrompet, Chennai</span>
            </div>
            <Link className="btn-ff btn-ff-primary w-100 mt-3" to="/join">
              Book Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PageHero;
