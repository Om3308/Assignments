import React, { Component } from 'react'

class ClickRender extends Component {
    
    render() {
        const{count,increment}=this.props
        return (
            <div>
                <button onClick={increment}> clicked {count}</button>
            </div>
        )
    }
}

export default ClickRender
