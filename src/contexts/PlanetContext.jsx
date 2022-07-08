import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { vehicleReducer } from "../reducers/vehicleReducer";

const PlanetContext = createContext(null);

const initialState = {
  x: 0,
  y: 0,
  direction: "N",
};

const cols = 9;
const rows = 7;
const matrix = Array.from(new Array(rows), () => new Array(cols).fill(""));
matrix[0][0] = "X";

function PlanetContextProvider({ children }) {
  const [ vehicleState, dispatch ] = useReducer(vehicleReducer, initialState);
  const [ planet, setPlanet ] = useState(matrix);

  useEffect(
    () => {
      setPlanet(prevPlanet => {
        const copy = [ ...prevPlanet ];
        for (let i = 0; i < copy.length; i++) {
          for (let j = 0; j < copy[i].length; j++) {
            copy[i][j] = "";
          }
        }
        copy[vehicleState.y][vehicleState.x] = "X";
        return copy;
      });
    },
    [ dispatch, vehicleState ]
  );

  return (
    <PlanetContext.Provider value={{ planet, vehicleState, dispatch }}>
      {children}
    </PlanetContext.Provider>
  );
}

function planetContextConsumer() {
  return useContext(PlanetContext);
}

export { planetContextConsumer, PlanetContextProvider };
