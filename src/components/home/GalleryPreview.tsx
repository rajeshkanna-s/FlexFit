import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import SectionLabel from '../common/SectionLabel';

const images = [
  '/assets/Gallery/FlexFit_Gym_Interior_Daytime_View.png',
  '/assets/Gallery/FlexFit_Gym_Interior_Equipment_View_1.png',
  '/assets/Gallery/FlexFit_Dumbbell_Barbell_Rack_Setup.png',
  '/assets/Gallery/FlexFit_Gym_Members_Training_Session.png',
  '/assets/Gallery/FlexFit_Signboard_Night_View.png'
];

const GalleryPreview = () => (
  <section className="section section-card">
    <div className="container">
      <div className="text-center mb-5">
        <SectionLabel text="Gallery" />
        <SectionHeading line1="Our Gym" line2="Visit Us" highlightLine={1} centered />
      </div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <Link className={`gallery-tile ${index === 0 ? 'wide' : ''}`} to="/gallery" key={image}>
            <img src={image} alt={`FlexFit gym preview ${index + 1}`} />
          </Link>
        ))}
      </div>
      <div className="text-center mt-5">
        <p className="text-muted-ff mb-2">Follow our daily transformations on Instagram</p>
        <a className="text-yellow fw-bold" href="https://www.instagram.com/flex._.fit_" target="_blank" rel="noreferrer">
          @flex._.fit_
        </a>
      </div>
    </div>
  </section>
);

export default GalleryPreview;
