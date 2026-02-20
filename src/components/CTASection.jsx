import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <Motion.div
          className="cta-shell"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <h2 className="cta-title">Reserve Your Premium Consultation</h2>
              <p className="cta-text">
                Let our experts curate a luxury treatment roadmap tailored to your hair
                and skin goals.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="d-flex flex-wrap justify-content-lg-end gap-2">
                <Link to="/contact" className="btn-brand">
                  <i className="bi bi-calendar2-plus" />Book Appointment
                </Link>
                <a href="tel:+918287118299" className="btn-brand-outline">
                  <i className="bi bi-telephone-fill" />Call Clinic
                </a>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default CTASection;
