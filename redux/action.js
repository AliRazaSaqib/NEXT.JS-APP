import { APIDATA } from "./actionTypes";

export const storeData = (productList) => {
  return (dispatch) => dispatch({ type: APIDATA, payload: productList });
};
