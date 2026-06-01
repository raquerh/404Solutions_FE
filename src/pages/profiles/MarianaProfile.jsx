import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdvancedBar from "../../components/AdvancedBar";
import "./ProfileCommon.css";
import "./MarianaProfile.css";

function MarianaProfile() {
  const [activeSection, setActiveSection] = useState("sobre-mi");
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState({
    title: "The Matrix",
    director: "Lana y Lilly Wachowski",
    year: "1999",
    desc: "Un hacker descubre la verdad sobre la realidad y su papel en la guerra contra las máquinas. Revolucionó el cine de ciencia ficción con su propuesta visual y filosófica.",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
  });

  // Efecto ScrollSpy para el menú
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "sobre-mi",
        "habilidades",
        "proyectos",
        "peliculas",
        "discos",
      ];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Datos
  const projects = [
    {
      title: "App de Gestión de Club Deportivo",
      description:
        "Aplicación móvil en Android Studio utilizando Kotlin para administrar el registro de socios, pagos y actividades del club. Implementación de RecyclerView y SQLite para la base de datos.",
      technologies: ["Kotlin", "SQLite", "Android Studio"],
      image: "/img/proyectos-mariana/proyecto1.png",
      github: "https://github.com/IFTS29/ClubDeportivo-Mobile",
      demo: "",
    },
    {
      title: "Catálogo de Películas y Series",
      description:
        "Desarrollo frontend de una aplicación web interactiva para la gestión y visualización de contenido multimedia (películas y series), implementando diseño responsivo y estructuración semántica.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/img/proyectos-mariana/proyecto2.png",
      github: "https://github.com/Aiello-M/TP-Front-cursoJava-CodoACodo",
      demo: "",
    },
    {
      title: "Predicción de Churn (TelecomX)",
      description:
        "Proyecto de análisis y visualización de datos. Desarrollo de modelos predictivos (Regresión Logística y Random Forest) para anticipar la baja de clientes. Incluye balanceo de datos con SMOTE y análisis exploratorio profundo.",
      technologies: ["Python", "Machine Learning", "Data Science"],
      image: "/img/proyectos-mariana/proyecto3.png",
      github: "https://github.com/Aiello-M/Challenge-TelecomX_Parte2",
      demo: "",
    },
  ];

  const nextProject = () =>
    setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  const goToProject = (index) => setCurrentProject(index);

  const movies = [
    {
      title: "Oldboy",
      director: "Park Chan-wook",
      year: "2003",
      desc: "Un hombre encerrado durante 15 años sin razón aparente es liberado y tiene 5 días para encontrar a su captor y buscar respuestas.",
      trailer: "https://www.youtube.com/embed/tAaBkFChaRg",
      poster: "/img/peliculas-mariana/pelicula1.jpg",
    },
    {
      title: "The Matrix",
      director: "Lana y Lilly Wachowski",
      year: "1999",
      desc: "Un hacker descubre la verdad sobre la realidad y su papel en la guerra contra las máquinas. Revolucionó el cine de ciencia ficción con su propuesta visual y filosófica.",
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
      poster: "/img/peliculas-mariana/pelicula3.jpg",
    },
    {
      title: "Kill Bill: Vol. 1",
      director: "Quentin Tarantino",
      year: "2003",
      desc: "Una asesina despierta luego de 4 años de estar en coma y busca venganza contra quienes la traicionaron.",
      trailer: "https://www.youtube.com/embed/7kSuas6mRpk",
      poster: "/img/peliculas-mariana/pelicula2.jpeg",
    },
  ];

  const albums = [
    {
      title: "Greatest Hits",
      artist: "Guns N' Roses",
      year: "2004",
      desc: "Recopilación esencial con los mayores éxitos del hard rock de la banda.",
      image: "/img/discos-mariana/GunsRoses.jpg",
      link: "https://www.youtube.com/watch?v=okuctlQZUC0",
    },
    {
      title: "The Wall",
      artist: "Pink Floyd",
      year: "1979",
      desc: "Ópera rock conceptual que explora el aislamiento, la alienación y la opresión.",
      image: "/img/discos-mariana/PinkFloyd.svg",
      link: "https://www.youtube.com/watch?v=uzsEmI61Xas",
    },
    {
      title: "Greatest Hits",
      artist: "Queen",
      year: "1981",
      desc: "Colección legendaria con los himnos de rock más icónicos de todos los tiempos.",
      image: "/img/discos-mariana/Queen.jpg",
      link: "https://www.youtube.com/results?search_query=queen+greatest+hits",
    },
    {
      title: "In a Time Lapse",
      artist: "Ludovico Einaudi",
      year: "2013",
      desc: "Composiciones instrumentales y neoclásicas que evocan emociones profundas.",
      image: "/img/discos-mariana/LudovicoEinaudi.jpg",
      link: "https://www.youtube.com/playlist?list=PLrXhhXHrorHALCEYd2AHl5OsFYGXu9qnB",
    },
    {
      title: "The World of H.Z.",
      artist: "Hans Zimmer",
      year: "2019",
      desc: "Arreglos sinfónicos espectaculares de sus mejores bandas sonoras.",
      image: "/img/discos-mariana/HansZimmer.jpg",
      link: "https://www.youtube.com/watch?v=_73jKyqYE3Y",
    },
    {
      title: "The LOTR Symphony",
      artist: "Howard Shore",
      year: "2004",
      desc: "Viaje musical épico que captura la magia y tensión de la Tierra Media.",
      image: "/img/discos-mariana/HowardShore.jpg",
      link: "https://www.youtube.com/watch?v=l3ob1NVqUpI",
    },
  ];

  const handleMovieClick = (movie) => setSelectedMovie(movie);

  return (
    <main className="profile-main">
      {/* Submenú Navegación */}
      <nav className="mariana-submenu">
        <div className="mariana-submenu-inner">
          <span className="submenu-prompt">&gt; mariana.exe</span>
          <ul>
            <li>
              <span
                className={`nav-dot ${activeSection === "sobre-mi" ? "active" : ""}`}
              ></span>
              <a
                href="#sobre-mi"
                className={activeSection === "sobre-mi" ? "active" : ""}
              >
                [01_Perfil]
              </a>
            </li>
            <li>
              <span
                className={`nav-dot ${activeSection === "habilidades" ? "active" : ""}`}
              ></span>
              <a
                href="#habilidades"
                className={activeSection === "habilidades" ? "active" : ""}
              >
                [02_Skills]
              </a>
            </li>
            <li>
              <span
                className={`nav-dot ${activeSection === "proyectos" ? "active" : ""}`}
              ></span>
              <a
                href="#proyectos"
                className={activeSection === "proyectos" ? "active" : ""}
              >
                [03_Proyectos]
              </a>
            </li>
            <li>
              <span
                className={`nav-dot ${activeSection === "peliculas" ? "active" : ""}`}
              ></span>
              <a
                href="#peliculas"
                className={activeSection === "peliculas" ? "active" : ""}
              >
                [04_Peliculas]
              </a>
            </li>
            <li>
              <span
                className={`nav-dot ${activeSection === "discos" ? "active" : ""}`}
              ></span>
              <a
                href="#discos"
                className={activeSection === "discos" ? "active" : ""}
              >
                [05_Discos]
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contenido Principal */}
      <article
        className="profile-card mariana-tarjeta-principal"
        aria-label="Perfil de Mariana"
      >
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">mariana_profile.exe</span>
        </div>

        <div className="profile-content mariana-secciones">
          {/* SECCIÓN: Sobre mí */}
          <section id="sobre-mi" className="seccion-interna">
            <h2>&gt; Profile_</h2>

            <div className="profile-header-grid">
              <div className="glitch-effect">
                <img
                  src="/img/avatar_mariana3.jpg"
                  alt="Foto de Mariana"
                  className="foto-perfil"
                />
                <div className="avatar-texto">
                  <p>Mariana</p>
                </div>
              </div>
              <div className="info-personal-basica">
                <div className="profile-data-box">
                  <p>&gt; Name: Mariana_</p>
                  <p>&gt; Age: 36_</p>
                  <p>&gt; Status: Student_</p>
                  <p>&gt; Location: CABA, Argentina_</p>
                </div>
              </div>
            </div>

            <div className="info-personal-detallada">
              <p className="role-subtitle">
                <span className="code-symbol-green">~/&#123;</span> Software Dev
                & Data Science Student{" "}
                <span className="code-symbol-green">&#125;</span>
              </p>
              <p className="description">
                Me apasiona combinar la visión analítica de la psicología con la
                lógica de los datos y el código. Me dedico a la automatización
                con Python, el manejo de bases de datos y la resolución de
                problemas mediante un enfoque sistemático. Busco crear
                soluciones web escalables y eficientes.
              </p>
            </div>

            <div className="social-links-mariana">
              <div className="social-link-wrapper">
                <i className="devicon-github-original social-icon-retro"></i>
                <a
                  href="https://github.com/Aiello-M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-button advanced-hover"
                >
                  GITHUB
                </a>
              </div>
              <div className="social-link-wrapper">
                <i className="devicon-linkedin-plain social-icon-retro"></i>
                <a
                  href="https://www.linkedin.com/in/aiellomariana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-button advanced-hover"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </section>

          <hr className="separador-terminal" />

          {/* SECCIÓN: Habilidades */}
          <section id="habilidades" className="seccion-interna">
            <h2>&gt; Habilidades_</h2>

            <div className="skills-icons-section">
              <h3>&gt; Tech Stack_</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="HTML5">
                  <i className="devicon-html5-plain colored"></i>
                  <span>HTML5</span>
                </div>
                <div className="tech-icon" title="CSS3">
                  <i className="devicon-css3-plain colored"></i>
                  <span>CSS3</span>
                </div>
                <div className="tech-icon" title="JavaScript">
                  <i className="devicon-javascript-plain colored"></i>
                  <span>JavaScript</span>
                </div>
                <div className="tech-icon" title="Python">
                  <i className="devicon-python-plain colored"></i>
                  <span>Python</span>
                </div>
                <div className="tech-icon" title="C#">
                  <i className="devicon-csharp-plain colored"></i>
                  <span>C#</span>
                </div>
                <div className="tech-icon" title="MySQL">
                  <i className="devicon-mysql-plain colored"></i>
                  <span>MySQL</span>
                </div>
                <div className="tech-icon" title="React">
                  <i className="devicon-react-original colored"></i>
                  <span>React</span>
                </div>
                <div className="tech-icon" title="Git">
                  <i className="devicon-git-plain colored"></i>
                  <span>Git</span>
                </div>
              </div>
            </div>

            <div className="skills-grid-layout">
              <div className="skills-category">
                <p className="role-subtitle">
                  <span className="code-symbol-green">~/&#123;</span> Core_Stack{" "}
                  <span className="code-symbol-green">&#125;</span>
                  <span className="tag-blanco">// Que conozco</span>
                </p>
                <div className="skills-bars">
                  <AdvancedBar label="HTML5" percentage={95} />
                  <AdvancedBar label="CSS3" percentage={90} />
                  <AdvancedBar label="Python" percentage={85} />
                  <AdvancedBar label="JavaScript" percentage={80} />
                  <AdvancedBar label="MySQL" percentage={75} />
                  <AdvancedBar label="C#" percentage={70} />
                </div>
              </div>

              <div className="skills-category">
                <p className="role-subtitle">
                  <span className="code-symbol-green">~/&#123;</span>{" "}
                  Learning_Path{" "}
                  <span className="code-symbol-green">&#125;</span>
                  <span className="tag-blanco">// En proceso</span>
                </p>
                <div className="skills-bars learning-bars">
                  <AdvancedBar label="React" percentage={60} />
                  <AdvancedBar label="Kotlin" percentage={50} />
                  <AdvancedBar label="Java" percentage={45} />
                  <AdvancedBar label="Machine Learning" percentage={30} />
                </div>
              </div>
            </div>
          </section>

          <hr className="separador-terminal" />

          {/* SECCIÓN: Proyectos */}
          <section id="proyectos" className="seccion-interna">
            <h2>&gt; Proyectos_Destacados_</h2>
            <div className="mariana-carrusel">
              <button className="mc-btn mc-prev" onClick={prevProject}>
                ‹
              </button>
              <div className="mc-contenedor">
                <div className="mc-card">
                  <div className="mc-imagen">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                    />
                  </div>
                  <div className="mc-info">
                    <h3>{projects[currentProject].title}</h3>
                    <p>{projects[currentProject].description}</p>
                    <div className="mc-techs">
                      {projects[currentProject].technologies.map(
                        (tech, idx) => (
                          <span key={idx} className="mc-badge">
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                    <div className="mc-links">
                      <a
                        href={projects[currentProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {"< / > Código"}
                      </a>
                      <a
                        href={projects[currentProject].demo || "#"}
                        target={
                          projects[currentProject].demo ? "_blank" : "_self"
                        }
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!projects[currentProject].demo)
                            e.preventDefault();
                        }}
                      >
                        {"🔗 Demo"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mc-btn mc-next" onClick={nextProject}>
                ›
              </button>
            </div>
            <div className="mc-indicadores">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  className={`mc-dot ${currentProject === idx ? "activo" : ""}`}
                  onClick={() => goToProject(idx)}
                />
              ))}
            </div>
          </section>

          <hr className="separador-terminal" />

          {/* SECCIÓN: Películas */}
          <section id="peliculas" className="seccion-interna">
            <h2>&gt; Películas Favoritas_</h2>
            <div className="peliculas-posters">
              {movies.map((movie, index) => (
                <article
                  key={index}
                  className={`poster-item ${selectedMovie.title === movie.title ? "activo" : ""}`}
                  onClick={() => handleMovieClick(movie)}
                >
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="poster-img"
                  />
                  <div className="poster-overlay">{movie.title}</div>
                </article>
              ))}
            </div>
            <div className="pelicula-info-display">
              <div className="pelicula-trailer">
                <iframe
                  src={selectedMovie.trailer}
                  allowFullScreen
                  title={selectedMovie.title}
                ></iframe>
              </div>
              <div className="pelicula-detalles">
                <h3 className="disco-album">{selectedMovie.title}</h3>
                <div className="disco-meta">
                  <span className="disco-autor">{selectedMovie.director}</span>
                  <span className="disco-year">- {selectedMovie.year}</span>
                </div>
                <p className="disco-desc">{selectedMovie.desc}</p>
              </div>
            </div>
          </section>

          <hr className="separador-terminal" />

          {/* SECCIÓN: Discos */}
          <section id="discos" className="seccion-interna">
            <h2>&gt; Discos Favoritos_</h2>
            <div className="discos-favoritos">
              {albums.map((album, index) => (
                <article key={index} className="disco-item">
                  <div className="disco-info">
                    <h3 className="disco-album">{album.title}</h3>
                    <div className="disco-meta">
                      <span className="disco-autor">{album.artist}</span>
                      <span className="disco-year">- {album.year}</span>
                    </div>
                    <p className="disco-desc">{album.desc}</p>
                  </div>
                  <a
                    href={album.link}
                    className="disco-img-container"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={album.image} alt={album.artist} />
                    <div className="reproducir-texto">▶ Reproducir</div>
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>

      <div className="back-navigation">
        <Link to="/" className="nav-button">
          _VOLVER_AL_INICIO
        </Link>
      </div>
    </main>
  );
}

export default MarianaProfile;
