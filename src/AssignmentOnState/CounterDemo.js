import React,{Component} from "react";
class count1 extends Component
{
    
    constructor()
    {
        super();
        this.state={ count:0}
    }
    increment(){
        this.setState(prevState=>({
            count:prevState.count+2
        }),()=>console.log("Calling back values : "+this.state.count))
        console.log(this.state.count);
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render(){
        return(
            <div>
            <button onClick={() => this.incrementFive()}>Click</button>
            </div>
            )
         
    }
}
export default count1;