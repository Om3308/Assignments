import React from "react"
import { useDispatch,useSelector } from "react-redux";
import  buycake  from "./CakeActions";

function HooksCakeContainer() {
    const numberofCakes=useSelector(state=>state.numberofCakes);
    const dispatch=useDispatch();
    return(
<div>
    <h2>No of cakes = {numberofCakes}</h2>
    <button onClick={()=>dispatch(buycake())}>Buy Cake</button>
</div>
    );
    
}
export default HooksCakeContainer;