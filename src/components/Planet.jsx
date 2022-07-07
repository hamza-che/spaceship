import React from "react";

function Planet() {
  const matrix = Array(63).fill("");
  const columns = 7;
  matrix[Math.floor(matrix.length - matrix.length / columns - 8 * 2)] = "X";
  return (
    <section>
      <div className="planet">
        {matrix.map((item, i) => <div key={i}>{item}</div>)}
      </div>
      <div className="starting-point">
        <div>(0, 0, N)</div>
        <div>Starting point</div>
      </div>
    </section>
  );
}

export default Planet;
