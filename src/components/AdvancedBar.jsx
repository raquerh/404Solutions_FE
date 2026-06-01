import { useState, useEffect, useRef } from "react";
import "./AdvancedBar.css";

const AdvancedBar = ({ label, percentage }) => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const currentElement = barRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentWidth(percentage);
        } else {
          setCurrentWidth(0);
        }
      },
      { threshold: 0.5 },
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [percentage]);

  return (
    <div className="adv-bar-wrapper" ref={barRef}>
      <div className="adv-bar-info">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="adv-bar-track scanline-overlay">
        <div
          className="adv-bar-fill"
          style={{ width: `${currentWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AdvancedBar;
