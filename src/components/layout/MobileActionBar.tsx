import { Link } from 'react-router-dom';
import { Calendar2CheckFill, TelephoneFill, Whatsapp } from 'react-bootstrap-icons';

const MobileActionBar = () => (
  <div className="mobile-action-bar" aria-label="Quick contact actions">
    <a href="tel:+919940846719">
      <TelephoneFill />
      Call
    </a>
    <Link to="/join">
      <Calendar2CheckFill />
      Join
    </Link>
    <Link to="/contact">
      <Whatsapp />
      WhatsApp
    </Link>
  </div>
);

export default MobileActionBar;
