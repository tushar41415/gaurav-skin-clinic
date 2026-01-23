import React, { useState, useEffect } from "react";

const images = [
  "./images/result1.jpg",
  "./images/result2.jpg",
  "./images/result3.jpg",
  "./images/result4.jpg",
  "./images/result5.jpg",
  "./images/result6.jpg",
    "./images/result7.jpg",
    "./images/result8.jpg",
    "./images/result9.jpg",
    "./images/result10.jpg",
    "./images/result11.jpg",
    "./images/result12.jpg",
    
];

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.75)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalInnerStyle = {
  position: "relative",
  maxWidth: "90vw",
  maxHeight: "85vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const closeBtnStyle = {
  position: "absolute",
  top: "8px",
  right: "8px",
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "32px",
  cursor: "pointer",
};

const OurResults = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="our-results">
      <div className="container">

        <h2 className="results-title">
          Our <span>Results</span>
        </h2>

        <div className="row">
          {images.map((src, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div
                className="result-card"
                onClick={() => setSelected(src)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={src}
                  alt={`Result ${index + 1}`}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div
            className="result-modal"
            onClick={() => setSelected(null)}
            style={overlayStyle}
          >
            <div style={modalInnerStyle} onClick={(e) => e.stopPropagation()}>
              <button
                aria-label="Close"
                onClick={() => setSelected(null)}
                style={closeBtnStyle}
              >
                ×
              </button>
              <img
                src={selected}
                alt="Enlarged result"
                style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: 6 }}
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default OurResults;
