import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/membership', label: 'Membership' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-ff ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <img src="/assets/images/logo.png" alt="FlexFit Club" height="58" />
        </NavLink>
        <button className="navbar-toggler" type="button" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {links.map((link) => (
              <NavLink className="nav-link nav-link-ff" to={link.to} key={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <NavLink className="nav-link btn-join-nav ms-lg-2" to="/join" onClick={() => setOpen(false)}>
              Join Now
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
