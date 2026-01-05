import React, { useState, useEffect } from 'react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600',
    alt: 'Hair Treatment Result',
    category: 'Hair',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600',
    alt: 'Skin Care Treatment',
    category: 'Skin',
  },
  {
    src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600',
    alt: 'Before After Hair',
    category: 'Hair',
  },
  {
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600',
    alt: 'Facial Treatment',
    category: 'Skin',
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
    alt: 'Glowing Skin Result',
    category: 'Skin',
  },
  {
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600',
    alt: 'Hair Regrowth',
    category: 'Hair',
  },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightboxOpen]);

  const openLightbox = (src) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section id="gallery" className="section-padding bg-light position-relative overflow-hidden">
      {/* Background Elements */}
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'rgba(154, 208, 194, 0.08)',
          borderRadius: '50%',
          top: '-100px',
          right: '-100px',
        }}
      ></div>

      <div className="container position-relative">
        <div className="text-center mb-5">
          <h2 className="section-title">Before &amp; After Gallery</h2>

          <p className="lead text-muted">
            See the transformative results our clients have achieved
          </p>
        </div>

        <div className="row g-5">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="col-md-6 col-lg-4"
              style={{
                animation: `fadeIn 0.6s ease forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <style>{`
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                    transform: scale(0.95);
                  }
                  to {
                    opacity: 1;
                    transform: scale(1);
                  }
                }
              `}</style>
              <div
                className="position-relative overflow-hidden rounded-4 hover-lift"
                onClick={() => openLightbox(image.src)}
                style={{
                  cursor: 'pointer',
                  height: '350px',
                  boxShadow: '0 10px 30px rgba(45, 149, 150, 0.15)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(45, 149, 150, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(45, 149, 150, 0.15)';
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-100 h-100"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Overlay */}
                <div
                  className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center"
                  style={{
                    background: 'rgba(45, 149, 150, 0.3)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                >
                  <i 
                    className="bi bi-zoom-in"
                    style={{
                      fontSize: '3rem',
                      color: 'white',
                    }}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={closeLightbox}
        >
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>
          
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10000,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <img
            src={currentImage}
            alt="Gallery Preview"
            style={{
              maxWidth: '90%',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '20px',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
