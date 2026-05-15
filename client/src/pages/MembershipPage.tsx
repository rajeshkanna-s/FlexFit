import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PriceCard from '../components/common/PriceCard';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import TransformationChallenge from '../components/common/TransformationChallenge';
import CtaBand from '../components/common/CtaBand';
import { plans } from '../data/plans.data';
import PageHero from './PageHero';

const faqs = [
  ['Can I freeze my membership?', 'Yes, members can freeze their membership for up to 1 month per year due to travel, health issues, or personal reasons. Contact us at least 3 days in advance.'],
  ['Is there a joining fee?', 'No joining fee for any plan. Pay only the monthly or annual membership fee.'],
  ['Do you offer student discounts?', 'Yes! Full-time students get 15% off on Basic and Pro plans. Bring your valid student ID to the front desk.'],
  ['What is the minimum membership duration?', 'Minimum is 1 month for all plans. No long-term lock-in unless you choose annual billing for the discount.'],
  ['Can I upgrade my plan mid-month?', "Yes, you can upgrade anytime. You'll pay the prorated difference for the remaining days of the current month."],
  ['Are there couple or family discounts?', 'Yes! Couples get 10% off. Families of 3+ get 15% off. WhatsApp us for details: wa.me/919940846719'],
  ['Is there parking available?', "Street parking is available on Muthusamy Main Road. We're working on dedicated parking - sorry for the inconvenience."],
  ['Do you offer a free trial?', 'Yes! Every new member gets 1 FREE trial session before committing. Book via our Join page or WhatsApp us.'],
  ['What is the 90 Days Body Transformation Challenge?', 'It is a focused 90-day plan for weight loss, muscle gain, fat loss, or maintaining a fit body. It includes 1-to-1 personal training, a body-specific diet chart, a custom workout plan, and full guidance for Rs. 5000 only. Limited seats are available.']
];

const MembershipPage = () => {
  const [billingMode, setBillingMode] = useState<'monthly' | 'annual'>('monthly');

  return (
    <>
      <Helmet>
        <title>Gym Membership Plans & Pricing | FlexFit Club Chrompet Chennai</title>
        <meta name="description" content="FlexFit Club membership plans from Rs. 999/month plus the new 90 Days Body Transformation Challenge at Rs. 5000 only." />
        <link rel="canonical" href="https://flexfitclub.in/membership" />
      </Helmet>
      <PageHero label="Membership" title="Plans That" highlight="Fit Your Goal" />
      <TransformationChallenge />
      <section className="section section-card">
        <div className="container">
          <div className="text-center mb-5">
            <SectionLabel text="Pricing" />
            <SectionHeading line1="Regular" line2="Membership Plans" highlightLine={2} centered />
            <div className="btn-group mt-4" role="group" aria-label="Billing mode">
              <button className={`btn btn-${billingMode === 'monthly' ? 'warning' : 'outline-light'}`} onClick={() => setBillingMode('monthly')}>Monthly</button>
              <button className={`btn btn-${billingMode === 'annual' ? 'warning' : 'outline-light'}`} onClick={() => setBillingMode('annual')}>Annual - 20% off</button>
            </div>
          </div>
          <div className="row g-4">
            {plans.map((plan) => (
              <div className="col-md-4" key={plan.id}>
                <PriceCard
                  name={plan.name}
                  price={plan.monthlyPrice}
                  annualPrice={plan.annualPrice}
                  isPopular={plan.isPopular}
                  features={plan.features}
                  planKey={plan.key}
                  billingMode={billingMode}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <SectionLabel text="FAQ" />
            <SectionHeading line1="Frequently Asked" line2="Questions" highlightLine={2} centered />
          </div>
          <div className="accordion" id="membershipFaq">
            {faqs.map(([question, answer], index) => (
              <div className="accordion-item" key={question}>
                <h3 className="accordion-header">
                  <button className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq-${index}`}>
                    {question}
                  </button>
                </h3>
                <div id={`faq-${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#membershipFaq">
                  <div className="accordion-body text-muted-ff">{answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Pick your plan, then let us handle the guidance." text="Start with a trial, a regular membership, or the focused 90-day challenge." />
    </>
  );
};

export default MembershipPage;
