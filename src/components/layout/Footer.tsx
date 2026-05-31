import { Link } from 'react-router-dom';
import { EnvelopeFill, Instagram, Whatsapp, Youtube } from 'react-bootstrap-icons';
import { branchLocations } from '../../data/locations.data';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="footer-brand">
            <img src="/assets/images/logo.png" alt="FlexFit Club" height="92" className="mb-3" />
            <p className="text-muted-ff">
              Chennai's premier fitness destination with branches in Chrompet and Chitlapakkam. Strength, cardio, and personal training under one roof.
            </p>
            <div className="footer-socials">
              <a className="btn-ff btn-ff-outline px-3" href="https://www.instagram.com/flex._.fit_" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
              <a className="btn-ff btn-ff-outline px-3" href="https://wa.me/919940846719?text=Hi%20FlexFit!%20I%20want%20to%20enquire%20about%20your%20fitness%20programs%20and%20membership." target="_blank" rel="noopener noreferrer" aria-label="Chat with FlexFit Club on WhatsApp"><Whatsapp /></a>
              <a className="btn-ff btn-ff-outline px-3" href="mailto:flexfitclub2k25@gmail.com" aria-label="Email"><EnvelopeFill /></a>
              <span className="btn-ff btn-ff-outline px-3" aria-label="YouTube coming soon"><Youtube /></span>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-2">
          <h3>Quick Links</h3>
          <ul className="list-unstyled text-muted-ff">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Programs', '/programs'],
              ['Membership', '/membership'],
              ['Exercise', '/exercise'],
              ['Calculators', '/calculators'],
              ['Diet Chart', '/diet-chart'],
              ['Gallery', '/gallery'],
              ['Contact', '/contact'],
              ['Join Now', '/join']
            ].map(([item, href]) => (
              <li key={item} className="mb-2">
                <Link to={href}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6 col-lg-3">
          <h3>Programs</h3>
          <ul className="list-unstyled text-muted-ff">
            {['Strength Training', 'Cardio & HIIT', 'Personal Training', 'Weight Loss', 'Muscle Building', 'Yoga & Flexibility'].map((item) => (
              <li key={item} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-lg-3">
          <h3>Visit Us</h3>
          {branchLocations.map((location) => (
            <p className="text-muted-ff mb-2" key={location.id}>
              <strong className="text-white">{location.shortName}</strong><br />
              {location.address}
            </p>
          ))}
          <p className="text-muted-ff mb-1">+91 99408 46719</p>
          <p className="text-muted-ff mb-1">flexfitclub2k25@gmail.com</p>
          <p className="text-muted-ff">Mon-Fri: 5AM-10PM - Sat: 5AM-9PM - Sun: 6AM-8PM</p>
        </div>
      </div>
      <hr className="border-secondary my-4" />
      <div className="footer-bottom text-muted-ff small">
        <span>&copy; 2026 FlexFit Club. All rights reserved. | Two branches in Chennai</span>
        <span><Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Use</Link></span>
      </div>
    </div>
  </footer>
);

export default Footer;
