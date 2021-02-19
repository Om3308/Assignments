import React, { Component } from 'react'
import FinalComponent from '../AssignmentsOnFragments,Component/withCounter'

class MouseOver extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:1
        }
    }
    increment=()=>{
        this.setState((prevState)=>{
            return {
                count:prevState.count+1
            }

        })
    }
    render() {
        const{ count,increment}=this.props

        return (
            <div>
               <h2 onMouseOver={increment}> hovered {count}</h2> 
            </div>
        )
    }
}

export default FinalComponent(MouseOver,1)
