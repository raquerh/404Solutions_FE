import { Link } from 'react-router-dom';
import './Bitacora.css';

function Bitacora() {
  return (
    <div id="bitacora">
      <h1>&gt; Bitácora del Proyecto_</h1>
      <p>Registro del proceso de desarrollo, roles del equipo y justificación de la migración a React.</p>

      {/* ROLES DEL EQUIPO */}
      <div className="bitacora-entry">
        <h2>&gt; Roles del Equipo_</h2>
        <p>Cada integrante asumió responsabilidades específicas durante el desarrollo del TP2:</p>
        <table className="roles-table">
          <thead>
            <tr>
              <th>Integrante</th>
              <th>Rol Principal</th>
              <th>Contribuciones TP2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Mariana Aiello</strong></td>
              <td>Software Dev &amp; Data Science</td>
              <td>Perfil individual completo, componente SkillBar, explorador JSON, documentación</td>
            </tr>
            <tr>
              <td><strong>Mario González</strong></td>
              <td>Full Stack Developer</td>
              <td>Sidebar Dashboard, estructura de routing, integración de componentes</td>
            </tr>
            <tr>
              <td><strong>Miguel Ángel Flores</strong></td>
              <td>Full Stack Developer</td>
              <td>Módulo API externa, sistema de paginación, manejo de estados</td>
            </tr>
            <tr>
              <td><strong>Raquel Rodríguez</strong></td>
              <td>Frontend Developer</td>
              <td>Galería con Lightbox, estilos y animaciones, perfil individual</td>
            </tr>
            <tr>
              <td><strong>Valeria Thomas</strong></td>
              <td>Fullstack Developer</td>
              <td>Árbol de componentes, deploy en Vercel, perfil individual</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FLUJO DE TRABAJO */}
      <div className="bitacora-entry">
        <h2>&gt; Metodología y Flujo de Trabajo_</h2>
        <ul>
          <li>
            <strong>Control de versiones (Git):</strong> Repositorio compartido en GitHub.
            Cada integrante trabajó en su propia rama de feature y luego realizó merge a la rama principal.
          </li>
          <li>
            <strong>Revisión de código:</strong> Pull requests revisados por al menos un compañero antes de hacer merge.
          </li>
          <li>
            <strong>Comunicación:</strong> Coordinación del equipo vía grupo de WhatsApp para sincronizar avances y resolver bloqueos.
          </li>
          <li>
            <strong>Testing:</strong> Pruebas manuales de cada funcionalidad en el navegador antes de integrar los cambios.
          </li>
          <li>
            <strong>Documentación continua:</strong> README actualizado a medida que se completaban funcionalidades.
          </li>
        </ul>
      </div>

      {/* PROCESO DE DESARROLLO */}
      <div className="bitacora-entry">
        <h2>&gt; Proceso de Desarrollo_</h2>

        <div className="bitacora-sub">
          <h3>Semana 1 — Planificación y Diseño</h3>
          <ul>
            <li><strong>Concepto:</strong> Estética terminal/retro-computing con verde (#00ff41) sobre negro (#0a0a0a).</li>
            <li><strong>Estructura:</strong> Definición de secciones obligatorias del TP2 y distribución de tareas.</li>
            <li><strong>Setup:</strong> Configuración de Vite + React 19 + React Router DOM.</li>
          </ul>
        </div>

        <div className="bitacora-sub">
          <h3>Semana 2 — Base React + Sidebar</h3>
          <ul>
            <li>Migración de Header horizontal a Sidebar Dashboard fija.</li>
            <li>Implementación de React Router con todas las rutas.</li>
            <li>Componentes base: Sidebar, Footer, ScrollToTop.</li>
            <li>Adaptación del CSS del TP1 a módulos por componente.</li>
          </ul>
        </div>

        <div className="bitacora-sub">
          <h3>Semana 3 — Funcionalidades Dinámicas</h3>
          <ul>
            <li>JsonExplorer con filtrado en tiempo real (useState, fetch).</li>
            <li>ApiData con paginación y estados loading/error/success.</li>
            <li>Gallery con Lightbox, cierre ESC y navegación con flechas.</li>
            <li>ComponentTree con diagrama visual de arquitectura.</li>
          </ul>
        </div>

        <div className="bitacora-sub">
          <h3>Semana 4 — Perfiles y Pulido</h3>
          <ul>
            <li>Componente SkillBar animado (useEffect + CSS transition).</li>
            <li>Integración de barras de progreso y DevIcons en todos los perfiles.</li>
            <li>Carrusel de películas interactivo en perfiles.</li>
            <li>Animaciones de entrada escalonadas en TeamList.</li>
            <li>Revisión de accesibilidad y responsive design.</li>
          </ul>
        </div>
      </div>

      {/* JUSTIFICACIÓN DE MIGRACIÓN */}
      <div className="bitacora-entry">
        <h2>&gt; Justificación de Migración: HTML/JS → React_</h2>

        <div className="bitacora-sub">
          <h3>¿Por qué migramos?</h3>
          <p>
            El TP1 fue desarrollado con HTML estático, CSS y JavaScript vanilla. Aunque funcionaba,
            presentaba limitaciones claras que se volvieron evidentes al querer agregar nuevas funcionalidades:
          </p>
          <div className="comparacion-grid">
            <div className="comparacion-col before">
              <h4>&gt; ANTES (TP1)_</h4>
              <ul>
                <li>Múltiples archivos HTML (uno por página)</li>
                <li>Header y footer duplicados en cada archivo</li>
                <li>Navegación con recarga completa de página</li>
                <li>Manipulación directa del DOM (<code>getElementById</code>, <code>innerHTML</code>)</li>
                <li>Estado global con variables globales, propenso a bugs</li>
                <li>Difícil agregar nuevas funcionalidades sin romper lo existente</li>
              </ul>
            </div>
            <div className="comparacion-col after">
              <h4>&gt; DESPUÉS (TP2)_</h4>
              <ul>
                <li>Single Page Application (un solo HTML)</li>
                <li>Sidebar y Footer como componentes reutilizables</li>
                <li>Navegación instantánea con React Router (sin recarga)</li>
                <li>Estado declarativo con <code>useState</code> y <code>useEffect</code></li>
                <li>Cada componente maneja su propio estado local</li>
                <li>Arquitectura modular: fácil de escalar y mantener</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bitacora-sub">
          <h3>Mejoras Técnicas Concretas</h3>

          <div className="mejora-item">
            <span className="mejora-label">1. Componentización</span>
            <p>
              En el TP1, el header se repetía en los 6+ archivos HTML. Un cambio requería editar cada archivo por separado.
              En TP2, el componente <code>Sidebar</code> se define una vez y se renderiza en toda la app automáticamente.
            </p>
          </div>

          <div className="mejora-item">
            <span className="mejora-label">2. Gestión de Estado</span>
            <p>
              El menú hamburguesa en TP1 usaba variables globales y <code>classList.toggle()</code>.
              En TP2 usa <code>useState</code>: React actualiza el DOM automáticamente cuando el estado cambia,
              eliminando la posibilidad de estados desincronizados.
            </p>
          </div>

          <div className="mejora-item">
            <span className="mejora-label">3. Routing y Navegación</span>
            <p>
              En TP1 cada enlace cargaba un archivo HTML nuevo (recarga completa, flash visual).
              En TP2 React Router intercepta la navegación: solo se actualiza el componente de la ruta activa,
              manteniendo Sidebar y Footer montados continuamente.
            </p>
          </div>

          <div className="mejora-item">
            <span className="mejora-label">4. Funcionalidades Complejas</span>
            <p>
              Funcionalidades como el Lightbox con teclado, el filtrado en tiempo real del JSON
              o la paginación de la API serían muy complejas de mantener con JS vanilla.
              Con React Hooks (<code>useEffect</code>, <code>useCallback</code>) se logran de forma legible y sin memory leaks.
            </p>
          </div>

          <div className="mejora-item">
            <span className="mejora-label">5. Build y Performance</span>
            <p>
              Vite genera un build optimizado con code splitting, tree shaking y minificación automática.
              El resultado es un sitio más rápido y liviano que la versión TP1 con assets sin optimizar.
            </p>
          </div>
        </div>

        <div className="bitacora-sub">
          <h3>Desafíos Encontrados</h3>
          <ul>
            <li>
              <strong>Curva de aprendizaje de Hooks:</strong> Entender cuándo usar <code>useEffect</code>
              vs lógica derivada fue el mayor desafío inicial. Solución: refactoring guiado por errores de ESLint.
            </li>
            <li>
              <strong>CSS en componentes separados:</strong> Evitar conflictos de nombres de clase entre perfiles
              requirió usar prefijos específicos por componente (ej: <code>.tech-icon-mike</code>, <code>.tech-icon-raquel</code>).
            </li>
            <li>
              <strong>Routing con Sidebar:</strong> Configurar React Router para que la Sidebar permanezca siempre
              visible mientras el contenido central cambia requirió entender el layout con <code>App.jsx</code> como wrapper.
            </li>
            <li>
              <strong>Cleanup de event listeners:</strong> El Lightbox registra un listener de teclado global.
              Aprendimos que <code>useEffect</code> debe retornar una función de cleanup para evitar que el listener
              se acumule en cada render.
            </li>
          </ul>
        </div>

        <div className="bitacora-sub">
          <h3>Lecciones Aprendidas</h3>
          <ul>
            <li>React simplifica enormemente las interfaces complejas con estado interdependiente.</li>
            <li>La componentización obliga a pensar en responsabilidades únicas, lo que mejora la calidad del código.</li>
            <li>El Virtual DOM no es magia: sigue requiriendo pensar bien las dependencias del estado.</li>
            <li>Las herramientas modernas (Vite, ESLint, HMR) multiplican la productividad del equipo.</li>
            <li>Dividir el trabajo por componentes/páginas hace el desarrollo en equipo más fluido.</li>
          </ul>
        </div>
      </div>

      <div className="back-navigation">
        <Link to="/" className="nav-button">_VOLVER_AL_INICIO</Link>
      </div>
    </div>
  );
}

export default Bitacora;
