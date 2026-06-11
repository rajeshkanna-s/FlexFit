import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { GearFill, PeopleFill, TrophyFill, Calculator, ChevronRight } from 'react-bootstrap-icons';
import GalleryPreview from '../components/home/GalleryPreview';
import HeroIntroSection from '../components/home/HeroIntroSection';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import WhyFlexFit from '../components/home/WhyFlexFit';
import DailyWod from '../components/home/DailyWod';
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

            {/* Calculators Promo Card */}
            <div className="mt-4 p-4 rounded border-yellow animate-fade-in d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3" style={{ background: 'rgba(255,214,0,0.03)', border: '1px solid var(--color-border-yellow)' }}>
              <div>
                <h4 className="text-yellow h6 mb-1 text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>
                  <Calculator className="me-2" /> Free Fitness Calculators
                </h4>
                <p className="text-white small mb-0">
                  Take the guesswork out of your nutrition and fitness. Instantly estimate your BMI, daily calorie targets (BMR & TDEE), and custom macronutrient splits.
                </p>
              </div>
              <Link className="btn-ff btn-ff-outline py-2 px-3 text-nowrap align-self-start align-self-sm-center d-flex align-items-center gap-2" to="/calculators" style={{ fontSize: '0.85rem' }}>
                <span>Try Calculators</span>
                <ChevronRight className="small" />
              </Link>
            </div>

            {/* Diet Chart Promo Card */}
            <div className="mt-3 p-4 rounded border-yellow animate-fade-in d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3" style={{ background: 'rgba(16,185,129,0.03)', border: '1px solid rgba(16,185,129,0.3)' }}>
              <div>
                <h4 className="h6 mb-1 text-uppercase fw-bold" style={{ letterSpacing: '1px', color: '#10b981' }}>
                  🍽️ Personalised Diet Chart
                </h4>
                <p className="text-white small mb-0">
                  Get a free South Indian weekly meal plan tailored to your goal — Weight Loss, Muscle Gain, Body Toning, and more. Built with local foods you already love.
                </p>
              </div>
              <Link className="btn-ff btn-ff-outline py-2 px-3 text-nowrap align-self-start align-self-sm-center d-flex align-items-center gap-2" to="/diet-chart" style={{ fontSize: '0.85rem' }}>
                <span>Get My Diet Plan</span>
                <ChevronRight className="small" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <WhyFlexFit />
    <DailyWod />
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
          <a className="btn-ff border border-dark text-dark" href="https://wa.me/919940846719?text=Hi%20FlexFit!%20I%20want%20to%20enquire%20about%20your%20fitness%20programs%20and%20membership." target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
