import React from "react";
import { planetContextConsumer } from "../contexts/PlanetContext";

function Dashboard() {
  const {
    dispatch,
    vehicleState: { x, y, direction },
  } = planetContextConsumer();
  return (
    <section className="dashboard">
      <div className="current-position">
        <h3>Current position</h3>
        <div>{`${x}, ${y}, ${direction}`}</div>
      </div>
      <div className="controls">
        <h4>Controls</h4>
        <div className="control-btns">
          <div>
            <button onClick={() => dispatch({ type: "FORWARD" })}>F</button>
          </div>
          <button onClick={() => dispatch({ type: "LEFT" })}>L</button>
          <button onClick={() => dispatch({ type: "BACKWARD" })}>B</button>
          <button onClick={() => dispatch({ type: "RIGHT" })}>R</button>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
