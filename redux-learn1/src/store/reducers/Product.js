import productState from "../states/product";

export default function product(state = { ...productState }, actions = {}) {
  const { type, payload } = actions;

  switch (type) {
    case "LIST":
      return {
        ...state,
        list: payload,
      };
    case "DETAIL":
      return {
        ...state,
        detail: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
