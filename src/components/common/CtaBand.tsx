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
          <Link className="btn-ff conversion-whatsapp" to="/contact">
            <Whatsapp /> WhatsApp
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CtaBand;
