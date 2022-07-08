import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PlanetContextProvider } from "./contexts/PlanetContext";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PlanetContextProvider>
    <App />
  </PlanetContextProvider>
);
