import { Whatsapp } from 'react-bootstrap-icons';

const WhatsAppFloat = () => (
  <a
    className="whatsapp-float"
    href="https://api.whatsapp.com/send?phone=919940846719&text=Hi%20FlexFit!%20I%20want%20to%20know%20more%20about%20membership."
    target="_blank"
    rel="noreferrer"
    aria-label="Chat with FlexFit Club on WhatsApp"
  >
    <Whatsapp />
  </a>
);

export default WhatsAppFloat;
