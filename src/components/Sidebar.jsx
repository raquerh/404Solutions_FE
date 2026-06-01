import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Cierra el drawer mobile al navegar
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Cierra el drawer al hacer resize a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { path: '/', icon: '⚡', label: 'Dashboard' },
    { path: '/bitacora', icon: '📌', label: 'Bitácora' },
    { path: '/json-explorer', icon: '🗃️', label: 'Explorador JSON' },
    { path: '/api-data', icon: '🎧', label: 'Música' },
    { path: '/gallery', icon: '📸', label: 'Galería' },
    { path: '/component-tree', icon: '🧩', label: 'Árbol de Componentes' },
  ];

  const teamMembers = [
    { path: '/mariana', name: 'Mariana', avatar: '/img/avatar_mariana3.jpg' },
    { path: '/mario', name: 'Mario', avatar: '/img/mario.png' },
    { path: '/mike', name: 'Mike', avatar: '/img/avatar_mike.png' },
    { path: '/raquel', name: 'Raquel', avatar: '/img/perfil-raq.png' },
    { path: '/valeria', name: 'Valeria', avatar: '/img/img-valeria/avatar_vale.png' },
  ];

  const navContent = (
    <>
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo">
          <img src="/logo404solution.ico" alt="404 Solutions" className="logo-icon" />
          {!isCollapsed && <span className="logo-text">404_SOLUTIONS</span>}
        </Link>
        <button
          className="sidebar-toggle desktop-only"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
        >
          {isCollapsed ? '»' : '«'}
        </button>
        <button
          className="sidebar-toggle mobile-only"
          onClick={() => setIsMobileOpen(false)}
          aria-label="Cerrar menú"
        >
          ✕
        </button>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3 className="nav-section-title">
            {!isCollapsed && <span>NAVEGACIÓN</span>}
          </h3>
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                  title={item.label}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {!isCollapsed && <span className="nav-label">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-section-title">
            {!isCollapsed && <span>EQUIPO</span>}
          </h3>
          <ul className="nav-list team-list">
            {teamMembers.map((member) => (
              <li key={member.path}>
                <Link
                  to={member.path}
                  className={`nav-item team-item ${isActive(member.path) ? 'active' : ''}`}
                  title={member.name}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="team-avatar"
                  />
                  {!isCollapsed && <span className="nav-label">{member.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="terminal-indicator">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          {!isCollapsed && <span className="status-text">ONLINE</span>}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Botón hamburguesa — solo visible en mobile */}
      <button
        className="hamburger-btn"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Backdrop — solo en mobile cuando el drawer está abierto */}
      {isMobileOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar desktop */}
      <aside className={`sidebar desktop-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        {navContent}
      </aside>

      {/* Sidebar mobile drawer */}
      <aside className={`sidebar mobile-drawer ${isMobileOpen ? 'open' : ''}`}>
        {navContent}
      </aside>
    </>
  );
}

export default Sidebar;
