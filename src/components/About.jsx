import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: "var(--soft-bg)" }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Image Section */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600"
                alt="Dr Derma Hair & Skin Care Clinic"
                className="img-fluid rounded-4 shadow-lg"
                style={{ border: "5px solid var(--white)" }}
              />

              <div
                className="position-absolute bottom-0 start-0 translate-middle-y p-4 rounded-4"
                style={{
                  background: "var(--white)",
                  boxShadow: "var(--shadow-md)",
                  marginLeft: "-20px",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "var(--gradient-primary)",
                    }}
                  >
                    <i
                      className="bi bi-award text-white"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </div>
                  <div>
                    <h5
                      className="mb-0"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Certified Expert
                    </h5>
                    <small style={{ color: "var(--gray-text)" }}>
                      Hair & Skin Specialist
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6">
            <span
              className="badge mb-3 px-3 py-2"
              style={{
                background: "rgba(183, 110, 121, 0.1)",
                color: "var(--rose-gold)",
                fontFamily: "var(--font-heading)",
              }}
            >
              About Us
            </span>

            <h2
              className="section-title text-start mb-4"
              style={{ marginTop: 0 }}
            >
              Meet{" "}
              <span className="text-rose-gradient">
                Gaurav Sharma Numberdar
              </span>
            </h2>

            <p style={{ color: "var(--gray-text)", lineHeight: 1.8 }}>
              With over 15 years of dedicated experience in hair restoration and
              skin care, Gaurav Sharma Numberdar has established himself as a
              trusted name in the field of aesthetic medicine. His
              patient-centric approach combines cutting-edge technology with
              personalized treatment plans.
            </p>

            <p style={{ color: "var(--gray-text)", lineHeight: 1.8 }}>
              Our clinic is committed to delivering exceptional results through
              advanced procedures like PRP therapy, laser treatments, and
              customized skincare regimens. Every patient receives
              individualized attention and care.
            </p>

            <div className="row g-4 mt-4">
              {[
                "Board Certified",
                "Advanced Training",
                "Latest Technology",
                "Patient-First Care",
              ].map((item, index) => (
                <div key={index} className="col-6">
                  <div className="d-flex align-items-center gap-3">
                    <i
                      className="bi bi-check-circle-fill"
                      style={{
                        color: "var(--rose-gold)",
                        fontSize: "1.5rem",
                      }}
                    ></i>
                    <span style={{ fontFamily: "var(--font-heading)" }}>
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-rose mt-4">
              <i className="bi bi-calendar2-heart me-2"></i>
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
