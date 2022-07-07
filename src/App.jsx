import React from "react";
import Dashboard from "./components/Dashboard";
import Planet from "./components/Planet";

function App() {
  return (
    <main>
      <div className="container">
        <Planet />
        <Dashboard />
      </div>
    </main>
  );
}

export default App;
