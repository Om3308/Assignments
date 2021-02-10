import React from"react";
function   MultiplyNo() {
    const no=[2,4,6,8,10]
    return(
        no.map((no)=>
        <p>
        {no*2}
        </p>
        )
    )
    
}
export default MultiplyNo;