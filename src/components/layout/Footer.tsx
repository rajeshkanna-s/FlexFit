import { Link } from 'react-router-dom';
import { EnvelopeFill, Instagram, Whatsapp, Youtube } from 'react-bootstrap-icons';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="footer-brand">
          <img src="/assets/images/logo.png" alt="FlexFit Club" height="92" className="mb-3" />
          <p className="text-muted-ff">
            Chennai's premier fitness destination in Chrompet. Strength, cardio, and personal training under one roof. Get into good addiction.
          </p>
          <div className="footer-socials">
            <a className="btn-ff btn-ff-outline px-3" href="https://www.instagram.com/flex._.fit_" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a className="btn-ff btn-ff-outline px-3" href="https://api.whatsapp.com/send?phone=919940846719" target="_blank" rel="noreferrer" aria-label="WhatsApp"><Whatsapp /></a>
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
          <p className="text-muted-ff mb-2">Plot no 5, First Floor, Muthusamy Main Road, Muthusamy Nagar, Chrompet, Chennai - 600044</p>
          <p className="text-muted-ff mb-1">+91 99408 46719</p>
          <p className="text-muted-ff mb-1">flexfitclub2k25@gmail.com</p>
          <p className="text-muted-ff">Mon-Fri: 5AM-10PM - Sat: 5AM-9PM - Sun: 6AM-8PM</p>
          <Link className="btn-ff btn-ff-primary" to="/join">Book Free Trial</Link>
        </div>
      </div>
      <hr className="border-secondary my-4" />
      <div className="footer-bottom text-muted-ff small">
        <span>&copy; 2026 FlexFit Club. All rights reserved. | Chrompet, Chennai</span>
        <span><Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Use</Link></span>
      </div>
    </div>
  </footer>
);

export default Footer;
