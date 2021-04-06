import React from "react"
import {Provider }from 'react-redux';
import store from "./Store";
import CakeContainer from "./CakeContainer";
import HooksCakeContainer from "./HooksCakeContainer";
import IceCreamContainer from "./iceCreamContainer";


function CakeMain() {
    return(
        <Provider store={store}>
            <div>
                {/* <HooksCakeContainer/> */}
                {/* <CakeContainer/> */}
                {/* <IceCreamContainer/> */}
            </div>
        </Provider>
    )
}
export default CakeMain;