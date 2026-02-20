import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/result1.jpg",
    alt: "Hair treatment result 1",
    category: "Hair",
  },
  {
    src: "/images/result2.jpg",
    alt: "Hair treatment result 2",
    category: "Hair",
  },
  {
    src: "/images/result3.jpg",
    alt: "Skin treatment result 1",
    category: "Skin",
  },
  {
    src: "/images/result4.jpg",
    alt: "Skin treatment result 2",
    category: "Skin",
  },
  {
    src: "/images/result5.jpg",
    alt: "Hair treatment result 3",
    category: "Hair",
  },
  { src: "/images/result6.jpg", alt: "Skin glow result", category: "Skin" },
  { src: "/images/result7.jpg", alt: "Hair regrowth result", category: "Hair" },
  { src: "/images/result8.jpg", alt: "Pigmentation result", category: "Skin" },
  { src: "/images/result9.jpg", alt: "Hairline recovery", category: "Hair" },
  { src: "/images/result10.jpg", alt: "Laser care result", category: "Skin" },
  {
    src: "/images/result11.jpg",
    alt: "Hair treatment result 4",
    category: "Hair",
  },
  {
    src: "/images/result12.jpg",
    alt: "Skin correction result",
    category: "Skin",
  },
];

const filters = ["All", "Hair", "Skin"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return galleryImages;
    return galleryImages.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (currentIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [currentIndex]);

  const currentImage = currentIndex !== null ? filtered[currentIndex] : null;

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filtered.length) % filtered.length;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filtered.length;
    });
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <div className="page-hero mb-4">
          <div className="hero-card">
            <span className="section-badge">Real Results</span>
            <h1 className="section-title">
              Before & After{" "}
              <span className="text-gradient">Transformation Gallery</span>
            </h1>
            <p className="section-subtitle mb-0">
              Genuine treatment outcomes from our clinic with 15 years of
              experience. Tap any image to view full size.
            </p>
          </div>
        </div>

        <div className="gallery-filter">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-chip ${activeFilter === filter ? "active" : ""}`}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentIndex(null);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((image, index) => (
            <Motion.button
              key={`${image.src}-${activeFilter}`}
              className="gallery-item p-0 border-0 bg-transparent"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span className="gallery-overlay">
                <strong>{image.category}</strong>
                <i className="bi bi-arrows-fullscreen" />
              </span>
            </Motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {currentImage && (
          <Motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCurrentIndex(null)}
          >
            <Motion.div
              className="lightbox-body"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={() => setCurrentIndex(null)}
              >
                <i className="bi bi-x-lg" />
              </button>
              <button className="lightbox-control left" onClick={handlePrev}>
                <i className="bi bi-chevron-left" />
              </button>
              <button className="lightbox-control right" onClick={handleNext}>
                <i className="bi bi-chevron-right" />
              </button>
              <img src={currentImage.src} alt={currentImage.alt} />
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
