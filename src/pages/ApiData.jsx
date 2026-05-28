import { useState, useEffect } from 'react';
import './ApiData.css';

function ApiData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch de la API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Cálculos de paginación
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  // Funciones de navegación
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Estado de carga
  if (loading) {
    return (
      <div className="api-data">
        <div className="loading-container">
          <div className="terminal-loader">
            <span className="loading-text">&gt; Conectando con API</span>
            <span className="loading-dots">...</span>
          </div>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  // Estado de error
  if (error) {
    return (
      <div className="api-data">
        <div className="error-container">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="title">error.log</span>
          </div>
          <div className="error-content">
            <h2>&gt; ERROR_</h2>
            <p className="error-message">
              <span className="prompt">&gt;</span> {error}
            </p>
            <button 
              className="nav-button"
              onClick={() => window.location.reload()}
            >
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="api-data">
      <div className="api-header">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">api_consumer.exe</span>
        </div>
        <h1>&gt; Consumo de API Externa_</h1>
        <p className="subtitle">
          <span className="api-badge">JSONPlaceholder API</span>
          Datos en tiempo real | {users.length} usuarios cargados
        </p>
      </div>

      {/* Grid de usuarios */}
      <div className="users-grid">
        {currentUsers.map((user) => (
          <article key={user.id} className="user-card">
            <div className="user-header">
              <div className="user-avatar">
                {user.name.charAt(0)}
              </div>
              <div className="user-basic-info">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-username">@{user.username}</p>
              </div>
            </div>

            <div className="user-details">
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <div className="detail-content">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{user.email}</span>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">📱</span>
                <div className="detail-content">
                  <span className="detail-label">Teléfono:</span>
                  <span className="detail-value">{user.phone}</span>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">🌐</span>
                <div className="detail-content">
                  <span className="detail-label">Website:</span>
                  <a 
                    href={`https://${user.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="detail-link"
                  >
                    {user.website}
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">🏢</span>
                <div className="detail-content">
                  <span className="detail-label">Empresa:</span>
                  <span className="detail-value">{user.company.name}</span>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div className="detail-content">
                  <span className="detail-label">Ciudad:</span>
                  <span className="detail-value">{user.address.city}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Paginación */}
      <div className="pagination-container">
        <div className="pagination-info">
          <p>
            <span className="prompt">&gt;</span> Página {currentPage} de {totalPages}
          </p>
          <p className="items-info">
            Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, users.length)} de {users.length} usuarios
          </p>
        </div>

        <div className="pagination-controls">
          <button
            className="pagination-btn"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            aria-label="Página anterior"
          >
            ← Anterior
          </button>

          <div className="page-numbers">
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              // Mostrar solo algunas páginas para no saturar
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNumber}
                    className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
                    onClick={() => goToPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (
                pageNumber === currentPage - 2 ||
                pageNumber === currentPage + 2
              ) {
                return <span key={pageNumber} className="page-ellipsis">...</span>;
              }
              return null;
            })}
          </div>

          <button
            className="pagination-btn"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            aria-label="Página siguiente"
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApiData;
