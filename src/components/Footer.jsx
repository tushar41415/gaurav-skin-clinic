import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/treatments", label: "Treatments" },
    { to: "/gallery", label: "Gallery" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
  ];

  const topServices = [
    "Hair Fall Control",
    "PRP Therapy",
    "Acne & Scar Care",
    "Laser Hair Reduction",
    "Anti-Ageing Care",
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <img
              src="/images/newLogo.png"
              alt="Dr Derma"
              style={{ height: "74px", width: "auto" }}
            />
            <p className="mt-3 mb-3" style={{ maxWidth: "340px" }}>
              Premium skin and hair treatments with modern technology,
              personalized diagnosis, and result-driven care.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" aria-label="YouTube">
                <i className="bi bi-youtube" />
              </a>
              <a href="https://wa.me/919217117898" aria-label="WhatsApp">
                <i className="bi bi-whatsapp" />
              </a>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled d-grid gap-2 mb-0">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 col-lg-3">
            <h5>Popular Services</h5>
            <ul className="list-unstyled d-grid gap-2 mb-0">
              {topServices.map((service) => (
                <li key={service}>
                  <Link to="/treatments">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4 col-lg-3">
            <h5>Contact</h5>
            <div className="d-grid gap-2">
              <a href="tel:+919217117898">
                <i className="bi bi-telephone me-2" />
                +91 9217117898
              </a>
              <a href="mailto:drderma.in@gmail.com">
                <i className="bi bi-envelope me-2" />
                drderma.in@gmail.com
              </a>
              <span>
                <i className="bi bi-geo-alt me-2" />
                A-206, 2nd Floor, Rajhans Plaza, Ahinsa Khand 1, Indirapuram,
                Ghaziabad
              </span>
            </div>
          </div>
        </div>

        <hr
          style={{
            borderColor: "rgba(255,255,255,0.14)",
            margin: "2rem 0 1rem",
          }}
        />
        <div
          className="d-flex flex-wrap justify-content-between gap-2"
          style={{ fontSize: "0.92rem" }}
        >
          <span>
            © 2026 Dr Derma Hair & Skin Care Clinic. All rights reserved.
          </span>
          <div className="d-flex gap-3">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
