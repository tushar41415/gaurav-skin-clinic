import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // JSX me type define nahi hota
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? 'navbar-light bg-white shadow-sm' : 'navbar-light bg-white'
      }`}
      style={{ transition: 'all 0.3s ease' }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <i className="bi bi-heart-pulse-fill text-primary-custom me-2 fs-3"></i>
          <span className="fw-bold" style={{ color: 'var(--secondary-color)' }}>
            Gaurav Sharma Numberdar
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection('home')}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection('about')}>
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection('treatments')}>
                Treatments
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection('gallery')}>
                Gallery
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection('testimonials')}>
                Testimonials
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection('contact')}>
                Contact
              </button>
            </li>
            <li className="nav-item ms-lg-2">
              <button
                className="btn btn-primary-custom btn-sm"
                onClick={() => scrollToSection('contact')}
              >
                Book Appointment
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
