import { Link } from 'react-router-dom';
import { useState } from 'react';
import SkillBar from '../../components/SkillBar';
import './ProfileCommon.css';
import './MarioProfile.css';

function MarioProfile() {
  const [expandedMovies, setExpandedMovies] = useState({});

  const toggleMovie = (index) => {
    setExpandedMovies(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const movies = [
    {
      title: "Interstelar",
      videoId: "LYS2O1nl9iM",
      description: "Dirigida por Christopher Nolan, es una épica de ciencia ficción que trasciende las fronteras del tiempo y el espacio. Ambientada en un futuro cercano donde la Tierra agoniza debido a plagas agrícolas y tormentas de polvo, la historia sigue a Joseph Cooper, un ex-piloto de la NASA convertido en granjero, quien es reclutado para una misión desesperada: liderar una expedición a través de un agujero de gusano cerca de Saturno en busca de un nuevo hogar para la humanidad."
    },
    {
      title: "Marte - Misión Rescate",
      videoId: "2-7R0TvOg7w",
      description: "Dirigida por Ridley Scott, narra la increíble lucha por la supervivencia del astronauta Mark Watney, quien queda varado en Marte tras ser dado por muerto durante una tormenta. Sin comunicación con la Tierra y con suministros limitados, Watney utiliza su ingenio científico y un humor inquebrantable para cultivar alimentos en suelo hostil. Es una oda a la resiliencia humana y al ingenio técnico, combinando tensión constante con un optimismo inspirador frente a la adversidad espacial."
    },
    {
      title: "Talentos Ocultos",
      videoId: "xFALsPCeJvE",
      description: "Narra la historia real e inspiradora de tres brillantes mujeres afroamericanas que trabajaron en la NASA durante la carrera espacial de los años 60. Katherine Johnson, Dorothy Vaughan y Mary Jackson superaron los prejuicios raciales y de género de la época, convirtiéndose en los cerebros matemáticos detrás del histórico lanzamiento del astronauta John Glenn. Es un poderoso tributo al intelecto, la perseverancia y la lucha por los derechos civiles, demostrando que el talento no tiene color."
    },
    {
      title: "Ratatouille",
      videoId: "qfwix8Xg1nI",
      description: "Una joya de Disney-Pixar, cuenta la historia de Remy, una rata con un paladar sofisticado que sueña con ser un gran chef en París. A través de una alianza improbable con el torpe joven Linguini, Remy logra cocinar en secreto en un prestigioso restaurante, desafiando las normas sociales y biológicas. Con una animación exquisita y un mensaje profundo sobre la pasión y el talento, la película nos enseña que \"cualquiera puede cocinar\" y que el arte surge de los lugares más inesperados."
    },
    {
      title: "El Padrino",
      videoId: "pA3_JYkhqDM",
      description: "La obra maestra de Francis Ford Coppola, es un drama criminal que redefine el cine de gánsteres. La historia sigue a la familia Corleone, liderada por el patriarca Vito, mientras navegan por el poder, la traición y la lealtad en la Nueva York de la posguerra. La trama se centra en la transformación de Michael Corleone, quien pasa de ser un héroe de guerra ajeno a los negocios turbios a convertirse en un despiadado jefe mafioso. Es un retrato magistral sobre la corrupción del alma y el peso de la herencia familiar."
    },
    {
      title: "Ralph el Demoledor",
      videoId: "gZBeAqXKq3Q",
      description: "Una colorida y creativa aventura de Disney que explora la vida secreta dentro de las máquinas de arcade. Ralph, el villano de su videojuego, está cansado de ser el \"malo\" y busca demostrar que tiene un corazón de héroe. En su viaje por otros mundos digitales, conoce a la traviesa Vanellope von Schweetz. Juntos descubren que no necesitan cambiar quiénes son para ser valiosos, entregando una poderosa lección sobre la autoaceptación y la amistad verdadera."
    }
  ];

  const albums = [
    { title: "Californication", artist: "Red Hot Chilli P..", img: "/img/discos-mario/californication.jpg", url: "https://youtu.be/YlUKcNNmywk?si=xqT-mSDbfAutYsTm" },
    { title: "Discovery", artist: "Daft Punk", img: "/img/discos-mario/daft_punk_discovery.jpg", url: "https://youtu.be/FGBhQbmPwH8?si=PE8b5aEoIink7xm7" },
    { title: "Oops!... I Did It Again", artist: "Britney Spears", img: "/img/discos-mario/britney_spears_opps_i_did_it_again.jpg", url: "https://youtu.be/CduA0TULnow?si=Jj6RCtoFmEgUC1SC" },
    { title: "The Marshall Mathers LP", artist: "Eminem", img: "/img/discos-mario/eminem-The-Marshall-Mathers-LP.webp", url: "https://youtu.be/aSLZFdqwh7E?si=hYe77WmGUl9DquSL" },
    { title: "No Angel", artist: "Dido", img: "/img/discos-mario/dido_thank_you.jpg", url: "https://youtu.be/Pacb9MPlyvc?si=Xj-MC2DkXOwvRWio" },
    { title: "Hybrid Theory", artist: "Linkin Park", img: "/img/discos-mario/linkin_park_hybrid_theory.png", url: "https://youtu.be/eVTXPUF4Oz4?si=_wNDNDPZZkUsPPSP" }
  ];

  const technologies = [
    { name: "HTML5", img: "/img/tecnologias-mario/HTML5_logo.png" },
    { name: "CSS3", img: "/img/tecnologias-mario/CSS3_logo.png" },
    { name: "JavaScript", img: "/img/tecnologias-mario/JavaScript_logo.png" },
    { name: "Bootstrap", img: "/img/tecnologias-mario/bootstrap_logo.png" },
    { name: "Java", img: "/img/tecnologias-mario/java.webp" },
    { name: "Spring Boot", img: "/img/tecnologias-mario/spring-boot-logo.png" },
    { name: "MySQL", img: "/img/tecnologias-mario/MySQL-logo.png" },
    { name: "Thymeleaf", img: "/img/tecnologias-mario/thymeleaf.webp" },
    { name: "Angular", img: "/img/tecnologias-mario/angular.png" },
    { name: "React", img: "/img/tecnologias-mario/react.png" },
    { name: "C#", img: "/img/tecnologias-mario/csharp.png" },
    { name: "Python", img: "/img/tecnologias-mario/python-logo-sin_fondo.png" }
  ];

  return (
    <main className="profile-main">
      <nav className="contenedor-nav">
        <ul className="links-nav">
          <li><a href="#sobre-mi"><img className="icono-linkedin" src="/img/iconos-mario/usuario.png" alt="usuario" /> Sobre Mí_</a></li>
          <li><a href="#habilidades"><img className="icono-linkedin" src="/img/iconos-mario/colaboracion.png" alt="habilidades" /> Habilidades_</a></li>
          <li><a href="#peliculas"><img className="icono-linkedin" src="/img/iconos-mario/movie.png" alt="peliculas" /> Peliculas_</a></li>
          <li><a href="#discos"><img className="icono-linkedin" src="/img/iconos-mario/musica.png" alt="musica" /> Discos_</a></li>
        </ul>
      </nav>

      <div className="profile-card">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">user_profile.sh</span>
        </div>

        <div className="profile-content mario-content">
          <h2 id="sobre-mi">Sobre Mí_</h2>
          <div className="dos-columnas">
            <div className="profile-image-mario">
              <img src="/img/super-mario64.png" alt="mario_bross" />
            </div>

            <div className="profile-info-mario">
              <h1>&gt; Name: Mario_</h1>
              <h2>&gt; Last Name: González_</h2>
              <h2>&gt; Age: 39_</h2>
              <h2>&gt; City: San Martín_</h2>
              <h2>&gt; State: Buenos Aires_</h2>
              <h2>&gt; Occupation: Software Developer_</h2>
            </div>
          </div>

          <div className="profile-info-mario">
            <p className="role">Full Stack Developer</p>
            <p className="description">
              Soy estudiante de la Tecnicatura Superior en Desarrollo de Software en el IFTS N° 29 y Full Stack Developer Java.
            </p>
            <p className="description">
              Me gustan los desafíos convirtiendo problemas complejos en soluciones simples e intuitivas.
            </p>
          </div>

          <h2 className="titulo" id="habilidades">Habilidades_</h2>
          {[0, 1, 2].map((row) => (
            <section key={row} className="contenedor-seccion">
              <ul className="habilidades">
                {technologies.slice(row * 4, (row + 1) * 4).map((tech, index) => (
                  <li key={index} className="listas">
                    <img className="logo-tecnologias" src={tech.img} alt={tech.name} />
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <div className="skills-bars-mario">
            <SkillBar skill="HTML5" level={85} delay={100} />
            <SkillBar skill="CSS3 / Bootstrap" level={80} delay={200} />
            <SkillBar skill="JavaScript" level={75} delay={300} />
            <SkillBar skill="Java / Spring Boot" level={70} delay={400} />
            <SkillBar skill="MySQL" level={75} delay={500} />
            <SkillBar skill="Python" level={60} delay={600} />
            <SkillBar skill="React / Angular" level={65} delay={700} />
            <SkillBar skill="C#" level={60} delay={800} />
          </div>

          <div className="social-links">
            <a href="https://github.com/elavincho" target="_blank" rel="noopener noreferrer" className="nav-button">
              <img className="icono-github" src="/img/tecnologias-mario/github.png" alt="github" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/mario-david-gonzalez-9117a9280/" target="_blank" rel="noopener noreferrer" className="nav-button">
              Linked <img className="icono-linkedin" src="/img/tecnologias-mario/linkedin.png" alt="linkedin" />
            </a>
          </div>

          <h2 className="titulo" id="peliculas">Películas Favoritas_</h2>
          {movies.map((movie, index) => (
            <div key={index} className="contenedor-peliculas">
              {index % 2 === 0 ? (
                <>
                  <iframe 
                    src={`https://www.youtube.com/embed/${movie.videoId}`}
                    title="YouTube video player"
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <section className="tarjeta">
                    <h3>{movie.title}</h3>
                    <div className="contenedor">
                      <p className={`description-peliculas parrafo-expandible ${expandedMovies[index] ? 'parrafo-completo' : 'parrafo-resumido'}`}>
                        {movie.description}
                      </p>
                      <button className="btn-leer" onClick={() => toggleMovie(index)}>
                        {expandedMovies[index] ? 'Leer menos' : 'Leer más'}
                      </button>
                    </div>
                  </section>
                </>
              ) : (
                <>
                  <section className="tarjeta">
                    <h3>{movie.title}</h3>
                    <div className="contenedor">
                      <p className={`description-peliculas parrafo-expandible ${expandedMovies[index] ? 'parrafo-completo' : 'parrafo-resumido'}`}>
                        {movie.description}
                      </p>
                      <button className="btn-leer" onClick={() => toggleMovie(index)}>
                        {expandedMovies[index] ? 'Leer menos' : 'Leer más'}
                      </button>
                    </div>
                  </section>
                  <iframe 
                    src={`https://www.youtube.com/embed/${movie.videoId}`}
                    title="YouTube video player"
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </>
              )}
            </div>
          ))}

          <h2 className="titulo" id="discos">Discos Favoritos_</h2>
          <section className="discos-favoritos">
            {albums.map((album, index) => (
              <div key={index} className="disco-container">
                <img className="disco" src={album.img} alt={album.title} />
                <figcaption>
                  {album.artist}
                  <a href={album.url} target="_blank" rel="noopener noreferrer" aria-label={`Escuchar ${album.title} en YouTube`}>▶</a>
                </figcaption>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div className="back-navigation">
        <Link to="/" className="nav-button">_VOLVER_AL_INICIO</Link>
      </div>
    </main>
  );
}

export default MarioProfile;
