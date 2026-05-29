import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProfileCommon.css';
import './MikeProfile.css';

function MikeProfile() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [expandedMovies, setExpandedMovies] = useState({});
  const [dsExecuted, setDsExecuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['sobre-mi', 'habilidades', 'peliculas', 'discos'];
      const scrollY = window.scrollY + 150;
      let current = 'inicio';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMovie = (index) => {
    setExpandedMovies(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const executeDsQuery = () => {
    if (!dsExecuted) {
      setDsExecuted(true);
    }
  };

  const movies = [
    {
      title: "Matrix",
      videoId: "vKQi3bBA1y8",
      description: "Thomas Anderson es un programador de día y un hábil hacker conocido como \"Neo\" por las noches. Su vida transcurre con la persistente sensación de que algo no encaja en el mundo que lo rodea. Tras recibir una serie de mensajes crípticos en su computadora, Neo se contacta con un grupo de misteriosos desconocidos que le ofrecen la oportunidad de descubrir la verdad detrás de su realidad y responder a la pregunta que lo atormenta: ¿Qué es la Matrix?"
    },
    {
      title: "Milagros Inesperados",
      videoId: "Ki4haFrqSrw",
      description: "Ambientada en el corredor de la muerte de una prisión del sur durante la Gran Depresión, la historia sigue a Paul Edgecomb, el guardia encargado de custodiar a los condenados. Su rutina cambia drásticamente con la llegada de John Coffey, un hombre de físico imponente pero de naturaleza extremadamente pacífica. A medida que Paul interactúa con él, empieza a notar fenómenos inexplicables que desafían toda lógica y ponen a prueba sus creencias sobre la justicia."
    },
    {
      title: "El Señor de los Anillos: La Comunidad del Anillo",
      videoId: "V75dMMIW2B4",
      description: "En la Tierra Media, un joven e inocente hobbit llamado Frodo recibe la herencia de un antiguo anillo que posee un poder incalculable. Pronto descubre que este objeto es buscado por fuerzas oscuras que amenazan con destruir todo lo conocido. Acompañado por un grupo diverso de guerreros y sabios, Frodo inicia una épica travesía hacia territorios peligrosos con la misión de alejar el anillo del mal antes de que sea demasiado tarde."
    }
  ];

  const albums = [
    { title: "The Wall", artist: "Pink Floyd", img: "/img/discos-mike/The_Wall_Cover.svg", url: "https://www.youtube.com/watch?v=uzsEmI61Xas&list=OLAK5uy_nEl-NcW1jBoidS2oFQAQGyhrv6m2Ounw4" },
    { title: "Use Your Illusion 1", artist: "Guns N' Roses", img: "/img/discos-mike/use_your_illusion1.jpg", url: "https://www.youtube.com/watch?v=4cQg8k3Znvw&list=OLAK5uy_kaueFscwZLW5eh2di3wmeerRd-uMPbH1E" },
    { title: "Use Your Illusion 2", artist: "Guns N' Roses", img: "/img/discos-mike/use_your_illusion2.jpg", url: "https://www.youtube.com/watch?v=isCh4kCeNYU&list=OLAK5uy_ngsI0F8kApDkW-ZyPhPByRSk_CHQcSwts" },
    { title: "Alta Suciedad", artist: "Andrés Calamaro", img: "/img/discos-mike/alta_suciedad.jpg", url: "https://www.youtube.com/playlist?list=OLAK5uy_kSexiGjvJMwwk9oG5NQmUxQVCzgA8IoYw" },
    { title: "Canción Animal", artist: "Soda Stereo", img: "/img/discos-mike/cancion-animal-3-768x768.jpg", url: "https://www.youtube.com/watch?v=BxDciewLqAU&list=OLAK5uy_mJxHiRiLtU_LZlY8fY9vqkuQytX6wFY6Y" },
    { title: "Oktubre", artist: "Los Redondos", img: "/img/discos-mike/oktubre.jpg", url: "https://www.youtube.com/watch?v=9mkPiqN-NGo&list=OLAK5uy_ko1_BbYiejzIg8vDlITpXZi9aa9wIALOU" }
  ];

  return (
    <main className="profile-main">
      <nav className="mike-nav-breadcrumb" aria-label="Navegación del perfil">
        <a href="#inicio" className={activeSection === 'inicio' ? 'mike-nav-active' : ''}>
          ~/mike/
        </a>
        <span className="mike-nav-sep">·</span>
        <a href="#sobre-mi" className={activeSection === 'sobre-mi' ? 'mike-nav-active' : ''}>sobre_mi</a>
        <span className="mike-nav-sep">·</span>
        <a href="#habilidades" className={activeSection === 'habilidades' ? 'mike-nav-active' : ''}>skills</a>
        <span className="mike-nav-sep">·</span>
        <a href="#peliculas" className={activeSection === 'peliculas' ? 'mike-nav-active' : ''}>pelis</a>
        <span className="mike-nav-sep">·</span>
        <a href="#discos" className={activeSection === 'discos' ? 'mike-nav-active' : ''}>discos</a>
      </nav>

      <article className="profile-card" id="inicio">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">user_profile.sh</span>
        </div>

        <div className="profile-content mike-content">
          <div className="profile-header-flex">
            <div className="profile-image">
              <img src="/img/avatar_mike.png" alt="avatar 3D de Miguel Ángel de las Tortugas Ninja haciendo un gesto de pulgar arriba y guiñando un ojo." />
            </div>
            <div className="profile-data-box">
              <p>&gt; Name: Mike_</p>
              <p>&gt; Age: 39_</p>
              <p>&gt; Location: Cordoba - Cba_</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/mikefink22" target="_blank" rel="noopener noreferrer" className="nav-button">GitHub</a>
              <a href="https://www.linkedin.com/in/miguel-flores-3211b398" target="_blank" rel="noopener noreferrer" className="nav-button">LinkedIn</a>
            </div>
          </div>

          <section id="sobre-mi" className="profile-info">
            <h1>&gt; Mike</h1>
            <h2>Sobre Mi_</h2>
            <p className="role">Software & Web Developer Student</p>
            <hr />
            <p className="hero-description">
              Estudiante en tecnicaturas en Desarrollo de Software y Desarrollo Web y Aplicaciones Digitales.
              Enfocado en la resolución de problemas y optimización de flujos de trabajo.
            </p>

            <div className="formacion-stack">
              <div className="formacion-card">
                <h3 className="formacion-label"><span>//</span>Cursando Tecnicaturas</h3>

                <div className="tec-item">
                  <div className="tec-header">
                    <h4 className="tec-nombre">Desarrollo de Software</h4>
                    <span className="tec-inst">IFTS N°29</span>
                  </div>
                  <ul className="tag-list">
                    <li className="tag">C#</li>
                    <li className="tag">Kotlin</li>
                    <li className="tag">Node.js</li>
                    <li className="tag">AWS</li>
                    <li className="tag">HTML · CSS · JS</li>
                  </ul>
                </div>

                <div className="tec-item">
                  <div className="tec-header">
                    <h4 className="tec-nombre">Desarrollo Web &amp; Apps</h4>
                    <span className="tec-inst">ISPC</span>
                  </div>
                  <ul className="tag-list">
                    <li className="tag">Python</li>
                    <li className="tag">Django</li>
                    <li className="tag">Angular</li>
                    <li className="tag">PostgreSQL</li>
                    <li className="tag">HTML · CSS · JS</li>
                  </ul>
                </div>
              </div>

              <div className="formacion-card">
                <h3 className="formacion-label"><span>//</span> Cursos &amp; Certificaciones</h3>
                <div className="cert-grid">
                  <div className="cert-item">
                    <div className="cert-body">
                      <dt className="cert-name">Data Science - Codo A Codo</dt>
                      <dd className="cert-org">Pandas · Looker Studio · Estadística</dd>
                    </div>
                    <span className="cert-status status-done">✓ completado</span>
                  </div>

                  <div className="cert-item">
                    <div className="cert-body">
                      <dt className="cert-name">Java Fullstack - Argentina Programa</dt>
                      <dd className="cert-org">POO · Colecciones</dd>
                    </div>
                    <span className="cert-status status-done">✓ completado</span>
                  </div>

                  <div className="cert-item">
                    <div className="cert-body">
                      <dt className="cert-name">Code in Place</dt>
                      <dd className="cert-org">Stanford University</dd>
                    </div>
                    <span className="cert-status status-wip">▶ en curso</span>
                  </div>

                  <div className="cert-item">
                    <div className="cert-body">
                      <dt className="cert-name">GCI World 2026</dt>
                      <dd className="cert-org">Programa Internacional — Japan</dd>
                    </div>
                    <span className="cert-status status-wip">▶ en curso</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="habilidades">
            <h2>Habilidades_</h2>
            <div className="tech-icons-mike">
              <div className="tech-icon-mike" title="C# / .NET">
                <i className="devicon-csharp-plain colored"></i>
                <span>C#</span>
              </div>
              <div className="tech-icon-mike" title="Python">
                <i className="devicon-python-plain colored"></i>
                <span>Python</span>
              </div>
              <div className="tech-icon-mike" title="JavaScript">
                <i className="devicon-javascript-plain colored"></i>
                <span>JavaScript</span>
              </div>
              <div className="tech-icon-mike" title="HTML5">
                <i className="devicon-html5-plain colored"></i>
                <span>HTML5</span>
              </div>
              <div className="tech-icon-mike" title="CSS3">
                <i className="devicon-css3-plain colored"></i>
                <span>CSS3</span>
              </div>
              <div className="tech-icon-mike" title="Git">
                <i className="devicon-git-plain colored"></i>
                <span>Git</span>
              </div>
              <div className="tech-icon-mike" title="PostgreSQL">
                <i className="devicon-postgresql-plain colored"></i>
                <span>PostgreSQL</span>
              </div>
              <div className="tech-icon-mike" title="Java">
                <i className="devicon-java-plain colored"></i>
                <span>Java</span>
              </div>
            </div>
            <ul className="habilidades-layout">
              <li className="skill-item">
                <div className="skill-info"><span>C# / .NET</span><span>55%</span></div>
                <div className="xp-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" aria-label="C# / .NET 55%">
                  <div className="xp-fill" style={{ '--pct': '55%' }}></div>
                </div>
              </li>
              <li className="skill-item">
                <div className="skill-info"><span>Python</span><span>70%</span></div>
                <div className="xp-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" aria-label="Python 70%">
                  <div className="xp-fill" style={{ '--pct': '70%' }}></div>
                </div>
              </li>
              <li className="skill-item">
                <div className="skill-info"><span>HTML / CSS</span><span>75%</span></div>
                <div className="xp-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="HTML / CSS 75%">
                  <div className="xp-fill" style={{ '--pct': '75%' }}></div>
                </div>
              </li>
              <li className="skill-item">
                <div className="skill-info"><span>JavaScript</span><span>50%</span></div>
                <div className="xp-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="JavaScript 50%">
                  <div className="xp-fill" style={{ '--pct': '50%' }}></div>
                </div>
              </li>
              <li className="skill-item">
                <div className="skill-info"><span>SQL / DB</span><span>55%</span></div>
                <div className="xp-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" aria-label="SQL 55%">
                  <div className="xp-fill" style={{ '--pct': '55%' }}></div>
                </div>
              </li>
              <li className="skill-item">
                <div className="skill-info"><span>Git / GitHub</span><span>65%</span></div>
                <div className="xp-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="Git / GitHub 65%">
                  <div className="xp-fill" style={{ '--pct': '65%' }}></div>
                </div>
              </li>
              <li className="skill-item">
                <div className="skill-info"><span>Java / Kotlin</span><span>45%</span></div>
                <div className="xp-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" aria-label="Java / Kotlin 45%">
                  <div className="xp-fill" style={{ '--pct': '45%' }}></div>
                </div>
              </li>
            </ul>

            <aside className="ds-note" id="ds-container" onClick={executeDsQuery} style={{ cursor: 'pointer' }}>
              <div id="ds-terminal-text">
                {!dsExecuted ? (
                  <p style={{ color: 'var(--terminal-green)' }}>[ CLICK PARA EJECUTAR CONSULTA Data Science ]</p>
                ) : (
                  <>
                    <p style={{ color: 'var(--terminal-green)', margin: '4px 0' }}>$ query --tags 'data-science'</p>
                    <p style={{ color: 'white', margin: '4px 0' }}>&gt; PANDAS: Procesamiento de datos.</p>
                    <p style={{ color: 'white', margin: '4px 0' }}>&gt; LOOKER STUDIO: Dashboards.</p>
                    <p style={{ color: 'white', margin: '4px 0' }}>&gt; STATS: Estadística descriptiva.</p>
                    <p style={{ color: 'white', margin: '4px 0' }}>// Cursado en Codo a Codo.</p>
                  </>
                )}
              </div>
            </aside>
          </section>

          <section id="peliculas" className="media-section">
            <h2>Películas Favoritas_</h2>
            {movies.map((movie, index) => (
              <div key={index} className="contenedor-peliculas">
                <iframe
                  src={`https://www.youtube.com/embed/${movie.videoId}`}
                  title={`${movie.title} Official Trailer`}
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <div className="tarjeta">
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
              </div>
            ))}
          </section>

          <section id="discos" className="media-section">
            <h2>Discos Favoritos_</h2>
            <div className="discos-favoritos">
              {albums.map((album, index) => (
                <figure key={index} className="disco-item">
                  <img src={album.img} alt={`Portada de ${album.title} de ${album.artist}`} />
                  <figcaption>
                    {album.title}
                    <a href={album.url} target="_blank" rel="noopener noreferrer" aria-label={`Escuchar ${album.title} en YouTube`}>▶</a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <div className="social-links">
            <a href="https://github.com/mikefink22" target="_blank" rel="noopener noreferrer" className="nav-button">GitHub</a>
            <a href="https://www.linkedin.com/in/miguel-flores-3211b398" target="_blank" rel="noopener noreferrer" className="nav-button">LinkedIn</a>
          </div>
        </div>
      </article>

      <div className="back-navigation">
        <Link to="/" className="nav-button">_VOLVER_AL_INICIO</Link>
      </div>
    </main>
  );
}

export default MikeProfile;
