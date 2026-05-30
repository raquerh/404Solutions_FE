import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./TeamList.css";

function TeamList() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      name: "Mariana",
      fullName: "Mariana Aiello",
      role: "Software Dev & Data Science",
      icon: "💻",
      avatar: "/img/avatar_mariana.jpg",
      link: "/mariana",
      status: "online",
    },
    {
      name: "Mike",
      fullName: "Miguel Ángel Flores",
      role: "Full Stack Developer",
      icon: "⚡",
      avatar: "/img/avatar_mike.png",
      link: "/mike",
      status: "online",
    },
    {
      name: "Mario",
      fullName: "Mario González",
      role: "Full Stack Developer",
      icon: "🚀",
      avatar: "/img/mario.png",
      link: "/mario",
      status: "online",
    },
    {
      name: "Raquel",
      fullName: "Raquel Rodríguez",
      role: "Frontend Developer",
      icon: "🎨",
      avatar: "/img/perfil-raq.png",
      link: "/raquel",
      status: "online",
    },
    {
      name: "Valeria",
      fullName: "Valeria Thomas",
      role: "DevOps Engineer",
      icon: "🔧",
      avatar: "/img/img-valeria/avatar_vale.png",
      link: "/valeria",
      status: "online",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // se desconecta para que el glitch sea por única vez
          observer.disconnect();
        }
      },
      // se dispara la animación cuando aparece el 15% de la sección
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team-list" ref={sectionRef}>
      <div className={`section-header ${isVisible ? "visible" : ""}`}>
        <h2 className="integrantes">&gt; Integrantes del Equipo_</h2>
        <p className="section-subtitle">
          // Conoce a nuestro equipo de desarrollo
        </p>
      </div>
      <div className="grid-container">
        <div className="grid-row">
          {teamMembers.slice(0, 3).map((member, index) => (
            <Link
              key={index}
              to={member.link}
              className={`team-card ${isVisible ? "animate-glitch" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-header">
                <div className="card-avatar">
                  <img
                    src={member.avatar}
                    alt={member.fullName}
                    className="avatar-img"
                  />
                </div>
                <span className="card-status">
                  {member.status === "online" ? "● ONLINE" : "○ OFFLINE"}
                </span>
              </div>
              <h3 className="card-name">{member.name}</h3>
              <p className="card-role">{member.role}</p>
              <div className="card-footer">
                <span className="card-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid-row">
          {teamMembers.slice(3, 5).map((member, index) => (
            <Link
              key={index + 3}
              to={member.link}
              className={`team-card ${isVisible ? "animate-glitch" : ""}`}
              style={{ animationDelay: `${(index + 3) * 0.2}s` }}
            >
              <div className="card-header">
                <div className="card-avatar">
                  <img
                    src={member.avatar}
                    alt={member.fullName}
                    className="avatar-img"
                  />
                </div>
                <span className="card-status">
                  {member.status === "online" ? "● ONLINE" : "○ OFFLINE"}
                </span>
              </div>
              <h3 className="card-name">{member.name}</h3>
              <p className="card-role">{member.role}</p>
              <div className="card-footer">
                <span className="card-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamList;
