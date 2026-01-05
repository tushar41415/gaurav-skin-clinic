import React from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    treatment: 'Hair Fall Treatment',
    quote:
      'I was losing hope with my hair fall problem, but after the treatment at this clinic, I have seen amazing results. My hair is thicker and healthier than ever!',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    treatment: 'PRP Therapy',
    quote:
      'The PRP therapy sessions were comfortable and effective. The staff is professional and the results speak for themselves. Highly recommended!',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5,
  },
  {
    name: 'Anita Gupta',
    treatment: 'Skin Whitening',
    quote:
      'My skin has never looked better! The glow therapy gave me exactly the results I was looking for. Thank you for the wonderful care!',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    treatment: 'Acne Treatment',
    quote:
      'After years of struggling with acne, I finally found a solution here. The treatment cleared my skin and boosted my confidence tremendously.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ background: 'var(--soft-pink)' }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <span
            className="badge mb-3 px-3 py-2"
            style={{
              background: 'var(--white)',
              color: 'var(--rose-gold)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Testimonials
          </span>

          <h2 className="section-title">What Our Clients Say</h2>

          <p className="section-subtitle">
            Read success stories from our satisfied patients
          </p>
        </div>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === 0 ? 'active' : ''
                }`}
              >
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="testimonial-card text-center">
                      <div className="stars mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i
                            key={i}
                            className="bi bi-star-fill me-1"
                          ></i>
                        ))}
                      </div>

                      <p className="quote fs-5">
                        "{testimonial.quote}"
                      </p>

                      <div className="client-info justify-content-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="client-avatar"
                        />
                        <div className="text-start">
                          <h6
                            className="mb-0"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            {testimonial.name}
                          </h6>
                          <small style={{ color: 'var(--rose-gold)' }}>
                            {testimonial.treatment}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '50px',
                height: '50px',
                background: 'var(--rose-gold)',
              }}
            >
              <i className="bi bi-chevron-left text-white"></i>
            </span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '50px',
                height: '50px',
                background: 'var(--rose-gold)',
              }}
            >
              <i className="bi bi-chevron-right text-white"></i>
            </span>
          </button>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators mt-4 position-relative">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background:
                  index === 0
                    ? 'var(--rose-gold)'
                    : 'var(--rose-gold-light)',
                border: 'none',
                margin: '0 5px',
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
