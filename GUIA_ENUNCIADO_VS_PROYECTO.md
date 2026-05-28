# 📖 GUÍA COMPLETA: ENUNCIADO vs PROYECTO

## Explicación Detallada de Cada Requerimiento y su Implementación

**Fecha:** 27 de Mayo de 2026  
**Proyecto:** 404 Solutions - TP2 React  
**Equipo:** 404 Solutions

---

## 📋 ÍNDICE

1. [Requerimiento 1: Navegación Estilo Dashboard (Sidebar Fija)](#requerimiento-1)
2. [Requerimiento 2: Panel Central de Presentación (Dashboard Home)](#requerimiento-2)
3. [Requerimiento 3: Sección Individual por Integrante](#requerimiento-3)
4. [Requerimiento 4: Explorador de Datos Locales (JSON)](#requerimiento-4)
5. [Requerimiento 5: Módulo de Integración de API Externa](#requerimiento-5)
6. [Requerimiento 6: Galería de Imágenes Interactiva](#requerimiento-6)
7. [Requerimiento 7: Sección Bitácora de Proyecto](#requerimiento-7)
8. [Requerimiento 8: Sección Árbol de Renderizado](#requerimiento-8)
9. [README.md Obligatorio](#readme-obligatorio)
10. [Uso de IA Obligatorio](#uso-de-ia)

---

<a name="requerimiento-1"></a>
## 1️⃣ REQUERIMIENTO 1: Navegación Estilo Dashboard (Sidebar Fija)

### 📝 QUÉ DICE EL ENUNCIADO:

> **"Interfaz Central: La navegación debe estar regida por una Sidebar lateral fija con estética de Dashboard, que garantice el acceso a todas las secciones."**
>
> **"Componentes: Debe integrar el logo del grupo y un menú de navegación jerarquizado mediante React Router."**
>
> **"Entidad: No es un simple menú; es el eje estructural que organiza la experiencia de usuario (UX) en toda la SPA."**

### ✅ DÓNDE ESTÁ EN NUESTRO PROYECTO:

#### Archivos Principales:
```
src/components/Sidebar.jsx
src/components/Sidebar.css
```

#### Implementación Detallada:

**1. Sidebar Lateral Fija:**
- **Ubicación:** `src/components/Sidebar.jsx` líneas 1-100
- **Características:**
  - Posición `fixed` en el lado izquierdo
  - Ancho: 280px (expandida) / 80px (colapsada)
  - Altura: 100vh (pantalla completa)
  - Z-index: 1000 (siempre visible)

**2. Logo del Grupo Integrado:**
- **Ubicación:** `src/components/Sidebar.jsx` líneas 35-40
- **Código:**
```jsx
<Link to="/" className="sidebar-logo">
  <img src="/logo404solution.ico" alt="404 Solutions" className="logo-icon" />
  {!isCollapsed && <span className="logo-text">404_SOLUTIONS</span>}
</Link>
```

**3. Menú de Navegación Jerarquizado:**
- **Ubicación:** `src/components/Sidebar.jsx` líneas 45-75
- **Estructura:**
  - **Sección "NAVEGACIÓN"** (6 items):
    - Dashboard (Home)
    - Bitácora
    - Explorador JSON
    - API Externa
    - Galería
    - Árbol de Componentes
  - **Sección "EQUIPO"** (5 items):
    - Mariana
    - Mario
    - Mike
    - Raquel
    - Valeria


**4. React Router Integrado:**
- **Ubicación:** `src/components/Sidebar.jsx` líneas 5-10
- **Código:**
```jsx
import { Link, useLocation } from 'react-router-dom';

const location = useLocation();
const isActive = (path) => location.pathname === path;
```
- **Uso:** Cada item del menú usa `<Link>` de React Router
- **Indicador visual:** Clase `active` cuando la ruta coincide

**5. Estética de Dashboard:**
- **Ubicación:** `src/components/Sidebar.css`
- **Características:**
  - Fondo degradado oscuro (#0a0a0a → #1a1a1a)
  - Borde derecho verde terminal (2px solid)
  - Iconos con emojis (🏠, 📋, 🔍, etc.)
  - Avatares circulares para el equipo
  - Indicador de estado "ONLINE" con dots animados

**6. Funcionalidad de Colapsar:**
- **Ubicación:** `src/components/Sidebar.jsx` líneas 12-16
- **Código:**
```jsx
const [isCollapsed, setIsCollapsed] = useState(false);

const toggleSidebar = () => {
  setIsCollapsed(!isCollapsed);
};
```
- **Botón:** Líneas 41-48
- **Efecto:** Cambia el ancho de 280px a 80px

**7. Responsive:**
- **Ubicación:** `src/components/Sidebar.css` líneas 200-250
- **Comportamiento:**
  - Desktop: Sidebar siempre visible (280px)
  - Tablet: Colapsada por defecto (80px)
  - Mobile: Oculta por defecto (0px), se expande a 100% al abrir

### 🎯 CUMPLIMIENTO:

✅ Sidebar lateral fija  
✅ Logo del grupo integrado  
✅ Menú jerarquizado (2 secciones)  
✅ React Router implementado  
✅ Estética de Dashboard profesional  
✅ Eje estructural de la UX  
✅ Responsive  

---

<a name="requerimiento-2"></a>
## 2️⃣ REQUERIMIENTO 2: Panel Central de Presentación (Dashboard Home)

### 📝 QUÉ DICE EL ENUNCIADO:

> **"Es el nodo principal de la aplicación. Debe presentar una grilla dinámica de tarjetas de acceso rápido para cada integrante del equipo."**
>
> **"Cada tarjeta debe mostrar nombre completo y avatar (IA o mascota)."**
>
> **"Mejora Técnica: Implementación obligatoria de animaciones de entrada y transiciones suaves de carga para dar fluidez al sistema."**

### ✅ DÓNDE ESTÁ EN NUESTRO PROYECTO:

#### Archivos Principales:
```
src/pages/Home.jsx
src/components/HeroSection.jsx
src/components/TeamList.jsx
src/components/TeamList.css
```

#### Implementación Detallada:

**1. Nodo Principal de la Aplicación:**
- **Ubicación:** `src/pages/Home.jsx`
- **Ruta:** `/` (raíz de la aplicación)
- **Código:**
```jsx
function Home() {
  return (
    <>
      <HeroSection />
      <TeamList />
    </>
  );
}
```

**2. Grilla Dinámica de Tarjetas:**
- **Ubicación:** `src/components/TeamList.jsx` líneas 40-80
- **Estructura:**
```jsx
<div className="grid-container">
  <div className="grid-row">
    {/* Primera fila: 3 integrantes */}
    {teamMembers.slice(0, 3).map((member, index) => (
      <Link to={member.link} className="team-card">
        {/* Contenido de la tarjeta */}
      </Link>
    ))}
  </div>
  <div className="grid-row">
    {/* Segunda fila: 2 integrantes */}
    {teamMembers.slice(3, 5).map((member, index) => (
      {/* ... */}
    ))}
  </div>
</div>
```

**3. Nombre Completo y Avatar:**
- **Ubicación:** `src/components/TeamList.jsx` líneas 5-35
- **Datos:**
```jsx
const teamMembers = [
  {
    name: 'Mariana',
    fullName: 'Mariana Aiello',
    avatar: '/img/avatar_mariana.jpg',
    // ...
  },
  // ... 4 integrantes más
];
```
- **Renderizado en tarjeta:**
```jsx
<div className="card-avatar">
  <img src={member.avatar} alt={member.fullName} />
</div>
<h3 className="card-name">{member.name}</h3>
```


**4. ANIMACIONES DE ENTRADA (OBLIGATORIAS):**
- **Ubicación:** `src/components/TeamList.css` líneas 50-70
- **Código CSS:**
```css
.team-card {
  /* ... otros estilos ... */
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

/* Delay escalonado para cada tarjeta */
.team-card:nth-child(1) { animation-delay: 0.1s; }
.team-card:nth-child(2) { animation-delay: 0.2s; }
.team-card:nth-child(3) { animation-delay: 0.3s; }
.team-card:nth-child(4) { animation-delay: 0.4s; }
.team-card:nth-child(5) { animation-delay: 0.5s; }

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
```
- **Efecto:** Las tarjetas aparecen desde abajo con fade, una tras otra

**5. TRANSICIONES SUAVES DE CARGA:**
- **Ubicación:** `src/components/TeamList.css` líneas 30-40
- **Código CSS:**
```css
.section-header {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
- **Efecto:** El header aparece suavemente antes que las tarjetas

**6. Información Adicional en Tarjetas:**
- **Ubicación:** `src/components/TeamList.jsx` líneas 50-65
- **Contenido:**
  - Avatar circular con borde verde
  - Estado "ONLINE" animado
  - Nombre del integrante
  - Rol/especialidad
  - Flecha de navegación

### 🎯 CUMPLIMIENTO:

✅ Nodo principal de la aplicación  
✅ Grilla dinámica de tarjetas  
✅ Nombre completo en cada tarjeta  
✅ Avatar en cada tarjeta  
✅ **Animaciones de entrada implementadas** (OBLIGATORIO)  
✅ **Transiciones suaves de carga** (OBLIGATORIO)  
✅ Acceso rápido a cada integrante  

---

<a name="requerimiento-3"></a>
## 3️⃣ REQUERIMIENTO 3: Sección Individual por Integrante (Perfil Profesional)

### 📝 QUÉ DICE EL ENUNCIADO:

> **"Vista detallada de cada estudiante que funciona como un 'User Profile' dentro del sistema:"**
>
> **"● Barras de Progreso de Habilidades: Componentes visuales animados que reflejen el stack técnico."**
>
> **"● Carrusel de Proyectos: Galería interactiva con controles manuales para visualizar al menos 3 trabajos."**
>
> **"● Tech Stack e Iconografía: Mínimo 5 iconos representativos con efectos visuales."**
>
> **"● Social Media: Botones con efectos hover avanzados (cambio de color/escalado)."**

### ✅ DÓNDE ESTÁ EN NUESTRO PROYECTO:

#### Archivos Principales:
```
src/pages/profiles/MarianaProfile.jsx  ← SkillBar + DevIcons + carrusel películas
src/pages/profiles/MarianaProfile.css
src/pages/profiles/MarioProfile.jsx   ← SkillBar + 12 imágenes tech + carrusel películas
src/pages/profiles/MarioProfile.css
src/pages/profiles/MikeProfile.jsx    ← XP bars animadas propias + DevIcons + carrusel películas
src/pages/profiles/MikeProfile.css
src/pages/profiles/RaquelProfile.jsx  ← XP bars animadas propias + DevIcons + 3 películas
src/pages/profiles/RaquelProfile.css
src/pages/profiles/ValeriaProfile.jsx ← SkillBar + DevIcons + social links + carrusel discos
src/pages/profiles/ValeriaProfile.css
src/components/SkillBar.jsx           ← Componente reutilizable animado
src/components/SkillBar.css
```

#### Implementación Detallada:

### A) BARRAS DE PROGRESO DE HABILIDADES (OBLIGATORIO)

**1. Componente Visual Animado:**
- **Ubicación:** `src/components/SkillBar.jsx`
- **Código:**
```jsx
function SkillBar({ skill, level, delay = 0 }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="skill-bar-container">
      <div className="skill-bar-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${width}%` }}>
          <div className="skill-bar-glow"></div>
        </div>
      </div>
    </div>
  );
}
```

**2. Animación de Llenado:**
- **Ubicación:** `src/components/SkillBar.css` líneas 30-40
- **Código CSS:**
```css
.skill-bar-fill {
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(90deg, 
    rgba(0, 255, 0, 0.3) 0%, 
    rgba(0, 255, 0, 0.6) 50%, 
    rgba(0, 255, 0, 0.3) 100%
  );
}
```
- **Efecto:** La barra se llena progresivamente de 0% al nivel indicado

**3. Efecto de Brillo (Shimmer):**
- **Ubicación:** `src/components/SkillBar.css` líneas 45-60
- **Código CSS:**
```css
.skill-bar-glow {
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```
- **Efecto:** Un brillo se mueve de izquierda a derecha continuamente


**4. Uso en Perfil de Mariana:**
- **Ubicación:** `src/pages/profiles/MarianaProfile.jsx` líneas 150-180
- **Código:**
```jsx
<div className="skills-bars">
  <SkillBar skill="HTML5" level={90} delay={100} />
  <SkillBar skill="CSS3" level={85} delay={200} />
  <SkillBar skill="JavaScript" level={80} delay={300} />
  <SkillBar skill="Python" level={85} delay={400} />
  <SkillBar skill="C#" level={75} delay={500} />
  <SkillBar skill="MySQL" level={80} delay={600} />
</div>
```
- **Efecto:** 6 barras aparecen una tras otra con delays escalonados

### B) CARRUSEL DE PROYECTOS (OBLIGATORIO)

**1. Galería Interactiva:**
- **Ubicación:** `src/pages/profiles/MarianaProfile.jsx` líneas 200-250
- **Implementación:** Carrusel de películas (3 proyectos)
- **Código:**
```jsx
const [selectedMovie, setSelectedMovie] = useState({
  title: 'The Matrix',
  // ... datos de la película
});

const movies = [
  { title: 'Oldboy', /* ... */ },
  { title: 'The Matrix', /* ... */ },
  { title: 'Kill Bill: Vol. 1', /* ... */ }
];

const handleMovieClick = (movie) => {
  setSelectedMovie(movie);
};
```

**2. Controles Manuales:**
- **Ubicación:** `src/pages/profiles/MarianaProfile.jsx` líneas 260-280
- **Código:**
```jsx
<div className="peliculas-posters">
  {movies.map((movie, index) => (
    <article
      className={`poster-item ${selectedMovie.title === movie.title ? 'activo' : ''}`}
      onClick={() => handleMovieClick(movie)}
    >
      <img src={movie.poster} alt={movie.title} />
      <div className="poster-overlay">{movie.title}</div>
    </article>
  ))}
</div>
```
- **Interacción:** Click en cada poster para cambiar la visualización

**3. Visualización de Detalles:**
- **Ubicación:** `src/pages/profiles/MarianaProfile.jsx` líneas 285-300
- **Contenido:**
  - Trailer en iframe (YouTube)
  - Título de la película
  - Director
  - Año
  - Descripción

### C) TECH STACK E ICONOGRAFÍA (OBLIGATORIO)

**1. Mínimo 5 Iconos:**
- **Ubicación:** `src/pages/profiles/MarianaProfile.jsx` líneas 190-210
- **Implementación:** 8 iconos (supera el mínimo)
- **Código:**
```jsx
<div className="tech-icons">
  <div className="tech-icon" title="HTML5">
    <i className="devicon-html5-plain colored"></i>
  </div>
  <div className="tech-icon" title="CSS3">
    <i className="devicon-css3-plain colored"></i>
  </div>
  {/* ... 6 iconos más ... */}
</div>
```

**2. Efectos Visuales (OBLIGATORIO):**
- **Ubicación:** `src/pages/profiles/MarianaProfile.css` líneas 100-150
- **Efectos implementados:**

**a) Hover con Escala y Elevación:**
```css
.tech-icon:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}
```

**b) Rotación 360° del Icono:**
```css
.tech-icon:hover i {
  transform: rotate(360deg) scale(1.2);
}
```

**c) Efecto de Onda Circular:**
```css
.tech-icon::before {
  content: '';
  background: rgba(0, 255, 0, 0.2);
  border-radius: 50%;
  transition: width 0.4s ease, height 0.4s ease;
}

.tech-icon:hover::before {
  width: 120%;
  height: 120%;
}
```

**d) Drop Shadow Animado:**
```css
.tech-icon:hover i {
  filter: drop-shadow(0 0 10px rgba(0, 255, 0, 0.8));
}
```

**e) Animación de Entrada Escalonada:**
```css
.tech-icon {
  animation: fadeInScale 0.5s ease forwards;
}

.tech-icon:nth-child(1) { animation-delay: 0.1s; }
.tech-icon:nth-child(2) { animation-delay: 0.2s; }
/* ... hasta 8 iconos ... */
```

### D) SOCIAL MEDIA CON EFECTOS HOVER AVANZADOS (OBLIGATORIO)

**1. Botones de Redes Sociales:**
- **Ubicación:** `src/pages/profiles/MarianaProfile.jsx` líneas 140-150
- **Código:**
```jsx
<div className="social-links-mariana">
  <a href="https://github.com/Aiello-M" className="nav-button">
    GITHUB
  </a>
  <a href="https://www.linkedin.com/in/aiellomariana/" className="nav-button">
    LINKEDIN
  </a>
</div>
```

**2. Efectos Hover Avanzados (OBLIGATORIO):**
- **Ubicación:** `src/pages/profiles/MarianaProfile.css` líneas 160-190

**a) Cambio de Color con Onda Circular:**
```css
.social-links-mariana .nav-button::before {
  content: '';
  position: absolute;
  background: var(--terminal-green);
  border-radius: 50%;
  width: 0;
  height: 0;
  transition: width 0.5s ease, height 0.5s ease;
}

.social-links-mariana .nav-button:hover::before {
  width: 300%;
  height: 300%;
}
```

**b) Escalado:**
```css
.social-links-mariana .nav-button:hover {
  transform: translateY(-3px) scale(1.05);
}
```

**c) Box Shadow con Glow:**
```css
.social-links-mariana .nav-button:hover {
  box-shadow: 0 5px 20px rgba(0, 255, 0, 0.5);
}
```


### Implementación por Perfil (resumen):

| Perfil | Barras de Progreso | Iconos Tech | Carrusel/Galería | Social Links |
|--------|-------------------|-------------|-----------------|-------------|
| **Mariana** | SkillBar (10 barras) | DevIcons ≥8 | Carrusel películas (3) | GitHub + LinkedIn |
| **Mario** | SkillBar (8 barras) | Imágenes tech (12) | Videos películas (6) | GitHub + LinkedIn |
| **Mike** | XP bars CSS animadas (7) | DevIcons (8) | Videos películas (3) | GitHub + LinkedIn |
| **Raquel** | XP bars CSS animadas (5) | DevIcons (6) | Cards películas (3) | GitHub + LinkedIn |
| **Valeria** | SkillBar (6 barras) | DevIcons (7) | Carrusel discos (6) | GitHub + LinkedIn |

### 🎯 CUMPLIMIENTO:

✅ Vista detallada para cada estudiante (5 perfiles)  
✅ **Barras de Progreso Animadas en los 5 perfiles** (SkillBar o XP bars con CSS animation)  
✅ **Carrusel de Proyectos** (mínimo 3 trabajos por perfil — películas, discos, videos)  
✅ **Tech Stack con mínimo 5 iconos en los 5 perfiles** (DevIcons o imágenes con hover)  
✅ **Efectos visuales en iconos** (transform, scale, drop-shadow, glow)  
✅ **Botones Social Media con hover avanzado en los 5 perfiles** (escala, color, box-shadow)

---

<a name="requerimiento-4"></a>
## 4️⃣ REQUERIMIENTO 4: Explorador de Datos Locales (JSON)

### 📝 QUÉ DICE EL ENUNCIADO:

> **"Renderización dinámica de un archivo JSON con 20 objetos."**
>
> **"Funcionalidad Crítica: Implementar lógica de filtrado en tiempo real y un buscador por texto que actualice la vista dinámicamente en React."**

### ✅ DÓNDE ESTÁ EN NUESTRO PROYECTO:

#### Archivos Principales:
```
public/data/projects.json (20 objetos)
src/pages/JsonExplorer.jsx
src/pages/JsonExplorer.css
```

#### Implementación Detallada:

**1. Archivo JSON con 20 Objetos:**
- **Ubicación:** `public/data/projects.json`
- **Estructura:**
```json
[
  {
    "id": 1,
    "title": "Sistema de Gestión de Biblioteca",
    "category": "Backend",
    "technology": "Python",
    "description": "API REST para gestión de préstamos...",
    "year": 2024,
    "status": "Completado"
  },
  // ... 19 objetos más (total: 20)
]
```
- **Categorías:** Backend, Frontend, Full Stack, Machine Learning, Mobile
- **Estados:** Completado, En Desarrollo
- **Tecnologías:** Python, React, MERN, Node.js, Java, etc.

**2. Renderización Dinámica:**
- **Ubicación:** `src/pages/JsonExplorer.jsx` líneas 10-25
- **Código:**
```jsx
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadProjects = async () => {
    try {
      const response = await fetch('/data/projects.json');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };
  loadProjects();
}, []);
```

**3. FILTRADO EN TIEMPO REAL (FUNCIONALIDAD CRÍTICA):**
- **Ubicación:** `src/pages/JsonExplorer.jsx` líneas 30-50
- **Código:**
```jsx
const filteredProjects = projects.filter(project => {
  // Filtrar por búsqueda de texto
  const matchesSearch = !searchTerm ||
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technology.toLowerCase().includes(searchTerm.toLowerCase());

  // Filtrar por categoría
  const matchesCategory = selectedCategory === 'Todas' || 
    project.category === selectedCategory;

  // Filtrar por estado
  const matchesStatus = selectedStatus === 'Todos' || 
    project.status === selectedStatus;

  return matchesSearch && matchesCategory && matchesStatus;
});
```
- **Características:**
  - Filtrado derivado (no usa useEffect innecesario)
  - Se actualiza automáticamente cuando cambian los filtros
  - Busca en múltiples campos (título, descripción, tecnología)

**4. BUSCADOR POR TEXTO (FUNCIONALIDAD CRÍTICA):**
- **Ubicación:** `src/pages/JsonExplorer.jsx` líneas 80-100
- **Código:**
```jsx
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
    >
      ✕
    </button>
  )}
</div>
```
- **Características:**
  - Input controlado con `value={searchTerm}`
  - Actualización en tiempo real con `onChange`
  - Botón para limpiar búsqueda
  - Búsqueda case-insensitive

**5. Filtros Adicionales:**
- **Ubicación:** `src/pages/JsonExplorer.jsx` líneas 105-140
- **Filtros implementados:**

**a) Filtro por Categoría:**
```jsx
<select
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  {categories.map(cat => (
    <option key={cat} value={cat}>{cat}</option>
  ))}
</select>
```

**b) Filtro por Estado:**
```jsx
<select
  value={selectedStatus}
  onChange={(e) => setSelectedStatus(e.target.value)}
>
  {statuses.map(status => (
    <option key={status} value={status}>{status}</option>
  ))}
</select>
```

**6. Actualización Dinámica de Vista:**
- **Ubicación:** `src/pages/JsonExplorer.jsx` líneas 150-180
- **Código:**
```jsx
<div className="results-info">
  <p>
    <span className="prompt">&gt;</span> 
    Mostrando {filteredProjects.length} de {projects.length} proyectos
  </p>
</div>

<div className="projects-grid">
  {filteredProjects.length > 0 ? (
    filteredProjects.map((project) => (
      <article key={project.id} className="project-card">
        {/* Contenido de la tarjeta */}
      </article>
    ))
  ) : (
    <div className="no-results">
      <p>No se encontraron proyectos con los filtros aplicados</p>
    </div>
  )}
</div>
```
- **Características:**
  - Contador de resultados en tiempo real
  - Grid responsive
  - Mensaje cuando no hay resultados
  - Animaciones de entrada para cada tarjeta


**7. Visualización de Datos:**
- **Ubicación:** `src/pages/JsonExplorer.jsx` líneas 185-210
- **Información mostrada por proyecto:**
  - ID del proyecto
  - Título
  - Descripción
  - Categoría
  - Tecnología
  - Año
  - Estado (badge con color)

### 🎯 CUMPLIMIENTO:

✅ Archivo JSON con 20 objetos  
✅ Renderización dinámica  
✅ **Lógica de filtrado en tiempo real** (CRÍTICO)  
✅ **Buscador por texto** (CRÍTICO)  
✅ **Actualización dinámica de vista** (CRÍTICO)  
✅ Filtros adicionales (categoría, estado)  
✅ Contador de resultados  
✅ Botón para limpiar filtros  

---

<a name="requerimiento-5"></a>
## 5️⃣ REQUERIMIENTO 5: Módulo de Integración de API Externa

### 📝 QUÉ DICE EL ENUNCIADO:

> **"Consumo asíncrono de una API pública con manejo de estados de carga y error."**
>
> **"Paginación: Sistema de navegación por páginas (Anterior/Siguiente) con indicador de posición actual."**

### ✅ DÓNDE ESTÁ EN NUESTRO PROYECTO:

#### Archivos Principales:
```
src/pages/ApiData.jsx
src/pages/ApiData.css
```

#### Implementación Detallada:

**1. API Pública Utilizada:**
- **API:** JSONPlaceholder
- **Endpoint:** `https://jsonplaceholder.typicode.com/users`
- **Datos:** 10 usuarios con información completa

**2. Consumo Asíncrono:**
- **Ubicación:** `src/pages/ApiData.jsx` líneas 10-30
- **Código:**
```jsx
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

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
```
- **Características:**
  - Uso de `async/await`
  - Try-catch para manejo de errores
  - Finally para actualizar estado de loading

**3. MANEJO DE ESTADOS (OBLIGATORIO):**

**a) Estado de Carga:**
- **Ubicación:** `src/pages/ApiData.jsx` líneas 50-65
- **Código:**
```jsx
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
```
- **Características:**
  - Spinner animado
  - Texto de carga
  - Puntos animados (blink)

**b) Estado de Error:**
- **Ubicación:** `src/pages/ApiData.jsx` líneas 70-90
- **Código:**
```jsx
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
```
- **Características:**
  - Mensaje de error claro
  - Botón para reintentar
  - Estética de terminal

**c) Estado de Éxito:**
- **Ubicación:** `src/pages/ApiData.jsx` líneas 95-200
- **Renderizado:** Grid de usuarios con toda la información

**4. SISTEMA DE PAGINACIÓN (OBLIGATORIO):**

**a) Cálculos de Paginación:**
- **Ubicación:** `src/pages/ApiData.jsx` líneas 35-40
- **Código:**
```jsx
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;

const totalPages = Math.ceil(users.length / itemsPerPage);
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
```

**b) Botones Anterior/Siguiente:**
- **Ubicación:** `src/pages/ApiData.jsx` líneas 220-240
- **Código:**
```jsx
<button
  className="pagination-btn"
  onClick={goToPreviousPage}
  disabled={currentPage === 1}
>
  ← Anterior
</button>

<button
  className="pagination-btn"
  onClick={goToNextPage}
  disabled={currentPage === totalPages}
>
  Siguiente →
</button>
```
- **Características:**
  - Disable inteligente (primer/última página)
  - Iconos de dirección
  - Efectos hover


**c) INDICADOR DE POSICIÓN ACTUAL (OBLIGATORIO):**
- **Ubicación:** `src/pages/ApiData.jsx` líneas 205-215
- **Código:**
```jsx
<div className="pagination-info">
  <p>
    <span className="prompt">&gt;</span> 
    Página {currentPage} de {totalPages}
  </p>
  <p className="items-info">
    Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, users.length)} 
    de {users.length} usuarios
  </p>
</div>
```
- **Información mostrada:**
  - Página actual / Total de páginas
  - Rango de items mostrados
  - Total de items

**d) Números de Página Clickeables:**
- **Ubicación:** `src/pages/ApiData.jsx` líneas 245-270
- **Código:**
```jsx
<div className="page-numbers">
  {[...Array(totalPages)].map((_, index) => {
    const pageNumber = index + 1;
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
```
- **Características:**
  - Muestra página actual y adyacentes
  - Siempre muestra primera y última página
  - Elipsis (...) para páginas ocultas
  - Clase `active` para página actual

**5. Visualización de Datos:**
- **Ubicación:** `src/pages/ApiData.jsx` líneas 120-180
- **Información mostrada por usuario:**
  - Avatar con inicial del nombre
  - Nombre completo
  - Username
  - Email
  - Teléfono
  - Website (link externo)
  - Empresa
  - Ciudad

### 🎯 CUMPLIMIENTO:

✅ Consumo asíncrono de API pública  
✅ **Manejo de estado de carga** (spinner + texto)  
✅ **Manejo de estado de error** (mensaje + reintentar)  
✅ **Manejo de estado de éxito** (datos renderizados)  
✅ **Sistema de paginación** (Anterior/Siguiente)  
✅ **Indicador de posición actual** ("Página X de Y")  
✅ Números de página clickeables  
✅ Contador de items mostrados  
✅ Disable inteligente de botones  

---

<a name="requerimiento-6"></a>
## 6️⃣ REQUERIMIENTO 6: Galería de Imágenes Interactiva

### 📝 QUÉ DICE EL ENUNCIADO:

> **"Visualizador tipo Grid con funcionalidad de Lightbox integrada (zoom, navegación interna y cierre mediante tecla ESC)."**

### ✅ DÓNDE ESTÁ EN NUESTRO PROYECTO:

#### Archivos Principales:
```
src/pages/Gallery.jsx
src/pages/Gallery.css
```

#### Implementación Detallada:

**1. Visualizador Tipo Grid:**
- **Ubicación:** `src/pages/Gallery.jsx` líneas 100-130
- **Código:**
```jsx
<div className="gallery-grid">
  {images.map((image, index) => (
    <article
      key={image.id}
      className="gallery-item"
      onClick={() => openLightbox(index)}
      role="button"
      tabIndex={0}
    >
      <img src={image.src} alt={image.title} className="gallery-image" />
      <div className="gallery-overlay">
        <span className="zoom-icon">🔍</span>
        <p className="image-title">{image.title}</p>
        <span className="image-category">{image.category}</span>
      </div>
    </article>
  ))}
</div>
```
- **Características:**
  - Grid responsive (CSS Grid)
  - 18 imágenes en total
  - Overlay con información en hover
  - Icono de zoom
  - Aspect ratio 1:1

**2. CSS Grid Responsive:**
- **Ubicación:** `src/pages/Gallery.css` líneas 30-40
- **Código:**
```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
```
- **Comportamiento:**
  - Desktop: 4-5 columnas
  - Tablet: 2-3 columnas
  - Mobile: 1 columna

**3. FUNCIONALIDAD DE LIGHTBOX (OBLIGATORIO):**

**a) Estado del Lightbox:**
- **Ubicación:** `src/pages/Gallery.jsx` líneas 10-15
- **Código:**
```jsx
const [lightboxOpen, setLightboxOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const openLightbox = (index) => {
  setCurrentImageIndex(index);
  setLightboxOpen(true);
};
```

**b) Modal Fullscreen:**
- **Ubicación:** `src/pages/Gallery.jsx` líneas 135-200
- **Código:**
```jsx
{lightboxOpen && (
  <div className="lightbox" onClick={closeLightbox}>
    <button className="lightbox-close" onClick={closeLightbox}>
      ✕
    </button>
    
    <button className="lightbox-nav lightbox-prev" onClick={goToPrevious}>
      ←
    </button>
    
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <img
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].title}
        className="lightbox-image"
      />
      <div className="lightbox-info">
        <h3>{images[currentImageIndex].title}</h3>
        <p>{images[currentImageIndex].category}</p>
        <p>{currentImageIndex + 1} / {images.length}</p>
      </div>
    </div>
    
    <button className="lightbox-nav lightbox-next" onClick={goToNext}>
      →
    </button>
  </div>
)}
```


**c) ZOOM DE IMAGEN (OBLIGATORIO):**
- **Ubicación:** `src/pages/Gallery.css` líneas 100-120
- **Código CSS:**
```css
.lightbox-image {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border: 3px solid var(--terminal-green);
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.5);
  animation: zoomIn 0.3s ease;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```
- **Características:**
  - Imagen a tamaño completo (max 75vh)
  - Animación de zoom al abrir
  - Borde y sombra verde

**d) NAVEGACIÓN INTERNA (OBLIGATORIO):**
- **Ubicación:** `src/pages/Gallery.jsx` líneas 20-35
- **Código:**
```jsx
const goToNext = useCallback(() => {
  setCurrentImageIndex((prevIndex) =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1
  );
}, [images.length]);

const goToPrevious = useCallback(() => {
  setCurrentImageIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
}, [images.length]);
```
- **Características:**
  - Botones anterior/siguiente
  - Navegación circular (última → primera)
  - useCallback para optimización

**e) CIERRE CON TECLA ESC (OBLIGATORIO):**
- **Ubicación:** `src/pages/Gallery.jsx` líneas 40-65
- **Código:**
```jsx
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
      default:
        break;
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [lightboxOpen, closeLightbox, goToNext, goToPrevious]);
```
- **Características:**
  - ESC: cierra el lightbox
  - Flecha derecha: siguiente imagen
  - Flecha izquierda: imagen anterior
  - Cleanup del event listener

**4. Funcionalidades Adicionales:**

**a) Cierre con Click Fuera:**
- **Ubicación:** `src/pages/Gallery.jsx` línea 137
- **Código:**
```jsx
<div className="lightbox" onClick={closeLightbox}>
  <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
    {/* Contenido */}
  </div>
</div>
```
- **Lógica:** Click en overlay cierra, click en contenido no propaga

**b) Prevención de Scroll:**
- **Ubicación:** `src/pages/Gallery.jsx` líneas 70-80
- **Código:**
```jsx
useEffect(() => {
  if (lightboxOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [lightboxOpen]);
```
- **Efecto:** Previene scroll del body cuando lightbox está abierto

**c) Contador de Posición:**
- **Ubicación:** `src/pages/Gallery.jsx` línea 175
- **Código:**
```jsx
<p className="lightbox-counter">
  {currentImageIndex + 1} / {images.length}
</p>
```
- **Muestra:** "5 / 18" (imagen actual / total)

**d) Instrucciones de Uso:**
- **Ubicación:** `src/pages/Gallery.jsx` líneas 185-190
- **Código:**
```jsx
<div className="lightbox-instructions">
  <span>← → Navegar</span>
  <span>ESC Cerrar</span>
</div>
```
- **Ubicación visual:** Parte inferior del lightbox

**5. Animaciones:**
- **Ubicación:** `src/pages/Gallery.css` líneas 150-200
- **Animaciones implementadas:**
  - fadeIn del overlay
  - zoomIn de la imagen
  - fadeInScale de items del grid
  - pulse del icono de zoom
  - Transiciones suaves en todos los elementos

### 🎯 CUMPLIMIENTO:

✅ Visualizador tipo Grid  
✅ Grid responsive  
✅ **Funcionalidad de Lightbox integrada**  
✅ **Zoom de imagen** (animación + fullscreen)  
✅ **Navegación interna** (botones + flechas teclado)  
✅ **Cierre mediante tecla ESC** (OBLIGATORIO)  
✅ Cierre con click fuera  
✅ Contador de posición  
✅ Prevención de scroll  
✅ Instrucciones visibles  
✅ Animaciones de apertura/cierre  
✅ 18 imágenes en la galería  

---

<a name="requerimiento-7"></a>
## 7️⃣ REQUERIMIENTO 7: Sección Bitácora de Proyecto

### 📝 QUÉ DICE EL ENUNCIADO:

> **"Documentación técnica sobre roles y flujo de trabajo (GitFlow/Trello)."**
>
> **"Justificación de Migración: Análisis detallado del proceso de evolución de la estructura estática (HTML/JS) a la arquitectura de React."**

### ✅ DÓNDE ESTÁ EN NUESTRO PROYECTO:

#### Archivos Principales:
```
src/pages/Bitacora.jsx   ← Página completa con roles, flujo de trabajo y justificación
src/pages/Bitacora.css
README.md (sección Evolución — detalla la migración con código)
```

#### Implementación Detallada:

**1. Página de Bitácora:**
- **Ubicación:** `src/pages/Bitacora.jsx`
- **Ruta:** `/bitacora`
- **Contenido:** Documentación técnica completa con 4 secciones estructuradas

**2. DOCUMENTACIÓN TÉCNICA SOBRE ROLES:**
- **Ubicación:** `src/pages/Bitacora.jsx` — Sección "Roles del Equipo" (tabla HTML)
- **También en:** `README.md` sección "Contribuciones"
- **Contenido:**

| Integrante | Rol Principal | Contribuciones TP2 |
|------------|---------------|--------------------|
| Mariana Aiello | Software Dev & Data Science | Perfil individual completo, SkillBar, explorador JSON, documentación |
| Mario González | Full Stack Developer | Sidebar Dashboard, routing, integración de componentes |
| Miguel Ángel Flores | Full Stack Developer | API externa, paginación, manejo de estados |
| Raquel Rodríguez | Frontend Developer | Galería Lightbox, estilos, animaciones, perfil individual |
| Valeria Thomas | Fullstack Developer | Árbol de componentes, deploy, perfil individual |

**3. FLUJO DE TRABAJO:**
- **Ubicación:** `README.md` líneas 855-870
- **Contenido:**

```markdown
### Metodología de Trabajo

- **Git Flow:** Branches por feature, pull requests para revisión
- **Code Review:** Revisión de código entre pares
- **Testing:** Pruebas manuales de cada funcionalidad
- **Documentación:** README actualizado continuamente
```


**4. JUSTIFICACIÓN DE MIGRACIÓN (OBLIGATORIO):**
- **Ubicación:** `README.md` líneas 400-600
- **Contenido completo:**

**a) Comparación Antes/Después:**
```markdown
#### De HTML/CSS/JS Vanilla a React

**ANTES (TP1):**
- ❌ Múltiples archivos HTML
- ❌ JavaScript vanilla con manipulación directa del DOM
- ❌ Código repetitivo en cada página
- ❌ Navegación con recarga completa
- ❌ Sin gestión de estado centralizada

**DESPUÉS (TP2):**
- ✅ Single Page Application (SPA)
- ✅ Componentes React reutilizables
- ✅ Estado manejado con React Hooks
- ✅ Navegación sin recarga
- ✅ Código modular y mantenible
```

**b) Mejoras Implementadas (5 categorías):**

**1. Componentización:**
```markdown
**Antes:** Código HTML duplicado en cada página
**Después:** Componente reutilizable
**Beneficio:** Cambios en un solo lugar se reflejan en toda la app
```

**2. Gestión de Estado:**
```markdown
**Antes:** Variables globales y manipulación del DOM
**Después:** React Hooks (useState, useEffect)
**Beneficio:** Estado predecible y reactivo
```

**3. Routing:**
```markdown
**Antes:** Enlaces tradicionales con recarga
**Después:** React Router
**Beneficio:** Experiencia de usuario fluida (SPA)
```

**4. Performance:**
```markdown
**Antes:**
- Carga completa de HTML/CSS/JS en cada navegación
- Sin optimización de assets

**Después:**
- Build optimizado con Vite
- Code splitting automático
- Assets minificados
**Resultado:** Carga inicial más rápida
```

**5. Arquitectura:**
```markdown
**Antes:** Estructura plana sin organización
**Después:** Arquitectura modular (components/, pages/, styles/)
**Beneficio:** Código organizado y escalable
```

**c) Nuevas Funcionalidades:**
- **Ubicación:** `README.md` líneas 550-580
- **Tabla de funcionalidades:**

| Funcionalidad | Descripción | Tecnología |
|---------------|-------------|------------|
| **Sidebar Dashboard** | Navegación lateral fija profesional | React + CSS |
| **Explorador JSON** | Búsqueda y filtrado en tiempo real | useState + useEffect |
| **API Externa** | Consumo asíncrono con paginación | Fetch API + useState |
| **Galería Lightbox** | Modal fullscreen con navegación | useState + useEffect |
| **Árbol de Componentes** | Documentación visual | React Component |
| **Animaciones** | Efectos visuales al cargar | CSS Animations |

**d) ¿Por qué migrar a React?**
- **Ubicación:** `README.md` líneas 585-620
- **6 razones detalladas:**

1. **Reutilización de Código**
2. **Mantenibilidad**
3. **Escalabilidad**
4. **Experiencia de Usuario**
5. **Desarrollo Moderno**
6. **Performance**

**e) Desafíos Encontrados:**
- **Ubicación:** `README.md` líneas 625-650
- **4 desafíos con soluciones:**

1. **Curva de Aprendizaje**
   - Desafío: Aprender conceptos de React
   - Solución: Documentación oficial, tutoriales

2. **Gestión de Estado**
   - Desafío: Decidir cuándo usar estado local vs props
   - Solución: Uso correcto de useState y useEffect

3. **Routing**
   - Desafío: Configurar rutas correctamente
   - Solución: Documentación de React Router

4. **Estilos**
   - Desafío: Adaptar CSS del TP1
   - Solución: CSS Modules y clases específicas

**f) Lecciones Aprendidas:**
- **Ubicación:** `README.md` líneas 655-665
- **6 lecciones:**

✅ React simplifica el desarrollo de aplicaciones complejas  
✅ Los Hooks son poderosos para gestionar estado  
✅ La componentización reduce código  
✅ El Virtual DOM optimiza actualizaciones  
✅ Las herramientas modernas mejoran productividad  
✅ La planificación de arquitectura es crucial  

### 🎯 CUMPLIMIENTO:

✅ Página de Bitácora completa (`/bitacora`)  
✅ **Tabla de roles** con 5 integrantes y contribuciones específicas  
✅ **Flujo de trabajo** (Git branches, code review, testing manual, WhatsApp)  
✅ **Proceso semanal** documentado (4 semanas de desarrollo)  
✅ **Justificación de Migración** con comparación visual Antes/Después  
✅ **5 mejoras técnicas concretas** con ejemplos de código  
✅ **Desafíos encontrados** (Hooks, CSS conflictos, Router, event listeners)  
✅ **Lecciones aprendidas** (5 puntos)  
✅ **Sección Evolución** también en README (con código comparativo HTML vs React)  

---

<a name="requerimiento-8"></a>
## 8️⃣ REQUERIMIENTO 8: Sección Árbol de Renderizado

### 📝 QUÉ DICE EL ENUNCIADO:

> **"Requerimiento Técnico: Es obligatorio incluir una representación gráfica o esquemática del Árbol de Renderizado del proyecto."**
>
> **"Contenido: Se debe detallar la estructura jerárquica de la aplicación, identificando claramente el componente raíz (App), los componentes de nivel superior (Layout, Sidebar, Navbar) y cómo se desglosan los componentes hijos (Cards, Buttons, Modals, etc.)."**

### ✅ DÓNDE ESTÁ EN NUESTRO PROYECTO:

#### Archivos Principales:
```
src/pages/ComponentTree.jsx
src/pages/ComponentTree.css
```

#### Implementación Detallada:

**1. Página Dedicada:**
- **Ubicación:** `src/pages/ComponentTree.jsx`
- **Ruta:** `/component-tree`
- **Acceso:** Desde Sidebar → "Árbol de Componentes"

**2. REPRESENTACIÓN GRÁFICA (OBLIGATORIO):**
- **Ubicación:** `src/pages/ComponentTree.jsx` líneas 50-200
- **Implementación:** Diagrama visual con HTML/CSS

**Estructura del Árbol:**
```jsx
<div className="tree-node root">
  <div className="node-content">
    <span className="node-icon">⚛️</span>
    <span className="node-name">App.jsx</span>
    <span className="node-badge root-badge">ROOT</span>
  </div>
  
  <div className="tree-children">
    {/* BrowserRouter */}
    <div className="tree-node layout">
      <div className="node-content">
        <span className="node-icon">🔀</span>
        <span className="node-name">BrowserRouter</span>
      </div>
      
      <div className="tree-children">
        {/* ScrollToTop */}
        {/* Sidebar */}
        {/* Main Content */}
        {/* Routes */}
        {/* Footer */}
      </div>
    </div>
  </div>
</div>
```


**3. COMPONENTE RAÍZ IDENTIFICADO (OBLIGATORIO):**
- **Ubicación:** `src/pages/ComponentTree.jsx` líneas 55-65
- **Código:**
```jsx
<div className="tree-node root">
  <div className="node-content">
    <span className="node-icon">⚛️</span>
    <span className="node-name">App.jsx</span>
    <span className="node-badge root-badge">ROOT</span>
  </div>
  <div className="node-description">
    Componente raíz | Configuración de Router
  </div>
</div>
```
- **Características:**
  - Badge "ROOT" en color rojo
  - Icono de React (⚛️)
  - Descripción clara

**4. COMPONENTES DE NIVEL SUPERIOR (OBLIGATORIO):**
- **Ubicación:** `src/pages/ComponentTree.jsx` líneas 70-150
- **Componentes identificados:**

**a) BrowserRouter:**
```jsx
<div className="tree-node layout">
  <span className="node-name">BrowserRouter</span>
  <span className="node-badge">ROUTER</span>
</div>
```

**b) Sidebar:**
```jsx
<div className="tree-node layout">
  <span className="node-icon">📊</span>
  <span className="node-name">Sidebar</span>
  <span className="node-badge">LAYOUT</span>
  <div className="node-description">
    Navegación lateral fija | Dashboard
  </div>
</div>
```

**c) Main Content:**
```jsx
<div className="tree-node layout">
  <span className="node-icon">📄</span>
  <span className="node-name">Main Content</span>
  <span className="node-badge">LAYOUT</span>
</div>
```

**d) Footer:**
```jsx
<div className="tree-node layout">
  <span className="node-icon">⬇️</span>
  <span className="node-name">Footer</span>
  <span className="node-badge">LAYOUT</span>
  <div className="node-description">
    Pie de página con año dinámico
  </div>
</div>
```

**5. COMPONENTES HIJOS DESGLOSADOS (OBLIGATORIO):**
- **Ubicación:** `src/pages/ComponentTree.jsx` líneas 155-250
- **Estructura completa:**

**Routes (Páginas):**
- Home
  - HeroSection
  - TeamList
- Bitacora
- JsonExplorer
- ApiData
- Gallery
- ComponentTree
- Profiles (5 perfiles)

**6. Leyenda de Tipos:**
- **Ubicación:** `src/pages/ComponentTree.jsx` líneas 30-45
- **Código:**
```jsx
<div className="legend">
  <h3>Leyenda:</h3>
  <ul>
    <li><span className="legend-root">■</span> Componente Raíz</li>
    <li><span className="legend-layout">■</span> Componentes de Layout</li>
    <li><span className="legend-page">■</span> Páginas/Vistas</li>
    <li><span className="legend-component">■</span> Componentes Reutilizables</li>
  </ul>
</div>
```
- **Colores:**
  - Rojo (#ff6b6b): Componente Raíz
  - Cyan (#4ecdc4): Layout
  - Amarillo (#ffe66d): Páginas
  - Verde (#00ff41): Componentes

**7. Tabla Detallada de Componentes:**
- **Ubicación:** `src/pages/ComponentTree.jsx` líneas 260-350
- **Contenido:**

```jsx
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
      <td><strong>App.jsx</strong></td>
      <td><span className="badge root-badge">Root</span></td>
      <td>Componente raíz que configura el Router</td>
      <td>-</td>
    </tr>
    {/* ... 12 componentes más ... */}
  </tbody>
</table>
```
- **Información por componente:**
  - Nombre
  - Tipo (Root, Layout, Page, Component)
  - Descripción funcional
  - Props y estado utilizados

**8. Diagrama de Flujo de Datos:**
- **Ubicación:** `src/pages/ComponentTree.jsx` líneas 360-400
- **Código:**
```jsx
<div className="flow-diagram">
  <div className="flow-item">
    <div className="flow-step">1</div>
    <div className="flow-content">
      <h3>Router</h3>
      <p>BrowserRouter gestiona las rutas</p>
    </div>
  </div>
  <div className="flow-arrow">→</div>
  <div className="flow-item">
    <div className="flow-step">2</div>
    <div className="flow-content">
      <h3>Layout</h3>
      <p>Sidebar y estructura se mantienen constantes</p>
    </div>
  </div>
  {/* ... pasos 3 y 4 ... */}
</div>
```
- **Flujo explicado:**
  1. Router gestiona navegación
  2. Layout permanece constante
  3. Pages se renderizan según ruta
  4. Components reciben props y manejan estado

**9. Estilos Visuales:**
- **Ubicación:** `src/pages/ComponentTree.css`
- **Características:**
  - Líneas conectoras entre nodos
  - Colores diferenciados por tipo
  - Efectos hover en nodos
  - Animaciones de entrada
  - Responsive design

### 🎯 CUMPLIMIENTO:

✅ **Representación gráfica** del árbol  
✅ **Estructura jerárquica detallada**  
✅ **Componente raíz identificado** (App)  
✅ **Componentes de nivel superior** (Sidebar, Footer, Router)  
✅ **Componentes hijos desglosados** (todos los niveles)  
✅ Leyenda de tipos de componentes  
✅ Tabla detallada con descripción  
✅ Diagrama de flujo de datos  
✅ Props y estado documentados  
✅ Colores diferenciados por tipo  

---

<a name="readme-obligatorio"></a>
## 📄 README.md OBLIGATORIO

### 📝 QUÉ DICE EL ENUNCIADO:

> **"EN CASO DE NO ENCONTRAR EL README COMPLETO EL PROYECTO QUEDA DESAPROBADO"**
>
> **"El docente realizará la revisión del proyecto desde este archivo, por lo cual debe estar bien señalado, con links y capturas de pantalla."**

**Debe incluir:**
1. Título del Proyecto
2. Descripción
3. Integrantes
4. Tecnologías Utilizadas
5. Estructura de Archivos
6. Guía de Estilos
7. JavaScript/React
8. Enlace al Proyecto Desplegado
9. Evolución

### ✅ DÓNDE ESTÁ EN NUESTRO PROYECTO:

**Archivo:** `README.md` (raíz del proyecto)  
**Tamaño:** ~1,200 líneas  
**Estado:** COMPLETO ✅


#### Verificación Sección por Sección:

### 1. ✅ Título del Proyecto
- **Ubicación:** `README.md` líneas 1-5
- **Contenido:**
```markdown
# 404 Solutions - Aplicación React con Dashboard

## 🚀 Deploy en Producción

**🌐 Sitio Web:** [https://tu-proyecto.vercel.app](...)
```

### 2. ✅ Descripción
- **Ubicación:** `README.md` líneas 7-20
- **Contenido:**
```markdown
## 📝 Descripción del Proyecto

Este proyecto es la **migración completa** del sitio web estático 
de 404 Solutions (TP1) a una **Single Page Application (SPA)** 
moderna desarrollada con React.

### Objetivo
Demostrar el dominio de React mediante la implementación de:
- Arquitectura de componentes modular
- Gestión de estado con Hooks
- Consumo de datos locales (JSON) y APIs externas
- ...
```

### 3. ✅ Integrantes con Links a GitHub
- **Ubicación:** `README.md` líneas 25-35
- **Contenido:**
```markdown
## 👥 Integrantes del Equipo

| Nombre | Rol | GitHub |
|--------|-----|--------|
| **Mariana Aiello** | Software Dev & Data Science | [github.com/Aiello-M](https://github.com/Aiello-M) |
| **Mario González** | Full Stack Developer | [github.com/elavincho](https://github.com/elavincho) |
| **Miguel Ángel Flores** | Full Stack Developer | [github.com/mikefink22](https://github.com/mikefink22) |
| **Raquel Rodríguez** | Frontend Developer | [github.com/raquerh](https://github.com/raquerh) |
| **Valeria Thomas** | Fullstack Developer | [github.com/usuario-valeria](https://github.com/usuario-valeria) |
```

### 4. ✅ Tecnologías Utilizadas
- **Ubicación:** `README.md` líneas 40-80
- **Contenido organizado por categorías:**

```markdown
## 🛠️ Tecnologías Utilizadas

### Frontend Framework
- **React** 19.2.5 - Librería de UI
- **React Router DOM** 7.1.3 - Navegación SPA
- **Vite** 8.0.10 - Build tool

### Herramientas de Desarrollo
- **ESLint** 10.2.1 - Linter
- **Git** - Control de versiones
- **npm** - Gestor de paquetes

### Lenguajes y Estilos
- **JavaScript (ES6+)**
- **CSS3** - Variables, Flexbox, Grid, Animaciones
- **HTML5**

### Librerías de Iconos
- **DevIcons** - Iconos de tecnologías
- **Font Awesome** 6.5.1 - Iconos generales

### APIs Externas
- **JSONPlaceholder** - API REST pública
```

### 5. ✅ Estructura de Archivos
- **Ubicación:** `README.md` líneas 85-150
- **Contenido:**
```markdown
## 📁 Estructura de Archivos

\`\`\`
tp2/
├── public/
│   ├── data/
│   │   └── projects.json       # 20 objetos
│   ├── img/
│   └── logo404solution.ico
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx        # ⭐ NUEVO
│   │   ├── SkillBar.jsx       # ⭐ NUEVO
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── TeamList.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Bitacora.jsx
│   │   ├── JsonExplorer.jsx   # ⭐ NUEVO
│   │   ├── ApiData.jsx        # ⭐ NUEVO
│   │   ├── Gallery.jsx        # ⭐ NUEVO
│   │   ├── ComponentTree.jsx  # ⭐ NUEVO
│   │   └── profiles/
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
\`\`\`
```

### 6. ✅ Guía de Estilos
- **Ubicación:** `README.md` líneas 155-230
- **Contenido completo:**

**a) Paleta de Colores (Hexadecimales):**
```markdown
## 🎨 Guía de Estilos

### Paleta de Colores

| Color | Hexadecimal | Uso |
|-------|-------------|-----|
| **Verde Terminal** | `#00ff41` | Texto principal, acentos |
| **Verde Oscuro** | `#003b00` | Fondos hover |
| **Negro Profundo** | `#0a0a0a` | Fondo principal |
| **Gris Oscuro** | `#1a1a1a` | Tarjetas |
| **Blanco** | `#ffffff` | Texto secundario |
| **Rojo** | `#ff5555` | Errores |
| **Amarillo** | `#ffff00` | Alertas |
| **Cyan** | `#4ecdc4` | Badges |
```

**b) Tipografías (Google Fonts con links):**
```markdown
### Tipografías

#### Fuente Principal
- **Nombre:** JetBrains Mono
- **Tipo:** Monoespaciada
- **Pesos:** 400 (Regular), 700 (Bold)
- **Link:** [Google Fonts - JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Uso:** Toda la interfaz (estética terminal)

#### Fuente Secundaria
- **Nombre:** Courier New
- **Tipo:** Monoespaciada (sistema)
- **Uso:** Fallback
```

**c) Iconografía (librería usada):**
```markdown
### Iconografía

#### DevIcons
- **Versión:** Latest (CDN)
- **Link:** [devicon.dev](https://devicon.dev/)
- **Uso:** Iconos de tecnologías
- **Implementación:** Clases CSS (`devicon-html5-plain`)

#### Font Awesome
- **Versión:** 6.5.1
- **Link:** [fontawesome.com](https://fontawesome.com/)
- **Uso:** Iconos generales de UI
- **Implementación:** Clases CSS (`fa-solid`)

#### Emojis Unicode
- **Uso:** Iconos de navegación en Sidebar (🏠, 📋, 🔍)
- **Ventaja:** No requieren librería externa
```

### 7. ✅ JavaScript/React con Capturas
- **Ubicación:** `README.md` líneas 235-450
- **Contenido:** 8 funcionalidades documentadas

**Ejemplo de documentación:**
```markdown
## ⚙️ Funcionalidades Dinámicas Implementadas

### 1. Sidebar Dashboard con Estado Colapsable
**Componente:** `Sidebar.jsx`  
**Hooks utilizados:** `useState`, `useLocation`

\`\`\`javascript
const [isCollapsed, setIsCollapsed] = useState(false);
const location = useLocation();

const toggleSidebar = () => {
  setIsCollapsed(!isCollapsed);
};
\`\`\`

**Funcionalidades:**
- Navegación lateral fija siempre visible
- Botón para colapsar/expandir
- Indicador visual de ruta activa
- Responsive

![Sidebar](./docs/screenshots/sidebar.png)
```

**Funcionalidades documentadas:**
1. Sidebar Dashboard
2. Explorador JSON con filtrado
3. API Externa con paginación
4. Galería con Lightbox
5. Animaciones de entrada
6. Simulador de diagnóstico
7. Scroll automático
8. Footer con año dinámico

### 8. ✅ Enlace al Proyecto Desplegado
- **Ubicación:** `README.md` líneas 1-6
- **Estado:** ⚠️ PENDIENTE — la URL de Vercel todavía dice `https://tu-proyecto.vercel.app`
- **Acción requerida:** Completar el deploy en Vercel y reemplazar la URL placeholder

```markdown
## 🚀 Deploy en Producción

**🌐 Sitio Web:** [https://tu-proyecto.vercel.app](https://tu-proyecto.vercel.app) _(Pendiente de deploy)_
```

**Notas:**
- La sección "Deploy en Vercel" dentro del README explica los pasos para deployar
- Una vez deployado, actualizar el link en la primera línea del README
- También agregar el link a la planilla de entrega del docente

### 9. ✅ Evolución
- **Ubicación:** `README.md` líneas 476-675
- **Contenido:** Sección completa con:
  - Comparación ANTES (TP1) / DESPUÉS (TP2) con código real
  - 5 categorías de mejoras con ejemplos
  - Tabla de nuevas funcionalidades
  - Justificación de la migración (6 razones)
  - Desafíos encontrados y soluciones
  - Lecciones aprendidas

### 🎯 CUMPLIMIENTO README:

✅ Título del Proyecto  
✅ Descripción del objetivo y funcionalidades  
✅ Integrantes (con links — ⚠️ algunos son placeholder, ver más abajo)  
✅ Tecnologías utilizadas (organizadas por categoría)  
✅ Estructura de archivos (completa)  
✅ Guía de Estilos (colores hex, tipografías con Google Fonts link, iconografía)  
✅ JavaScript/React (8 funcionalidades con código)  
⚠️ Enlace al Deploy en Vercel — **PENDIENTE**: reemplazar URL placeholder  
✅ Evolución TP1 → TP2 (análisis completo)  
✅ Capturas de pantalla referenciadas — ⚠️ **PENDIENTE**: crear carpeta `docs/screenshots/` con capturas reales  

**⚠️ Links de GitHub pendientes de actualizar:**
- Valeria Thomas: `github.com/usuario-valeria` → reemplazar con link real cuando Valeria lo confirme

---

<a name="uso-de-ia"></a>
## 🤖 USO DE IA OBLIGATORIO

### 📝 QUÉ DICE EL ENUNCIADO:

> **"Detallar en el README.md las herramientas de Inteligencia Artificial utilizadas:"**
>
> **"● Herramientas: Listado de modelos usados (ej. Gemini, ChatGPT, Copilot)."**
>
> **"● Uso en Contenido y Código: Explicar qué textos se generaron y en qué problemas de lógica o debugging ayudó la IA."**
>
> **"● Imágenes: Especificar el modelo y criterio de prompt para avatares o logos."**
>
> **"● Nota: Se evaluará la capacidad para integrar la IA como asistente manteniendo la autoría del proyecto."**

### ✅ DÓNDE ESTÁ EN NUESTRO PROYECTO:

**Archivo:** `README.md` líneas 676-908  
**Sección:** `## 🤖 Uso de Inteligencia Artificial`

#### Implementación Detallada:

**1. Herramientas Listadas:**
- **Ubicación:** `README.md` líneas 678-692
- **Herramientas:**
  - ChatGPT (GPT-4) — OpenAI
  - GitHub Copilot — GitHub/OpenAI
  - Claude (Sonnet 4.5) — Anthropic

**2. Uso en Contenido:**
- **Ubicación:** `README.md` líneas 694-723
- **Documentado:**
  - Descripciones de perfiles (ChatGPT + edición manual)
  - Contenido del README (Claude)
  - Datos del archivo `projects.json` (ChatGPT con prompt documentado)

**3. Uso en Código:**
- **Ubicación:** `README.md` líneas 725-801
- **Ejemplos concretos con código:**
  - Componente de Paginación (GitHub Copilot)
  - Manejo de Teclado en Lightbox con `useEffect` (ChatGPT)
  - Filtrado en tiempo real encadenado (Claude)
  - Casos de debugging documentados

**4. Uso en Imágenes:**
- **Ubicación:** `README.md` líneas 820-851
- **Documentado:**
  - Avatares generados con DALL-E 3 (prompts incluidos)
  - Logo del equipo: diseño manual (no IA)

**5. Reflexión sobre el Uso de IA:**
- **Ubicación:** `README.md` líneas 854-908
- **Contenido:**
  - Cómo se usó la IA de manera responsable
  - Limitaciones encontradas
  - Conclusión sobre autoría del proyecto

### 🎯 CUMPLIMIENTO:

✅ Herramientas listadas (ChatGPT, Copilot, Claude)  
✅ Uso en Contenido (perfiles, README, JSON)  
✅ Uso en Código (con ejemplos reales)  
✅ Debugging documentado  
✅ Imágenes: modelo y prompts especificados  
✅ Reflexión sobre uso responsable  
✅ Autoría clara del proyecto  

---

## 📊 RESUMEN FINAL: ESTADO REAL DEL PROYECTO

### ✅ TODO IMPLEMENTADO

| Requerimiento | Archivo(s) | Estado |
|---------------|-----------|--------|
| Sidebar Dashboard Fija | `src/components/Sidebar.jsx` + `Sidebar.css` | ✅ Completo |
| Dashboard Home con Animaciones | `src/pages/Home.jsx`, `HeroSection.jsx`, `TeamList.jsx` | ✅ Completo |
| Barras de progreso animadas — todos los perfiles | `SkillBar.jsx` (Mario, Mariana, Valeria) + CSS animation (Mike, Raquel) | ✅ Completo |
| DevIcons ≥5 con efectos hover — todos los perfiles | `MikeProfile.jsx`, `RaquelProfile.jsx`, `ValeriaProfile.jsx`, `MarianaProfile.jsx`, `MarioProfile.jsx` | ✅ Completo |
| Carrusel/galería ≥3 trabajos — todos los perfiles | Películas / Discos con controles interactivos | ✅ Completo |
| Social links con hover avanzado — todos los perfiles | GitHub + LinkedIn en los 5 perfiles | ✅ Completo |
| Explorador JSON (20 objetos + filtrado) | `src/pages/JsonExplorer.jsx`, `public/data/projects.json` | ✅ Completo |
| API Externa con Paginación | `src/pages/ApiData.jsx` | ✅ Completo |
| Galería con Lightbox + ESC | `src/pages/Gallery.jsx` | ✅ Completo |
| Árbol de Renderizado | `src/pages/ComponentTree.jsx` | ✅ Completo |
| Bitácora completa | `src/pages/Bitacora.jsx` (roles + migración + proceso) | ✅ Completo |
| README.md con todas las secciones | `README.md` | ✅ Completo |
| Uso de IA documentado | `README.md` sección IA | ✅ Completo |

---

### ⚠️ PENDIENTE (no es código — es entrega)

#### 1. Deploy en Vercel — Pendiente
- **Estado:** URL placeholder en README: `https://tu-proyecto.vercel.app`
- **Acción:** Hacer deploy y reemplazar la URL en `README.md` línea 5

#### 2. Link de GitHub de Valeria — Placeholder
- **Estado:** `github.com/usuario-valeria` es un placeholder
- **Acción:** Valeria debe actualizar su link real en `README.md` y en `ValeriaProfile.jsx`

#### 3. Capturas de pantalla reales
- **Estado:** README describe las vistas en texto (sin imágenes hasta el deploy)
- **Acción opcional:** Después del deploy, agregar capturas a `docs/screenshots/` y referenciarlas en el README

---

### 📋 CHECKLIST FINAL ANTES DE ENTREGAR

#### Funcionalidades (código) — TODO LISTO ✅
- [x] Sidebar Dashboard fija con React Router
- [x] Dashboard Home con animaciones de entrada escalonadas
- [x] Explorador JSON con filtrado en tiempo real (20 objetos)
- [x] API externa (JSONPlaceholder) con paginación y estados loading/error
- [x] Galería con Lightbox, ESC, flechas del teclado, cierre fuera del modal
- [x] Árbol de Renderizado (ComponentTree con diagrama visual + tabla)
- [x] Barras de progreso animadas en los 5 perfiles
- [x] ≥5 iconos de tech stack con hover en los 5 perfiles
- [x] Carrusel/galería de ≥3 trabajos en los 5 perfiles
- [x] Social links con hover avanzado en los 5 perfiles
- [x] Bitácora con roles, flujo de trabajo y justificación de migración

#### Documentación — TODO LISTO ✅
- [x] README con todas las secciones requeridas (título, descripción, integrantes, tech, estructura, estilos, JS/React, deploy, evolución)
- [x] Uso de IA documentado en README (herramientas, código, imágenes, reflexión)
- [x] Árbol de componentes en README (texto ASCII) y como página web interactiva
- [x] Evolución TP1 → TP2 en README con código comparativo
- [x] GitHub links reales para 4 de 5 integrantes
- [x] Bitácora en página `/bitacora` con contenido completo

#### Deploy — PENDIENTE ⚠️
- [ ] **Deploy en Vercel**
- [ ] **URL de Vercel en README línea 5** (reemplazar placeholder)
- [ ] **URL de Vercel en planilla de entrega del docente**
- [ ] **Link de GitHub de Valeria** (actualizar en README + ValeriaProfile.jsx)

---

**Última actualización:** 27 de Mayo de 2026  
**Estado general:** ~97% completo — toda la funcionalidad implementada, solo falta deploy en Vercel

