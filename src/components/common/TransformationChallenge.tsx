import { Link } from 'react-router-dom';
import { CheckCircleFill, LightningChargeFill } from 'react-bootstrap-icons';
import { branchLocations } from '../../data/locations.data';
import SectionLabel from './SectionLabel';

interface TransformationChallengeProps {
  compact?: boolean;
}

const goals = ['Lose Weight', 'Gain Muscle', 'Gain Weight', 'Burn Fat', 'Maintain a Fit Body'];
const personalAttention = ['1-to-1 Personal Training', 'Diet chart as per your body', 'Workout plan made for you', 'Full guidance & support'];
const reasons = ['Friendly trainers', 'Affordable price', 'Guaranteed guidance', 'Results-oriented training'];

const TransformationChallenge = ({ compact = false }: TransformationChallengeProps) => (
  <section className={`section ${compact ? 'challenge-section' : 'challenge-section section-card'}`}>
    <div className="container">
      <div className="challenge-offer">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <SectionLabel text="New Plan Introduced" />
            <h2>
              90 Days Body
              <br />
              <span className="text-yellow">Transformation Challenge</span>
            </h2>
            <p className="text-muted-ff mb-4">
              Join today and choose the branch that fits you. Pricing changes by branch, so every enquiry confirms the correct offer.
            </p>
            <div className="challenge-branch-grid">
              {branchLocations.map((location) => (
                <article className="challenge-branch-card" key={location.id}>
                  <span>{location.shortName}</span>
                  <h3>{location.challengeOffer.title}</h3>
                  <div className="challenge-branch-price">{location.challengeOffer.price}</div>
                  <p>{location.challengeOffer.description}</p>
                  <div className="challenge-couple-offer">
                    <span>{location.coupleOffer.title}</span>
                    <strong>{location.coupleOffer.price}</strong>
                  </div>
                  <Link className="btn-ff btn-ff-outline w-100" to={`/join?plan=challenge&branch=${location.id}`}>
                    Select Branch
                  </Link>
                </article>
              ))}
            </div>
            <p className="text-yellow fw-bold mb-4">Limited seats available</p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn-ff btn-ff-primary" to="/join?plan=challenge">
                <LightningChargeFill /> Reserve Challenge Seat
              </Link>
              <Link className="btn-ff btn-ff-outline" to="/join?plan=challenge">
                WhatsApp Details
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row g-3">
              <div className="col-md-4">
                <div className="challenge-list-card">
                  <h3>What Do You Want?</h3>
                  <ul>
                    {goals.map((item) => (
                      <li key={item}><CheckCircleFill /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="challenge-list-card featured">
                  <h3>Personal Attention</h3>
                  <ul>
                    {personalAttention.map((item) => (
                      <li key={item}><CheckCircleFill /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="challenge-list-card">
                  <h3>Why FlexFit?</h3>
                  <ul>
                    {reasons.map((item) => (
                      <li key={item}><CheckCircleFill /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TransformationChallenge;
