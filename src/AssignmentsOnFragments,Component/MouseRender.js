import React, { Component } from 'react'

class MouseRender extends Component {
   
    render() {
        const{count,increment}=this.props
     
        return (
            <div>
              <h3 onMouseOver={increment}> hovered {count}</h3>  
            </div>
        )
    }
}

export default MouseRender
