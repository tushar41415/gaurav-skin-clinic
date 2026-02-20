import { motion as Motion } from "framer-motion";

const highlights = [
  { title: "Expert Team", text: "Skilled and patient-focused specialists" },
  { title: "10K+ Clients", text: "Hair and skin consultations" },
  { title: "Modern Setup", text: "US-FDA approved equipment" },
  { title: "Personal Plans", text: "Based on scalp/skin analysis" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="page-hero mb-4 mb-lg-5">
          <div className="hero-card">
            <span className="section-badge">About Clinic</span>
            <h1 className="section-title">Meet the team behind your visible transformation</h1>
            <p className="section-subtitle mb-0">
              We blend dermatology science, aesthetic precision, and friendly care so every treatment
              delivers confidence, not just temporary results.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <Motion.div
              className="about-image"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/Reception1.png" alt="Dr Derma specialist" />
            </Motion.div>
          </div>

          <div className="col-lg-7">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <h2 className="section-title mb-3">
                Trusted expertise in <span className="text-gradient">hair restoration & skin rejuvenation</span>
              </h2>
              <p className="section-lead">
                Dr Derma Clinic is known for clinical transparency and custom treatment strategies.
                Every patient gets a detailed diagnosis, realistic treatment timeline, and after-care
                monitoring to ensure consistent progress.
              </p>
              <p className="section-lead mb-0">
                From PRP and anti-hair fall protocols to laser, medi-facials, and pigmentation solutions,
                our focus stays on safe procedures and measurable outcomes.
              </p>

              <div className="about-highlight">
                {highlights.map((item) => (
                  <div className="about-chip" key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
