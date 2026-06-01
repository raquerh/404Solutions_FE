import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './ProfileCommon.css';
import './ValeriaProfile.css';
import SkillBar from '../../components/SkillBar';


function getItemsPerView() {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 900) return 2;
  if (window.innerWidth < 1200) return 3;
  return 4;
}

function ValeriaProfile() {
  const [expandedMovies, setExpandedMovies] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(() => getItemsPerView());
  const [containerWidth, setContainerWidth] = useState(0);
  const carruselRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);
  const itemWidth = containerWidth / itemsPerView;
  const slideOffset = currentIndex * (itemWidth + 15);


  // Proyectos para el carrusel
  const projects = [
    {
      title: "Amigo Secreto",
      description: "Proyecto de ONE-Alura para práctica para curso de FrontEnd. Aplicación de gestión de sorteos.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/img/proyectos-valeria/Amigosecreto.png",
      github: "https://github.com/Irinath/challenge-amigo-secreto_esp-main.git",
      demo: "https://challenge-amigo-secreto-esp-main-six.vercel.app/"
    },
    {
      title: "Cotizador",
      description: "Proyecto realizado con React integrando APIs de proveedores, con posibilidad de ampliar a AMB de clientes e integrar con sistema de facturación y gestión de cobranzas",
      technologies: ["HTML", "CSS", "JavaScript", "React", "TailWinds"],
      image: "/img/proyectos-valeria/cotizadorpro.png",
      github: " ",
      demo: " "
    },
    {
      title: "E-Commerce App",
      description: "Proyecto de E-Commerce para curso de FrontEnd de Talento Tech 1c2025",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/img/proyectos-valeria/Organizalogia.png",
      github: "https://github.com/Irinath/organizalogia.git/",
      demo: "https://irinath.github.io/organizalogia/"
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
      setCurrentIndex(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!carruselRef.current) return;
    const observer = new ResizeObserver(entries => {
      setContainerWidth(entries[0].contentRect.width);
    });
    observer.observe(carruselRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMovie = (index) => {
    setExpandedMovies(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev >= albums.length - itemsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev <= 0 ? albums.length - itemsPerView : prev - 1
    );
  };

  // const slideOffset = currentIndex * (containerWidth / itemsPerView);

  const movies = [
    {
      title: "Eternal Sunshine of the Spotless Mind",
      videoId: "Lv4BNEn4kKo",
      description: "Una película que mezcla ciencia ficción y romance de una manera que te hace pensar en los recuerdos, el amor y lo que elegiríamos olvidar."
    },
    {
      title: "Ponyo",
      videoId: "n24T9bG4deY",
      description: "La historia se centra en Sosuke, un chico de 5 años, y su relación con una princesa pez que ansía convertirse en un ser humano."
    },
    {
      title: "Logan",
      videoId: "atu1yOOXIz0",
      description: "En un futuro cercano, un Logan exhausto cuida de un Charles Xavier enfermo en un escondite en la frontera con México. Pero sus intentos de esconderse del mundo y de su legado se ven frustrados con la llegada de una joven mutante, perseguido por fuerzas oscuras."
    },
    {
      title: "Érase una vez en... Hollywood",
      videoId: "ELeMaP8EPAA",
      description: "Había una vez… en Hollywood de Quentin Tarantino echa un vistazo a Los Ángeles en 1969, en un momento en que todo está cambiando, mientras la estrella de televisión Rick Dalto y su doble de riesgo Cliff Booth se abren paso en una industria que ya casi no reconocen. La novena película del escritor/director presenta un gran elenco y múltiples tramas en un tributo a los momentos finales de la Era..."
    }
  ];

  const technologies = [
    { name: "HTML5", img: "/img/tecnologias-valeria/HTML5_logo.png" },
    { name: "CSS3", img: "/img/tecnologias-valeria/CSS3_logo.png" },
    { name: "JavaScript", img: "/img/tecnologias-valeria/JavaScript_logo.png" },
    { name: "Tailwind", img: "/img/tecnologias-valeria/tailwind.svg" },
    { name: "Java", img: "/img/tecnologias-valeria/java.webp" },
    { name: "Kotlin", img: "/img/tecnologias-valeria/kotlin-1-logo.svg" },
    { name: "MySQL", img: "/img/tecnologias-valeria/MySQL-logo.png" },
    { name: "Git", img: "/img/tecnologias-valeria/git-logo.svg" },
    { name: "GitHub", img: "/img/tecnologias-valeria/GitHub-Logo.wine.svg" },
    { name: "Kubernetes", img: "/img/tecnologias-valeria/kubernetes.svg" },
    { name: "React", img: "/img/tecnologias-valeria/react.png" },
    { name: "Docker", img: "/img/tecnologias-valeria/docker-logo.svg" },
    { name: "NodeJS", img: "/img/tecnologias-valeria/nodejs-logo.svg" }
  ];


  const albums = [
    { title: "Aenima", artist: "Tool", img: "/img/img-valeria/Aenima.jpg", url: "https://www.youtube.com/watch?v=BC6B4G3za9M&list=RDBC6B4G3za9M&start_radio=1" },
    { title: "Dummy", artist: "PortisHead", img: "/img/img-valeria/Dummy.jpg", url: "https://www.youtube.com/watch?v=cXf2bvfSKOs" },
    { title: "Cowboy Bebop OST", artist: "The Seatbelts", img: "/img/img-valeria/CowboyBebop.jpg", url: "https://www.youtube.com/watch?v=6Hj6hPqKiS4" },
    { title: "Odelay", artist: "Beck", img: "/img/img-valeria/Odelay.jpg", url: "https://www.youtube.com/watch?v=5sdQVVggJu4&list=RD5sdQVVggJu4&start_radio=1&t=4s" },
    { title: "OK Computer", artist: "RadioHead", img: "/img/img-valeria/Ok-Computer-768x432.jpg", url: "https://www.youtube.com/watch?v=BxDciewLqAU&list=OLAK5uy_mJxHiRiLtU_LZlY8fY9vqkuQytX6wFY6Y" },
    { title: "Press Start", artist: "8bit Big Band", img: "/img/img-valeria/8bitBand.jpg", url: "https://www.youtube.com/watch?v=dNB0XgQaSNM" }
  ];

  return (
    <main className="profile-main">
      <article className="profile-card">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">user_profile.sh</span>
        </div>

        <div className="profile-content valeria-content">
          <div className="profile-header-flex">
            <div className="profile-image">
              <img src="/img/img-valeria/avatar_vale.png" alt="avatar estilo steam punk retro" title="avatar de mujer estilo steampunk retro" className="avatar-img" />
            </div>
            <div className="profile-data-box">
              <p>&gt; Name: Valeria</p>
              <p>&gt; LastName: Thomas</p>
              <p>&gt; Age: 45_</p>
              <p>&gt; Location: CABA-Arg_</p>
            </div>
          </div>

          <section className="profile-info">
            <p className="role">Fullstack Developer Student</p>
            <hr />
            <p className="description">
              Soy desarrolladora Fullstack con pasión por construir experiencias digitales que combinen
              funcionalidad y diseño. Me interesa el desarrollo web moderno, la accesibilidad y crear
              interfaces que las personas disfruten usar. Mi misión es crecer como profesional mientras
              construyo soluciones que tengan un impacto real y atractivo.
            </p>

            <br />
            <section id="habilidades">
              <h2 className="titulo" id="habilidades">Habilidades_</h2>
              {[0, 1, 2].map((row) => (
                <section key={row} className="contenedor-seccion-valeria">
                  <ul className="habilidades-valeria">
                    {technologies.slice(row * 4, (row + 1) * 4).map((tech, index) => (
                      <li key={index} className="listas-valeria">
                        <img className="logo-tecnologias-valeria" src={tech.img} alt={tech.name} />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <div className="skills-bars-valeria">
                <SkillBar skill="HTML5" level={85} delay={100} />
                <SkillBar skill="CSS3 / Bootstrap" level={80} delay={200} />
                <SkillBar skill="JavaScript" level={75} delay={300} />
                <SkillBar skill="Java / Kotlin" level={65} delay={650} />
                <SkillBar skill="MySQL" level={75} delay={600} />
                <SkillBar skill="NodeJS" level={60} delay={600} />
                <SkillBar skill="React" level={75} delay={750} />
                <SkillBar skill="Docker / Kubernetes" level={80} delay={800} />
                <SkillBar skill="Git / Github" level={100} delay={0} />
              </div>
            </section>

            <section id="proyectos">
              {/* Carrusel de Proyectos */}
              <h2 className="titulo" id="proyectos">Proyectos Destacados_</h2>
              <div className="proyectos-carrusel">
                <button className="carrusel-btn prev-btn" onClick={prevProject}>
                  <p>‹</p>
                </button>

                <div className="carrusel-contenedor">
                  <div className="proyecto-card">
                    <div className="proyecto-imagen">
                      <img src={projects[currentProject].image} alt={projects[currentProject].title} />
                    </div>
                    <div className="proyecto-info">
                      <h3>{projects[currentProject].title}</h3>
                      <p className="proyecto-descripcion">{projects[currentProject].description}</p>
                      <div className="proyecto-tecnologias">
                        {projects[currentProject].technologies.map((tech, idx) => (
                          <span key={idx} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                      <div className="proyecto-links">
                        <a href={projects[currentProject].github} target="_blank" rel="noopener noreferrer" className="proyecto-link">
                          <img className="icono-github" src="/img/tecnologias-mario/github.png" alt="github" /> Código
                        </a>
                        <a href={projects[currentProject].demo} target="_blank" rel="noopener noreferrer" className="proyecto-link">
                          🔗 Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="carrusel-btn next-btn" onClick={nextProject}>
                  <p>›</p>
                </button>
              </div>

              <div className="carrusel-indicadores">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    className={`indicador ${currentProject === idx ? 'activo' : ''}`}
                    onClick={() => goToProject(idx)}
                    aria-label={`Ir al proyecto ${idx + 1}`}
                  />
                ))}
              </div>
            </section>

            <section className="media-section">
              <h2>Películas Favoritas_</h2>
              {movies.map((movie, index) => (
                <div key={index} className="contenedor-peliculas">
                  <iframe
                    src={`https://www.youtube.com/embed/${movie.videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <h4>{movie.title}</h4>
                  <div className="contenedor">
                    <p className={`description-peliculas parrafo-expandible ${expandedMovies[index] ? 'parrafo-completo' : 'parrafo-resumido'}`}>
                      {movie.description}
                    </p>
                    <button
                      className="btn-leer"
                      aria-expanded={expandedMovies[index] || false}
                      onClick={() => toggleMovie(index)}
                    >
                      {expandedMovies[index] ? 'Leer menos' : 'Leer más'}
                    </button>
                  </div>
                </div>
              ))}
            </section>

            {/* SOLUCIÓN: media-section-discos diferenciada de media-section 
            con width: 100vw para evitar overflow del carrusel*/}
            <section className="media-section discos">
              <h2>Discos Favoritos_</h2>
              <div ref={carruselRef} className="carrusel-container">
                <button
                  className="carrusel-btn prev"
                  aria-label="Anterior"
                  onClick={prevSlide}
                >
                  &lt;
                </button>
                <div className="discos-favoritos" style={{
                  transform: `translateX(-${slideOffset}px)`,
                  display: 'flex',
                  flexWrap: 'nowrap'
                }}>
                  {albums.map((album, index) => (
                    <figure key={index} className="disco-item">
                      <img src={album.img} alt={`Portada disco ${album.title} - ${album.artist}`} />
                      <figcaption>
                        <span>{album.title}</span>
                        <a href={album.url} target="_blank" rel="noopener noreferrer" aria-label={`Escuchar ${album.title} en YouTube`}>▶</a>
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <button
                  className="carrusel-btn next"
                  aria-label="Siguiente"
                  onClick={nextSlide}
                >
                  &gt;
                </button>
              </div>
            </section>
          </section>
        </div>
      </article>

      <div className="back-navigation">
        <Link to="/" className="nav-button">_VOLVER_AL_INICIO</Link>
      </div>
    </main>
  );
}

export default ValeriaProfile;
