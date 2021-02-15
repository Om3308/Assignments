import React from "react";
class UserForm extends React.Component {

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
       upass:upassArray
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
    handleSubmit=event=>
    {
      event.preventDefault()
      const{upass,username,password}=this.state
      // const u=JSON.stringify(this.state.upass)
      // localStorage.setItem("uarray",u)
      // localStorage.setItem("uname",this.state.username )
      // localStorage.setItem("pass",this.state.password )
      upass.push({uname:username,pass:password})
      console.log(upass)
    }
    handledata=event=>{
      const{name,value}=event.target
        this.setState({
              //username:event.target.value
                [name]:value
            })
  }
  removedata=(index)=>{
    const{upass}=this.state
    this.setState({
      upass:upass.filter((character,i)=>{
        return i!=index
        })
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
          {
          this.state.upass.map((up,index)=>
         <tbody>
           <tr> 
             <td>
            {`Username: ${up.uname}  Password: ${up.pass} `}
            <button type="button" onClick={this.removedata(up.uname)}>Remove</button>
            </td> 
            </tr>
            </tbody> )
         }
          {/* <table border="2">
            <thead>
            <tr>
            <th> User Name </th> 
            <th> Password </th>
            </tr>
            </thead>
             <tbody>
               {
             this.state.upass.map((up,index) => {
               console.log(up.username)
              return(
                <tr key={index}> 
                <td> {up.username}</td>
                <td> {up.password}</td>
                </tr>
               )}
             )
            }
             </tbody>
          </table>  */}
        </div>      
      ) 
    }
  }
  export default UserForm;