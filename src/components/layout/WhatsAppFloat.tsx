import { Link } from 'react-router-dom';
import { Whatsapp } from 'react-bootstrap-icons';

const WhatsAppFloat = () => (
  <Link
    className="whatsapp-float"
    to="/contact"
    aria-label="Choose branch and chat with FlexFit Club on WhatsApp"
  >
    <Whatsapp />
  </Link>
);

export default WhatsAppFloat;
