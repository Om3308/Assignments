import { BUY_CAKE } from "./CakeType";
const initialstate = {
  numberofCakes: 10,
};
const cakeReucer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberofCakes: state.numberofCakes - 1,
      };

    default:
      return state;
  }
};
export default cakeReucer