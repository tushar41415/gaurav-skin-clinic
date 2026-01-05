import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="animate-fade-in-up">
              
              <span
                className="badge mb-3 px-4 py-2"
                style={{
                  background: 'var(--soft-pink)',
                  color: 'var(--rose-gold)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                }}
              >
                ✨ Welcome to Premium Care
              </span>

              <h1
                className="display-4 fw-bold mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.2,
                }}
              >
                Advanced{' '}
                <span className="text-rose-gradient">Hair & Skin</span>{' '}
                Treatments You Can Trust
              </h1>

              <p
                className="lead mb-4"
                style={{
                  color: 'var(--gray-text)',
                  fontSize: '1.2rem',
                }}
              >
                Expert care by <strong>Gaurav Sharma Numberdar</strong> – Your
                trusted specialist for transformative hair restoration and
                radiant skin solutions.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-rose btn-lg">
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Appointment
                </a>
                <a
                  href="tel:+919876543210"
                  className="btn btn-outline-rose btn-lg"
                >
                  <i className="bi bi-telephone me-2"></i>
                  Call Now
                </a>
              </div>

              <div className="d-flex align-items-center gap-4 mt-5">
                <div className="text-center">
                  <h3 className="mb-0 text-rose-gradient">15+</h3>
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
                  <h3 className="mb-0 text-rose-gradient">10K+</h3>
                  <small style={{ color: 'var(--gray-text)' }}>
                    Happy Clients
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
                  <h3 className="mb-0 text-rose-gradient">20+</h3>
                  <small style={{ color: 'var(--gray-text)' }}>
                    Treatments
                  </small>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
