export function vehicleReducer(state, action) {
  const cols = 9;
  const rows = 7;
  switch (action.type) {
    case "FORWARD":
      return {
        ...state,
        x:
          state.direction === "E"
            ? state.x < cols - 1 ? state.x + 1 : 0
            : state.direction === "W"
              ? state.x > 0 ? state.x - 1 : cols - 1
              : state.x,
        y:
          state.direction === "N"
            ? state.y < rows - 1 ? state.y + 1 : 0
            : state.direction === "S"
              ? state.y > 0 ? state.y - 1 : rows - 1
              : state.y,
      };
    case "BACKWARD":
      return {
        ...state,
        x:
          state.direction === "E"
            ? state.x > 0 ? state.x - 1 : cols - 1
            : state.direction === "W"
              ? state.x < cols - 1 ? state.x + 1 : 0
              : state.x,
        y:
          state.direction === "N"
            ? state.y > 0 ? state.y - 1 : rows - 1
            : state.direction === "S"
              ? state.y < rows - 1 ? state.y + 1 : 0
              : state.y,
      };
    case "RIGHT":
      return {
        ...state,
        direction:
          state.direction === "N"
            ? "E"
            : state.direction === "E"
              ? "S"
              : state.direction === "S"
                ? "W"
                : state.direction === "W" ? "N" : state.direction,
      };
    case "LEFT":
      return {
        ...state,
        direction:
          state.direction === "N"
            ? "W"
            : state.direction === "W"
              ? "S"
              : state.direction === "S"
                ? "E"
                : state.direction === "E" ? "N" : state.direction,
      };
    default:
      state;
  }
}
