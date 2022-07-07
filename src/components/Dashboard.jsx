import React from "react";

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="current-position">
        <h3>Current position</h3>
        <div>2, 2, E</div>
      </div>
      <div className="controls">
        <h4>Controls</h4>
        <div className="control-btns">
          <div>
            <button>F</button>
          </div>
          <button>L</button>
          <button>B</button>
          <button>R</button>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
