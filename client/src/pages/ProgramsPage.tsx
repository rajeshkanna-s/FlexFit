import { Helmet } from 'react-helmet-async';
import ProgramCard from '../components/common/ProgramCard';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import CtaBand from '../components/common/CtaBand';
import { programs } from '../data/programs.data';
import PageHero from './PageHero';

const ProgramsPage = () => (
  <>
    <Helmet>
      <title>Fitness Programs - Strength, Cardio, Personal Training | FlexFit Chrompet</title>
        <meta name="description" content="Explore FlexFit Club's fitness programs: Strength Training, Cardio Workouts, Personal Training, Weight Loss, Muscle Building, and Bodybuilding Contest Prep." />
      <link rel="canonical" href="https://flexfitclub.in/programs" />
    </Helmet>
    <PageHero label="Programs" title="Training For" highlight="Every Goal" />
      <section className="section section-card">
        <div className="container">
        <div className="program-path mb-5">
          <div>
            <span>Step 01</span>
            <strong>Choose goal</strong>
          </div>
          <div>
            <span>Step 02</span>
            <strong>Meet trainer</strong>
          </div>
          <div>
            <span>Step 03</span>
            <strong>Follow plan</strong>
          </div>
          <div>
            <span>Step 04</span>
            <strong>Track results</strong>
          </div>
        </div>
        <div className="text-center mb-5">
          <SectionLabel text="All Programs" />
          <SectionHeading line1="Choose Your" line2="Transformation Path" highlightLine={2} centered />
        </div>
        <div className="row g-4">
          {programs.map((program) => (
            <div className="col-lg-6" key={program.id}>
              <ProgramCard
                image={program.image}
                icon={program.icon}
                badge={program.badge}
                title={program.title}
                description={`${program.fullDesc} Duration: ${program.duration}. Sessions: ${program.sessions}.`}
                features={program.features}
                link={`/join?program=${program.slug}`}
              />
            </div>
          ))}
        </div>
        </div>
      </section>
    <CtaBand title="Not sure which program fits?" text="Share your goal and timing. FlexFit will guide you to the right plan." />
  </>
);

export default ProgramsPage;
