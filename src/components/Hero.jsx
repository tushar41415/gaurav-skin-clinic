import { Link } from "react-router-dom";
import {
  motion as Motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  const contentY = useTransform(smoothProgress, [0, 1], [0, 165]);
  const contentOpacity = useTransform(
    smoothProgress,
    [0, 0.7, 1],
    [1, 0.92, 0.58],
  );
  const visualY = useTransform(smoothProgress, [0, 1], [0, 210]);
  const videoScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const videoOverlayOpacity = useTransform(smoothProgress, [0, 1], [0.45, 0.7]);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-video-bg" aria-hidden="true">
        <Motion.video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/Reception1.png"
          style={{ scale: videoScale }}
        >
          <source
            src="https://www.pexels.com/download/video/3997168/"
            type="video/mp4"
          />
          <source
            src="https://www.pexels.com/download/video/3996891/"
            type="video/mp4"
          />
          <source
            src="https://www.pexels.com/download/video/3741664/"
            type="video/mp4"
          />
        </Motion.video>
        <Motion.span
          className="hero-video-vignette"
          style={{ opacity: videoOverlayOpacity }}
        />
        <span className="hero-film-grain" />
      </div>

      <span className="hero-glow one" />
      <span className="hero-glow two" />

      <div className="container position-relative">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-7">
            <Motion.div
              className="hero-content-wrap"
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              style={{ y: contentY, opacity: contentOpacity }}
            >
              <div className="hero-eyebrow">
                <i className="bi bi-patch-check-fill" /> Signature Luxury Hair &
                Skin Care
              </div>

              <h1 className="hero-title">
                Experience{" "}
                <span className="text-gradient">Luxury Dermatology</span>{" "}
                Crafted for Confident Results
              </h1>

              <p className="hero-copy">
                Dr Derma Hair and Skin Clinic delivers premium hair restoration
                and skin rejuvenation protocols with bespoke consultation,
                advanced technology, and elegant patient care.
              </p>

              <div className="hero-cta">
                <Link to="/contact" className="btn-brand">
                  <i className="bi bi-calendar2-check" /> Book Consultation
                </Link>
                <a href="tel:+919217117898" className="btn-brand-outline">
                  <i className="bi bi-telephone-fill" /> Call +91 9217117898
                </a>
              </div>

              <div className="hero-points">
                <div className="hero-point">
                  <strong>Expert Team</strong>
                  <span>15 years of experience in premium clinical care</span>
                </div>
                <div className="hero-point">
                  <strong>Gaining numbers of </strong>
                  <span>Satisfied Clients</span>
                </div>
                <div className="hero-point">
                  <strong>USFDA approved Machines</strong>
                  <span>Global standard technology</span>
                </div>
              </div>
            </Motion.div>
          </div>

          <div className="col-lg-5">
            <Motion.div
              className="hero-visual"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              style={{ y: visualY }}
            >
              <div className="hero-image-main">
                <img
                  src="/images/Reception1.png"
                  alt="Dr Derma clinic reception area"
                />
              </div>

              <Motion.div
                className="hero-floating-card glass-card"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.45 }}
              >
                <h6 className="mb-1">Instant WhatsApp Support</h6>
                <p>Get quick treatment guidance and appointment slots.</p>
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
