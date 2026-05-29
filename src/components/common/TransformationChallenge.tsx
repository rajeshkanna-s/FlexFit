import { Link } from 'react-router-dom';
import { CheckCircleFill, LightningChargeFill } from 'react-bootstrap-icons';
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
              Join today and choose your best fit with personal attention, diet guidance, custom workouts, and full support.
            </p>
            <div className="challenge-price-wrap">
              <span className="challenge-price">Rs. 5000/-</span>
              <span className="challenge-only">Only</span>
            </div>
            <p className="text-yellow fw-bold mb-4">Limited seats available</p>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn-ff btn-ff-primary" to="/join?plan=challenge">
                <LightningChargeFill /> Reserve Challenge Seat
              </Link>
              <a className="btn-ff btn-ff-outline" href="https://wa.me/919940846719?text=Hi%20FlexFit!%20I%20want%20to%20know%20about%20the%2090%20Days%20Body%20Transformation%20Challenge." target="_blank" rel="noreferrer">
                WhatsApp Details
              </a>
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
