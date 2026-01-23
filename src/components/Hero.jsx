import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Count component: animates from 0 to `target` when visible
  const Count = ({ target, duration = 1400, suffix = "" }) => {
    const [value, setValue] = useState(0);
    const elRef = useRef(null);
    const startedRef = useRef(false);

    useEffect(() => {
      const el = elRef.current;
      if (!el) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !startedRef.current) {
              startedRef.current = true;
              const start = performance.now();
              const from = 0;
              const to = Number(target) || 0;

              const step = (now) => {
                const t = Math.min((now - start) / duration, 1);
                const current = Math.floor(from + (to - from) * t);
                setValue(current);
                if (t < 1) requestAnimationFrame(step);
              };

              requestAnimationFrame(step);
              io.disconnect();
            }
          });
        },
        { threshold: 0.4 },
      );

      io.observe(el);
      return () => io.disconnect();
    }, [target, duration]);

    const format = (n) => {
      if (!n) return `0${suffix}`;
      if (target >= 1000) {
        const k = Math.floor(n / 1000);
        return `${k}K${suffix}`;
      }
      return `${n}${suffix}`;
    };

    return (
      <span ref={elRef} aria-hidden>
        {format(value)}
      </span>
    );
  };

  // ✅ SEO + UI balanced text
  const chunks = [
    { text: "Dr Derma", cls: "pop" },
    { text: "Hair & Skin Care Clinic", cls: "smooth rose" },
    { text: "Your Premier Beauty Destination", cls: "smooth" },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <motion.div
              className="animate-fade-in-up"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Optional badge */}
              <motion.span
                className="badge mb-3 px-4 py-2"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9rem",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                ✨ Welcome to Premium Care
              </motion.span>

              {/* 🔥 MAIN SEO H1 (ONLY ONE ON PAGE) */}
              <motion.h1
                className="display-4 fw-bold mb-4 text-white"
                style={{
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1.2,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {chunks.map((c, i) => (
                  <motion.span
                    key={i}
                    className={`hero-word ${c.cls} ${animate ? "in" : ""}`}
                    style={{
                      animationDelay: `${i * 0.22}s`,
                      marginRight: i < chunks.length - 1 ? "0.5rem" : 0,
                      display: "inline-block",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.2, duration: 0.6 }}
                  >
                    {c.text}
                  </motion.span>
                ))}
              </motion.h1>

              {/* ✅ Supporting SEO Paragraph */}
              <motion.p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  maxWidth: "520px",
                  marginBottom: "2rem",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                Dr Derma Hair & Skin Care Clinic is your premier destination for
                advanced hair loss treatments, skin care solutions, and
                dermatology services under expert care.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="d-flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="btn btn-light btn-lg shadow-lg"
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Book Appointment
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="tel:+918287818299"
                    className="btn btn-outline-light btn-lg"
                    style={{ borderColor: "rgba(255,255,255,0.5)" }}
                  >
                    <i className="bi bi-telephone me-2"></i>
                    Call Now
                  </a>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="d-flex align-items-center gap-4 mt-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  <h3 className="mb-0 text-white">
                    <Count target={16} duration={1100} suffix="+" />
                  </h3>
                  <small style={{ color: "rgba(255,255,255,0.8)" }}>
                    Years Experience
                  </small>
                </motion.div>

                <div
                  style={{
                    width: "1px",
                    height: "40px",
                    background: "rgba(255,255,255,0.3)",
                  }}
                />

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.0, duration: 0.6 }}
                >
                  <h3 className="mb-0 text-white">
                    <Count target={10000} duration={1500} suffix="+" />
                  </h3>
                  <small style={{ color: "rgba(255,255,255,0.8)" }}>
                    Happy Clients
                  </small>
                </motion.div>

                <div
                  style={{
                    width: "1px",
                    height: "40px",
                    background: "rgba(255,255,255,0.3)",
                  }}
                />

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                >
                  <h3 className="mb-0 text-white">
                    <Count target={20} duration={1100} suffix="+" />
                  </h3>
                  <small style={{ color: "rgba(255,255,255,0.8)" }}>
                    Treatments
                  </small>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
