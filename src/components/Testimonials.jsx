import { motion as Motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    treatment: "Hair Fall Treatment",
    quote:
      "I saw visible reduction in hair fall within weeks. The team explained every step clearly and tracked my progress regularly.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=180",
  },
  {
    name: "Rahul Verma",
    treatment: "PRP Therapy",
    quote:
      "Very clean clinic setup and professional staff. PRP sessions were comfortable and my hair density improved significantly.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=180",
  },
  {
    name: "Anita Gupta",
    treatment: "Skin Glow Program",
    quote:
      "My pigmentation concern has improved a lot. The treatment plan felt personalized, not generic.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=180",
  },
  {
    name: "Vikram Singh",
    treatment: "Acne Treatment",
    quote:
      "After trying random products, this clinic finally gave me a proper diagnosis and results-oriented treatment.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=180",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-badge">Client Reviews</span>
          <h2 className="section-title">
            Stories from people who trusted Dr Derma
          </h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: "700px" }}>
            Patient feedback that reflects our commitment to safety,
            transparency, and real outcomes with 15 years of experience.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <Motion.div
              className="col-md-6"
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <article className="testimonial-card">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={`${testimonial.name}-${i}`}
                      className="bi bi-star-fill me-1"
                    />
                  ))}
                </div>
                <p className="quote">“{testimonial.quote}”</p>
                <div className="client-info">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="client-avatar"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="mb-1">{testimonial.name}</h6>
                    <small style={{ color: "var(--brand-2)", fontWeight: 600 }}>
                      {testimonial.treatment}
                    </small>
                  </div>
                </div>
              </article>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
