import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Activity,
  Bullseye,
  EyeFill,
  GearFill,
  HeartPulseFill,
  LightningFill,
  PeopleFill,
  PersonCheck,
  ShieldCheck,
  TrophyFill
} from 'react-bootstrap-icons';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import CtaBand from '../components/common/CtaBand';
import PageHero from './PageHero';

const offers = [
  ['Personalized Training Plans', 'Custom workout programs tailored to your specific goals, including fat loss, muscle gain, contest prep, and complete body transformations.'],
  ['Nutrition Training', 'Guidance that helps you fuel your body properly, stay consistent, and get maximum results from every training phase.'],
  ['Group Classes & Bootcamps', 'High-intensity group sessions that support fat loss, strength building, stamina, and overall fitness.'],
  ['Recovery & Mobility', 'Mobility-focused guidance and recovery support to help you move better, train harder, and perform at your best.']
];

const specializations = [
  ['Fat Loss', 'Science-backed nutrition and training strategies designed to reduce excess weight while maintaining lean muscle.'],
  ['Muscle Gain', 'Progressive strength training and coaching that help you build quality muscle, not just scale weight.'],
  ['Weight Loss', 'Sustainable plans that combine cardio, strength training, and nutrition around your routine and lifestyle.'],
  ['Weight Gain', 'Healthy weight-gain programs focused on lean muscle mass, better strength, and stronger body composition.'],
  ['Natural Contest Prep', 'Conditioning, peak-week strategy, and posing support for bodybuilding without performance-enhancing substances.'],
  ["Men's Physique Training", 'Aesthetic-focused training for a sculpted, athletic, and proportionate stage-ready look.']
];

const AboutPage = () => (
  <>
    <Helmet>
      <title>About FlexFit - Transformation Gym & Coaching | Chennai Branches</title>
      <meta name="description" content="Learn about FlexFit, our personalized science-backed approach, founder journey, transformation coaching, and Chennai gym branches." />
      <link rel="canonical" href="https://flexfitclub.in/about" />
    </Helmet>
    <PageHero
      label="About Us"
      title="About"
      highlight="FlexFit"
      subtitle="We help individuals achieve their dream physique with expert coaching for fat loss, muscle gain, weight management, and natural bodybuilding."
    />
    <section className="section section-card">
      <div className="container">
        <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-5">
            <div className="about-image-wrap">
              <img src="/assets/Gallery/FlexFit_Athlete_Holding_Weight_Plates.png" alt="FlexFit gym training floor with members and equipment" />
              <span className="badge-float">Dream Physique Coaching</span>
            </div>
          </div>
          <div className="col-lg-7">
            <SectionLabel text="About FlexFit" />
            <SectionHeading line1="Built Around" line2="Your Transformation" highlightLine={2} />
            <blockquote className="quote-block">
              At FlexFit, we help individuals achieve their dream physique.
            </blockquote>
            <p className="text-muted-ff">
              Whether you are looking to lose fat, gain muscle, improve strength, or train for bodybuilding, we have the expertise to guide you with structure, accountability, and practical coaching.
            </p>
            <p className="text-muted-ff mb-0">
              Our programs are personal, science-backed, and built around measurable progress, so every member has a clear path from where they are today to the physique and confidence they want.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="mission-card">
              <div className="icon-badge"><Bullseye /></div>
              <h3>Our Approach and Vision</h3>
              <p className="text-muted-ff">Strength, endurance, balance, or physique transformation - our experts design programs around your goals.</p>
              <a className="btn-ff btn-ff-outline mt-2" href="#approach">Learn More</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mission-card">
              <div className="icon-badge"><Activity /></div>
              <h3>Gym Activities</h3>
              <p className="text-muted-ff">From group classes to solo training, FlexFit offers strength training, cardio workouts, bootcamps, and mobility sessions.</p>
              <Link className="btn-ff btn-ff-outline mt-2" to="/programs">View Activities</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mission-card">
              <div className="icon-badge"><EyeFill /></div>
              <h3>See a Tour</h3>
              <p className="text-muted-ff">Experience FlexFit from home and get a feel for the space that will help you reach your fitness goals.</p>
              <Link className="btn-ff btn-ff-outline mt-2" to="/gallery">Take the Tour</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section" id="approach">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <SectionLabel text="Approach" />
            <SectionHeading line1="Progress Over" line2="Perfection" highlightLine={2} />
            <p className="text-muted-ff">
              We believe in progress over perfection and help you achieve measurable results while empowering you to sustain your progress for the long term.
            </p>
            <p className="text-muted-ff mb-0">
              With expert coaching on training, nutrition, and recovery, every part of your fitness journey is covered.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              {offers.map(([title, text], index) => {
                const OfferIcon = [GearFill, HeartPulseFill, PeopleFill, ShieldCheck][index];
                return (
                  <div className="col-md-6" key={title}>
                    <div className="feature-card">
                      <div className="icon-badge"><OfferIcon /></div>
                      <h3>{title}</h3>
                      <p className="text-muted-ff mb-0">{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-card">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <SectionLabel text="Founder Journey" />
            <SectionHeading line1="A Journey Of" line2="Transformation" highlightLine={2} />
            <div className="impact-strip mt-4">
              <div>
                <strong>48kg</strong>
                <span>Starting point</span>
              </div>
              <div>
                <strong>2024</strong>
                <span>First competition</span>
              </div>
              <div>
                <strong>6th</strong>
                <span>MR South India</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Transformation focus</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="mission-card">
              <div className="icon-badge"><PersonCheck /></div>
              <h3>From Struggle To Coaching Others</h3>
              <p className="text-muted-ff">
                In 2022, I began a fitness journey with my friend Senthil Kumar. I joined a gym motivated but without the knowledge to make meaningful progress. For three months I worked out every day, yet the results did not show. At just 48 kg, teasing and bullying from college friends pushed me to make a serious change.
              </p>
              <p className="text-muted-ff">
                I switched to a new gym, learned from my coach and gym peers, and studied nutrition guides, training programs, and supplement advice. With structured workouts and a focused diet, my progress finally started showing, and that respect from others fueled my discipline even more.
              </p>
              <p className="text-muted-ff">
                By 2024, with unwavering support from my girlfriend, I prepared for my first bodybuilding competition. I transformed from 76 kg to a competition-ready 60 kg and competed in the MR South India Monster Classic on September 22, 2024, placing 6th.
              </p>
              <p className="text-muted-ff mb-0">
                That transformation inspired FlexFit. My mission as a trainer is to guide clients toward complete transformations, whether the goal is weight loss, muscle gain, better health, or competitive physique development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="text-center mb-5">
          <SectionLabel text="My Vision" />
          <SectionHeading line1="What We" line2="Specialize In" highlightLine={2} centered />
          <p className="text-muted-ff mx-auto" style={{ maxWidth: 840 }}>
            At FlexFit, we believe everyone has the potential to transform their body and their life. Whether you want to lose fat, gain muscle, improve strength, or compete at the highest level in bodybuilding, we have the tools and expertise to make it happen.
          </p>
        </div>
        <div className="row g-4">
          {specializations.map(([title, text], index) => {
            const SpecialIcon = [LightningFill, TrophyFill, HeartPulseFill, GearFill, ShieldCheck, Bullseye][index];
            return (
              <div className="col-md-6 col-lg-4" key={title}>
                <div className="feature-card">
                  <div className="icon-badge"><SpecialIcon /></div>
                  <h3>{title}</h3>
                  <p className="text-muted-ff mb-0">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <CtaBand
      title="Empower your fitness journey with FlexFit."
      text="Start the transformation you have always dreamed of with coaching for training, nutrition, recovery, and real progress."
    />
  </>
);

export default AboutPage;
