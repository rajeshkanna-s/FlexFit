import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { GearFill, PeopleFill, TrophyFill } from 'react-bootstrap-icons';
import GalleryPreview from '../components/home/GalleryPreview';
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
      <title>FlexFit Club - Best Gym in Chrompet, Chennai | Get Into Good Addiction</title>
      <meta name="description" content="Join FlexFit Club, Chennai's premier gym in Chrompet. Strength training, cardio, personal coaching, and 6+ programs. Starting at Rs. 999/month." />
      <meta name="keywords" content="gym chrompet, gym chennai, flexfit club, personal training chennai, fitness center chrompet" />
      <meta property="og:title" content="FlexFit Club - Best Gym in Chrompet, Chennai" />
      <meta property="og:description" content="Transform your body at FlexFit Club in Chrompet, Chennai." />
      <meta property="og:image" content="/assets/images/logo.png" />
      <meta property="og:url" content="https://flexfitclub.in" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://flexfitclub.in/" />
    </Helmet>
    <HeroSection />
    <StatsBar />
    <section className="section section-card">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div className="about-image-wrap">
              <img src="/assets/images/about-gym.jpg" alt="FlexFit Club gym interior" />
              <span className="badge-float">3+ Years of Excellence</span>
            </div>
          </div>
          <div className="col-lg-7">
            <SectionLabel text="Our Story" />
            <SectionHeading line1="Built For Champions" line2="Open To Everyone" highlightLine={1} />
            <blockquote className="quote-block">
              At FlexFit Club, we believe fitness isn't a privilege - it's a right. We built this space so anyone who walks through our doors walks out stronger.
            </blockquote>
            <p className="text-muted-ff">
              Located in the heart of Chrompet, Chennai, FlexFit Club was founded with one mission: to make world-class fitness accessible to every person in our community. Whether you're a complete beginner or an experienced athlete, our certified trainers and premium equipment are here to push you beyond your limits safely and effectively.
            </p>
            <div className="row g-3 mt-3">
              {[
                [TrophyFill, 'Certified Expert Trainers', 'Personalized protocols designed for your body type and goals.'],
                [GearFill, 'Premium Equipment', '60+ modern cardio, strength, and functional training units.'],
                [PeopleFill, 'Community Culture', 'A family that celebrates every milestone and transformation.']
              ].map(([Icon, title, text]) => (
                <div className="col-md-4" key={String(title)}>
                  <div className="icon-badge"><Icon /></div>
                  <h3 className="h5">{String(title)}</h3>
                  <p className="text-muted-ff small">{String(text)}</p>
                </div>
              ))}
            </div>
            <Link className="btn-ff btn-ff-primary mt-3" to="/join">Join Our Family</Link>
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
          <p className="mb-lg-0">Book your FREE trial session today. No commitment needed.</p>
        </div>
        <div className="d-flex flex-wrap gap-3 mt-3 mt-lg-0">
          <Link className="btn-ff btn-ff-dark" to="/join">Book Free Trial</Link>
          <a className="btn-ff border border-dark text-dark" href="https://wa.me/919940846719" target="_blank" rel="noreferrer">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
