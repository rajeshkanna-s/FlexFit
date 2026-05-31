import { Link } from 'react-router-dom';
import { LightningChargeFill, Whatsapp } from 'react-bootstrap-icons';

interface CtaBandProps {
  title?: string;
  text?: string;
}

const CtaBand = ({
  title = 'Ready to train with FlexFit?',
  text = 'Book a free trial or ask about the 90 Days Body Transformation Challenge.'
}: CtaBandProps) => (
  <section className="conversion-band">
    <div className="container">
      <div className="conversion-inner">
        <div>
          <span className="mini-label">Start today</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="conversion-actions">
          <Link className="btn-ff btn-ff-dark" to="/join">
            <LightningChargeFill /> Join Now
          </Link>
          <a className="btn-ff conversion-whatsapp" href="https://wa.me/919940846719?text=Hi%20FlexFit!%20I%20want%20to%20enquire%20about%20your%20fitness%20programs%20and%20membership." target="_blank" rel="noopener noreferrer">
            <Whatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CtaBand;
