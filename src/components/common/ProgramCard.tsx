import { Link } from 'react-router-dom';
import { CheckCircleFill } from 'react-bootstrap-icons';
import Icon from './Icon';

interface ProgramCardProps {
  image: string;
  icon: string;
  badge: string;
  title: string;
  description: string;
  features?: string[];
  link: string;
}

const ProgramCard = ({ image, icon, badge, title, description, features = [], link }: ProgramCardProps) => (
  <article className="program-card" data-aos="fade-up">
    <img src={image} alt={title} />
    <span className="badge mb-3">{badge}</span>
    <div className="icon-badge">
      <Icon name={icon} />
    </div>
    <h3>{title}</h3>
    <p className="text-muted-ff">{description}</p>
    {features.length > 0 && (
      <ul className="list-unstyled small text-muted-ff program-feature-list">
        {features.map((feature) => (
          <li className="mb-2" key={feature}>
            <span className="check-included me-2"><CheckCircleFill /></span>
            {feature}
          </li>
        ))}
      </ul>
    )}
    <Link className="btn-ff btn-ff-primary mt-3" to={link}>
      ENROLL NOW
    </Link>
  </article>
);

export default ProgramCard;
