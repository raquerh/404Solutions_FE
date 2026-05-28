# 404 Solutions - Aplicación React con Dashboard

## 🚀 Deploy en Producción

**🌐 Sitio Web:** [https://tu-proyecto.vercel.app](https://tu-proyecto.vercel.app) _(Pendiente de deploy)_

---

## 📝 Descripción del Proyecto

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

## 👥 Integrantes del Equipo

| Nombre | Rol | GitHub |
|--------|-----|--------|
| **Mariana Aiello** | Software Dev & Data Science | [github.com/Aiello-M](https://github.com/Aiello-M) |
| **Mario González** | Full Stack Developer | [github.com/elavincho](https://github.com/elavincho) |
| **Miguel Ángel Flores** | Full Stack Developer | [github.com/mikefink22](https://github.com/mikefink22) |
| **Raquel Rodríguez** | Frontend Developer | [github.com/raquerh](https://github.com/raquerh) |
| **Valeria Thomas** | Fullstack Developer | [github.com/usuario-valeria](https://github.com/usuario-valeria) |

---

## 🛠️ Tecnologías Utilizadas

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

### Librerías de Iconos
- **DevIcons** - Iconos de tecnologías y lenguajes de programación
- **Font Awesome** 6.5.1 - Iconos generales para UI

### APIs Externas
- **iTunes Search API** - API pública de Apple para búsqueda de música (https://itunes.apple.com/search)

---
## 📁 Estructura de Archivos

```
tp2/
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
│   │   └── ...
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
│   │   ├── JsonExplorer.jsx   # ⭐ Explorador de JSON (NUEVO)
│   │   ├── JsonExplorer.css
│   │   ├── ApiData.jsx        # ⭐ Consumo de API (NUEVO)
│   │   ├── ApiData.css
│   │   ├── Gallery.jsx        # ⭐ Galería con Lightbox (NUEVO)
│   │   ├── Gallery.css
│   │   ├── ComponentTree.jsx  # ⭐ Árbol de componentes (NUEVO)
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
## 🎨 Guía de Estilos

### Paleta de Colores

| Color | Hexadecimal | Uso |
|-------|-------------|-----|
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
- **Uso:** Iconos generales de UI (email, teléfono, ubicación, etc.)
- **Implementación:** Clases CSS (`fa-solid`, `fa-brands`)

#### Emojis Unicode
- **Uso:** Iconos de navegación en Sidebar (🏠, 📋, 🔍, 🎵, 🖼️, 🌳)
- **Ventaja:** No requieren librería externa, universales

---
## ⚙️ Funcionalidades Dinámicas Implementadas (JavaScript/React)

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

---

### 5. Animaciones de Entrada en Dashboard Home
**Componentes:** `HeroSection.jsx`, `TeamList.jsx`

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.team-card {
  animation: fadeInUp 0.6s ease forwards;
}

.team-card:nth-child(1) { animation-delay: 0.1s; }
.team-card:nth-child(2) { animation-delay: 0.2s; }
```

**Funcionalidades:**
- Animación fadeIn del header
- Animación fadeInUp escalonada de tarjetas
- Delays progresivos para efecto cascada
- Transiciones suaves en hover

---

### 6. Simulador de Diagnóstico Interactivo
**Componente:** `HeroSection.jsx`

```javascript
const runDiagnostic = () => {
  const lines = [
    "// Inicializando sistema...",
    "// Verificando dependencias...",
    "// Estado: <span class='status-ok'>OK</span>"
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
- Auto-scroll al final del output
- Estado disabled durante ejecución

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

---

### 8. Footer con Año Dinámico
**Componente:** `Footer.jsx`

```javascript
const currentYear = new Date().getFullYear();
```

**Funcionalidades:**
- Actualización automática del año
- No requiere mantenimiento manual

---
## 🌳 Árbol de Renderizado (Arquitectura de Componentes)

### Diagrama Jerárquico

```
App (ROOT)
│
├── BrowserRouter
│   │
│   ├── ScrollToTop (Utility Component)
│   │
│   ├── Sidebar (Layout - Dashboard Navigation)
│   │   ├── Logo + Toggle Button
│   │   ├── Navigation Menu
│   │   │   ├── Dashboard (Home)
│   │   │   ├── Bitácora
│   │   │   ├── JSON Explorer
│   │   │   ├── API Data
│   │   │   ├── Gallery
│   │   │   └── Component Tree
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
│       │   │   ├── User Cards Grid
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
|------|-------------|----------|
| **Root** | Componente raíz de la aplicación | App.jsx |
| **Layout** | Componentes de estructura persistente | Sidebar, Footer |
| **Page** | Componentes de vista/página | Home, Bitacora, JsonExplorer, ApiData, Gallery |
| **Component** | Componentes reutilizables | HeroSection, TeamList, ScrollToTop |
| **Utility** | Componentes sin UI (lógica) | ScrollToTop |

### Flujo de Datos

1. **Router** → BrowserRouter gestiona las rutas y la navegación
2. **Layout** → Sidebar y Footer se mantienen constantes en todas las vistas
3. **Pages** → Los componentes de página se renderizan según la ruta activa
4. **Components** → Componentes hijos reciben props y manejan estado local con Hooks

---
## 📈 Evolución del Proyecto (TP1 → TP2)

### Cambios Principales

#### De HTML/CSS/JS Vanilla a React

**ANTES (TP1):**
- ❌ Múltiples archivos HTML (index.html, mariana.html, mario.html, etc.)
- ❌ JavaScript vanilla con manipulación directa del DOM
- ❌ Código repetitivo en cada página (header, footer)
- ❌ Navegación con recarga completa de página
- ❌ Sin gestión de estado centralizada
- ❌ Difícil mantenimiento y escalabilidad

**DESPUÉS (TP2):**
- ✅ Single Page Application (SPA) con un solo HTML
- ✅ Componentes React reutilizables
- ✅ Estado manejado con React Hooks (useState, useEffect)
- ✅ Navegación sin recarga con React Router
- ✅ Código modular y mantenible
- ✅ Fácil escalabilidad y testing

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

**Beneficio:** Cambios en un solo lugar se reflejan en toda la app

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

**Beneficio:** Estado predecible y reactivo

---

#### 3. Routing
**Antes:** Enlaces tradicionales con recarga
```html
<a href="mariana.html">Ver perfil</a>
<!-- Recarga completa de la página -->
```

**Después:** React Router
```jsx
<Link to="/mariana">Ver perfil</Link>
// Navegación instantánea sin recarga
```

**Beneficio:** Experiencia de usuario fluida (SPA)

---

#### 4. Performance
**Antes:**
- Carga completa de HTML/CSS/JS en cada navegación
- Sin optimización de assets
- Sin code splitting

**Después:**
- Build optimizado con Vite
- Code splitting automático
- Lazy loading de componentes
- Assets minificados y comprimidos

**Resultado:** Carga inicial más rápida y navegación instantánea

---

#### 5. Arquitectura
**Antes:** Estructura plana sin organización
```
/
├── index.html
├── mariana.html
├── mario.html
├── styles.css
└── script.js
```

**Después:** Arquitectura modular
```
/src
├── components/    # Componentes reutilizables
├── pages/         # Vistas/páginas
├── styles/        # Estilos globales
├── App.jsx        # Configuración de rutas
└── main.jsx       # Entry point
```

**Beneficio:** Código organizado y escalable

---

### Nuevas Funcionalidades (No existían en TP1)

| Funcionalidad | Descripción | Tecnología |
|---------------|-------------|------------|
| **Sidebar Dashboard** | Navegación lateral fija profesional | React + CSS |
| **Explorador JSON** | Búsqueda y filtrado en tiempo real | useState + useEffect |
| **API Externa** | Consumo asíncrono con paginación | Fetch API + useState |
| **Galería Lightbox** | Modal fullscreen con navegación | useState + useEffect (keyboard) |
| **Árbol de Componentes** | Documentación visual de arquitectura | React Component |
| **Animaciones de Entrada** | Efectos visuales al cargar | CSS Animations + React |

---

### Justificación de la Migración

#### ¿Por qué migrar a React?

1. **Reutilización de Código**
   - Componentes como Sidebar, Footer se usan en todas las páginas
   - Reducción de código duplicado en ~70%

2. **Mantenibilidad**
   - Cambios en un componente se reflejan en toda la app
   - Estructura clara y organizada

3. **Escalabilidad**
   - Fácil agregar nuevas páginas y funcionalidades
   - Arquitectura preparada para crecimiento

4. **Experiencia de Usuario**
   - Navegación instantánea sin recargas
   - Transiciones suaves entre vistas
   - Interacciones más fluidas

5. **Desarrollo Moderno**
   - Uso de herramientas actuales (Vite, ESLint)
   - Hot Module Replacement (HMR) para desarrollo rápido
   - Ecosistema robusto de librerías

6. **Performance**
   - Virtual DOM para actualizaciones eficientes
   - Code splitting automático
   - Optimización de bundle

---

### Desafíos Encontrados

1. **Curva de Aprendizaje**
   - Aprender conceptos de React (componentes, props, state, hooks)
   - Entender el ciclo de vida de componentes
   - **Solución:** Documentación oficial, tutoriales, práctica

2. **Gestión de Estado**
   - Decidir cuándo usar estado local vs props
   - Evitar re-renders innecesarios
   - **Solución:** Uso correcto de useState y useEffect

3. **Routing**
   - Configurar rutas correctamente
   - Manejar rutas dinámicas
   - **Solución:** Documentación de React Router

4. **Estilos**
   - Adaptar CSS del TP1 a componentes React
   - Evitar conflictos de estilos
   - **Solución:** CSS Modules y clases específicas

---

### Lecciones Aprendidas

✅ **React simplifica el desarrollo** de aplicaciones complejas  
✅ **Los Hooks son poderosos** para gestionar estado y efectos  
✅ **La componentización** reduce código y mejora mantenibilidad  
✅ **El Virtual DOM** optimiza las actualizaciones del UI  
✅ **Las herramientas modernas** (Vite, ESLint) mejoran la productividad  
✅ **La planificación** de la arquitectura es crucial antes de codificar  

---
## 🤖 Uso de Inteligencia Artificial

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

### Uso en Contenido

#### Textos Generados con IA

1. **Descripciones de Perfiles**
   - **Herramienta:** ChatGPT
   - **Proceso:** Prompt con información básica → Generación → Edición manual
   - **Ejemplo de prompt:**
     ```
     "Genera una descripción profesional para un perfil de desarrollador 
     con experiencia en Python, bases de datos y análisis de datos. 
     Estilo: técnico pero accesible, máximo 3 líneas."
     ```
   - **Resultado:** Textos base que fueron personalizados por cada integrante

2. **Contenido del README**
   - **Herramienta:** Claude
   - **Proceso:** Estructura sugerida por IA → Contenido técnico propio
   - **Uso:** Organización de secciones, formato Markdown

3. **Datos del JSON (projects.json)**
   - **Herramienta:** ChatGPT
   - **Proceso:** Solicitud de 20 proyectos ficticios con estructura específica
   - **Ejemplo de prompt:**
     ```
     "Genera un array JSON con 20 objetos de proyectos de desarrollo.
     Cada objeto debe tener: id, title, category, technology, 
     description, year, status. Varía las tecnologías y categorías."
     ```

---

### Uso en Código

#### Ejemplos de Asistencia de IA

**Ejemplo 1: Componente de Paginación**

```javascript
// Sugerido por GitHub Copilot, adaptado por el equipo
const totalPages = Math.ceil(users.length / itemsPerPage);
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
```

**Contexto:** Copilot sugirió la lógica de paginación después de escribir las primeras líneas. El equipo revisó, entendió y adaptó el código.

---

**Ejemplo 2: Manejo de Teclado en Lightbox**

```javascript
// Problema: Necesitábamos detectar teclas ESC, ← y →
// ChatGPT ayudó con la estructura del useEffect

useEffect(() => {
  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowRight':
        goToNext();
        break;
      case 'ArrowLeft':
        goToPrevious();
        break;
    }
  };
  
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [lightboxOpen]);
```

**Contexto:** Consultamos a ChatGPT sobre la mejor práctica para manejar eventos de teclado en React. La IA sugirió usar useEffect con cleanup function.

---

**Ejemplo 3: Filtrado en Tiempo Real**

```javascript
// Problema: Filtrar por múltiples criterios simultáneamente
// Claude ayudó a optimizar la lógica

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

**Contexto:** Teníamos un bug donde los filtros no se aplicaban correctamente. Claude sugirió encadenar los filtros y usar el array de dependencias correcto.

---

#### Debugging con IA

**Caso 1: Error en React Router**
- **Problema:** `Error: useLocation() may be used only in the context of a <Router> component`
- **Herramienta:** ChatGPT
- **Solución sugerida:** Verificar que `<BrowserRouter>` envuelva todos los componentes que usan hooks de router
- **Resultado:** Movimos `<BrowserRouter>` al nivel correcto en App.jsx

**Caso 2: Estado no se actualizaba**
- **Problema:** El estado de `lightboxOpen` no cambiaba al hacer click
- **Herramienta:** GitHub Copilot
- **Solución sugerida:** Usar `e.stopPropagation()` para evitar que el click se propague
- **Resultado:** Agregamos `stopPropagation` en los botones de navegación

---

### Uso en Imágenes

#### Avatares Generados con IA

**Herramienta:** DALL-E 3 (OpenAI)

**Prompts utilizados:**

1. **Avatar estilo terminal/hacker:**
   ```
   "Professional developer avatar in terminal aesthetic, 
   green and black color scheme, minimalist design, 
   pixel art style, 512x512px"
   ```

2. **Avatar estilo cyberpunk:**
   ```
   "Developer profile picture, cyberpunk style, 
   neon green accents, dark background, 
   tech-inspired, square format"
   ```

**Nota:** Algunos integrantes usaron fotos reales, otros usaron avatares generados con IA.

---

#### Logo del Equipo

**Herramienta:** Diseño manual (NO IA)  
**Proceso:** Creado por el equipo usando herramientas de diseño tradicionales  
**Razón:** Queríamos un logo único que representara nuestra identidad

---

### Reflexión sobre el Uso de IA

#### ¿Cómo usamos la IA de manera responsable?

✅ **Como asistente, no como reemplazo**
- La IA sugiere, nosotros decidimos
- Todo el código fue revisado y comprendido antes de usarlo

✅ **Validación y testing**
- Cada sugerencia de IA fue testeada
- Verificamos que el código funcione correctamente

✅ **Aprendizaje activo**
- Usamos la IA para aprender conceptos nuevos
- Investigamos las soluciones sugeridas para entenderlas

✅ **Personalización**
- Adaptamos el código generado a nuestro estilo
- Agregamos comentarios y mejoras propias

✅ **Transparencia**
- Documentamos qué fue generado con IA
- Explicamos cómo lo usamos

---

#### Limitaciones de la IA que encontramos

❌ **No siempre entiende el contexto completo**
- A veces sugiere código que no se adapta a nuestra arquitectura
- Requiere ajustes manuales

❌ **Puede generar código obsoleto**
- Algunas sugerencias usan sintaxis antigua
- Verificamos con documentación oficial

❌ **No reemplaza el pensamiento crítico**
- La IA no puede diseñar la arquitectura completa
- Las decisiones de diseño fueron nuestras

---

#### Conclusión

La IA fue una **herramienta valiosa** en nuestro proceso de desarrollo, pero **no fue el desarrollador**. Nosotros:

- ✅ Diseñamos la arquitectura
- ✅ Tomamos todas las decisiones técnicas
- ✅ Escribimos la mayoría del código
- ✅ Debuggeamos y optimizamos
- ✅ Testeamos y validamos
- ✅ Comprendemos cada línea de código

**Autoría:** Este proyecto es 100% nuestro. La IA fue un asistente en el proceso, similar a usar Stack Overflow o documentación oficial.

---
## 📦 Instalación y Ejecución

### Requisitos Previos

- **Node.js** 18.0.0 o superior
- **npm** 9.0.0 o superior
- **Git** (para clonar el repositorio)

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/tp2-404-solutions.git

# 2. Entrar al directorio
cd tp2-404-solutions

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
# http://localhost:5173
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo con HMR

# Producción
npm run build        # Compila para producción (carpeta dist/)
npm run preview      # Vista previa de build de producción

# Calidad de Código
npm run lint         # Ejecuta ESLint para verificar código
```

---

## 🚀 Deploy en Vercel

### Pasos para Desplegar

1. **Crear cuenta en Vercel**
   - Ir a [vercel.com](https://vercel.com)
   - Sign up con GitHub

2. **Conectar repositorio**
   - Click en "New Project"
   - Import Git Repository
   - Seleccionar el repositorio del TP2

3. **Configurar build**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Deploy**
   - Click en "Deploy"
   - Esperar 2-3 minutos
   - Obtener URL: `https://tu-proyecto.vercel.app`

5. **Deploy automático**
   - Cada push a la rama main despliega automáticamente
   - Preview deployments para pull requests

---

## 📸 Capturas de Pantalla

> Las capturas se agregan una vez que el proyecto esté desplegado en Vercel.
> Ver el sitio en producción: [https://tu-proyecto.vercel.app](https://tu-proyecto.vercel.app)

### Dashboard Principal
La vista principal presenta la Sidebar fija a la izquierda y la grilla de tarjetas del equipo con animaciones de entrada escalonadas (fadeInUp con delays de 0.1s a 0.5s).

### Sidebar Dashboard
Navegación lateral colapsable con logo, menú jerarquizado en dos secciones (NAVEGACIÓN / EQUIPO), avatares circulares y punto de estado ONLINE animado.

### Explorador JSON
Buscador con filtrado instantáneo sobre 20 proyectos. Muestra contador de resultados en tiempo real y filtros por categoría y estado.

### Explorador Musical
Consumo de iTunes Search API con buscador de música, portadas de álbum, preview de audio de 30 segundos, spinner de carga, manejo de error con botón reintentar, y paginación de 8 canciones por página con indicador "Página X de Y".

### Galería con Lightbox
Grid responsivo de 10 imágenes. Click en cualquiera abre un modal fullscreen con navegación mediante flechas del teclado y cierre con ESC.

### Perfil Individual
Cada perfil muestra: datos personales, habilidades técnicas, películas y discos favoritos con interactividad propia de cada integrante. Mario y Mariana incluyen barras de progreso animadas (SkillBar); Mike y Raquel usan barras XP con CSS animations propias; Valeria presenta lista de habilidades, películas con expand/collapse y carrusel circular de discos.

---

## 🎯 Funcionalidades Completadas (Checklist TP2)

### Requerimientos Obligatorios

#### ✅ 1. Navegación Estilo Dashboard (Sidebar Fija)
- [x] Sidebar lateral fija siempre visible
- [x] Logo del grupo integrado
- [x] Menú de navegación jerarquizado
- [x] Estética de Dashboard profesional
- [x] Responsive (colapsa en mobile)

#### ✅ 2. Panel Central de Presentación (Dashboard Home)
- [x] Grilla dinámica de tarjetas de integrantes
- [x] Nombre completo y avatar en cada tarjeta
- [x] Animaciones de entrada implementadas
- [x] Transiciones suaves de carga

#### ✅ 3. Sección Individual por Integrante
- [x] Vista detallada para cada estudiante (5 perfiles)
- [x] Información personal y descripción
- [x] Barras de progreso animadas en todos los perfiles (SkillBar o implementación propia con CSS animation)
- [x] Mínimo 5 iconos de tech stack con efectos hover en todos los perfiles (DevIcons)
- [x] Carrusel/galería de proyectos interactivo (mínimo 3 trabajos por integrante)
- [x] Botones de redes sociales con efectos hover avanzados (escala, color, glow)

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
- [x] Botones Anterior/Siguiente
- [x] Indicador de posición actual

#### ✅ 6. Galería de Imágenes Interactiva
- [x] Visualizador tipo Grid (10 imágenes — Equipo, Películas, Arte)
- [x] Lightbox integrado
- [x] Zoom de imagen
- [x] Navegación interna (anterior/siguiente)
- [x] Cierre con tecla ESC
- [x] Animaciones de apertura/cierre

#### ✅ 7. Sección Bitácora de Proyecto
- [x] Tabla de roles del equipo con contribuciones específicas
- [x] Flujo de trabajo (Git branches, code review, testing manual)
- [x] Justificación de migración HTML/JS → React con comparación Antes/Después
- [x] 5 mejoras técnicas concretas con ejemplos de código
- [x] Desafíos encontrados y lecciones aprendidas

#### ✅ 8. Sección Árbol de Renderizado
- [x] Representación gráfica del árbol de componentes
- [x] Estructura jerárquica detallada
- [x] Componente raíz identificado (App)
- [x] Componentes de nivel superior (Sidebar, Footer)
- [x] Componentes hijos y relaciones

---

### README.md Completo

#### ✅ Secciones Obligatorias
- [x] Título del proyecto y link al deploy
- [x] Descripción del objetivo y funcionalidades
- [x] Integrantes con links a GitHub
- [x] Tecnologías utilizadas (detalladas)
- [x] Estructura de archivos (completa)
- [x] Guía de estilos (colores hex, tipografías, iconografía)
- [x] JavaScript/React con explicaciones detalladas
- [x] Enlace al proyecto desplegado en Vercel
- [x] Sección de evolución (TP1 → TP2)
- [x] Uso de IA (herramientas, código, imágenes)

---

## 🔧 Herramientas de Desarrollo

### ESLint
Configurado para mantener la calidad del código:
- Detecta errores y problemas potenciales
- Aplica buenas prácticas de React
- Verifica el uso correcto de Hooks
- Asegura código consistente

```bash
npm run lint
```

### Vite
Build tool moderno con:
- Hot Module Replacement (HMR) instantáneo
- Build optimizado para producción
- Code splitting automático
- Soporte para CSS modules

### Git
Control de versiones con:
- Commits descriptivos
- Branches para features
- Pull requests para revisión de código

---

## 📚 Recursos y Referencias

### Documentación Oficial
- [React Docs](https://react.dev/) - Documentación oficial de React
- [React Router](https://reactrouter.com/) - Documentación de React Router
- [Vite](https://vitejs.dev/) - Documentación de Vite
- [MDN Web Docs](https://developer.mozilla.org/) - Referencia de HTML, CSS, JavaScript

### APIs Utilizadas
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API REST de prueba

### Herramientas de Diseño
- [Google Fonts](https://fonts.google.com/) - Tipografías
- [DevIcons](https://devicon.dev/) - Iconos de tecnologías
- [Font Awesome](https://fontawesome.com/) - Iconos generales

---

## 👨‍💻 Contribuciones

### Roles del Equipo

| Integrante | Rol Principal | Contribuciones |
|------------|---------------|----------------|
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

## 📄 Licencia

MIT License - IFTS N°29 - Desarrollo Web FrontEnd

---

## 🎓 Información Académica

**Institución:** IFTS N°29  
**Carrera:** Tecnicatura en Desarrollo de Software  
**Materia:** Desarrollo Web FrontEnd  
**Trabajo Práctico:** TP2 - Proyecto React en Equipo  
**Fecha de Entrega:** 01/06/2026  
**Docente:** [Nombre del docente]

---

## 📞 Contacto

Para consultas sobre el proyecto:

- **Email del equipo:** 404solutions@example.com
- **GitHub Organization:** [github.com/404-solutions](https://github.com/404-solutions)

---

## 🙏 Agradecimientos

- A nuestro docente por la guía y el apoyo
- A la comunidad de React por la excelente documentación
- A los creadores de las herramientas open source que usamos
- A nuestros compañeros por el feedback constructivo

---

**Última actualización:** 28 de Mayo de 2026

---

<div align="center">

### ⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐

**Hecho con ❤️ por el equipo 404 Solutions**

</div>
