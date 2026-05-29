interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  initials: string;
  stars?: number;
}

const TestimonialCard = ({ quote, name, role, initials, stars = 5 }: TestimonialCardProps) => (
  <article className="testimonial-card" data-aos="fade-up">
    <div className="text-yellow mb-3">{'★'.repeat(stars)}</div>
    <p className="text-muted-ff">"{quote}"</p>
    <div className="d-flex align-items-center gap-3 mt-4">
      <span className="avatar-initials">{initials}</span>
      <div>
        <strong>{name}</strong>
        <div className="text-muted-ff small">{role}</div>
      </div>
    </div>
  </article>
);

export default TestimonialCard;
