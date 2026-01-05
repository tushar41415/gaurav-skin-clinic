import React from 'react';

const Footer = () => {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#treatments', label: 'Treatments' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const treatments = [
    'Hair Fall Treatment',
    'PRP Therapy',
    'Hair Regrowth',
    'Acne Treatment',
    'Skin Whitening',
    'Anti-Aging',
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">

          {/* Brand Info */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <i
                className="bi bi-flower1 me-2"
                style={{ fontSize: '2rem', color: 'var(--rose-gold-light)' }}
              ></i>
              <h4 className="mb-0" style={{ color: 'var(--white)' }}>
                Gaurav Sharma Numberdar
              </h4>
            </div>

            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '20px',
              }}
            >
              Your trusted partner for advanced hair and skin care treatments.
              We are committed to helping you look and feel your best.
            </p>

            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li className="mb-2" key={index}>
                  <a href={link.href}>
                    <i
                      className="bi bi-chevron-right me-1"
                      style={{ fontSize: '0.8rem' }}
                    ></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="col-lg-3 col-md-4">
            <h5>Our Treatments</h5>
            <ul className="list-unstyled">
              {treatments.map((treatment, index) => (
                <li className="mb-2" key={index}>
                  <a href="#treatments">
                    <i
                      className="bi bi-chevron-right me-1"
                      style={{ fontSize: '0.8rem' }}
                    ></i>
                    {treatment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start gap-2">
                <i
                  className="bi bi-geo-alt"
                  style={{ color: 'var(--rose-gold-light)' }}
                ></i>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                  123 Healthcare Plaza, Main Street, New Delhi - 110001
                </span>
              </li>

              <li className="mb-3 d-flex align-items-center gap-2">
                <i
                  className="bi bi-telephone"
                  style={{ color: 'var(--rose-gold-light)' }}
                ></i>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>

              <li className="mb-3 d-flex align-items-center gap-2">
                <i
                  className="bi bi-envelope"
                  style={{ color: 'var(--rose-gold-light)' }}
                ></i>
                <a href="mailto:info@gsclinic.com">info@gsclinic.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr
          style={{
            borderColor: 'rgba(255,255,255,0.1)',
            margin: '40px 0 20px',
          }}
        />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p
              style={{
                color: 'rgba(255,255,255,0.5)',
                marginBottom: 0,
              }}
            >
              © 2026 Gaurav Sharma Numberdar Clinic. All Rights Reserved.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <a
              href="#"
              className="me-3"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
