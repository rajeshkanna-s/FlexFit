import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PriceCard from '../components/common/PriceCard';
import SectionHeading from '../components/common/SectionHeading';
import SectionLabel from '../components/common/SectionLabel';
import TransformationChallenge from '../components/common/TransformationChallenge';
import CtaBand from '../components/common/CtaBand';
import { branchLocations } from '../data/locations.data';
import { plans } from '../data/plans.data';
import PageHero from './PageHero';

const challengePriceText = branchLocations.map((location) => `${location.shortName}: ${location.challengeOffer.price}`).join(' | ');

const faqs = [
  ['Can I freeze my membership?', 'Yes, members can freeze their membership for up to 1 month per year due to travel, health issues, or personal reasons. Contact us at least 3 days in advance.'],
  ['Is there a joining fee?', 'No joining fee for any plan. Pay only the monthly or annual membership fee.'],
  ['Do you offer student discounts?', 'Yes! Full-time students get 15% off on Basic and Pro plans. Bring your valid student ID to the front desk.'],
  ['What is the minimum membership duration?', 'Minimum is 1 month for all plans. No long-term lock-in unless you choose annual billing for the discount.'],
  ['Can I upgrade my plan mid-month?', "Yes, you can upgrade anytime. You'll pay the prorated difference for the remaining days of the current month."],
  ['Are there couple or family discounts?', 'Yes! Couples get 10% off. Families of 3+ get 15% off. Send an enquiry from the Contact page and choose your preferred branch.'],
  ['Is there parking available?', "Street parking is available on Muthusamy Main Road. We're working on dedicated parking - sorry for the inconvenience."],
  ['Do you offer a free trial?', 'Yes! Every new member gets 1 FREE trial session before committing. Book via our Join page and choose your preferred branch.'],
  ['What is the 90 Days Body Transformation Challenge?', `It is a focused 90-day plan for weight loss, muscle gain, fat loss, or maintaining a fit body. It includes personal training, a diet chart, a custom workout plan, and full guidance. Branch-wise price: ${challengePriceText}. Limited seats are available.`]
];

const existingMembershipPlans = [
  {
    id: 'flex-starter',
    name: 'Flex Starter',
    duration: '1 Month Plan',
    compareDuration: '1 Month',
    price: 'Rs. 599/-',
    coaching: 'Self-guided gym access with basic support',
    bestFor: ['Trying the gym first', 'Short-term access', 'Budget-friendly start'],
    limits: ['No personal training included', 'Best for self-guided members']
  },
  {
    id: 'strength-builder',
    name: 'Strength Builder',
    duration: '3 Months Plan',
    compareDuration: '3 Months',
    price: 'Rs. 1499/-',
    coaching: 'Consistent access for strength and habit building',
    bestFor: ['Better value than monthly', 'Strength-focused members', 'Building routine consistency'],
    limits: ['Personal training add-on billed separately'],
    highlighted: true
  },
  {
    id: 'power-surge',
    name: 'Power Surge',
    duration: '6 Months Plan',
    compareDuration: '6 Months',
    price: 'Rs. 2999/-',
    coaching: 'Longer training block for visible progress',
    bestFor: ['Muscle gain or weight loss goals', 'Committed training', 'Lower monthly average'],
    limits: ['Requires a longer commitment']
  },
  {
    id: 'peak-performance',
    name: 'Peak Performance',
    duration: '12 Months Plan',
    compareDuration: '12 Months',
    price: 'Rs. 5555/-',
    coaching: 'Best annual value for regular members',
    bestFor: ['Full-year consistency', 'Lowest monthly average', 'Serious transformation goals'],
    limits: ['Largest upfront payment']
  },
  {
    id: 'couple-offer',
    name: 'Couple Offer',
    duration: 'Annual couple package',
    compareDuration: '12 Months for 2 members',
    price: 'Rs. 10,000/-',
    coaching: 'Train together with annual access',
    bestFor: ['Couples', 'Shared accountability', 'Annual savings'],
    limits: ['Requires two-member annual commitment'],
    wide: true
  }
];

const personalTrainingPlans = [
  { duration: '1 Month', price: 'Rs. 999/-' },
  { duration: '3 Months', price: 'Rs. 2499/-' },
  { duration: '6 Months', price: 'Rs. 4799/-' },
  { duration: '12 Months', price: 'Rs. 8999/-' }
];

const addOnGoals = ['Fat Loss', 'Muscle Gain', 'Contest Prep', 'Weight Loss', 'Weight Gain', 'General Fitness'];
const showDetailedPricingSections = false;

const MembershipPage = () => {
  const [billingMode, setBillingMode] = useState<'monthly' | 'annual'>('monthly');
  const [comparePlanOneId, setComparePlanOneId] = useState('flex-starter');
  const [comparePlanTwoId, setComparePlanTwoId] = useState('strength-builder');
  const comparePlanOne = existingMembershipPlans.find((plan) => plan.id === comparePlanOneId) ?? existingMembershipPlans[0];
  const comparePlanTwo = existingMembershipPlans.find((plan) => plan.id === comparePlanTwoId) ?? existingMembershipPlans[1];
  const chooseAlternatePlan = (currentId: string) => existingMembershipPlans.find((plan) => plan.id !== currentId)?.id ?? currentId;
  const handleComparePlanOneChange = (nextPlanId: string) => {
    setComparePlanOneId(nextPlanId);
    if (nextPlanId === comparePlanTwoId) {
      setComparePlanTwoId(chooseAlternatePlan(nextPlanId));
    }
  };
  const handleComparePlanTwoChange = (nextPlanId: string) => {
    setComparePlanTwoId(nextPlanId);
    if (nextPlanId === comparePlanOneId) {
      setComparePlanOneId(chooseAlternatePlan(nextPlanId));
    }
  };

  return (
    <>
      <Helmet>
        <title>Gym Membership Plans & Branch Pricing | FlexFit Club Chennai</title>
        <meta name="description" content="FlexFit Club membership plans and branch-wise offers for Chrompet and Chitlapakkam, including 90 Days Body Transformation Challenge pricing." />
        <link rel="canonical" href="https://flexfitclub.in/membership" />
      </Helmet>
      <PageHero label="Membership" title="Plans That" highlight="Fit Your Goal" />
      <TransformationChallenge />
      {showDetailedPricingSections && (
        <>
          <section className="section">
            <div className="container">
              <div className="text-center mb-5">
                <SectionLabel text="Chrompet Branch Rate Card" />
                <SectionHeading line1="In-Gym" line2="Membership Plans" highlightLine={2} centered />
                <p className="text-muted-ff mx-auto mb-0" style={{ maxWidth: 720 }}>
                  These are the current Chrompet branch in-gym plan options from the FlexFit printed rate card. Chitlapakkam branch offer prices are shown above in the branch-wise challenge section.
                </p>
              </div>
              <div className="legacy-plan-grid">
                {existingMembershipPlans.map((plan) => (
                  <article className={`legacy-plan-card ${plan.highlighted ? 'featured' : ''} ${plan.wide ? 'wide' : ''}`} key={plan.name}>
                    <span className="legacy-plan-duration">{plan.duration}</span>
                    <h3>{plan.name}</h3>
                    <div className="legacy-plan-price">{plan.price}</div>
                    <Link className="btn-ff btn-ff-outline w-100" to={`/join?plan=${encodeURIComponent(plan.name.toLowerCase().replace(/\s+/g, '-'))}`}>
                      Choose Plan
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section section-card plan-compare-section">
            <div className="container">
              <div className="text-center mb-5">
                <SectionLabel text="Compare" />
                <SectionHeading line1="Compare" line2="Membership Plans" highlightLine={2} centered />
                <p className="text-muted-ff mx-auto mb-0" style={{ maxWidth: 760 }}>
                  Select any two FlexFit rate-card plans and compare price, duration, coaching style, and best fit before you join.
                </p>
              </div>

              <div className="plan-compare-controls">
                <label className="plan-compare-select">
                  <span>Plan 1</span>
                  <select value={comparePlanOneId} onChange={(event) => handleComparePlanOneChange(event.target.value)}>
                    {existingMembershipPlans.map((plan) => (
                      <option value={plan.id} key={plan.id}>{plan.name}</option>
                    ))}
                  </select>
                </label>
                <label className="plan-compare-select">
                  <span>Plan 2</span>
                  <select value={comparePlanTwoId} onChange={(event) => handleComparePlanTwoChange(event.target.value)}>
                    {existingMembershipPlans.map((plan) => (
                      <option value={plan.id} key={plan.id}>{plan.name}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="plan-compare-grid">
                {[comparePlanOne, comparePlanTwo].map((plan, index) => (
                  <article className="plan-compare-card" key={`${index}-${plan.id}`}>
                    <span className="plan-compare-kicker">Plan {index + 1}</span>
                    <h3>{plan.name}</h3>
                    <div className="plan-compare-meta">
                      <div>
                        <span>Duration</span>
                        <strong>{plan.compareDuration}</strong>
                      </div>
                      <div>
                        <span>Price</span>
                        <strong>{plan.price}</strong>
                      </div>
                    </div>
                    <div className="plan-compare-detail">
                      <span>Coaching</span>
                      <p>{plan.coaching}</p>
                    </div>
                    <div className="plan-compare-columns">
                      <div>
                        <h4>Best For</h4>
                        <ul>
                          {plan.bestFor.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4>Note</h4>
                        <ul>
                          {plan.limits.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                    <Link className="btn-ff btn-ff-primary w-100" to={`/join?plan=${encodeURIComponent(plan.id)}`}>
                      Choose {plan.name}
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section section-card">
            <div className="container">
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-5">
                  <div className="add-on-price-panel h-100">
                    <SectionLabel text="Personal Training" />
                    <h2>
                      Focused Coaching
                      <br />
                      <span className="text-yellow">At Simple Prices</span>
                    </h2>
                    <p className="text-muted-ff">
                      Add personal training to your membership for one-to-one guidance, form correction, progress tracking, and goal-specific support.
                    </p>
                    <div className="training-price-list">
                      {personalTrainingPlans.map((plan) => (
                        <div className="training-price-row" key={plan.duration}>
                          <span>{plan.duration}</span>
                          <strong>{plan.price}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row g-4 h-100">
                    <div className="col-md-6">
                      <div className="addon-card h-100">
                        <span className="addon-price">Rs. 300/-</span>
                        <h3>Customised Diet Plan</h3>
                        <p className="text-muted-ff">Body-specific food guidance for fat loss, weight loss, muscle gain, weight gain, contest prep, and general fitness.</p>
                        <div className="addon-goal-list">
                          {addOnGoals.map((goal) => <span key={goal}>{goal}</span>)}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="addon-card h-100 featured">
                        <span className="addon-price">Rs. 500/-</span>
                        <h3>Customised Workout Plan</h3>
                        <p className="text-muted-ff">A structured training plan built around your target, fitness level, and preferred training style.</p>
                        <div className="addon-goal-list">
                          {addOnGoals.map((goal) => <span key={goal}>{goal}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
        </>
      )}
      <CtaBand title="Pick your plan, then let us handle the guidance." text="Start with a trial, a regular membership, or the focused 90-day challenge." />
    </>
  );
};

export default MembershipPage;
