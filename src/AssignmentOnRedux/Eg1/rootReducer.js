import { combineReducers } from "redux";
import cakeReucer from "./cakeReducer";
import iceCreamReducer from "./iceCreamReducer"
const rootReducer=combineReducers({
    cake:cakeReucer,
    icecream:iceCreamReducer
    
})

export default rootReducer;