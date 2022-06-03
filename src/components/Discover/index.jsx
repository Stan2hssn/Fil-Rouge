import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import "./style.scss";

export default function Home() {
  const parallaxContainer = useRef(null);

  const [xPos, setXpos] = useState(0);
  const [yPos, setYpos] = useState(0);

  useEffect(() => {
    const Hero = document.querySelector("#Hero");
    Hero.addEventListener("mousemove", parallax);
  }, []);

  function parallax(e) {
    const rect = parallaxContainer.current.getBoundingClientRect();

    let x = e.clientX - (rect.width / 2 + rect.left);
    let y = (e.clientY - (rect.height / 2 + rect.top)) / 100;

    x = x > 1 ? 1 : x;

    y = y > 1 ? 1 : y;

    x = x < -1 ? -1 : x;

    y = y < -1 ? -1 : y;

    setXpos(x);
    setYpos(y);
  }

  return (
    <div className="position">
      <div
        className="parallax-container"
        style={{ transform: `translate(${xPos}px, ${yPos}px)` }}
        ref={parallaxContainer}
      ></div>

      <Link className="cache-container" to="/cards">
        DECOUVRIR
      </Link>
    </div>
  );
}
