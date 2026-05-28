import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer">
      <div className="footer-copy">
        <p>
          <span className="verde-fuerte">© {currentYear} 404 Solutions</span> |{' '}
          <span className="texto-opaco">Todos los derechos reservados</span>
        </p>
        <p className="licencia">
          <span className="texto-opaco">Licencia:</span>{' '}
          <span className="verde-fuerte">MIT</span>
        </p>
      </div>
      <div className="footer-redes">
        <a
          href="https://github.com/IFTS29/404_Solutions_TP1_FrontEnd"
          target="_blank"
          rel="noopener noreferrer"
          className="enlace-repo"
        >
          <i className="fab fa-github"></i>
          <span className="texto-opaco">Ver repositorio en GitHub</span>
        </a>
      </div>
      <div className="btn-subir-container">
        <a href="#" className="btn-subir" onClick={scrollToTop} aria-label="Volver arriba">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
