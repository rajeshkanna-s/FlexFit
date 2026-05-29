import { Helmet } from 'react-helmet-async';
import { Bullseye, EyeFill } from 'react-bootstrap-icons';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import CtaBand from '../components/common/CtaBand';
import PageHero from './PageHero';

const timeline = [
  ['2022', 'FlexFit Founded', 'Started with 200 sq ft and a dream. Just 2 trainers, 20 members, and the belief that Chrompet deserved a world-class gym.'],
  ['2023', 'First 100 Members', 'Hit our first milestone with 100 active members. Expanded our equipment lineup and introduced personal training packages.'],
  ['2024', 'Expansion & Upgrades', 'Upgraded to 60+ equipment units. Added cardio, yoga, and a dedicated free-weights section.'],
  ['2025', '500+ Members Strong', 'Today FlexFit Club is home to 500+ members from across Chennai. Multiple programs, certified trainers, and real transformations.']
];

const AboutPage = () => (
  <>
    <Helmet>
      <title>About FlexFit Club - Our Story, Mission & Trainers | Chrompet Chennai</title>
      <meta name="description" content="Learn about FlexFit Club's story, mission, certified trainers, and what makes us Chennai's most trusted gym in Chrompet." />
      <link rel="canonical" href="https://flexfitclub.in/about" />
    </Helmet>
    <PageHero label="About Us" title="Our Story &" highlight="Our Mission" />
    <section className="section section-card">
      <div className="container">
        <div className="impact-strip mb-5">
          {[
            ['500+', 'Active members'],
            ['60+', 'Equipment units'],
            ['6', 'Training programs'],
            ['5 AM', 'Early opening']
          ].map(([value, labelText]) => (
            <div key={labelText}>
              <strong>{value}</strong>
              <span>{labelText}</span>
            </div>
          ))}
        </div>
        <div className="text-center mb-5">
          <SectionLabel text="Purpose" />
          <SectionHeading line1="Mission &" line2="Vision" highlightLine={2} centered />
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="mission-card">
              <div className="icon-badge"><Bullseye /></div>
              <h3>Our Mission</h3>
              <p className="text-muted-ff mb-0">To provide every individual in Chennai a premium, affordable, and motivating fitness environment where results are guaranteed - not promised. We exist to transform lives, one rep at a time.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mission-card">
              <div className="icon-badge"><EyeFill /></div>
              <h3>Our Vision</h3>
              <p className="text-muted-ff mb-0">To become South Chennai's #1 fitness destination and build a community of 10,000+ healthy, confident, and strong individuals who inspire each other every day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="text-center mb-5">
          <SectionLabel text="Timeline" />
          <SectionHeading line1="How It All" line2="Started" highlightLine={2} centered />
        </div>
        <div className="timeline">
          {timeline.map(([year, title, text]) => (
            <div className="timeline-item" key={year} data-aos="fade-up">
              <div className="feature-card">
                <span className="text-yellow fw-bold">{year}</span>
                <h3>{title}</h3>
                <p className="text-muted-ff mb-0">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CtaBand title="Train where the community knows your name." text="Visit FlexFit Club in Chrompet or book your first session on WhatsApp." />
  </>
);

export default AboutPage;
