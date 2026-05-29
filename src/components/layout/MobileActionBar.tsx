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
    <a href="https://wa.me/919940846719?text=Hi%20FlexFit!%20I%20want%20to%20know%20more." target="_blank" rel="noreferrer">
      <Whatsapp />
      WhatsApp
    </a>
  </div>
);

export default MobileActionBar;
