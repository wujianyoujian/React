import StatusState from "../states/status";

export default function status(state = { ...StatusState }, actions = {}) {
  const { type, payload } = actions;

  switch (type) {
    case "FIELD":
      return {
        ...state,
        field: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
