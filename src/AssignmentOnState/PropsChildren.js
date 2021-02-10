import React,{Component} from "react";
class PropDemo extends Component{
    constructor()
    {
       super()
       
    }
    render( ){ 
        return(
            <div>
            <h2>Name :{this.prop.name}</h2>
            {this.props.children}
            </div>
            )
    }
}
  export default PropDemo;