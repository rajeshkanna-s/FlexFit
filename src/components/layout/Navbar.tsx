import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SunFill, MoonStarsFill } from 'react-bootstrap-icons';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/membership', label: 'Membership' },
  { to: '/exercise', label: 'Exercise' },
  { to: '/calculators', label: 'Calculators' },
  { to: '/diet-chart', label: 'Diet Chart' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-ff ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <img className="navbar-brand-logo" src="/assets/images/logo.png" alt="FlexFit Club" height="58" />
          <img className="navbar-brand-wordmark" src="/assets/images/logo-wordmark.png" alt="" aria-hidden="true" />
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
            <button
              onClick={toggleTheme}
              className="btn btn-theme-toggle ms-lg-3 mt-2 mt-lg-0 d-flex align-items-center justify-content-center p-2 rounded-circle"
              aria-label="Toggle theme"
              style={{
                width: '40px',
                height: '40px',
                background: 'transparent',
                border: '1px solid var(--color-border)',
                color: 'var(--color-yellow)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {theme === 'dark' ? <SunFill size={18} /> : <MoonStarsFill size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
