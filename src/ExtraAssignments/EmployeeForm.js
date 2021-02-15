import React from "react";
class EmployeeForm extends React.Component {

    constructor() {
      super();
      //const ea=[{}];
      this.state = {
        ename:'',
        eaddress:'',
        emob:'',
        esal:'',
      // earray:ea
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit=event=>
    {
      event.preventDefault()
      //this.state.earray.push({ename:this.state.ename,eaddress:this.state.eaddress,emob:this.state.emob,esal:this.state.esal})
     // console.log(this.state.earray)
      //alert(`Employee Name is :${this.state.ename} Emplooyee Mob No is : ${this.state.emob} Employee Address is :${this.state.eaddress} Employee Salary is :${this.state.esal}`)
    
    }
    handledata=event=>{
        this.setState({
              //username:event.target.value
                [event.target.name]:event.target.value
            })
  }
    render() {
      return (   
        <div >
          <h2>Add Employee Details</h2>
          <form onSubmit={this.handleSubmit}>
              <div>
              <label> Enter Employee Name :  </label>
            <input type="text" name="ename" value={this.state.ename} onChange={this.handledata}/>
            </div>
            <div>
            <label> Enter Employee Address :  </label>
            <input type="text" name="eaddress" value={this.state.eaddress} onChange={this.handledata}/>
            </div>
            <div>
            <label> Enter Employee Mobile No :  </label>
            <input type="text" name="emob" value={this.state.emob} onChange={this.handledata}/>
            </div>
            <div>
            <label> Enter Employee Salary :  </label>
            <input type="text" name="esal" value={this.state.esal} onChange={this.handledata}/>
            </div>
            <button type="submit">Submit</button>
          </form> 
        </div>      
      ) 
    }
  }
  export default EmployeeForm;