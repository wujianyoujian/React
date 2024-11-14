import http from "../../utils/http";

export function productListAction() {
  return (dispatch) => {
    http()
      .get("/products")
      .then((res) => {
        dispatch({ type: "LIST", payload: res.data });
      });
  };
}
