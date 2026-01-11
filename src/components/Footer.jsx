import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/treatments', label: 'Treatments' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
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
                       <img src="/vite.svg" alt="Gaurav Clinic" height="80" className="me-2" />

            </div>

            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '20px',
              }}
            >
              19 YEARS OF CLINICAL LEGACY
CERTIFIED BY THE AMERICAN ACCREDITATION ASSOCIATION
100% GROWTH PROMISE OR FREE CORRECTIONS
            </p>
            <div className="d-flex align-items-center gap-4 mb-4">
                <div className="text-center">
                  <h3 className="mb-0 text-rose-gradient">16+</h3>
                  <small style={{ color: 'var(--gray-text)' }}>
                    Years Experience
                  </small>
                </div>

                <div
                  style={{
                    width: '1px',
                    height: '40px',
                    background: 'var(--rose-gold-light)',
                  }}
                ></div>

                <div className="text-center">
                  <h3 className="mb-0 text-rose-gradient">23</h3>
                  <small style={{ color: 'var(--gray-text)' }}>
Clinics                  </small>
                </div>

                <div
                  style={{
                    width: '1px',
                    height: '40px',
                    background: 'var(--rose-gold-light)',
                  }}
                ></div>

                <div className="text-center">
                  <h3 className="mb-0 text-rose-gradient">2</h3>
                  <small style={{ color: 'var(--gray-text)' }}>
                    Countries
                  </small>
                </div>
              </div>

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
                  <Link to={link.to} className="text-white text-decoration-none">
                    <i
                      className="bi bi-chevron-right me-1"
                      style={{ fontSize: '0.8rem' }}
                    ></i>
                    {link.label}
                  </Link>
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
                  <Link to="/treatments" className="text-white text-decoration-none">
                    <i
                      className="bi bi-chevron-right me-1"
                      style={{ fontSize: '0.8rem' }}
                    ></i>
                    {treatment}
                  </Link>
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
                  A206 2nd floor Raj Hans plaza ahinsha Khand 1 
                    <br />
                    Indirapuram Ghaziabad opposite Aditya mall 201012
                </span>
              </li>

              <li className="mb-3 d-flex align-items-center gap-2">
                <i
                  className="bi bi-telephone"
                  style={{ color: 'var(--rose-gold-light)' }}
                ></i>
                <a href="tel:+919876543210">+91 8287818299</a>
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
