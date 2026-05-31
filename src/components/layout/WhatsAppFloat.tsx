import { Link } from 'react-router-dom';
import { Whatsapp } from 'react-bootstrap-icons';

const WhatsAppFloat = () => (
  <a
    className="whatsapp-float"
    href="https://wa.me/919940846719?text=Hi%20FlexFit!%20I%20want%20to%20enquire%20about%20your%20fitness%20programs%20and%20membership."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with FlexFit Club on WhatsApp"
  >
    <Whatsapp />
  </a>
);

export default WhatsAppFloat;
