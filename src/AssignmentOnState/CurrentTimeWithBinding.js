import React from "react"
class CurrentDateWithEventBinding extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            msg:new Date().toString(),
            updatedmsg:null
            //  msg:JSON.stringify(new Date())
        }
    
    }
    clickHandler=()=>{
         console.log(this);
        this.setState({
            msg:new Date().toString()
           // msg:JSON.stringify(new Date())  
        }
        )
    }
    render() {
        return (
            <div>
               
                <h1> {this.state.msg} </h1>
                <button onClick={this.clickHandler.bind(this)}> Current Date</button>
         
            </div>
        )
    }
}

export default CurrentDateWithEventBinding