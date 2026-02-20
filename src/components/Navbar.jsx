import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Treatments", path: "/treatments" },
  { label: "Gallery", path: "/gallery" },
  { label: "Why Us", path: "/whychooseus" },
  { label: "Reviews", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className={`site-navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-frame">
        <div className="container-fluid px-0">
          <button
            className="navbar-brand border-0 bg-transparent p-0"
            onClick={() => handleNavigate("/")}
            aria-label="Go to homepage"
          >
            <img
              src="/images/newLogo.png"
              alt="Dr Derma Hair and Skin Care Clinic"
              className="brand-logo"
            />
          </button>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              {links.map((link) => (
                <li className="nav-item" key={link.path}>
                  <button
                    className={`nav-link-btn ${location.pathname === link.path ? "active" : ""}`}
                    onClick={() => handleNavigate(link.path)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <button className="btn-brand" onClick={() => handleNavigate("/contact")}>
                  Reserve Session
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
