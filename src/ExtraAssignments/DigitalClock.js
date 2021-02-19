import React from"react"
class ClockFunction extends React.Component
{
    state={time:new Date()}
    componentDidMount(){
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); 
    }
    componentWillUnmount() { 
        console.log("in Component Will Update")
        clearInterval(this.update);
    }
        
    render() {
        const { time } = this.state; 
        return (<div>
            <h1>Digital Clock</h1>
            <h2>
                {time.toLocaleTimeString()}
            </h2>
        </div>);
    }
    
}
export default ClockFunction;