import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import SectionLabel from '../common/SectionLabel';

const images = [
  { src: '/assets/Gallery/FlexFit_Gym_Interior_Daytime_View.png', branch: 'Chrompet Branch' },
  { src: '/assets/Gallery/FlexFit_Gym_Interior_Equipment_View_1.png', branch: 'Chrompet Branch' },
  { src: '/assets/Gallery/FlexFit_Dumbbell_Barbell_Rack_Setup.png', branch: 'Chrompet Branch' },
  { src: '/assets/Gallery/FlexFit_Gym_Members_Training_Session.png', branch: 'Chrompet Branch' },
  { src: '/assets/Gallery/ChitlapakkamBracnch/download.jpg', branch: 'Chitlapakkam Branch' }
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
          <Link className={`gallery-tile ${index === 0 ? 'wide' : ''}`} to="/gallery" key={image.src}>
            <img src={image.src} alt={`FlexFit gym preview ${index + 1}`} />
          </Link>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link className="btn-ff btn-ff-outline px-4 mb-4" to="/gallery">
          View Full Gallery
        </Link>
        <p className="text-muted-ff mb-2">Follow our daily transformations on Instagram</p>
        <a className="text-yellow fw-bold" href="https://www.instagram.com/flex._.fit_" target="_blank" rel="noreferrer">
          @flex._.fit_
        </a>
      </div>
    </div>
  </section>
);

export default GalleryPreview;
