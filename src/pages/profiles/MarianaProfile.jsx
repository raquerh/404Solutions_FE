import { useState } from 'react';
import { Link } from 'react-router-dom';
import SkillBar from '../../components/SkillBar';
import './ProfileCommon.css';
import './MarianaProfile.css';

function MarianaProfile() {
  const [selectedMovie, setSelectedMovie] = useState({
    title: 'The Matrix',
    director: 'Lana y Lilly Wachowski',
    year: '1999',
    desc: 'Un hacker descubre la verdad sobre la realidad y su papel en la guerra contra las máquinas. Revolucionó el cine de ciencia ficción con su propuesta visual y filosófica.',
    trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8'
  });

  const movies = [
    {
      title: 'Oldboy',
      director: 'Park Chan-wook',
      year: '2003',
      desc: 'Un hombre encerrado durante 15 años sin razón aparente es liberado y tiene 5 días para encontrar a su captor y buscar respuestas.',
      trailer: 'https://www.youtube.com/embed/tAaBkFChaRg',
      poster: '/img/peliculas-mariana/pelicula1.jpg'
    },
    {
      title: 'The Matrix',
      director: 'Lana y Lilly Wachowski',
      year: '1999',
      desc: 'Un hacker descubre la verdad sobre la realidad y su papel en la guerra contra las máquinas. Revolucionó el cine de ciencia ficción con su propuesta visual y filosófica.',
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8',
      poster: '/img/peliculas-mariana/pelicula3.jpg'
    },
    {
      title: 'Kill Bill: Vol. 1',
      director: 'Quentin Tarantino',
      year: '2003',
      desc: 'Una asesina despierta luego de 4 años de estar en coma y busca venganza contra quienes la traicionaron.',
      trailer: 'https://www.youtube.com/embed/7kSuas6mRpk',
      poster: '/img/peliculas-mariana/pelicula2.jpeg'
    }
  ];

  const albums = [
    {
      title: 'Greatest Hits',
      artist: "Guns N' Roses",
      year: '2004',
      desc: 'Recopilación esencial con los mayores éxitos del hard rock de la banda, en una selección de 14 temas.',
      image: '/img/discos-mariana/GunsRoses.jpg',
      link: 'https://www.youtube.com/watch?v=okuctlQZUC0&list=PLofmCZWRdOtl1dM2XQPx2_8KxveP6KbTt&index=1'
    },
    {
      title: 'The Wall',
      artist: 'Pink Floyd',
      year: '1979',
      desc: 'Ópera rock conceptual que explora el aislamiento, la alienación y la opresión en una obra maestra atemporal.',
      image: '/img/discos-mariana/PinkFloyd.svg',
      link: 'https://www.youtube.com/watch?v=uzsEmI61Xas&list=OLAK5uy_nEl-NcW1jBoidS2oFQAQGyhrv6m2Ounw4'
    },
    {
      title: 'Greatest Hits',
      artist: 'Queen',
      year: '1981',
      desc: 'Colección legendaria con los himnos de rock más icónicos de todos los tiempos.',
      image: '/img/discos-mariana/Queen.jpg',
      link: 'https://www.youtube.com/results?search_query=queen+greatest+hits'
    },
    {
      title: 'In a Time Lapse',
      artist: 'Ludovico Einaudi',
      year: '2013',
      desc: 'Composiciones instrumentales y neoclásicas que evocan emociones profundas.',
      image: '/img/discos-mariana/LudovicoEinaudi.jpg',
      link: 'https://www.youtube.com/playlist?list=PLrXhhXHrorHALCEYd2AHl5OsFYGXu9qnB'
    },
    {
      title: 'The World of H.Z.',
      artist: 'Hans Zimmer',
      year: '2019',
      desc: 'Arreglos sinfónicos espectaculares de sus mejores bandas sonoras cinematográficas.',
      image: '/img/discos-mariana/HansZimmer.jpg',
      link: 'https://www.youtube.com/watch?v=_73jKyqYE3Y'
    },
    {
      title: 'The LOTR Symphony',
      artist: 'Howard Shore',
      year: '2004',
      desc: 'Viaje musical épico que captura la magia, tensión y grandeza de un viaje por la Tierra Media.',
      image: '/img/discos-mariana/HowardShore.jpg',
      link: 'https://www.youtube.com/watch?v=l3ob1NVqUpI'
    }
  ];

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <main className="profile-main">
      <article className="profile-card" aria-label="Perfil de Mariana">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">mariana_profile.exe</span>
        </div>

        <div className="profile-content mariana-secciones">
          {/* SECCION: Sobre Mi */}
          <section id="sobre-mi" className="seccion-interna">
            <h2>&gt; Profile_</h2>

            <div className="profile-header-grid">
              <div className="glitch-effect">
                <img src="/img/avatar_mariana3.jpg" alt="Foto de Mariana" className="foto-perfil" />
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
                <span className="code-symbol-green">~/&#123;</span>
                Software Dev & Data Science Student
                <span className="code-symbol-green">&#125;</span>
              </p>
              <p className="description">
                Combinando mi visión analítica de la psicología con la lógica de los datos y el código. 
                Enfocada en la automatización con Python, el manejo de bases de datos y la resolución de 
                problemas mediante un enfoque sistemático. Busco crear soluciones web escalables y eficientes.
              </p>
            </div>

            <div className="social-links-mariana">
              <a href="https://github.com/Aiello-M" target="_blank" rel="noopener noreferrer" className="nav-button">
                GITHUB
              </a>
              <a href="https://www.linkedin.com/in/aiellomariana/" target="_blank" rel="noopener noreferrer" className="nav-button">
                LINKEDIN
              </a>
            </div>
          </section>

          <hr className="separador-terminal" />

          {/* SECCION: Habilidades */}
          <section id="habilidades" className="seccion-interna">
            <h2>&gt; Habilidades_</h2>

            <div className="skills-container">
              <div className="skills-category">
                <p className="role-subtitle">
                  <span className="code-symbol-green">~/&#123;</span>
                  Core_Stack
                  <span className="code-symbol-green">&#125;</span>
                  <div className="tag-verde">// Que conozco</div>
                </p>
                <div className="skills-bars">
                  <SkillBar skill="HTML5" level={90} delay={100} />
                  <SkillBar skill="CSS3" level={85} delay={200} />
                  <SkillBar skill="JavaScript" level={80} delay={300} />
                  <SkillBar skill="Python" level={85} delay={400} />
                  <SkillBar skill="C#" level={75} delay={500} />
                  <SkillBar skill="MySQL" level={80} delay={600} />
                </div>
              </div>

              <div className="skills-category">
                <p className="role-subtitle">
                  <span className="code-symbol-green">~/&#123;</span>
                  Learning_Path
                  <span className="code-symbol-green">&#125;</span>
                  <div className="tag-verde">// En proceso</div>
                </p>
                <div className="skills-bars">
                  <SkillBar skill="React" level={70} delay={700} />
                  <SkillBar skill="Kotlin" level={60} delay={800} />
                  <SkillBar skill="Java" level={65} delay={900} />
                  <SkillBar skill="Machine Learning" level={55} delay={1000} />
                </div>
              </div>
            </div>

            <div className="skills-icons-section">
              <h3>&gt; Tech Stack_</h3>
              <div className="tech-icons">
                <div className="tech-icon" title="HTML5">
                  <i className="devicon-html5-plain colored"></i>
                </div>
                <div className="tech-icon" title="CSS3">
                  <i className="devicon-css3-plain colored"></i>
                </div>
                <div className="tech-icon" title="JavaScript">
                  <i className="devicon-javascript-plain colored"></i>
                </div>
                <div className="tech-icon" title="Python">
                  <i className="devicon-python-plain colored"></i>
                </div>
                <div className="tech-icon" title="C#">
                  <i className="devicon-csharp-plain colored"></i>
                </div>
                <div className="tech-icon" title="MySQL">
                  <i className="devicon-mysql-plain colored"></i>
                </div>
                <div className="tech-icon" title="React">
                  <i className="devicon-react-original colored"></i>
                </div>
                <div className="tech-icon" title="Git">
                  <i className="devicon-git-plain colored"></i>
                </div>
              </div>
            </div>
          </section>

          <hr className="separador-terminal" />

          {/* SECCION: Peliculas */}
          <section id="peliculas" className="seccion-interna">
            <h2>&gt; Películas Favoritas_</h2>

            <div className="peliculas-posters">
              {movies.map((movie, index) => (
                <article
                  key={index}
                  className={`poster-item ${selectedMovie.title === movie.title ? 'activo' : ''}`}
                  onClick={() => handleMovieClick(movie)}
                >
                  <img src={movie.poster} alt={movie.title} className="poster-img" />
                  <div className="poster-overlay">{movie.title}</div>
                </article>
              ))}
            </div>

            <div className="pelicula-info-display">
              <div className="pelicula-trailer">
                <iframe
                  src={selectedMovie.trailer}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

          {/* SECCION: Discos */}
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
                    aria-label="Escuchar en YouTube"
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
        <Link to="/" className="nav-button">_VOLVER_AL_INICIO</Link>
      </div>
    </main>
  );
}

export default MarianaProfile;
