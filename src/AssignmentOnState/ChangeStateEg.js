import React,{Component} from "react";
class StateChange extends Component
{
    constructor()
    {
        super();
        this.state={ msg:' Welcome Visitor '}
    }
    changeState(){
        // this.setState({
        //     msg:'Thanks For Visiting '
        // })
        this.state.msg='Thanks For Visiting';
    }
    render(){
        return(
            <div>
            <h2>{this.state.msg} </h2>
            <button onClick={() => this.changeState()}>Click Me</button>
            </div>
            )
         
    }
 }
export default StateChange;
