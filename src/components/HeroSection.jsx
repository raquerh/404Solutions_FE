import { useState, useRef, useEffect } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [isRunning, setIsRunning] = useState(false);
  const [codeLines, setCodeLines] = useState([]);
  const codeLinesRef = useRef(null);

  // Auto-scroll cuando se agregan nuevas líneas
  useEffect(() => {
    if (codeLinesRef.current && codeLines.length > 0) {
      // Pequeño delay para asegurar que el DOM se haya actualizado
      setTimeout(() => {
        if (codeLinesRef.current) {
          codeLinesRef.current.scrollTop = codeLinesRef.current.scrollHeight;
        }
      }, 50);
    }
  }, [codeLines]);

  const runDiagnostic = () => {
    if (isRunning) return;

    setIsRunning(true);
    setCodeLines([]);

    const lines = [
      "// Inicializando sistema...",
      "// Verificando dependencias...",
      "// Cargando módulos...",
      "// Conectando con servidor...",
      "// Compilando componentes...",
      "// Estado: <span class='status-ok'>OK</span>",
      "// Sistema listo para desarrollo.",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < lines.length) {
        setCodeLines(prev => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsRunning(false), 500);
      }
    }, 500);
  };

  return (
    <section id="hero">
      <div className="hero-content">
        <div className="terminal-prompt">
          <span className="prompt-symbol">$</span>
          <span className="prompt-text">whoami</span>
        </div>
        <h1 className="glitch-text" data-text="> Error: Team Found_">
          &gt; Error: Team Found_
        </h1>
        <p className="hero-description">
          <span className="typing-effect">
            Enfoque: Depuración de problemas complejos y desarrollo de soluciones web escalables.
          </span>
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">05</span>
            <span className="stat-label">Desarrolladores</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Bugs Resueltos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Dedicación</span>
          </div>
        </div>
        <button
          id="btn-interact"
          className="nav-button pulse-button"
          onClick={runDiagnostic}
          disabled={isRunning}
        >
          <span className="button-icon">&gt;_</span> Ejecutar Diagnóstico
        </button>
      </div>
      <div className="hero-decoration" id="diagnosticOutput">
        <div className="terminal-window-header">
          <span className="term-dot red"></span>
          <span className="term-dot yellow"></span>
          <span className="term-dot green"></span>
          <span className="term-title">diagnostic.sh</span>
        </div>
        <div className="code-lines" id="codeLines" ref={codeLinesRef}>
          <span className="terminal-prompt">$</span>
          {codeLines.map((line, index) => (
            <span
              key={index}
              className="code-line"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
