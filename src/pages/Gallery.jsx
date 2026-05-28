import { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: '/img/discos-mariana/GunsRoses.jpg',
      title: "Guns N' Roses - Greatest Hits",
      category: 'Música'
    },
    {
      id: 2,
      src: '/img/discos-mariana/Queen.jpg',
      title: 'Queen - Greatest Hits',
      category: 'Música'
    },
    {
      id: 3,
      src: '/img/discos-mariana/PinkFloyd.svg',
      title: 'Pink Floyd - The Wall',
      category: 'Música'
    },
    {
      id: 4,
      src: '/img/discos-mario/californication.jpg',
      title: 'Red Hot Chili Peppers - Californication',
      category: 'Música'
    },
    {
      id: 5,
      src: '/img/discos-mario/linkin_park_hybrid_theory.png',
      title: 'Linkin Park - Hybrid Theory',
      category: 'Música'
    },
    {
      id: 6,
      src: '/img/discos-mario/daft_punk_discovery.jpg',
      title: 'Daft Punk - Discovery',
      category: 'Música'
    },
    {
      id: 7,
      src: '/img/discos-mike/alta_suciedad.jpg',
      title: 'Andrés Calamaro - Alta Suciedad',
      category: 'Música'
    },
    {
      id: 8,
      src: '/img/discos-mike/cancion-animal-3-768x768.jpg',
      title: 'Soda Stereo - Canción Animal',
      category: 'Música'
    },
    {
      id: 9,
      src: '/img/discos-raquel/ACDC_Back_in_Black.png',
      title: 'AC/DC - Back in Black',
      category: 'Música'
    },
    {
      id: 10,
      src: '/img/discos-raquel/Metallica_-_Metallica_cover.jpg',
      title: 'Metallica - Metallica (Black Album)',
      category: 'Música'
    },
    {
      id: 11,
      src: '/img/discos-raquel/IronMaiden_NumberOfBeast.jpg',
      title: 'Iron Maiden - The Number of the Beast',
      category: 'Música'
    },
    {
      id: 12,
      src: '/img/img-valeria/Aenima.jpg',
      title: 'Tool - Ænima',
      category: 'Música'
    },
    {
      id: 13,
      src: '/img/img-valeria/Ok-Computer-768x432.jpg',
      title: 'Radiohead - OK Computer',
      category: 'Música'
    },
    {
      id: 14,
      src: '/img/img-valeria/Dummy.jpg',
      title: 'Portishead - Dummy',
      category: 'Música'
    },
    {
      id: 15,
      src: '/img/avatar_mariana3.jpg',
      title: 'Mariana - Team Member',
      category: 'Equipo'
    },
    {
      id: 16,
      src: '/img/mario.png',
      title: 'Mario - Team Member',
      category: 'Equipo'
    },
    {
      id: 17,
      src: '/img/avatar_mike.png',
      title: 'Mike - Team Member',
      category: 'Equipo'
    },
    {
      id: 18,
      src: '/img/perfil-raq.png',
      title: 'Raquel - Team Member',
      category: 'Equipo'
    }
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
          {images.length} imágenes | Click para ampliar | Navegación con teclado (←/→/ESC)
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
