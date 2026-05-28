import { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: '/img/avatar_mariana3.jpg',
      title: 'Mariana Aiello',
      category: 'Equipo'
    },
    {
      id: 2,
      src: '/img/mario.png',
      title: 'Mario González',
      category: 'Equipo'
    },
    {
      id: 3,
      src: '/img/avatar_mike.png',
      title: 'Mike Flores',
      category: 'Equipo'
    },
    {
      id: 4,
      src: '/img/perfil-raq.png',
      title: 'Raquel Rodríguez',
      category: 'Equipo'
    },
    {
      id: 5,
      src: '/img/img-valeria/avatar_vale.png',
      title: 'Valeria Thomas',
      category: 'Equipo'
    },
    {
      id: 6,
      src: '/img/super-mario64.png',
      title: 'Mario - Mascota del equipo',
      category: 'Equipo'
    },
    {
      id: 7,
      src: '/img/peliculas-mariana/pelicula1.jpg',
      title: 'Oldboy (2003)',
      category: 'Películas'
    },
    {
      id: 8,
      src: '/img/peliculas-mariana/pelicula3.jpg',
      title: 'The Matrix (1999)',
      category: 'Películas'
    },
    {
      id: 9,
      src: '/img/peliculas-mariana/pelicula2.jpeg',
      title: 'Kill Bill: Vol. 1 (2003)',
      category: 'Películas'
    },
    {
      id: 10,
      src: '/img/img-valeria/background.webp',
      title: 'Fondo artístico - Valeria',
      category: 'Arte'
    },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Manejo de teclas
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, goToNext, goToPrevious]);

  // Prevenir scroll cuando el lightbox está abierto
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">image_gallery.exe</span>
        </div>
        <h1>&gt; Galería Interactiva_</h1>
        <p className="subtitle">
          {images.length} imágenes — Equipo · Películas · Arte | Click para ampliar | ←/→/ESC
        </p>
      </div>

      {/* Grid de imágenes */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <article
            key={image.id}
            className="gallery-item"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
              }
            }}
          >
            <img src={image.src} alt={image.title} className="gallery-image" />
            <div className="gallery-overlay">
              <span className="zoom-icon">🔍</span>
              <p className="image-title">{image.title}</p>
              <span className="image-category">{image.category}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar lightbox"
          >
            ✕
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Imagen anterior"
          >
            ←
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].title}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <h3>{images[currentImageIndex].title}</h3>
              <p className="lightbox-category">{images[currentImageIndex].category}</p>
              <p className="lightbox-counter">
                {currentImageIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Imagen siguiente"
          >
            →
          </button>

          <div className="lightbox-instructions">
            <span>← → Navegar</span>
            <span>ESC Cerrar</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
