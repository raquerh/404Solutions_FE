import { useEffect, useState } from 'react';
import './SkillBar.css';

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
        <div 
          className="skill-bar-fill" 
          style={{ width: `${width}%` }}
        >
          <div className="skill-bar-glow"></div>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
