import React from"react";
function   ListFruits() {
    const Fruits=["Mango","Papaya","Orange","Grapes"]
    return(
        Fruits.map((Fruit)=>
        <p>
        {Fruit}
        </p>
        )
    )
    
}
export default ListFruits;