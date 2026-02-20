import { useState } from "react";
import { motion as Motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, phone, message } = formData;
    const text = `Name: ${name}\nPhone: ${phone}\nConcern: ${message}`;
    const whatsappUrl = `https://wa.me/919217117898?text=${encodeURIComponent(text)}`;

    const popup = window.open(whatsappUrl, "_blank");
    if (popup) popup.opener = null;

    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="page-hero mb-4">
          <div className="hero-card">
            <span className="section-badge">Contact</span>
            <h1 className="section-title">
              Book your consultation in under one minute
            </h1>
            <p className="section-subtitle mb-0">
              Share your concern and our team will connect with you on WhatsApp
              for appointment scheduling.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <Motion.div
              className="contact-form-shell"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="mb-3">Send us your details</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control form-control-custom"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control form-control-custom"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Concern</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control form-control-custom"
                    placeholder="Tell us about hair/skin issue"
                    required
                  />
                </div>
                <button type="submit" className="btn-brand w-100">
                  <i className="bi bi-whatsapp" /> Continue on WhatsApp
                </button>
              </form>
            </Motion.div>
          </div>

          <div className="col-lg-6">
            <Motion.div
              className="contact-card h-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <h4 className="mb-3">Clinic Information</h4>

              <div className="info-item">
                <span className="info-dot">
                  <i className="bi bi-geo-alt" />
                </span>
                <div>
                  <strong>Address</strong>
                  <p className="mb-0 text-muted">
                    A-206, 2nd floor Rajhans Plaza, Ahinsa Khand 1, Indirapuram
                    Ghaziabad Opposite Aditya Mall 201012
                  </p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-dot">
                  <i className="bi bi-telephone" />
                </span>
                <div>
                  <strong>Phone</strong>
                  <p className="mb-0 text-muted">+91 9217117898</p>
                </div>
              </div>

              <div className="info-item mb-4">
                <span className="info-dot">
                  <i className="bi bi-clock" />
                </span>
                <div>
                  <strong>Working Hours</strong>
                  <p className="mb-0 text-muted">
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              <div
                className="rounded-4 overflow-hidden"
                style={{ height: "220px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.628685355066!2d77.35143048715821!3d28.640035300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9f9edd96c5%3A0x1d2945b71e462be0!2sDr%20Derma%20Hair%20%26%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1771572837850!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Clinic location map"
                ></iframe>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
