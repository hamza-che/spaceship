import React from "react";
import { planetContextConsumer } from "../contexts/PlanetContext";

function Planet() {
  const { planet } = planetContextConsumer();
  return (
    <section>
      <div className="planet">
        {planet.map((row, i) => (
          <div key={i}>{row.map((col, j) => <span key={j}>{col}</span>)}</div>
        ))}
      </div>
      <div className="starting-point">
        <div>(0, 0, N)</div>
        <div>Starting point</div>
      </div>
    </section>
  );
}

export default Planet;
