# 404 Solutions - Aplicación React con Dashboard

## Deploy en Producción

**Sitio Web:** [https://404-solutions-fe.vercel.app/](https://404-solutions-fe.vercel.app/)

**GitHub:** [github.com/raquerh/404Solutions_FE](https://github.com/raquerh/404Solutions_FE)

---

## Descripción del Proyecto

Este proyecto es la **migración completa** del sitio web estático de 404 Solutions (TP1) a una **Single Page Application (SPA)** moderna desarrollada con React. La aplicación implementa una arquitectura de componentes reutilizables, navegación mediante React Router, y un sistema de Dashboard con Sidebar fija para una experiencia de usuario profesional.

### Objetivo

Demostrar el dominio de React mediante la implementación de:

- Arquitectura de componentes modular
- Gestión de estado con Hooks
- Consumo de datos locales (JSON) y APIs externas
- Navegación SPA con React Router
- Interfaz interactiva con Lightbox y paginación
- Dashboard profesional con Sidebar fija

---

## Integrantes del Equipo

| Nombre | Rol | GitHub |
| --- | --- | --- |
| **Mariana Aiello** | Software Dev & Data Science | [github.com/Aiello-M](https://github.com/Aiello-M) |
| **Mario González** | Full Stack Developer | [github.com/elavincho](https://github.com/elavincho) |
| **Miguel Ángel Flores** | Full Stack Developer | [github.com/mikefink22](https://github.com/mikefink22) |
| **Raquel Rodríguez** | Frontend Developer | [github.com/raquerh](https://github.com/raquerh) |
| **Valeria Thomas** | Fullstack Developer | [github.com/Irinath](https://github.com/Irinath) |

---

## Tecnologías Utilizadas

### Frontend Framework

- **React** 19.2.5 - Librería de UI con componentes funcionales y Hooks
- **React Router DOM** 7.1.3 - Navegación SPA sin recarga de página
- **Vite** 8.0.10 - Build tool ultrarrápido con HMR (Hot Module Replacement)

### Herramientas de Desarrollo

- **ESLint** 10.2.1 - Linter para calidad y consistencia de código
- **Git** - Control de versiones
- **npm** - Gestor de paquetes

### Lenguajes y Estilos

- **JavaScript (ES6+)** - Sintaxis moderna con arrow functions, destructuring, async/await
- **CSS3** - Variables CSS, Flexbox, Grid, Animaciones, Transiciones
- **HTML5** - Estructura semántica

### Tipografías

- **Google Fonts** - [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) - Fuente monoespaciada principal de la interfaz

### Librerías de Iconos

- **DevIcons** - Iconos de tecnologías y lenguajes de programación
- **Font Awesome** 6.5.1 - Iconos generales para UI

### APIs Externas

- **iTunes Search API** - API pública de Apple para búsqueda de música (<https://itunes.apple.com/search>)

---

## Estructura de Archivos

```text
404Solutions_FE/
├── public/                      # Archivos estáticos
│   ├── data/
│   │   └── projects.json       # Datos locales (20 proyectos)
│   ├── img/                    # Imágenes del proyecto
│   │   ├── discos-mariana/
│   │   ├── discos-mario/
│   │   ├── discos-mike/
│   │   ├── discos-raquel/
│   │   ├── img-valeria/
│   │   ├── peliculas-mariana/
│   │   ├── peliculas-raquel/
│   │   ├── proyectos-mario/
│   │   ├── proyectos-raquel/
│   │   ├── proyectos-valeria/
│   │   ├── readme-img/         # Capturas para documentación
│   │   └── tecnologias-mario/
│   └── logo404solution.ico
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── Sidebar.jsx        # Navegación Dashboard
│   │   ├── Sidebar.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx         # Pie de página
│   │   ├── Footer.css
│   │   ├── HeroSection.jsx    # Sección hero con animaciones
│   │   ├── HeroSection.css
│   │   ├── TeamList.jsx       # Grilla de integrantes
│   │   ├── TeamList.css
│   │   ├── SkillBar.jsx       # Barra de progreso animada reutilizable
│   │   ├── SkillBar.css
│   │   └── ScrollToTop.jsx    # Scroll automático en navegación
│   ├── pages/                  # Páginas/Vistas
│   │   ├── Home.jsx           # Dashboard principal
│   │   ├── Bitacora.jsx       # Documentación del proyecto
│   │   ├── Bitacora.css
│   │   ├── JsonExplorer.jsx   # Explorador de JSON local
│   │   ├── JsonExplorer.css
│   │   ├── ApiData.jsx        # Consumo de iTunes API
│   │   ├── ApiData.css
│   │   ├── Gallery.jsx        # Galería con Lightbox
│   │   ├── Gallery.css
│   │   ├── ComponentTree.jsx  # Árbol de componentes
│   │   ├── ComponentTree.css
│   │   └── profiles/          # Perfiles individuales
│   │       ├── MarianaProfile.jsx
│   │       ├── MarianaProfile.css
│   │       ├── MarioProfile.jsx
│   │       ├── MarioProfile.css
│   │       ├── MikeProfile.jsx
│   │       ├── MikeProfile.css
│   │       ├── RaquelProfile.jsx
│   │       ├── RaquelProfile.css
│   │       ├── ValeriaProfile.jsx
│   │       ├── ValeriaProfile.css
│   │       └── ProfileCommon.css
│   ├── styles/
│   │   └── global.css         # Estilos globales y variables CSS
│   ├── App.jsx                # Componente raíz con Router
│   └── main.jsx               # Punto de entrada de la aplicación
├── .gitignore
├── eslint.config.js           # Configuración de ESLint
├── index.html                 # HTML base
├── package.json               # Dependencias y scripts
├── vite.config.js             # Configuración de Vite
└── README.md                  # Este archivo
```

---

## Guía de Estilos

### Paleta de Colores

| Color | Hexadecimal | Uso |
| ----- | ------------- | ----- |
| **Verde Terminal** | `#00ff41` | Texto principal, acentos, bordes activos |
| **Negro Profundo** | `#0a0a0a` | Fondo principal de la aplicación |
| **Gris Oscuro** | `#1a1a1a` | Fondos de tarjetas y contenedores |
| **Blanco** | `#ffffff` | Texto secundario, títulos |
| **Rojo** | `#ff0000` | Acentos del perfil de Mario, bordes |
| **Amarillo** | `#ffff00` | Alertas, estados en progreso |
| **Cyan** | `#4ecdc4` | Badges de layout, acentos secundarios |

### Tipografías

#### Fuente Principal

- **Nombre:** JetBrains Mono
- **Tipo:** Monoespaciada
- **Pesos:** 400 (Regular), 700 (Bold)
- **Link:** [Google Fonts - JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Uso:** Toda la interfaz (estética terminal/código)

#### Fuente Secundaria

- **Nombre:** Courier New
- **Tipo:** Monoespaciada (sistema)
- **Uso:** Fallback para JetBrains Mono

### Iconografía

#### DevIcons

- **Versión:** Latest (CDN)
- **Link:** [devicon.dev](https://devicon.dev/)
- **Uso:** Iconos de tecnologías (HTML, CSS, JavaScript, React, Python, etc.)
- **Implementación:** Clases CSS (`devicon-html5-plain`, `devicon-react-original`)

#### Font Awesome

- **Versión:** 6.5.1
- **Link:** [fontawesome.com](https://fontawesome.com/)
- **Uso:** Iconos generales de UI
- **Implementación:** Clases CSS (`fa-solid`, `fa-brands`)

#### Emojis Unicode

- **Uso:** Iconos de navegación en Sidebar (⚡, 📌, 🗃️, 🎧, 📸, 🧩)
- **Ventaja:** No requieren librería externa, universales

---

## Funcionalidades Dinámicas Implementadas (JavaScript/React)

### 1. Sidebar Dashboard con Estado Colapsable

**Componente:** `Sidebar.jsx`
**Hooks utilizados:** `useState`, `useLocation`

```javascript
const [isCollapsed, setIsCollapsed] = useState(false);
const location = useLocation();

const toggleSidebar = () => {
  setIsCollapsed(!isCollapsed);
};
```

**Funcionalidades:**

- Navegación lateral fija siempre visible
- Botón para colapsar/expandir (280px ↔ 80px)
- Indicador visual de ruta activa
- Responsive: se colapsa automáticamente en mobile
- Animaciones suaves de transición

---

### 2. Explorador de Datos JSON con Filtrado en Tiempo Real

**Componente:** `JsonExplorer.jsx`
**Hooks utilizados:** `useState`, `useEffect`
**Datos:** `public/data/projects.json` (20 objetos)

```javascript
const [projects, setProjects] = useState([]);
const [filteredProjects, setFilteredProjects] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState('Todas');

useEffect(() => {
  let result = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredProjects(result);
}, [searchTerm, selectedCategory, projects]);
```

**Funcionalidades:**

- Carga de datos desde JSON local
- Búsqueda por texto en tiempo real (título, descripción, tecnología)
- Filtros por categoría y estado
- Actualización instantánea de resultados
- Contador de resultados filtrados

---

### 3. Explorador Musical via iTunes API con Paginación

**Componente:** `ApiData.jsx`
**Hooks utilizados:** `useState`, `useEffect`, `useRef`
**API:** iTunes Search API (sin API key, gratuita)

```javascript
const [tracks, setTracks] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [searchTerm, setSearchTerm] = useState('rock');
const [retryCount, setRetryCount] = useState(0);
const audioRef = useRef(null);

useEffect(() => {
  const fetchTracks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=music&limit=50&country=AR`
      );
      const data = await response.json();
      setTracks(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchTracks();
}, [searchTerm, retryCount]);
```

**Funcionalidades:**

- Buscador de música en tiempo real (artista, canción, álbum)
- Portada de álbum (300x300px) en cada tarjeta
- Botón ▶ para preview de 30 segundos (solo una canción a la vez)
- Cleanup de audio al navegar a otra página (useRef + useEffect)
- Manejo de estados: loading, error, success
- Sistema de paginación (8 items por página, 4x2)
- Botones Anterior/Siguiente con disable inteligente
- Indicador de página actual (ej: "Página 2 de 7")
- Botón Reintentar funcional con `retryCount`

---

### 4. Galería de Imágenes con Lightbox

**Componente:** `Gallery.jsx`
**Hooks utilizados:** `useState`, `useEffect`

```javascript
const [lightboxOpen, setLightboxOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [lightboxOpen]);
```

**Funcionalidades:**

- Grid responsive de imágenes
- Click para abrir Lightbox (modal fullscreen)
- Navegación con flechas (← →)
- Cierre con tecla ESC
- Cierre con click fuera de la imagen
- Contador de posición (ej: "5 / 18")
- Prevención de scroll del body cuando está abierto
- Animaciones de zoom y fade

![Galería](./public/img/screenshots/gallery.png)

---

### 5. Animaciones de Entrada en Dashboard Home

**Componentes:** `HeroSection.jsx`, `TeamList.jsx`

```css
@keyframes crt-interference-entry {
  0% { opacity: 0; transform: translateY(20px); }
  15% { opacity: 1; transform: translateY(0); }
  100% { opacity: 1; }
}

.team-card.animate-glitch {
  animation: crt-interference-entry 0.6s ease-out forwards;
}
```

**Funcionalidades:**

- Animación CRT interference al cargar las tarjetas del equipo
- Delays escalonados para efecto cascada
- Transiciones suaves en hover

---

### 6. Simulador de Diagnóstico Interactivo

**Componente:** `HeroSection.jsx`

```javascript
const runDiagnostic = () => {
  const lines = [
    "// Inicializando sistema...",
    "// Verificando dependencias...",
    "// Estado: OK"
  ];
  let index = 0;
  const interval = setInterval(() => {
    if (index < lines.length) {
      setCodeLines(prev => [...prev, lines[index]]);
      index++;
    }
  }, 500);
};
```

**Funcionalidades:**

- Botón interactivo que ejecuta simulación
- Aparición progresiva de líneas de código
- Estado disabled durante ejecución

![Diagnóstico](./public/img/screenshots/diagnostic.png)

---

### 7. Scroll Automático al Cambiar de Ruta

**Componente:** `ScrollToTop.jsx`

```javascript
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
```

**Funcionalidades:**

- Scroll automático al top en cada cambio de ruta
- Mejora la UX en navegación SPA

![Scroll](./public/img/screenshots/scroll.png)

---

### 8. Footer con Año Dinámico

**Componente:** `Footer.jsx`

```javascript
const currentYear = new Date().getFullYear();
```

**Funcionalidades:**

- Actualización automática del año
- No requiere mantenimiento manual

![Año dinámico](./public/img/screenshots/footer-year.png)

---

### 9. Carrusel de Proyectos en Perfiles

Cada perfil individual incluye un carrusel interactivo para mostrar proyectos.

```javascript
const [currentProject, setCurrentProject] = useState(0);
const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
```

**Funcionalidades:**

- Navegación con botones ‹ y ›
- Indicadores de posición clickeables
- Animación de transición entre proyectos

![Carrusel](./public/img/screenshots/carousel.png)

---

### 10. Copiar Enlace al Perfil

**Componente:** `RaquelProfile.jsx`

```javascript
const copyProfileUrl = async () => {
  const url = window.location.href.split('#')[0];
  await navigator.clipboard.writeText(url);
  setCopySuccess(true);
  setTimeout(() => setCopySuccess(false), 2200);
};
```

**Funcionalidades:**

- Copia la URL del perfil al portapapeles
- Feedback visual transitorio ("¡Enlace copiado!")

![Copiar URL](./public/img/screenshots/copy-url.png)

---

### 11. Menú Hamburguesa (Mobile)

**Componente:** `Header.jsx`

```javascript
const [menuOpen, setMenuOpen] = useState(false);
```

**Funcionalidades:**

- Menú colapsable en pantallas móviles
- Overlay oscuro al abrir

![Menú hamburguesa](./public/img/screenshots/hamburger-menu.png)

---

## Árbol de Renderizado (Arquitectura de Componentes)

### Diagrama Jerárquico

```text
App (ROOT)
│
├── BrowserRouter
│   │
│   ├── ScrollToTop (Utility Component)
│   │
│   ├── Sidebar (Layout - Dashboard Navigation)
│   │   ├── Logo + Toggle Button
│   │   ├── Navigation Menu
│   │   │   ├── ⚡ Dashboard (Home)
│   │   │   ├── 📌 Bitácora
│   │   │   ├── 🗃️ Explorador JSON
│   │   │   ├── 🎧 Música (iTunes API)
│   │   │   ├── 📸 Galería
│   │   │   └── 🧩 Árbol de Componentes
│   │   ├── Team Members Links
│   │   │   ├── Mariana
│   │   │   ├── Mario
│   │   │   ├── Mike
│   │   │   ├── Raquel
│   │   │   └── Valeria
│   │   └── Footer Indicator (Online Status)
│   │
│   └── Main Content (Layout Container)
│       │
│       ├── Routes (React Router)
│       │   │
│       │   ├── Route: "/" → Home
│       │   │   ├── HeroSection
│       │   │   │   ├── Terminal Prompt
│       │   │   │   ├── Hero Title
│       │   │   │   ├── Stats Display
│       │   │   │   └── Diagnostic Button
│       │   │   └── TeamList
│       │   │       └── Team Cards (x5)
│       │   │
│       │   ├── Route: "/bitacora" → Bitacora
│       │   │
│       │   ├── Route: "/json-explorer" → JsonExplorer
│       │   │   ├── Search Input
│       │   │   ├── Filter Selects
│       │   │   └── Project Cards Grid
│       │   │
│       │   ├── Route: "/api-data" → ApiData
│       │   │   ├── Music Cards Grid
│       │   │   └── Pagination Controls
│       │   │
│       │   ├── Route: "/gallery" → Gallery
│       │   │   ├── Image Grid
│       │   │   └── Lightbox Modal
│       │   │
│       │   ├── Route: "/component-tree" → ComponentTree
│       │   │   ├── Tree Diagram
│       │   │   ├── Components Table
│       │   │   └── Data Flow Diagram
│       │   │
│       │   └── Routes: "/[member]" → Profile Pages
│       │       ├── MarianaProfile
│       │       ├── MarioProfile
│       │       ├── MikeProfile
│       │       ├── RaquelProfile
│       │       └── ValeriaProfile
│       │
│       └── Footer (Layout)
│           └── Copyright + Dynamic Year
```

### Tipos de Componentes

| Tipo | Descripción | Ejemplos |
| ---- | ----------- | -------- |
| **Root** | Componente raíz de la aplicación | App.jsx |
| **Layout** | Componentes de estructura persistente | Sidebar, Footer |
| **Page** | Componentes de vista/página | Home, Bitacora, JsonExplorer, ApiData, Gallery |
| **Component** | Componentes reutilizables | HeroSection, TeamList, SkillBar |
| **Utility** | Componentes sin UI (lógica) | ScrollToTop |

### Flujo de Datos

1. **Router** → BrowserRouter gestiona las rutas y la navegación
2. **Layout** → Sidebar y Footer se mantienen constantes en todas las vistas
3. **Pages** → Los componentes de página se renderizan según la ruta activa
4. **Components** → Componentes hijos reciben props y manejan estado local con Hooks

---

## Evolución del Proyecto (TP1 → TP2)

### Cambios Principales

#### De HTML/CSS/JS Vanilla a React

**ANTES (TP1):**

- Múltiples archivos HTML (index.html, mariana.html, mario.html, etc.)
- JavaScript vanilla con manipulación directa del DOM
- Código repetitivo en cada página (header, footer)
- Navegación con recarga completa de página
- Sin gestión de estado centralizada

**DESPUÉS (TP2):**

- Single Page Application (SPA) con un solo HTML
- Componentes React reutilizables
- Estado manejado con React Hooks (useState, useEffect)
- Navegación sin recarga con React Router
- Código modular y mantenible

---

### Mejoras Implementadas

#### 1. Componentización

**Antes:** Código HTML duplicado en cada página

```html
<!-- Repetido en cada archivo HTML -->
<header>
  <nav>...</nav>
</header>
```

**Después:** Componente reutilizable

```jsx
// Usado una vez, renderizado en todas las páginas
<Sidebar />
```

---

#### 2. Gestión de Estado

**Antes:** Variables globales y manipulación del DOM

```javascript
let menuOpen = false;
document.getElementById('menu').style.display = 'block';
```

**Después:** React Hooks

```javascript
const [menuOpen, setMenuOpen] = useState(false);
// React actualiza el DOM automáticamente
```

---

#### 3. Routing

**Antes:** Enlaces tradicionales con recarga

```html
<a href="mariana.html">Ver perfil</a>
```

**Después:** React Router

```jsx
<Link to="/mariana">Ver perfil</Link>
```

---

#### 4. Performance

- Build optimizado con Vite
- Code splitting automático
- Assets minificados y comprimidos
- HMR (Hot Module Replacement) durante desarrollo

---

#### 5. Arquitectura

**Antes:**

```text
/
├── index.html
├── mariana.html
├── mario.html
├── styles.css
└── script.js
```

**Después:**

```text
/src
├── components/    # Componentes reutilizables
├── pages/         # Vistas/páginas
├── styles/        # Estilos globales
├── App.jsx        # Configuración de rutas
└── main.jsx       # Entry point
```

---

### Nuevas Funcionalidades (No existían en TP1)

| Funcionalidad | Descripción | Tecnología |
| --- | --- | --- |
| **Sidebar Dashboard** | Navegación lateral fija profesional | React + CSS |
| **Explorador JSON** | Búsqueda y filtrado en tiempo real | useState + useEffect |
| **API Externa** | Consumo asíncrono de iTunes con paginación | Fetch API + useState |
| **Galería Lightbox** | Modal fullscreen con navegación por teclado | useState + useEffect |
| **Árbol de Componentes** | Documentación visual de arquitectura | React Component |
| **Animaciones CRT** | Efectos de entrada al cargar tarjetas | CSS Animations |

---

### Desafíos Encontrados

1. **Curva de Aprendizaje**
   - Conceptos de React: componentes, props, state, hooks
   - Ciclo de vida de componentes
   - **Solución:** Documentación oficial, práctica iterativa

2. **Gestión de Estado**
   - Decidir cuándo usar estado local vs props
   - Evitar re-renders innecesarios
   - **Solución:** Uso correcto de useState y useEffect

3. **Routing**
   - Configuración de rutas en SPA
   - **Solución:** Documentación de React Router

4. **Estilos**
   - Evitar conflictos de nombres de clases CSS entre componentes
   - **Solución:** Clases con prefijos específicos por componente

---

## Uso de Inteligencia Artificial

### Herramientas de IA Utilizadas

#### 1. **ChatGPT (GPT-4)**

- **Proveedor:** OpenAI
- **Uso principal:** Generación de contenido, debugging, consultas técnicas

#### 2. **GitHub Copilot**

- **Proveedor:** GitHub (powered by OpenAI)
- **Uso principal:** Autocompletado de código, sugerencias de funciones

#### 3. **Claude (Sonnet 4.6)**

- **Proveedor:** Anthropic
- **Uso principal:** Análisis de código, refactoring, documentación

---

### Uso en Código

#### Ejemplo 1: Componente de Paginación

```javascript
// Sugerido por GitHub Copilot, adaptado por el equipo
const totalPages = Math.ceil(tracks.length / itemsPerPage);
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = tracks.slice(indexOfFirstItem, indexOfLastItem);
```

---

#### Ejemplo 2: Manejo de Teclado en Lightbox

```javascript
// ChatGPT ayudó con la estructura del useEffect
useEffect(() => {
  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;
    switch (e.key) {
      case 'Escape': closeLightbox(); break;
      case 'ArrowRight': goToNext(); break;
      case 'ArrowLeft': goToPrevious(); break;
    }
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [lightboxOpen]);
```

---

#### Ejemplo 3: Filtrado en Tiempo Real

```javascript
// Claude ayudó a optimizar la lógica de filtros encadenados
useEffect(() => {
  let result = projects;
  if (searchTerm) {
    result = result.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  if (selectedCategory !== 'Todas') {
    result = result.filter(project => project.category === selectedCategory);
  }
  setFilteredProjects(result);
}, [searchTerm, selectedCategory, projects]);
```

---

### Uso en Imágenes

Los avatares de algunos integrantes fueron generados con DALL-E 3 (OpenAI) con prompts de estética terminal/cyberpunk. Otros integrantes usaron fotos propias.

---

### Reflexión sobre el Uso de IA

- **Como asistente, no como reemplazo**: la IA sugiere, el equipo decide
- **Todo el código fue revisado y comprendido** antes de incorporarlo
- **Cada sugerencia fue testeada** y validada contra la documentación oficial
- **Las decisiones de arquitectura** fueron tomadas íntegramente por el equipo

---

## Instalación y Ejecución

### Requisitos Previos

- **Node.js** 18.0.0 o superior
- **npm** 9.0.0 o superior
- **Git**

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/raquerh/404Solutions_FE.git

# 2. Entrar al directorio
cd 404Solutions_FE

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
# http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Compila para producción (carpeta dist/)
npm run preview   # Vista previa del build de producción
npm run lint      # Ejecuta ESLint
```

---

## Deploy en Vercel

### Pasos para Desplegar

1. Ir a [vercel.com](https://vercel.com) y hacer Sign up con GitHub
2. Click en "New Project" → Import Git Repository → Seleccionar `404Solutions_FE`
3. Configurar:

   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. Click en "Deploy"
5. Cada push a `main` despliega automáticamente

---

## Funcionalidades Completadas (Checklist TP2)

### Requerimientos Obligatorios

#### ✅ 1. Navegación Estilo Dashboard (Sidebar Fija)

- [x] Sidebar lateral fija siempre visible
- [x] Logo del grupo integrado
- [x] Menú de navegación jerarquizado (NAVEGACIÓN + EQUIPO)
- [x] Estética de Dashboard profesional
- [x] Responsive (colapsa en mobile)

#### ✅ 2. Panel Central de Presentación (Dashboard Home)

- [x] Grilla dinámica de tarjetas de integrantes
- [x] Nombre y avatar en cada tarjeta
- [x] Animaciones de entrada CRT escalonadas
- [x] HeroSection con simulador de diagnóstico interactivo

#### ✅ 3. Sección Individual por Integrante (5 perfiles)

- [x] Vista detallada para cada integrante
- [x] Información personal y descripción
- [x] Barras de progreso animadas
- [x] Mínimo 5 iconos de tech stack con efectos hover (DevIcons)
- [x] Carrusel de proyectos interactivo (mínimo 3 por integrante)
- [x] Botones de redes sociales con efectos hover

#### ✅ 4. Explorador de Datos Locales (JSON)

- [x] Archivo JSON con 20 objetos
- [x] Renderización dinámica
- [x] Filtrado en tiempo real
- [x] Buscador por texto
- [x] Actualización dinámica de vista

#### ✅ 5. Módulo de Integración de API Externa

- [x] Consumo asíncrono de iTunes Search API (sin API key)
- [x] Buscador de música en tiempo real
- [x] Portadas de álbum + preview de audio 30s
- [x] Manejo de estados (loading, error, success)
- [x] Sistema de paginación (8 items por página)
- [x] Indicador de posición actual

#### ✅ 6. Galería de Imágenes Interactiva

- [x] Grid responsive de imágenes
- [x] Lightbox integrado (modal fullscreen)
- [x] Navegación interna (anterior/siguiente)
- [x] Cierre con tecla ESC
- [x] Animaciones de apertura/cierre

#### ✅ 7. Sección Bitácora de Proyecto

- [x] Tabla de roles del equipo con contribuciones
- [x] Flujo de trabajo (Git branches, code review)
- [x] Justificación de migración HTML/JS → React
- [x] Mejoras técnicas con ejemplos de código
- [x] Desafíos encontrados y lecciones aprendidas

#### ✅ 8. Sección Árbol de Renderizado

- [x] Representación gráfica del árbol de componentes
- [x] Estructura jerárquica detallada
- [x] Tipos y relaciones de componentes documentados

---

## Herramientas de Desarrollo

### ESLint

Configurado para mantener la calidad del código:

```bash
npm run lint
```

### Vite

- Hot Module Replacement (HMR) instantáneo
- Build optimizado para producción
- Code splitting automático

### Git

- Commits descriptivos
- Branches por feature
- Pull requests para revisión de código

---

## Recursos y Referencias

### Documentación Oficial

- [React Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

### APIs Utilizadas

- [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/)

### Herramientas de Diseño

- [Google Fonts](https://fonts.google.com/)
- [DevIcons](https://devicon.dev/)
- [Font Awesome](https://fontawesome.com/)

---

## Contribuciones

### Roles del Equipo

| Integrante | Rol Principal | Contribuciones |
| --- | --- | --- |
| **Mariana Aiello** | Software Dev & Data Science | Perfil individual, explorador JSON, documentación |
| **Mario González** | Full Stack Developer | Sidebar Dashboard, routing, integración de componentes |
| **Miguel Ángel Flores** | Full Stack Developer | API externa, paginación, manejo de estados |
| **Raquel Rodríguez** | Frontend Developer | Galería Lightbox, estilos, animaciones |
| **Valeria Thomas** | Fullstack Developer | Árbol de componentes, deploy, perfil individual |

### Metodología de Trabajo

- **Git Flow:** Branches por feature, pull requests para revisión
- **Code Review:** Revisión de código entre pares
- **Testing:** Pruebas manuales de cada funcionalidad
- **Documentación:** README actualizado continuamente

---

## Licencia

MIT License - IFTS N°29 - Desarrollo Web FrontEnd

---

## Información Académica

**Institución:** IFTS N°29
**Carrera:** Tecnicatura en Desarrollo de Software
**Materia:** Desarrollo Web FrontEnd
**Trabajo Práctico:** TP2 - Proyecto React en Equipo
**Fecha de Entrega:** 01/06/2026

---

**Última actualización:** 30 de Mayo de 2026

---

<div align="center">

**Hecho con ❤️ por el equipo 404 Solutions**

</div>
