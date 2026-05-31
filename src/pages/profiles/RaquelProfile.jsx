import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProfileCommon.css';
import './RaquelProfile.css';

function RaquelProfile() {
  const [activeSection, setActiveSection] = useState('sobre-mi');
  const [copySuccess, setCopySuccess] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Portfolio Personal",
      description: "Landing page de portfolio personal desarrollada como PFO1 del curso de Front End en el IFTS N°29. Estética terminal/cyberpunk con animaciones glitch, cursor parpadeante, barras de progreso estilo RPG y diseño responsivo.",
      technologies: ["HTML5", "CSS3", "Google Fonts", "Vercel"],
      language: "HTML",
      image: "/img/proyectos-raquel/portfolio.JPG",
      github: "https://github.com/raquerh/IFTS29-FRONT-END-PFO1",
      demo: "https://ifts-29-front-end-pfo-1.vercel.app/"
    },
    {
      title: "RRH Motoparts",
      description: "Proyecto final integrador del curso Talento Tech Front-End. Tienda online de repuestos y accesorios para motos con carrito de compras persistente via localStorage, búsqueda y filtrado de productos, y formulario de contacto via Formspree.",
      technologies: ["HTML5", "CSS3", "JavaScript", "localStorage", "Formspree"],
      language: "CSS / JS",
      image: "/img/proyectos-raquel/rrh-motoparts.JPG",
      github: "https://github.com/raquerh/Proyecto-Final-FrontEnd-Talento-Tech",
      demo: null
    },
    {
      title: "CAC Movies",
      description: "Aplicación web de películas desarrollada para el bootcamp Codo a Codo Full Stack Java. Integra la TMDB API para obtener datos en tiempo real, incluye autenticación con validación de formularios y gestión dinámica de contenido con JavaScript.",
      technologies: ["HTML5", "CSS3", "JavaScript", "TMDB API"],
      language: "JS / CSS",
      image: "/img/proyectos-raquel/CAC-movies.JPG",
      github: "https://github.com/raquerh/CAC-Movies",
      demo: null
    },
    {
      title: "Conversor de Monedas",
      description: "Aplicación de escritorio con GUI para conversión de monedas en tiempo real. Consume la ExchangeRate-API con procesamiento JSON via Gson. Soporta USD, ARS, BRL, COP, MXN y JPY con formato numérico español y manejo robusto de errores.",
      technologies: ["Java 22", "Swing", "Gson", "ExchangeRate-API"],
      language: "Java",
      image: "/img/proyectos-raquel/conversor-monedas.JPG",
      github: "https://github.com/raquerh/Challenge-ONE-G8-Conversor-de-Monedas",
      demo: null
    },
    {
      title: "Gestión de Inventario",
      description: "Sistema de gestión de inventario para motopartes desarrollado como PFI del curso Python de Talento Tech. Interfaz de menú en consola con Colorama. Permite agregar, ver, actualizar y eliminar productos, búsqueda multi-campo y reportes de stock bajo por umbral.",
      technologies: ["Python", "SQLite", "Colorama"],
      language: "Python",
      image: "/img/proyectos-raquel/pfi-talentotech-python.JPG",
      github: "https://github.com/raquerh/PFI-Talento-Tech",
      demo: null
    }
  ];

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  const goToProject = (index) => setCurrentProject(index);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['sobre-mi', 'habilidades', 'proyectos', 'peliculas', 'discos'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyProfileUrl = async () => {
    try {
      const url = window.location.href.split('#')[0];
      await navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2200);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const movies = [
    {
      title: "The Terminator",
      year: "1984 · SCI-FI / ACCIÓN",
      description: "La película que definió el género de ciencia ficción oscura de los 80. James Cameron creó una visión aterradora del futuro donde las máquinas dominan. Explora el miedo a la tecnología descontrolada y el poder de la resistencia humana. Pura tensión y atmósfera cyberpunk.",
      director: "Dir. James Cameron",
      trailer: "https://www.youtube.com/watch?v=k64P4l2Wmeg",
      poster: "/img/peliculas-raquel/terminator.jpg"
    },
    {
      title: "Ghost in the Shell",
      year: "1995 · ANIME / SCI-FI",
      description: "Un clásico del anime cyberpunk que explora la fusión entre humano y máquina. Mamoru Oshii crea una narrativa filosófica sobre consciencia y tecnología que sigue siendo relevante décadas después. Influenció toda una generación de ciencia ficción.",
      director: "Dir. Mamoru Oshii",
      trailer: "https://www.youtube.com/watch?v=SvBVDibOrgs",
      poster: "/img/peliculas-raquel/ghost_in_the_shell.jpg"
    },
    {
      title: "The Matrix",
      year: "1999 · SCI-FI / ACCIÓN",
      description: "Revolucionó el cine de ciencia ficción con su propuesta visual y filosófica. La pregunta sobre qué es real y qué es simulación nunca fue tan relevante como ahora. Un film que cambió la forma de hacer y pensar el cine de acción.",
      director: "Dir. Lana y Lilly Wachowski",
      trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
      poster: "/img/peliculas-raquel/matrix.jpg"
    }
  ];

  const albums = [
    { title: "Metallica", artist: "Metallica", year: "1991", description: "El álbum negro que definió una era. Enter Sandman, Nothing Else Matters, Sad But True.", img: "/img/discos-raquel/Metallica_-_Metallica_cover.jpg", url: "https://www.youtube.com/watch?v=xnKhsTXoKCI&list=PLxzSZG7g8c8y8Q4figxpJE7JCxZnKFnxl" },
    { title: "The Number of the Beast", artist: "Iron Maiden", year: "1982", description: "El debut de Bruce Dickinson. Run to the Hills, Hallowed Be Thy Name. Metal épico.", img: "/img/discos-raquel/IronMaiden_NumberOfBeast.jpg", url: "https://www.youtube.com/watch?v=WxnN05vOuSM&list=PLxzSZG7g8c8ynC2yHSm5S-SXjY_h5oXE8" },
    { title: "Paranoid", artist: "Black Sabbath", year: "1970", description: "Los padres del heavy metal. War Pigs, Iron Man, Paranoid. Oscuro y pesado.", img: "/img/discos-raquel/Black_Sabbath_-_Paranoid.jpg", url: "https://www.youtube.com/watch?v=uk_wUT1CvWM&list=PLxzSZG7g8c8yCXF-6mv7Nn5pLMZmXVXVZ" },
    { title: "Destroyer", artist: "KISS", year: "1976", description: "Rock teatral en su máxima expresión. Detroit Rock City, God of Thunder, Shout It Out Loud.", img: "/img/discos-raquel/Kiss-Destroyer.jpg", url: "https://www.youtube.com/watch?v=I2rV8GKhyKiS4&list=PLxzSZG7g8c8wvKl2e-BxQjBCCx8bT7Qqz" },
    { title: "Appetite for Destruction", artist: "Guns N' Roses", year: "1987", description: "Welcome to the Jungle. Sweet Child O' Mine. Paradise City. El debut más explosivo del hard rock.", img: "/img/discos-raquel/appetite_for_destruction_GNR.jpg", url: "https://www.youtube.com/watch?v=Rbm6GXllBiw&list=PLxzSZG7g8c8x_SamWaLRWST-U8JLmqKHm" },
    { title: "Back in Black", artist: "AC/DC", year: "1980", description: "El tributo perfecto a Bon Scott. Hard rock puro y directo. Uno de los álbumes más vendidos de la historia.", img: "/img/discos-raquel/ACDC_Back_in_Black.png", url: "https://www.youtube.com/watch?v=pAgnJDJN4VA&list=PLxzSZG7g8c8wvKl2e-BxQjBCCx8bT7Qqz" }
  ];

  const skills = [
    { tech: "HTML5", level: "Avanzado", xp: 90 },
    { tech: "CSS3", level: "Avanzado", xp: 85 },
    { tech: "JavaScript", level: "Intermedio", xp: 70 },
    { tech: "Python", level: "Intermedio", xp: 65 },
    { tech: "Java", level: "Básico", xp: 40 }
  ];

  return (
    <main className="profile-main">
      <nav className="nav-principal" id="nav-principal">
        <div className="nav-inner">
          <span className="nav-label">// NAVEGAR</span>
          <ul>
            <li><a href="#sobre-mi" className={activeSection === 'sobre-mi' ? 'nav-section-active' : ''}><span className="nav-num">01.</span> sobre_mi</a></li>
            <li><a href="#habilidades" className={activeSection === 'habilidades' ? 'nav-section-active' : ''}><span className="nav-num">02.</span> habilidades</a></li>
            <li><a href="#proyectos" className={activeSection === 'proyectos' ? 'nav-section-active' : ''}><span className="nav-num">03.</span> proyectos</a></li>
            <li><a href="#peliculas" className={activeSection === 'peliculas' ? 'nav-section-active' : ''}><span className="nav-num">04.</span> peliculas</a></li>
            <li><a href="#discos" className={activeSection === 'discos' ? 'nav-section-active' : ''}><span className="nav-num">05.</span> discos</a></li>
          </ul>
        </div>
      </nav>

      <article className="profile-card">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">user_profile.sh</span>
        </div>

        <div className="profile-content-wrapper">
          <section id="sobre-mi">
            <div className="section-header">
              <span className="section-tag">// 01 — IDENTIFICACIÓN</span>
              <h2>Sobre mí_</h2>
            </div>
            <div className="sobre-mi-grid">
              <div className="sobre-mi-img-wrapper">
                <div className="avatar-frame">
                  <img src="/img/perfil-raq.png" alt="Avatar generado de Raquel" className="avatar-img" loading="lazy" width="300" height="300" />
                  <div className="avatar-overlay"></div>
                  <div className="avatar-border-anim"></div>
                </div>
              </div>
              <div className="profile-data-box">
                <p>&gt; ID: #0051_</p>
                <p>&gt; Name: Raquel_</p>
                <p>&gt; Age: 404 años (error no encontrado)_</p>
                <p>&gt; Clase: Desarrolladora_</p>
                <p>&gt; Location: La Plata, Buenos Aires, AR_</p>
              </div>
            </div>
            <div className="sobre-mi-texto">
              <p className="typed-intro">
                Hola. Soy <strong>Raquel</strong>, estudiante de la Tecnicatura Superior en Desarrollo de Software.
                Llegué al código desde otro lado, lo que me da una mirada diferente: sé que los sistemas
                no son neutrales, que el diseño tiene consecuencias, y que construir software es también
                tomar decisiones sobre el mundo.
              </p>
              <p>
                Fuera de las pantallas académicas, paso tiempo en mundos distópicos —tanto en videojuegos
                como en películas de ciencia ficción. Hay algo en esos universos rotos y reconstruidos
                que me recuerda por qué me interesa hacer tecnología con intención.
              </p>
              <p>
                Estoy aprendiendo a programar y, más importante, estoy aprendiendo a pensar como
                desarrolladora. Este portfolio es un log en tiempo real de ese proceso.
              </p>
              <div className="social-links">
                <a href="https://github.com/raquerh" target="_blank" rel="noopener noreferrer" className="nav-button social-btn"><i className="fa-brands fa-github"></i> GitHub</a>
                <a href="https://www.linkedin.com/in/raquel-rodriguez-herlein/" target="_blank" rel="noopener noreferrer" className="nav-button social-btn"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
              </div>
              <div className="profile-actions">
                <button
                  type="button"
                  id="copy-profile-url"
                  className={`nav-button copy-profile-btn ${copySuccess ? 'is-copied' : ''}`}
                  onClick={copyProfileUrl}
                >
                  <span className="copy-profile-text">
                    {copySuccess ? '¡Enlace copiado!' : 'Copiar enlace al perfil'}
                  </span>
                </button>
              </div>
            </div>
          </section>

          <section id="habilidades">
            <div className="section-header">
              <span className="section-tag">// 02 — STATS</span>
              <h2>Habilidades_</h2>
            </div>
            <div className="tech-icons-raquel">
              <div className="tech-icon-raquel" title="HTML5">
                <i className="devicon-html5-plain colored"></i>
                <span>HTML5</span>
              </div>
              <div className="tech-icon-raquel" title="CSS3">
                <i className="devicon-css3-plain colored"></i>
                <span>CSS3</span>
              </div>
              <div className="tech-icon-raquel" title="JavaScript">
                <i className="devicon-javascript-plain colored"></i>
                <span>JavaScript</span>
              </div>
              <div className="tech-icon-raquel" title="Python">
                <i className="devicon-python-plain colored"></i>
                <span>Python</span>
              </div>
              <div className="tech-icon-raquel" title="Java">
                <i className="devicon-java-plain colored"></i>
                <span>Java</span>
              </div>
              <div className="tech-icon-raquel" title="Git">
                <i className="devicon-git-plain colored"></i>
                <span>Git</span>
              </div>
            </div>
            <div className="habilidades-layout">
              <div className="habilidades-col">
                <div className="skills-grid">
                  <div className="skills-header">
                    <span>Tecnología</span>
                    <span>Nivel</span>
                    <span>XP</span>
                  </div>
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <span className="skill-tech">{skill.tech}</span>
                      <span className="skill-level">{skill.level}</span>
                      <span className="skill-xp">
                        <div className="xp-bar">
                          <div className="xp-fill" style={{ '--pct': `${skill.xp}%` }}></div>
                        </div>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="proyectos">
            <div className="section-header">
              <span className="section-tag">// 03 — REPOSITORIOS</span>
              <h2>Proyectos Destacados_</h2>
            </div>
            <p className="section-subtitle">Proyectos que muestran mi progreso como desarrolladora.</p>

            <div className="raq-carrusel">
              <button className="raq-carrusel-btn raq-prev-btn" onClick={prevProject} aria-label="Proyecto anterior">‹</button>

              <div className="raq-carrusel-contenedor">
                <div className="raq-proyecto-card" key={currentProject}>
                  <div className="raq-proyecto-imagen">
                    <img
                      src={projects[currentProject].image}
                      alt={`Captura de ${projects[currentProject].title}`}
                    />
                  </div>

                  <div className="raq-proyecto-info">
                    <h3 className="raq-proyecto-title">{projects[currentProject].title}</h3>
                    <p className="raq-proyecto-desc">{projects[currentProject].description}</p>
                    <div className="raq-proyecto-techs">
                      {projects[currentProject].technologies.map((tech, idx) => (
                        <span key={idx} className="raq-tech-badge">{tech}</span>
                      ))}
                    </div>
                    <div className="raq-proyecto-links">
                      <a href={projects[currentProject].github} target="_blank" rel="noopener noreferrer" className="card-link">
                        Ver código
                      </a>
                      {projects[currentProject].demo && (
                        <a href={projects[currentProject].demo} target="_blank" rel="noopener noreferrer" className="card-link">
                          Demo live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <button className="raq-carrusel-btn raq-next-btn" onClick={nextProject} aria-label="Proyecto siguiente">›</button>
            </div>

            <div className="raq-carrusel-indicadores">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  className={`raq-indicador ${currentProject === idx ? 'raq-indicador-activo' : ''}`}
                  onClick={() => goToProject(idx)}
                  aria-label={`Ir al proyecto ${idx + 1}`}
                />
              ))}
            </div>
          </section>

          <section id="peliculas">
            <div className="section-header">
              <span className="section-tag">// 04 — WATCHLIST</span>
              <h2>Películas Favoritas_</h2>
            </div>
            <p className="section-subtitle">Las tres películas que más me gustaron y marcaron una diferencia.</p>
            <div className="movies-grid">
              {movies.map((movie, index) => (
                <article key={index} className="movie-card">
                  <div className="movie-poster">
                    <img src={movie.poster} alt={`Poster de ${movie.title}`} />
                  </div>
                  <span className="movie-rank">{String(index + 1).padStart(2, '0')}</span>
                  <div className="movie-info">
                    <span className="movie-year">{movie.year}</span>
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-desc">{movie.description}</p>
                    <span className="movie-tag">{movie.director}</span>
                    <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="card-link">Ver Trailer</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="discos">
            <div className="section-header">
              <span className="section-tag">// 05 — SOUNDTRACK</span>
              <h2>Álbumes Favoritos_</h2>
            </div>
            <p className="section-subtitle">Heavy metal y rock clásico: la banda sonora de mi vida.</p>
            <div className="discos-grid">
              {albums.map((album, index) => (
                <article key={index} className="disco-card">
                  <div className="disco-cover">
                    <img src={album.img} alt={`${album.artist} - ${album.title}`} className="disco-img" loading="lazy" />
                    <div className="disco-overlay">
                      <span className="play-icon">▶</span>
                    </div>
                  </div>
                  <div className="disco-info">
                    <h3 className="disco-title">{album.title}</h3>
                    <p className="disco-artist">{album.artist}</p>
                    <p className="disco-year">{album.year}</p>
                    <p className="disco-desc">{album.description}</p>
                    <a href={album.url} target="_blank" rel="noopener noreferrer" className="card-link">Escuchar</a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>

      <div className="back-navigation">
        <Link to="/" className="nav-button">_VOLVER_AL_INICIO</Link>
      </div>
    </main>
  );
}

export default RaquelProfile;
