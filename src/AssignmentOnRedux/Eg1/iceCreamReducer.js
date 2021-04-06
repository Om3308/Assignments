import { BUY_ICECREM } from "./iceCreamTypes";
const initialstate = {
  numoficecream: 20,
};
const iceCreamReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_ICECREM :
      return {
        ...state,
        numoficecream: state.numoficecream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
