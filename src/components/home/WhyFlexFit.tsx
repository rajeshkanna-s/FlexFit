import Icon from '../common/Icon';
import SectionHeading from '../common/SectionHeading';
import SectionLabel from '../common/SectionLabel';

const features = [
  ['gear', 'Modern Equipment', 'Strength, cardio, and functional tools'],
  ['clock', '5 AM Open', 'Early & late-night sessions'],
  ['personCheck', '1-on-1 Training', 'Personalized coaching plans'],
  ['heartFill', 'Diet Guidance', 'Nutrition plans for your goals'],
  ['shield', 'Safe & Clean', 'Daily sanitization & safety'],
  ['phone', 'Track Progress', 'Monitor your fitness journey']
];

const WhyFlexFit = () => (
  <section className="section">
    <div className="container">
      <div className="text-center mb-5">
        <SectionLabel text="Why FlexFit" />
        <SectionHeading line1="The FlexFit" line2="Difference" highlightLine={1} centered />
      </div>
      <div className="row g-3">
        {features.map(([icon, title, text]) => (
          <div className="col-6 col-md-4 col-lg-2" key={title} data-aos="fade-up">
            <div className="feature-card text-center">
              <div className="icon-badge mx-auto">
                <Icon name={icon} />
              </div>
              <h3 className="h5">{title}</h3>
              <p className="text-muted-ff small mb-0">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyFlexFit;
