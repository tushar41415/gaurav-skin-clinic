import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  // ❌ TypeScript types removed → JSX
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  // ❌ React.ChangeEvent removed → JSX
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="section-padding">
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
            Contact Us
          </span>

          <h2 className="section-title">Book Your Appointment</h2>

          <p className="section-subtitle">
            Ready to start your transformation? Get in touch with us today!
          </p>
        </div>

        <div className="row g-5">
          {/* Form */}
          <div className="col-lg-6">
            <div
              className="p-4 p-lg-5 rounded-4 h-100"
              style={{ background: 'var(--soft-pink)' }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '30px',
                }}
              >
                Send Us a Message
              </h4>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="form-label"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-custom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="form-label"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-custom"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="form-label"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control form-control-custom"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your concerns or questions"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-rose w-100 btn-lg"
                >
                  <i className="bi bi-send me-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="col-lg-6">
            <div className="h-100">
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '30px',
                }}
              >
                Contact Information
              </h4>

              <div className="d-flex gap-4 mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--soft-pink)',
                  }}
                >
                  <i
                    className="bi bi-geo-alt"
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--rose-gold)',
                    }}
                  ></i>
                </div>
                <div>
                  <h6 style={{ fontFamily: 'var(--font-heading)' }}>
                    Clinic Address
                  </h6>
                  <p style={{ color: 'var(--gray-text)', marginBottom: 0 }}>
                    A206 2nd floor Raj Hans plaza ahinsha Khand 1 
                    <br />
                    Indirapuram Ghaziabad opposite Aditya mall 201012
                  </p>
                </div>
              </div>

              <div className="d-flex gap-4 mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--soft-pink)',
                  }}
                >
                  <i
                    className="bi bi-telephone"
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--rose-gold)',
                    }}
                  ></i>
                </div>
                <div>
                  <h6 style={{ fontFamily: 'var(--font-heading)' }}>
                    Phone Number
                  </h6>
                  <p style={{ color: 'var(--gray-text)', marginBottom: 0 }}>
                    +91 8287818299
                    
                  </p>
                </div>
              </div>

              <div className="d-flex gap-4 mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--soft-pink)',
                  }}
                >
                  <i
                    className="bi bi-clock"
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--rose-gold)',
                    }}
                  ></i>
                </div>
                <div>
                  <h6 style={{ fontFamily: 'var(--font-heading)' }}>
                    Working Hours
                  </h6>
                  <p style={{ color: 'var(--gray-text)', marginBottom: 0 }}>
                    Mon - Sat: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div
                className="rounded-4 overflow-hidden mt-4"
                style={{ height: '200px', background: 'var(--light-gray)' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8851095619!2d77.20659841508156!3d28.632732982420567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
