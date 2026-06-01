import "./ComponentTree.css";

function ComponentTree() {
  return (
    <div className="component-tree-page">
      <div className="tree-header">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="title">component_tree.exe</span>
        </div>
        <h1>&gt; Árbol de Renderizado_</h1>
        <p className="subtitle">
          Arquitectura de componentes React | Estructura jerárquica de la
          aplicación
        </p>
      </div>

      <div className="tree-content">
        {/* Explicación */}
        <section className="tree-explanation">
          <h2>&gt; Descripción de la Arquitectura_</h2>
          <p>
            Este diagrama representa la estructura jerárquica de componentes de
            nuestra aplicación React. Cada componente se organiza en niveles,
            desde el componente raíz hasta los componentes hoja.
          </p>
          <div className="legend">
            <h3>Leyenda:</h3>
            <ul>
              <li>
                <span className="legend-root">■</span> Componente Raíz
              </li>
              <li>
                <span className="legend-layout">■</span> Componentes de Layout
              </li>
              <li>
                <span className="legend-page">■</span> Páginas/Vistas
              </li>
              <li>
                <span className="legend-component">■</span> Componentes
                Reutilizables
              </li>
            </ul>
          </div>
        </section>

        {/* Árbol Visual */}
        <section className="tree-diagram">
          <div className="tree-node root">
            <div className="node-content">
              <span className="node-icon">⚛️</span>
              <span className="node-name">App.jsx</span>
              <span className="node-badge root-badge">ROOT</span>
            </div>
            <div className="node-description">
              Componente raíz | Configuración de Router
            </div>

            <div className="tree-children">
              {/* Router */}
              <div className="tree-node layout">
                <div className="node-content">
                  <span className="node-icon">🔀</span>
                  <span className="node-name">BrowserRouter</span>
                  <span className="node-badge">ROUTER</span>
                </div>

                <div className="tree-children">
                  {/* ScrollToTop */}
                  <div className="tree-node component">
                    <div className="node-content">
                      <span className="node-icon">⬆️</span>
                      <span className="node-name">ScrollToTop</span>
                    </div>
                    <div className="node-description">
                      Scroll automático al cambiar de ruta
                    </div>
                  </div>

                  {/* Header */}
                  <div className="tree-node layout">
                    <div className="node-content">
                      <span className="node-icon">📱</span>
                      <span className="node-name">Header</span>
                      <span className="node-badge">LAYOUT</span>
                    </div>
                    <div className="node-description">
                      Menú hamburguesa mobile
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="tree-node layout">
                    <div className="node-content">
                      <span className="node-icon">📊</span>
                      <span className="node-name">Sidebar</span>
                      <span className="node-badge">LAYOUT</span>
                    </div>
                    <div className="node-description">
                      Navegación lateral fija | Dashboard
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="tree-node layout">
                    <div className="node-content">
                      <span className="node-icon">📄</span>
                      <span className="node-name">Main Content</span>
                      <span className="node-badge">LAYOUT</span>
                    </div>

                    <div className="tree-children">
                      {/* Routes */}
                      <div className="tree-node layout">
                        <div className="node-content">
                          <span className="node-icon">🛤️</span>
                          <span className="node-name">Routes</span>
                        </div>

                        <div className="tree-children routes-grid">
                          {/* Home */}
                          <div className="tree-node page">
                            <div className="node-content">
                              <span className="node-icon">🏠</span>
                              <span className="node-name">Home</span>
                            </div>
                            <div className="tree-children">
                              <div className="tree-node component">
                                <div className="node-content">
                                  <span className="node-name">HeroSection</span>
                                </div>
                              </div>
                              <div className="tree-node component">
                                <div className="node-content">
                                  <span className="node-name">TeamList</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Bitácora */}
                          <div className="tree-node page">
                            <div className="node-content">
                              <span className="node-icon">📋</span>
                              <span className="node-name">Bitacora</span>
                            </div>
                          </div>

                          {/* JSON Explorer */}
                          <div className="tree-node page">
                            <div className="node-content">
                              <span className="node-icon">🔍</span>
                              <span className="node-name">JsonExplorer</span>
                            </div>
                          </div>

                          {/* API Data */}
                          <div className="tree-node page">
                            <div className="node-content">
                              <span className="node-icon">🎵</span>
                              <span className="node-name">ApiData</span>
                            </div>
                          </div>

                          {/* Gallery */}
                          <div className="tree-node page">
                            <div className="node-content">
                              <span className="node-icon">🖼️</span>
                              <span className="node-name">Gallery</span>
                            </div>
                          </div>

                          {/* Component Tree */}
                          <div className="tree-node page">
                            <div className="node-content">
                              <span className="node-icon">🌳</span>
                              <span className="node-name">ComponentTree</span>
                            </div>
                          </div>

                          {/* Profiles */}
                          <div className="tree-node page">
                            <div className="node-content">
                              <span className="node-icon">👤</span>
                              <span className="node-name">Profiles</span>
                            </div>
                            <div className="tree-children">
                              <div className="tree-node component">
                                <div className="node-content">
                                  <span className="node-name">
                                    MarianaProfile
                                  </span>
                                </div>
                              </div>
                              <div className="tree-node component">
                                <div className="node-content">
                                  <span className="node-name">
                                    MarioProfile
                                  </span>
                                </div>
                              </div>
                              <div className="tree-node component">
                                <div className="node-content">
                                  <span className="node-name">MikeProfile</span>
                                </div>
                              </div>
                              <div className="tree-node component">
                                <div className="node-content">
                                  <span className="node-name">
                                    RaquelProfile
                                  </span>
                                </div>
                              </div>
                              <div className="tree-node component">
                                <div className="node-content">
                                  <span className="node-name">
                                    ValeriaProfile
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="tree-node layout">
                        <div className="node-content">
                          <span className="node-icon">⬇️</span>
                          <span className="node-name">Footer</span>
                          <span className="node-badge">LAYOUT</span>
                        </div>
                        <div className="node-description">
                          Pie de página con año dinámico
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabla de Componentes */}
        <section className="components-table">
          <h2>&gt; Detalle de Componentes_</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Componente</th>
                  <th>Tipo</th>
                  <th>Descripción</th>
                  <th>Props/Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>App.jsx</strong>
                  </td>
                  <td>
                    <span className="badge root-badge">Root</span>
                  </td>
                  <td>
                    Componente raíz que configura el Router y estructura general
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <strong>Sidebar</strong>
                  </td>
                  <td>
                    <span className="badge layout-badge">Layout</span>
                  </td>
                  <td>Navegación lateral fija tipo Dashboard</td>
                  <td>useState (collapsed)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Header</strong>
                  </td>
                  <td>
                    <span className="badge layout-badge">Layout</span>
                  </td>
                  <td>
                    Menú de navegación colapsable para dispositivos móviles
                  </td>
                  <td>useState (menuOpen)</td>
                </tr>
                <tr>
                  <td>
                    <strong>ScrollToTop</strong>
                  </td>
                  <td>
                    <span className="badge component-badge">Component</span>
                  </td>
                  <td>Scroll automático al cambiar de ruta</td>
                  <td>useEffect, useLocation</td>
                </tr>
                <tr>
                  <td>
                    <strong>Footer</strong>
                  </td>
                  <td>
                    <span className="badge layout-badge">Layout</span>
                  </td>
                  <td>Pie de página con año dinámico</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <strong>Home</strong>
                  </td>
                  <td>
                    <span className="badge page-badge">Page</span>
                  </td>
                  <td>Página principal con hero y lista de equipo</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <strong>HeroSection</strong>
                  </td>
                  <td>
                    <span className="badge component-badge">Component</span>
                  </td>
                  <td>Sección hero con presentación del equipo</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <strong>TeamList</strong>
                  </td>
                  <td>
                    <span className="badge component-badge">Component</span>
                  </td>
                  <td>Grilla de tarjetas de integrantes</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <strong>Bitacora</strong>
                  </td>
                  <td>
                    <span className="badge page-badge">Page</span>
                  </td>
                  <td>Documentación del proyecto y metodología</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <strong>JsonExplorer</strong>
                  </td>
                  <td>
                    <span className="badge page-badge">Page</span>
                  </td>
                  <td>Explorador de datos JSON con filtrado en tiempo real</td>
                  <td>useState (search, filters), useEffect</td>
                </tr>
                <tr>
                  <td>
                    <strong>ApiData</strong>
                  </td>
                  <td>
                    <span className="badge page-badge">Page</span>
                  </td>
                  <td>
                    Explorador musical via iTunes API con búsqueda y paginación
                  </td>
                  <td>
                    useState (tracks, loading, error, page, search), useEffect,
                    useRef
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Gallery</strong>
                  </td>
                  <td>
                    <span className="badge page-badge">Page</span>
                  </td>
                  <td>Galería de imágenes con Lightbox</td>
                  <td>useState (lightbox, index), useEffect (keyboard)</td>
                </tr>
                <tr>
                  <td>
                    <strong>ComponentTree</strong>
                  </td>
                  <td>
                    <span className="badge page-badge">Page</span>
                  </td>
                  <td>Visualización del árbol de componentes</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <strong>*Profile</strong>
                  </td>
                  <td>
                    <span className="badge page-badge">Page</span>
                  </td>
                  <td>Páginas individuales de cada integrante (x5)</td>
                  <td>useState (carousels, selections)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Flujo de Datos */}
        <section className="data-flow">
          <h2>&gt; Flujo de Datos_</h2>
          <div className="flow-diagram">
            <div className="flow-item">
              <div className="flow-step">1</div>
              <div className="flow-content">
                <h3>Router</h3>
                <p>BrowserRouter gestiona las rutas y la navegación</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-item">
              <div className="flow-step">2</div>
              <div className="flow-content">
                <h3>Layout</h3>
                <p>Sidebar y estructura principal se mantienen constantes</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-item">
              <div className="flow-step">3</div>
              <div className="flow-content">
                <h3>Pages</h3>
                <p>Componentes de página se renderizan según la ruta</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-item">
              <div className="flow-step">4</div>
              <div className="flow-content">
                <h3>Components</h3>
                <p>Componentes hijos reciben props y manejan estado local</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ComponentTree;
