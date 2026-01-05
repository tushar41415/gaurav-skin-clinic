import React from 'react';

const Treatments = () => {
  const treatments = [
    {
      icon: 'bi-scissors',
      title: 'Hair Fall Treatment',
      description:
        'Advanced therapies to prevent hair loss and strengthen hair follicles for healthier growth.',
    },
    {
      icon: 'bi-droplet-fill',
      title: 'PRP Therapy',
      description:
        'Platelet-Rich Plasma treatment for natural hair regrowth and skin rejuvenation.',
    },
    {
      icon: 'bi-arrow-repeat',
      title: 'Hair Regrowth Solutions',
      description:
        'Comprehensive treatments to stimulate dormant follicles and restore hair density.',
    },
    {
      icon: 'bi-emoji-smile',
      title: 'Acne & Pimple Treatment',
      description:
        'Effective solutions to clear acne, reduce scars, and prevent future breakouts.',
    },
    {
      icon: 'bi-stars',
      title: 'Skin Whitening & Glow',
      description:
        'Safe skin brightening treatments for a radiant, even-toned complexion.',
    },
    {
      icon: 'bi-heart-pulse',
      title: 'Anti-Aging Treatment',
      description:
        'Reduce wrinkles and fine lines with our advanced anti-aging procedures.',
    },
  ];

  return (
    <section id="treatments" className="section-padding bg-light position-relative overflow-hidden">
      {/* Background Elements */}
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'rgba(154, 208, 194, 0.08)',
          borderRadius: '50%',
          bottom: '-100px',
          left: '-100px',
        }}
      ></div>

      <div className="container position-relative">

        <div className="text-center mb-5">
          <h2 className="section-title">Our Treatments</h2>
          <p className="lead text-muted">
            Comprehensive solutions for all your hair and skin concerns
          </p>
        </div>

        <div className="row g-5">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className="col-lg-4 col-md-6"
              style={{
                animation: `slideInUp 0.6s ease forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <style>{`
                @keyframes slideInUp {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>
              <div className="card h-100 shadow-sm hover-lift border-0">
                <div className="card-body text-center p-5">

                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: '100px',
                      height: '100px',
                      background:
                        'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                      boxShadow: '0 8px 20px rgba(45, 149, 150, 0.2)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <i 
                      className={`bi ${treatment.icon} fs-1 text-white`}
                      style={{ transition: 'transform 0.3s ease' }}
                    ></i>
                  </div>

                  <h4 className="card-title mb-3 fw-700">{treatment.title}</h4>
                  <p className="card-text text-muted mb-4" style={{ lineHeight: '1.7' }}>
                    {treatment.description}
                  </p>

                  <button 
                    className="btn btn-outline-custom mt-3"
                    style={{
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Learn More
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Treatments;
