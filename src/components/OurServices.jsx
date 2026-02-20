import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const services = [
  { title: "Hair Thinning & Anti Dandruff Treatment", img: "/images/Hair.jpeg", tag: "Hair" },
  { title: "Hair Fast Treatment & Scalp Therapy", img: "/images/Hairfast.png", tag: "Hair" },
  { title: "Advanced Hair Regrowth Treatment", img: "/images/Hairgrowth.jpg", tag: "Hair" },
  { title: "Alopecia Areata Treatment", img: "/images/Areata.jpg", tag: "Hair" },
  { title: "Female Pattern Hair Loss Treatment", img: "/images/FemaleHair.jpg", tag: "Hair" },
  { title: "Male Pattern Hair Loss Treatment", img: "/images/MaleHair.jpg", tag: "Hair" },
  { title: "Hair Transplant Consultation", img: "/images/PainlessHair.jpg", tag: "Hair" },
  { title: "PRP & Advanced Hair Procedures", img: "/images/HairPRP.jpeg", tag: "Hair" },
  { title: "Acne, Pimple & Acne Scars Treatment", img: "/images/service4.jpeg", tag: "Skin" },
  { title: "Chemical Peeling", img: "/images/service5.jpeg", tag: "Skin" },
  { title: "Carbon Laser Facial", img: "/images/service6.jpeg", tag: "Skin" },
  { title: "Hydrafacial with Jelly & Sheet Mask", img: "/images/service9.jpeg", tag: "Skin" },
  { title: "Korean Glass Glow Facial", img: "/images/service11.jpeg", tag: "Skin" },
  { title: "Laser Hair Reduction", img: "/images/service13.jpeg", tag: "Laser" },
  { title: "Skin Rejuvenation via Laser", img: "/images/service14.jpeg", tag: "Laser" },
  { title: "Pigmentation, Melasma & Dark Spot Care", img: "/images/service16.jpeg", tag: "Skin" },
  { title: "Tattoo Removal Treatment", img: "/images/service19.jpeg", tag: "Laser" },
  { title: "Mole & Wart Removal", img: "/images/service21.jpeg", tag: "Skin" },
  { title: "Anti-Ageing & Wrinkle Care", img: "/images/service26.jpeg", tag: "Skin" },
  { title: "Under Eye Dark Circles Treatment", img: "/images/service30.jpeg", tag: "Skin" },
];

const OurServices = ({ limit = 8, showHeader = true }) => {
  const visible = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section className="our-services section-padding pt-0">
      <div className="container">
        {showHeader && (
          <div className="text-center">
            <span className="section-badge">Treatments</span>
            <h2 className="section-title">
              Advanced Solutions for <span className="text-gradient">Hair & Skin</span>
            </h2>
            <p className="section-subtitle mx-auto" style={{ maxWidth: "680px" }}>
              Proven dermatology protocols, aesthetic procedures, and personalized treatment
              plans designed for real, visible results.
            </p>
          </div>
        )}

        <div className="row g-4 service-grid">
          {visible.map((service, index) => (
            <Motion.div
              key={service.title}
              className="col-sm-6 col-lg-3"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <article className="service-card">
                <img src={service.img} alt={service.title} loading="lazy" />
                <div className="service-card-body">
                  <span className="service-pill">{service.tag}</span>
                  <h5>{service.title}</h5>
                </div>
              </article>
            </Motion.div>
          ))}
        </div>

        {limit !== null && services.length > visible.length && (
          <div className="text-center mt-4">
            <Link to="/treatments" className="btn-brand-outline">
              View Full Treatment Menu
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServices;
