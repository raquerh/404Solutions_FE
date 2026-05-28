import { useState, useEffect } from 'react';
import './JsonExplorer.css';

function JsonExplorer() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedStatus, setSelectedStatus] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar datos del JSON
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) throw new Error('No se pudo cargar el archivo de proyectos');
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Filtrado derivado (no necesita useEffect)
  const filteredProjects = projects.filter(project => {
    // Filtrar por búsqueda de texto
    const matchesSearch = !searchTerm ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technology.toLowerCase().includes(searchTerm.toLowerCase());

    // Filtrar por categoría
    const matchesCategory = selectedCategory === 'Todas' || project.category === selectedCategory;

    // Filtrar por estado
    const matchesStatus = selectedStatus === 'Todos' || project.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = ['Todas', ...new Set(projects.map(p => p.category))];
  const statuses = ['Todos', ...new Set(projects.map(p => p.status))];

  if (loading) {
    return (
      <div className="json-explorer">
        <div className="loading-container">
          <div className="terminal-loader">
            <span className="loading-text">&gt; Cargando datos</span>
            <span className="loading-dots">...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="json-explorer">
        <div className="loading-container">
          <div className="terminal-loader">
            <span className="loading-text" style={{ color: '#ff5555' }}>&gt; ERROR: {error}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="json-explorer">
      <div className="explorer-header">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">json_explorer.exe</span>
        </div>
        <h1>&gt; Explorador de Proyectos_</h1>
        <p className="subtitle">
          Base de datos local con {projects.length} proyectos | Filtrado en tiempo real
        </p>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="filters-container">
        <div className="search-box">
          <label htmlFor="search">
            <span className="prompt">&gt;</span> Buscar:
          </label>
          <input
            id="search"
            type="text"
            placeholder="Título, descripción o tecnología..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-btn"
              onClick={() => setSearchTerm('')}
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>

        <div className="filter-group">
          <div className="filter-item">
            <label htmlFor="category">
              <span className="prompt">&gt;</span> Categoría:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="status">
              <span className="prompt">&gt;</span> Estado:
            </label>
            <select
              id="status"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="filter-select"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="results-info">
        <p>
          <span className="prompt">&gt;</span> Mostrando {filteredProjects.length} de {projects.length} proyectos
        </p>
        {(searchTerm || selectedCategory !== 'Todas' || selectedStatus !== 'Todos') && (
          <button 
            className="reset-btn"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Todas');
              setSelectedStatus('Todos');
            }}
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Grid de proyectos */}
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="card-header">
                <span className="project-id">#{project.id.toString().padStart(2, '0')}</span>
                <span className={`status-badge ${project.status === 'Completado' ? 'completed' : 'in-progress'}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="meta-item">
                  <span className="meta-label">Categoría:</span>
                  <span className="meta-value">{project.category}</span>
                </span>
                <span className="meta-item">
                  <span className="meta-label">Tech:</span>
                  <span className="meta-value">{project.technology}</span>
                </span>
                <span className="meta-item">
                  <span className="meta-label">Año:</span>
                  <span className="meta-value">{project.year}</span>
                </span>
              </div>
            </article>
          ))
        ) : (
          <div className="no-results">
            <p className="no-results-text">
              <span className="prompt">&gt;</span> No se encontraron proyectos con los filtros aplicados
            </p>
            <button 
              className="nav-button"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todas');
                setSelectedStatus('Todos');
              }}
            >
              Restablecer búsqueda
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default JsonExplorer;
