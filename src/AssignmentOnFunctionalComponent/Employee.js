import React,{Component} from "react";
class Employee extends Component{
    render( ){ return(
            // <h3> Employee Id :{this.props.id} Employee Name is : {this.props.name}</h3>
            <h2>Hello{this.props.name} also Khown as a {this.props.heroname}</h2>
            )
    }
}
export default Employee;
