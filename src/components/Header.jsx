import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header Desktop */}
      <header className="desktop-header">
        <nav className="nav-container">
          <Link to="/" className="logo">404_SOLUTIONS_</Link>
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>Inicio</Link>
            </li>
            <li>
              <a href="/#team-list" className="active">Integrantes</a>
            </li>
            <li>
              <Link to="/bitacora" className={isActive('/bitacora') ? 'active' : ''}>Bitácora</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Header Mobile */}
      <header className="mobile-header dos-columnas">
        <Link to="/" className="oculto logo">404_SOLUTIONS_</Link>
        <div className="menu-hamburguesa">
          <button 
            id="abrir" 
            className="abrir-menu" 
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <img className="img-abrir" src="/img/iconos-mario/menu.png" alt="menu" />
          </button>
          <nav className={`nav ${menuOpen ? 'visible' : ''}`} id="nav">
            <button 
              id="cerrar" 
              className="cerrar-menu" 
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <img className="img-cerrar" src="/img/iconos-mario/cerrar.png" alt="cerrar" />
            </button>
            <ul className="nav-links">
              <li>
                <Link to="/" className="active" onClick={closeMenu}>Inicio</Link>
              </li>
            </ul>
            <ul className="nav-links">
              <li>
                <a href="/#team-list" className="active" onClick={closeMenu}>Integrantes</a>
              </li>
            </ul>
            <ul className="nav-links">
              <Link to="/bitacora" className="active" onClick={closeMenu}>Bitácora</Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
