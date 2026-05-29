import { Link } from 'react-router-dom';
import { programs } from '../../data/programs.data';
import ProgramCard from '../common/ProgramCard';
import SectionHeading from '../common/SectionHeading';
import SectionLabel from '../common/SectionLabel';

const ServicesPreview = () => (
  <section className="section section-card">
    <div className="container">
      <div className="text-center mb-5">
        <SectionLabel text="Programs" />
        <SectionHeading line1="Programs Built For" line2="Your Goals" highlightLine={2} centered />
      </div>
      <div className="row g-4">
        {programs.slice(0, 3).map((program) => (
          <div className="col-md-4" key={program.id}>
            <ProgramCard
              image={program.image}
              icon={program.icon}
              badge={program.badge}
              title={program.title}
              description={program.shortDesc}
              link={`/join?program=${program.slug}`}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link className="btn-ff btn-ff-outline" to="/programs">View All 6 Programs</Link>
      </div>
    </div>
  </section>
);

export default ServicesPreview;
