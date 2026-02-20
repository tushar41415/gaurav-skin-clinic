import { motion as Motion } from "framer-motion";

const features = [
  {
    icon: "bi-person-check",
    title: "Senior Expertise",
    description:
      "15 years of experience with skilled specialists focused on advanced hair and skin procedures.",
  },
  {
    icon: "bi-clipboard2-pulse",
    title: "Data-Based Diagnosis",
    description: "Every treatment starts with proper skin/scalp assessment.",
  },
  {
    icon: "bi-cpu",
    title: "Latest Technology",
    description: "Modern devices and updated protocols for safer sessions.",
  },
  {
    icon: "bi-shield-check",
    title: "Hygiene First",
    description: "Sterile process flow and strict patient safety standards.",
  },
  {
    icon: "bi-currency-rupee",
    title: "Value Packages",
    description: "Transparent pricing and treatment plans for long-term goals.",
  },
  {
    icon: "bi-chat-heart",
    title: "After-Care Support",
    description: "Regular follow-ups and support beyond in-clinic sessions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="whychooseus" className="section-padding">
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">
            Built for trust, designed for results
          </h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: "700px" }}>
            We combine clinical discipline with personalized care so your
            treatment feels comfortable, structured, and genuinely
            result-oriented.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <Motion.div
              className="col-sm-6 col-lg-4"
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <article className="feature-box text-center">
                <div className="icon-circle">
                  <i className={`bi ${feature.icon}`} />
                </div>
                <h5 className="mb-2">{feature.title}</h5>
                <p className="mb-0" style={{ color: "var(--text-soft)" }}>
                  {feature.description}
                </p>
              </article>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
