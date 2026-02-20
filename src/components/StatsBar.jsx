import { useEffect, useRef, useState } from "react";
import { motion as Motion } from "framer-motion";

const Counter = ({ end, suffix = "", duration = 1200, shouldStart }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let raf;
    let start;

    const step = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, shouldStart]);

  return (
    <span className="stat-value">
      {value}
      {suffix}
    </span>
  );
};

const StatsBar = () => {
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="stats-strip section-padding pt-0">
      <div className="container">
        <Motion.div
          className="stats-shell"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <div className="row g-3 align-items-center">
            <div className="col-lg-7">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="stat-card">
                    <Counter end={94} suffix="%" shouldStart={start} />
                    <div className="stat-label">Client retention rate</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-card">
                    <Counter end={10} suffix="K+" shouldStart={start} />
                    <div className="stat-label">Consultations completed</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-card">
                    <Counter end={24} suffix="/7" shouldStart={start} />
                    <div className="stat-label">Support availability</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <h3 className="mb-3">Why people keep choosing Dr Derma</h3>
              <ul className="trust-list">
                <li>
                  <i className="bi bi-check2-circle" /> 15 years of experience
                  in hair and skin treatments.
                </li>
                <li>
                  <i className="bi bi-check2-circle" /> Treatment plans tailored
                  to your hair and skin profile.
                </li>
                <li>
                  <i className="bi bi-check2-circle" /> International standard
                  hygiene and modern equipment.
                </li>
                <li>
                  <i className="bi bi-check2-circle" /> Continuous after-care
                  support for better outcomes.
                </li>
              </ul>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
