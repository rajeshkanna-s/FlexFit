import { testimonials } from '../../data/testimonials.data';
import SectionHeading from '../common/SectionHeading';
import SectionLabel from '../common/SectionLabel';
import TestimonialCard from '../common/TestimonialCard';

const TestimonialsSection = () => (
  <section className="section">
    <div className="container">
      <div className="text-center mb-5">
        <SectionLabel text="Testimonials" />
        <SectionHeading line1="What Our" line2="Members Say" highlightLine={2} centered />
      </div>
      <div className="row g-4">
        {testimonials.map((testimonial) => (
          <div className="col-md-4" key={testimonial.id}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
