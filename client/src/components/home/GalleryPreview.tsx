import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import SectionLabel from '../common/SectionLabel';

const images = [
  '/assets/images/gallery/gym-1.jpg',
  '/assets/images/gallery/gym-2.jpg',
  '/assets/images/gallery/gym-3.jpg',
  '/assets/images/gallery/gym-4.jpg',
  '/assets/images/gallery/gym-5.jpg'
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
