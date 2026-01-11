import React, { useEffect, useState, useRef } from "react";

const CountUp = ({ end = 0, suffix = "", duration = 900, start = true }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let rafId = null;
    let startTime = null;

    const step = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * end);
      setValue(current);
      if (progress < 1) rafId = requestAnimationFrame(step);
      else setValue(end);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, start]);

  return (
    <span className="stat-value">
      {value}
      {suffix}
    </span>
  );
};

const StatsBar = () => {
  const [animate, setAnimate] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      const t = setTimeout(() => setAnimate(true), 120);
      return () => clearTimeout(t);
    }

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const items = [
    { end: 16, suffix: "+", label: "Years of Experience" },
    { end: 23, suffix: "+", label: "Clinics All over India" },
    { end: 94, suffix: "%", label: "Client Retention" },
    { text: "Advanced", label: "US-FDA Approved Equipment" },
  ];

  return (
    <div className="stats-bar" ref={containerRef}>
      <div className="container-fluid">
        <div className="row text-white">
          {items.map((it, i) => (
            <div
              key={i}
              className={`col-md-3 col-6 stats-item ${animate ? "in" : ""} ${
                i > 0 ? "with-border" : ""
              }`}
              style={{ animationDelay: `${i * 0.16}s` }}
            >
              {it.end ? (
                <h2>
                  <CountUp end={it.end} suffix={it.suffix} duration={900 + i * 120} start={animate} />
                </h2>
              ) : (
                <h3 className="stat-text">{it.text}</h3>
              )}

              <p>{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
