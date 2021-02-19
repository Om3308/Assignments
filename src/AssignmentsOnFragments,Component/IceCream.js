import React from 'react'

function IceCream({name}) {
    if(name==='gulabjamun'){
        throw new Error('gulabjamun is not a icecream')
    }
    return <div>{name}</div>
    
}

export default IceCream
