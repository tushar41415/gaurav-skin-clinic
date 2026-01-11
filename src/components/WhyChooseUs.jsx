import React from 'react';
import OurResults from './OurResults';

const features = [
  {
    icon: 'bi-person-check',
    title: 'Experienced Specialist',
    description: '15+ years of expertise in hair & skin treatments',
  },
  {
    icon: 'bi-cpu',
    title: 'Advanced Technology',
    description: 'State-of-the-art equipment and latest techniques',
  },
  {
    icon: 'bi-shield-check',
    title: 'Safe & Hygienic',
    description: 'Strict sterilization protocols and clean environment',
  },
  {
    icon: 'bi-wallet2',
    title: 'Affordable Packages',
    description: 'Quality treatments at competitive prices',
  },
  {
    icon: 'bi-emoji-smile',
    title: '100% Satisfaction',
    description: 'Thousands of happy clients with proven results',
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="section-padding"
      style={{ background: 'var(--cream)' }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <span
            className="badge mb-3 px-3 py-2"
            style={{
              background: 'var(--soft-pink)',
              color: 'var(--rose-gold)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Why Us
          </span>

          <h2 className="section-title">Why Choose Our Clinic</h2>

          <p className="section-subtitle">
            We are committed to providing exceptional care and outstanding
            results
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-6 col-md-4 col-lg">
              <div className="feature-box text-center">
                <div className="icon-circle">
                  <i className={`bi ${feature.icon}`}></i>
                </div>

                <h5
                  style={{
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '10px',
                  }}
                >
                  {feature.title}
                </h5>

                <p
                  style={{
                    color: 'var(--gray-text)',
                    fontSize: '0.9rem',
                    marginBottom: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OurResults />
    </section>
  );
};

export default WhyChooseUs;
