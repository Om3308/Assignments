import{React ,Component} from "react"
class RenderChildren extends Component{
    
    render(){
        return(
            <div>
                <h1>Hello {this.props.name} your id is {this.props.id}</h1>
                {this.props.children}
            </div>
        )
    }
}
export default RenderChildren