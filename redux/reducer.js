/** @format */

import { APIDATA } from "./actionTypes";

export const initialState = {
  Userlist: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APIDATA:
      return { ...state, Userlist: action.payload };

    default:
      return state;
  }
};

export default reducer;
