import { Instagram, Whatsapp } from 'react-bootstrap-icons';

interface TrainerCardProps {
  photo: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  certification: string;
  instagramUrl: string;
  whatsappNumber: string;
}

const TrainerCard = ({ photo, name, role, specialization, experience, certification, instagramUrl, whatsappNumber }: TrainerCardProps) => (
  <article className="trainer-card" data-aos="fade-up">
    <img src={photo} alt={name} />
    <h3>{name}</h3>
    <p className="text-yellow fw-bold">{role}</p>
    <p className="text-muted-ff mb-2">{specialization}</p>
    <p className="mb-1">
      <strong>Experience:</strong> {experience}
    </p>
    <p className="text-muted-ff">
      <strong>Certification:</strong> {certification}
    </p>
    <div className="d-flex gap-2">
      <a className="btn-ff btn-ff-outline px-3" href={instagramUrl} target="_blank" rel="noreferrer" aria-label={`${name} Instagram`}>
        <Instagram />
      </a>
      <a className="btn-ff btn-ff-primary px-3" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label={`${name} WhatsApp`}>
        <Whatsapp />
      </a>
    </div>
  </article>
);

export default TrainerCard;
