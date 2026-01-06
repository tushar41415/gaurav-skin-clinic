import React, { useState } from "react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    category: "Hair Treatments & Transplant",
    icon: "bi-scissors",
    services: [
      "Hair-loss treatment",
      "Permanent hair loss solution",
      "Natural hair restoration",
      "Hair grafting",
      "Hair reconstruction",
      "Hair simulator",
      "Artificial hair",
      "Hair transplants",
      "FUE hair transplant",
      "ARTAS hair transplant",
      "Scarless hair transplant",
      "Beard hair transplant",
      "Facial hair transplants",
    ],
  },
  {
    category: "Eyebrow & Eye Enhancements",
    icon: "bi-eye",
    services: [
      "Eyebrow shaping",
      "Eyebrow waxing",
      "Eyebrow tinting",
      "Eyebrow embroidery",
      "Powder brow styling",
      "Ombre eyebrow styling",
      "Eyebrow transplants",
      "Permanent eyeliner",
      "Lash tattooing",
      "Eyelash enhancements",
    ],
  },
  {
    category: "Skin & Dermatology",
    icon: "bi-stars",
    services: [
      "Acne Treatment",
      "Anti-Aging Treatment",
      "Pigmentation Treatment",
      "Melasma Treatment",
      "Mole and warts removal",
      "Scar Treatment",
      "Skin Brightening Treatment",
      "Skin Whitening Treatment",
      "Dermatology treatment",
      "Wrinkle Reduction",
    ],
  },
  {
    category: "Facials & Rejuvenation",
    icon: "bi-droplet-fill",
    services: [
      "Hydrafacial Treatment",
      "HydraFacial MD treatment",
      "Carbon Laser Peel Treatment",
      "Best Carbon Laser Facial",
      "Deep peelings",
      "Microdermabrasion",
      "Dermaplaning",
      "Skin Polishing",
    ],
  },
  {
    category: "Laser Treatments",
    icon: "bi-lightning-charge",
    services: [
      "Laser hair removal",
      "Laser Hair Reduction Treatment",
      "Laser skin therapy",
      "Laser Treatments for Skin Whitening",
      "Tattoo removal",
    ],
  },
  {
    category: "Injectables & Contouring",
    icon: "bi-heart-pulse",
    services: [
      "Botox treatments",
      "Dermal fillers",
      "Lip fillers",
      "Skin tightening",
      "Cool Sculpting treatments",
      "Hair & Body Contouring",
    ],
  },
  {
    category: "Hair Removal (Men & Women)",
    icon: "bi-x-circle",
    services: [
      "Permanent hair removal",
      "Painless hair removal",
      "Facial hair removal",
      "Chest hair removal",
      "Back hair removal",
      "Lip hair removal",
      "Arm hair removal",
      "Foot hair removal",
    ],
  },
  {
    category: "Cosmetic & Plastic Surgery",
    icon: "bi-hospital",
    services: [
      "Cosmetic plastic surgery",
      "Reconstructive cosmetic surgery",
      "Breast augmentation surgery",
      "Liposuction surgery",
      "Facelift surgery",
    ],
  },
];

const Treatments = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">
            Advanced Hair, Skin & Aesthetic Treatments Under One Roof
          </p>
        </div>

        <div className="row">
          {/* LEFT CATEGORY TABS */}
          <div className="col-lg-4 mb-4">
            <div className="list-group shadow-sm">
              {serviceCategories.map((item, index) => (
                <button
                  key={index}
                  className={`list-group-item list-group-item-action ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <i className={`bi ${item.icon} me-2`}></i>
                  {item.category}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SERVICES LIST */}
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <h4 className="fw-semibold mb-4">
                  {serviceCategories[activeIndex].category}
                </h4>

                <div className="row">
                  {serviceCategories[activeIndex].services.map(
                    (service, idx) => (
                      <div key={idx} className="col-md-6 mb-3">
                        <div className="d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <span>{service}</span>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <Link to="/contact" className="btn btn-rose btn-lg">
                                  <i className="bi bi-calendar-check me-2"></i>
                                  Book Consultation
                                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
