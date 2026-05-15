import { Link } from 'react-router-dom';
import { CheckCircleFill, XCircleFill } from 'react-bootstrap-icons';

interface PriceCardProps {
  name: string;
  price: number;
  annualPrice: number;
  isPopular?: boolean;
  features: { text: string; included: boolean }[];
  planKey: string;
  billingMode: 'monthly' | 'annual';
}

const currency = (value: number) => new Intl.NumberFormat('en-IN').format(value);

const PriceCard = ({ name, price, annualPrice, isPopular, features, planKey, billingMode }: PriceCardProps) => (
  <article className={`price-card ${isPopular ? 'featured' : ''}`} data-aos="fade-up">
    {isPopular && <span className="plan-badge badge position-absolute top-0 start-50 translate-middle px-3 py-2">MOST POPULAR</span>}
    <h3>{name}</h3>
    <div className="my-4">
      <span className="price">Rs. {currency(billingMode === 'monthly' ? price : annualPrice)}</span>
      <span className="text-muted-ff"> / {billingMode === 'monthly' ? 'month' : 'year'}</span>
    </div>
    {billingMode === 'annual' && <p className="text-yellow fw-bold small">Annual billing includes 20% savings.</p>}
    <ul className="list-unstyled">
      {features.map((feature) => (
        <li className={`mb-2 ${feature.included ? 'text-white' : 'check-muted'}`} key={feature.text}>
          <span className={feature.included ? 'check-included me-2' : 'me-2'}>
            {feature.included ? <CheckCircleFill /> : <XCircleFill />}
          </span>
          {feature.text}
        </li>
      ))}
    </ul>
    <Link className={`btn-ff w-100 mt-3 ${isPopular ? 'btn-ff-primary' : 'btn-ff-outline'}`} to={`/join?plan=${planKey}`}>
      Get Started
    </Link>
  </article>
);

export default PriceCard;
