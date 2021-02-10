import React from "react";
class Form extends React.Component {

    constructor() {
      super();
      const upassArray=[
        {
            uname: 'omkar',
            pass: '1234', 
        }
    ];
      this.state = {
        username:'',
        password:'',
       upass: upassArray
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit=event=>
    {
      event.preventDefault()
      alert("I am in submit")
      this.state.upass.push({uname:this.state.username,pass:this.state.password})
      console.log(this.state.upass)
    }
    handledata=event=>{
        this.setState({
              //username:event.target.value
                [event.target.name]:event.target.value
            })
  }
    render() {
      return (   
        <div>
          <h2>ADD USERNAME AND PASSWORD</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" value={this.state.username} onChange={this.handledata}/>
            <input type="text" name="password" value={this.state.password} onChange={this.handledata}/>
            <button type="submit">Submit</button>
          </form>
          <h2>pervious username and password </h2>
          <ul >
            {
            this.state.upass.map((up,index) => 
             <li key={up.uname} >{`Username: ${up.uname} Password: ${up.pass} `}</li>
            )}
          </ul>  
        </div>      
      ) 
    }
  }
  export default Form;