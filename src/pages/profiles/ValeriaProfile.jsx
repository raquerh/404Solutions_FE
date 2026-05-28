import { Link } from 'react-router-dom';
import { useState } from 'react';
import SkillBar from '../../components/SkillBar';
import './ProfileCommon.css';
import './ValeriaProfile.css';

function ValeriaProfile() {
  const [expandedMovies, setExpandedMovies] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleMovie = (index) => {
    setExpandedMovies(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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

  const albums = [
    { title: "Aenima", artist: "Tool", img: "/img/img-valeria/Aenima.jpg", url: "https://www.youtube.com/watch?v=BC6B4G3za9M&list=RDBC6B4G3za9M&start_radio=1" },
    { title: "Dummy", artist: "PortisHead", img: "/img/img-valeria/Dummy.jpg", url: "https://www.youtube.com/watch?v=cXf2bvfSKOs" },
    { title: "Cowboy Bebop OST", artist: "The Seatbelts", img: "/img/img-valeria/CowboyBebop.jpg", url: "https://www.youtube.com/watch?v=6Hj6hPqKiS4" },
    { title: "Odelay", artist: "Beck", img: "/img/img-valeria/Odelay.jpg", url: "https://www.youtube.com/watch?v=5sdQVVggJu4&list=RD5sdQVVggJu4&start_radio=1&t=4s" },
    { title: "OK Computer", artist: "RadioHead", img: "/img/img-valeria/Ok-Computer-768x432.jpg", url: "https://www.youtube.com/watch?v=BxDciewLqAU&list=OLAK5uy_mJxHiRiLtU_LZlY8fY9vqkuQytX6wFY6Y" },
    { title: "Press Start", artist: "8bit Big Band", img: "/img/img-valeria/8bitBand.jpg", url: "https://www.youtube.com/watch?v=dNB0XgQaSNM" }
  ];

  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 2;
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    if (window.innerWidth < 1200) return 3;
    return 5;
  };

  const itemsPerView = getItemsPerView();

  const nextSlide = () => {
    if (currentIndex < albums.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <main className="profile-main">
      <article className="profile-card">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">user_profile.sh</span>
        </div>

        <div className="profile-content">
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

            <div className="social-links-valeria">
              <a href="https://github.com/usuario-valeria" target="_blank" rel="noopener noreferrer" className="nav-button">GitHub</a>
              <a href="https://www.linkedin.com/in/usuario-valeria" target="_blank" rel="noopener noreferrer" className="nav-button">LinkedIn</a>
            </div>

            <h2>Tech Stack_</h2>
            <div className="tech-icons-valeria">
              <div className="tech-icon-valeria" title="HTML5">
                <i className="devicon-html5-plain colored"></i>
                <span>HTML5</span>
              </div>
              <div className="tech-icon-valeria" title="CSS3">
                <i className="devicon-css3-plain colored"></i>
                <span>CSS3</span>
              </div>
              <div className="tech-icon-valeria" title="JavaScript">
                <i className="devicon-javascript-plain colored"></i>
                <span>JavaScript</span>
              </div>
              <div className="tech-icon-valeria" title="React">
                <i className="devicon-react-original colored"></i>
                <span>React</span>
              </div>
              <div className="tech-icon-valeria" title="Node.js">
                <i className="devicon-nodejs-plain colored"></i>
                <span>Node.js</span>
              </div>
              <div className="tech-icon-valeria" title="Java">
                <i className="devicon-java-plain colored"></i>
                <span>Java</span>
              </div>
              <div className="tech-icon-valeria" title="Git">
                <i className="devicon-git-plain colored"></i>
                <span>Git</span>
              </div>
            </div>

            <h2>Habilidades_</h2>
            <div className="skills-bars-valeria">
              <SkillBar skill="HTML / CSS3" level={80} delay={100} />
              <SkillBar skill="JavaScript" level={70} delay={200} />
              <SkillBar skill="React / Node.js" level={65} delay={300} />
              <SkillBar skill="Java / Kotlin" level={55} delay={400} />
              <SkillBar skill="SQL & Bases de Datos" level={60} delay={500} />
              <SkillBar skill="Git & Workflows" level={75} delay={600} />
            </div>

            <section className="media-section">
              <h2>Películas Favoritas_</h2>
              {movies.map((movie, index) => (
                <div key={index} className="contenedor-peliculas">
                  <iframe 
                    src={`https://www.youtube.com/embed/${movie.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
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

            <section className="media-section">
              <h2>Discos Favoritos_</h2>
              <div className="carrusel-container">
                <button 
                  className="carrusel-btn prev" 
                  aria-label="Anterior"
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                >
                  &lt;
                </button>
                <div className="discos-favoritos" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.5)}%)` }}>
                  {albums.map((album, index) => (
                    <figure key={index} className="disco-item">
                      <img src={album.img} alt={`Portada disco ${album.title} - ${album.artist}`} />
                      <figcaption>
                        {album.title}
                        <a href={album.url} target="_blank" rel="noopener noreferrer" aria-label={`Escuchar ${album.title} en YouTube`}>▶</a>
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <button 
                  className="carrusel-btn next" 
                  aria-label="Siguiente"
                  onClick={nextSlide}
                  disabled={currentIndex >= albums.length - itemsPerView}
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
