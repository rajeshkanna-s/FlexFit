import { Link } from 'react-router-dom';
import { plans } from '../../data/plans.data';
import PriceCard from '../common/PriceCard';
import SectionHeading from '../common/SectionHeading';
import SectionLabel from '../common/SectionLabel';

const MembershipTeaser = () => (
  <section className="section">
    <div className="container">
      <div className="text-center mb-5">
        <SectionLabel text="Membership" />
        <SectionHeading line1="Transparent Plans" line2="Real Results" highlightLine={2} centered />
      </div>
      <div className="row g-4">
        {plans.map((plan) => (
          <div className="col-md-4" key={plan.id}>
            <PriceCard
              name={plan.name}
              price={plan.monthlyPrice}
              annualPrice={plan.annualPrice}
              isPopular={plan.isPopular}
              features={plan.features.slice(0, 6)}
              planKey={plan.key}
              billingMode="monthly"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link className="btn-ff btn-ff-outline" to="/membership">Compare Plans</Link>
      </div>
    </div>
  </section>
);

export default MembershipTeaser;
