import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { GearFill, PeopleFill, TrophyFill } from 'react-bootstrap-icons';
import GalleryPreview from '../components/home/GalleryPreview';
import HeroIntroSection from '../components/home/HeroIntroSection';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import StatsBar from '../components/home/StatsBar';
import TestimonialsSection from '../components/home/TestimonialsSection';
import WhyFlexFit from '../components/home/WhyFlexFit';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import TransformationChallenge from '../components/common/TransformationChallenge';

const HomePage = () => (
  <>
    <Helmet>
      <title>FlexFit Club - Gym in Chrompet & Chitlapakkam Chennai | Get Into Good Addiction</title>
      <meta name="description" content="Join FlexFit Club in Chrompet and Chitlapakkam. Strength training, cardio, personal coaching, and branch-wise transformation offers." />
      <meta name="keywords" content="gym chrompet, gym chennai, flexfit club, personal training chennai, fitness center chrompet" />
      <meta property="og:title" content="FlexFit Club - Gym in Chrompet & Chitlapakkam Chennai" />
      <meta property="og:description" content="Transform your body at FlexFit Club in Chrompet and Chitlapakkam." />
      <meta property="og:image" content="/assets/images/logo.png" />
      <meta property="og:url" content="https://flexfitclub.in" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://flexfitclub.in/" />
    </Helmet>
    <HeroSection />
    <HeroIntroSection />
    <StatsBar />
    <section className="section section-card">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div className="about-image-wrap">
              <img src="/assets/Gallery/FlexFit_Athlete_Holding_Weight_Plates.png" alt="FlexFit Club members training inside the gym" />

            </div>
          </div>
          <div className="col-lg-7">
            <SectionLabel text="About FlexFit" />
            <SectionHeading line1="Dream Physique" line2="Expertly Guided" highlightLine={2} />
            <blockquote className="quote-block">
              At FlexFit, we help individuals achieve their dream physique.
            </blockquote>
            <p className="text-muted-ff">
              Whether you are looking to lose fat, gain muscle, improve strength, or train for bodybuilding, our coaches build personalized and science-backed plans around your body, goal, and routine.
            </p>
            <div className="row g-3 mt-3">
              {[
                [GearFill, 'Personalized Plans', 'Workout programs for fat loss, muscle gain, weight management, and contest prep.'],
                [PeopleFill, 'Nutrition Coaching', 'Practical food guidance that helps you fuel performance and sustain progress.'],
                [TrophyFill, 'Transformation Focus', 'Training, recovery, and accountability designed for measurable long-term results.']
              ].map(([Icon, title, text]) => (
                <div className="col-md-4" key={String(title)}>
                  <div className="icon-badge"><Icon /></div>
                  <h3 className="h5">{String(title)}</h3>
                  <p className="text-muted-ff small">{String(text)}</p>
                </div>
              ))}
            </div>
            <Link className="btn-ff btn-ff-primary mt-3" to="/about">Learn About FlexFit</Link>
          </div>
        </div>
      </div>
    </section>
    <WhyFlexFit />
    <TransformationChallenge compact />
    <ServicesPreview />
    <TestimonialsSection />
    <GalleryPreview />
    <section className="cta-banner">
      <div className="container d-lg-flex justify-content-between align-items-center gap-4">
        <div>
          <h2>Ready To Transform?</h2>
          <p className="mb-lg-0">Pick a plan and start your FlexFit journey today.</p>
        </div>
        <div className="d-flex flex-wrap gap-3 mt-3 mt-lg-0">
          <Link className="btn-ff btn-ff-dark" to="/join">Join Now</Link>
          <Link className="btn-ff border border-dark text-dark" to="/contact">WhatsApp Us</Link>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
