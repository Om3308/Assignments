import React from 'react'
import styles from'./styling.module.css'

function InlineStyling() {
    // const obj={
    //     fontSize:'65px',
        
    //     color:'purple'
    // }

    return (
        <div>
            
        {/* <h1 style={obj} > hello and welcome to react js inine styling  </h1> */}

        {/* <h1 className={styles.success}> hello and welcome to react js </h1>
        <h1> Welcome to React</h1>
        <h1 className={styles.custom}> hello and welcome to react js </h1> */}

            <h1 style={{
        fontSize:'65px',
        backgroundColor:'aqua',
        color:'red'
    }}>  hello and welcome to react js inine styling</h1>
      <h1 style={{
        fontSize:'65px',
        backgroundColor:'purple',
        color:'white'
    }}>  hello and welcome to react js inine styling</h1>
    
        </div>
    )
}

export default InlineStyling