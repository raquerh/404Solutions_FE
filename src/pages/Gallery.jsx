import { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Equipo');

  const allImages = [
    // --- EQUIPO ---
    { id: 1,  src: '/img/avatar_mariana3.jpg',                       title: 'Mariana Aiello',           category: 'Equipo' },
    { id: 2,  src: '/img/mario.png',                                  title: 'Mario González',           category: 'Equipo' },
    { id: 3,  src: '/img/avatar_mike.png',                            title: 'Mike Flores',              category: 'Equipo' },
    { id: 4,  src: '/img/perfil-raq.png',                             title: 'Raquel Rodríguez',         category: 'Equipo' },
    { id: 5,  src: '/img/img-valeria/avatar_vale.png',                title: 'Valeria Thomas',           category: 'Equipo' },
    { id: 6,  src: '/img/super-mario64.png',                          title: 'Mascota del equipo',       category: 'Equipo' },
    // --- APP (capturas de 404 Solutions — orden: sidebar) ---
    // · Dashboard
    { id: 37, src: '/img/readme-img/tp2-home-loading.gif.gif',   title: 'Dashboard — Pantalla de Carga',          category: 'App' },
    { id: 38, src: '/img/readme-img/tp2-sidebar.gif.gif',        title: 'Dashboard — Hero & Diagnóstico',         category: 'App' },
    { id: 39, src: '/img/readme-img/func-diagnostico.gif',       title: 'Dashboard — Simulador de Diagnóstico',   category: 'App' },
    { id: 40, src: '/img/readme-img/tp2-menu-mobile.gif.gif',    title: 'Dashboard — Vista Mobile',               category: 'App' },
    // · Explorador JSON
    { id: 42, src: '/img/readme-img/tp2-json-filter.gif.gif',    title: 'Explorador JSON — Filtrado en Tiempo Real', category: 'App' },
    // · Música
    { id: 43, src: '/img/readme-img/tp2-api-paginacion.gif.gif', title: 'Música — iTunes API con Paginación',     category: 'App' },
    // · Galería
    { id: 44, src: '/img/readme-img/galeria.gif',                title: 'Galería — Galería Interactiva',          category: 'App' },
    // · Perfiles
    { id: 46, src: '/img/readme-img/func-galeria.gif',           title: 'Mariana — Galería de Películas',         category: 'App' },
    { id: 47, src: '/img/readme-img/func-expandible-mario.gif',  title: 'Mario — Películas Favoritas',            category: 'App' },
    { id: 48, src: '/img/readme-img/func-consulta-mike.gif',     title: 'Mike — Consulta Data Science',           category: 'App' },
    { id: 49, src: '/img/readme-img/func-scroll.gif',            title: 'Raquel — Navegación por Secciones',      category: 'App' },
    { id: 50, src: '/img/readme-img/func-copiar-url.gif',        title: 'Raquel — Copiar URL del Perfil',         category: 'App' },
    { id: 51, src: '/img/readme-img/func-carrousel.gif',         title: 'Valeria — Carrusel de Discos',           category: 'App' },
    // · General
    { id: 52, src: '/img/readme-img/func-año.png',               title: 'Footer — Año Dinámico',                  category: 'App' },
    // --- PROYECTOS ---
    { id: 7,  src: '/img/proyectos-mariana/proyecto1.png',            title: 'Proyecto 1 — Mariana',     category: 'Proyectos' },
    { id: 8,  src: '/img/proyectos-mariana/proyecto2.png',            title: 'Proyecto 2 — Mariana',     category: 'Proyectos' },
    { id: 9,  src: '/img/proyectos-mariana/proyecto3.png',            title: 'Proyecto 3 — Mariana',     category: 'Proyectos' },
    { id: 10, src: '/img/proyectos-mario/ecommerce.png',              title: 'E-commerce — Mario',       category: 'Proyectos' },
    { id: 11, src: '/img/proyectos-mario/weatherapp.png',             title: 'Weather App — Mario',      category: 'Proyectos' },
    { id: 12, src: '/img/proyectos-mario/peluqueriacanina.png',       title: 'Peluquería Canina — Mario',category: 'Proyectos' },
    { id: 13, src: '/img/clinicflow.png',                             title: 'ClinicFlow — Mike',        category: 'Proyectos' },
    { id: 14, src: '/img/validator_mike.png',                         title: 'Validator — Mike',         category: 'Proyectos' },
    { id: 15, src: '/img/clinicflow-wp.png',                          title: 'ClinicFlow WP — Mike',     category: 'Proyectos' },
    { id: 16, src: '/img/proyectos-raquel/portfolio.JPG',             title: 'Portfolio — Raquel',       category: 'Proyectos' },
    { id: 17, src: '/img/proyectos-raquel/rrh-motoparts.JPG',         title: 'RRH Motoparts — Raquel',   category: 'Proyectos' },
    { id: 18, src: '/img/proyectos-raquel/CAC-movies.JPG',            title: 'CAC Movies — Raquel',      category: 'Proyectos' },
    { id: 19, src: '/img/proyectos-valeria/Amigosecreto.png',         title: 'Amigo Secreto — Valeria',  category: 'Proyectos' },
    { id: 20, src: '/img/proyectos-valeria/cotizadorpro.png',         title: 'Cotizador Pro — Valeria',  category: 'Proyectos' },
    { id: 21, src: '/img/proyectos-valeria/Organizalogia.png',        title: 'Organizalogía — Valeria',  category: 'Proyectos' },
    // --- PELÍCULAS ---
    { id: 22, src: '/img/peliculas-mariana/pelicula1.jpg',            title: 'Oldboy (2003)',            category: 'Películas' },
    { id: 23, src: '/img/peliculas-mariana/pelicula3.jpg',            title: 'The Matrix (1999)',        category: 'Películas' },
    { id: 24, src: '/img/peliculas-mariana/pelicula2.jpeg',           title: 'Kill Bill: Vol. 1 (2003)', category: 'Películas' },
    { id: 25, src: '/img/peliculas-raquel/terminator.jpg',            title: 'The Terminator (1984)',    category: 'Películas' },
    { id: 26, src: '/img/peliculas-raquel/ghost_in_the_shell.jpg',    title: 'Ghost in the Shell (1995)',category: 'Películas' },
    // --- MÚSICA ---
    { id: 27, src: '/img/discos-mariana/Queen.jpg',                   title: 'Queen — Mariana',          category: 'Música' },
    { id: 28, src: '/img/discos-mariana/HansZimmer.jpg',              title: 'Hans Zimmer — Mariana',    category: 'Música' },
    { id: 29, src: '/img/discos-mario/californication.jpg',           title: 'Californication — Mario',  category: 'Música' },
    { id: 30, src: '/img/discos-mario/daft_punk_discovery.jpg',       title: 'Discovery — Mario',        category: 'Música' },
    { id: 31, src: '/img/discos-mike/alta_suciedad.jpg',              title: 'Alta Suciedad — Mike',     category: 'Música' },
    { id: 32, src: '/img/discos-mike/oktubre.jpg',                    title: 'Oktubre — Mike',           category: 'Música' },
    { id: 33, src: '/img/discos-raquel/Metallica_-_Metallica_cover.jpg', title: 'Metallica — Raquel',   category: 'Música' },
    { id: 34, src: '/img/discos-raquel/IronMaiden_NumberOfBeast.jpg', title: 'Iron Maiden — Raquel',     category: 'Música' },
    { id: 35, src: '/img/img-valeria/Aenima.jpg',                     title: 'Ænima — Valeria',          category: 'Música' },
    { id: 36, src: '/img/img-valeria/Ok-Computer-768x432.jpg',        title: 'OK Computer — Valeria',    category: 'Música' },
  ];

  const categories = ['Equipo', 'App', 'Proyectos', 'Películas', 'Música', 'Todos'];

  const images = activeCategory === 'Todos'
    ? allImages
    : allImages.filter(img => img.category === activeCategory);

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
          {images.length} imágenes · Click para ampliar · ←/→/ESC
        </p>
        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat); setCurrentImageIndex(0); }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de imágenes */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <article
            key={image.id}
            className={`gallery-item${image.category === 'App' ? ' gallery-item--app' : ''}`}
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
