import { useState, useEffect } from "react";
import "./Home.css";
import HeroSection from "../components/HeroSection";
import TeamList from "../components/TeamList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simular tiempo de carga (transición de carga)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="home-loader-container">
        <i className="fa-solid fa-terminal fa-beat-fade fa-3x home-loader-icon"></i>
        <h2>_CARGANDO SISTEMA_</h2>
      </div>
    );
  }

  return (
    // clase fade-in-smooth para aparición suave
    <div className="home-container fade-in-smooth">
      <HeroSection />
      <TeamList />
    </div>
  );
};

export default Home;
